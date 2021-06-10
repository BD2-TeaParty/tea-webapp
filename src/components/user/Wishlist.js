import React, { useEffect, useState } from 'react'
import { FormControl, IconButton, NativeSelect, Typography } from '@material-ui/core';
import { FixedSizeList as List } from 'react-window';
import { connect } from 'react-redux';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './Wishlist.css';
import { removeFromWishlist } from '../../redux/actions/userActions';

const Wishlist = props => {

    // console.log(new Date().toISOString());

    const [sortedData, setSortedData] = useState([]);
    const [sortMethod, setSortMethod] = useState('oldest-first');
    const wishlistCallback = id => {
        const index = props.items.findIndex(obj => obj.id === id);

        props.removeFromWishlist(index);
    }
    // console.log('wishlist props', props);
    const handleChange = event => {
        // const name = event.target.name;
        setSortMethod(event.target.value);
    }

    const sortWishlist = () => {

        switch(sortMethod) {
            case 'oldest-first':
                setSortedData(props.items.sort( (a,b) => (a.date.getTime() > b.date.getTime()) ? 1 : -1 ) );
                break;
            case 'oldest-last':
                setSortedData(props.items.sort( (a,b) => (a.date.getTime() <= b.date.getTime()) ? 1 : -1 ) );
                break;
            // case 'alphabetically':
            //     console.log('alpha')
            //     setSortedData(props.items.sort( (a,b) => (a.attr > b.attr) - (a.attr < b.attr) ));
            //     break;
            default:
                setSortedData(props.items);
                break;
        }
    }
    useEffect( () => {
        // console.log(sortMethod)
        sortWishlist();
    }, [sortMethod]);

    useEffect( () => {
        setSortedData(props.items);
        sortWishlist();
    }, [props.items]);

    useEffect( () => {
        setSortMethod('oldest-last');
        sortWishlist();
    }, [])

    const WishlistItem = ({ index, style }) => {
        const item = sortedData[index];


        return (
            <div className='user-wishlist-container-item' style={style}>
                <Typography className='index'>{index}.</Typography>
                <img src={item.img} alt={item.title} />
                <div className='text-div'>
                    <Typography className='item-title'>{item.title}</Typography>
                    <Typography className='item-description'>{item.description.length > 100 ? item.description.substring(0, 100) +'...' : item.description}</Typography>
                    <Typography className='item-description'>{item.date ? `Dodano: ${item.date.toLocaleDateString()} o ${item.date.toLocaleTimeString()}` : ''}</Typography>
                </div>
                <div className='icon-div'>
                    <IconButton onClick={() => wishlistCallback(item.id)}>
                        <HighlightOffIcon />
                    </IconButton>
                </div>
            </div>
        )
    }



    return (
        <div className='user-wishlist-container'>
            <Typography className='title'>Lista życzeń</Typography>
            <div className='sort-div'>
                <Typography className='sort-text'>Sortuj:</Typography>
                <FormControl variant="outlined">
                    <NativeSelect
                        value={sortMethod}
                        onChange={handleChange}
                        inputProps={{
                            name: 'sort-method',
                            id: 'sort-method-picker'
                        }}
                    >
                        <option value='oldest-last'>Od najmłodszych</option>
                        <option value='oldest-first'>Od najstarszych</option>
                        {/* <option value='alphabetically'>Alfabetycznie</option> */}
                    </NativeSelect>
                </FormControl>
            </div>

            <List
                height={800}
                width={800}
                itemCount={sortedData.length}
                itemData={sortedData}
                itemSize={100}>
                    {WishlistItem}
            </List>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        items: state.userReducer.wishlist,
    }
}
export default connect(mapStateToProps, {removeFromWishlist})(Wishlist);