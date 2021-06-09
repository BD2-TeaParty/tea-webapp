import { FixedSizeList as List } from 'react-window';
import React from 'react'
import { Typography } from '@material-ui/core';


const Wishlist = props => {

    console.log(props);

    const WishlistItem = ({ index, style }) => {
        const item = props.items[index];

        return (
            <div style={{borderWidth: 1, borderColor: '#222'}}>
                <Typography>{item.title} {item.description}</Typography>
            </div>
        )
    }




    return (
        <List
            height={800}
            width={500}
            itemCount={props.items.length}
            itemData={props.items}
            itemSize={60}>
                {WishlistItem}
        </List>
    )
}



export default Wishlist;