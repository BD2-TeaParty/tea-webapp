import React from 'react'
import { IconButton, Typography } from '@material-ui/core';
import { FixedSizeList as List } from 'react-window';
import { connect } from 'react-redux';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './Wishlist.css';
import { removeFromWishlist } from '../../redux/actions/userActions';

const Wishlist = props => {

    console.log(props);


    const wishlistCallback = id => {
        const index = props.items.findIndex(obj => obj.id === id);

        props.removeFromWishlist(index);
    }
    const WishlistItem = ({ index, style }) => {
        const item = props.items[index];

        return (
            <div className='user-wishlist-container-item' style={style}>
                <img src={item.img} alt={item.title} />
                <div className='text-div'>
                    <Typography className='item-title'>{item.title}</Typography>
                    <Typography className='item-description'>{item.description.length > 100 ? item.description.substring(0, 100) +'...' : item.description}</Typography>
                    <Typography className='item-description'>{item.date ? `Dodano: ${item.date}` : ''}</Typography>
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
            <List
                height={800}
                width={800}
                itemCount={props.items.length}
                itemData={props.items}
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