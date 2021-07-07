import { GridList, LinearProgress, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { PRODUCTS_ENDPOINT } from "../../util/ApiLinks";
import * as types from '../../util/fetchTypes';
import { fetchProducts } from '../../redux/actions/productActions';
import './ProductList.css';
import ProductPanel from "./ProductPanel";
import { addItem } from "../../redux/actions/cartActions";
import { addToWishlist, removeFromWishlist } from "../../redux/actions/userActions";
import { selectIdsFromWishlist } from "../../redux/selectors/user";
import WishlistToast from "../user/WishlistToast";

const ProductList = props => {

    const toastAdd = 'Dodano do listy życzeń';
    const toastRemove = 'Usunięto z listy życzeń';
    const toastGuest = 'Niezalogowany użytkownik!';
    const cartAdd = 'Dodano do koszyka';
    const [toastOpen, setToastOpen] = useState('');

    const handleClose = (event, reason) => {
        if (reason ==='clickaway') return;

        setToastOpen('');
    }

    // weird way to fetch products but ok
    useEffect( () => {
        switch (props.type) {
            case types.ALL:
                props.fetchProducts(`${PRODUCTS_ENDPOINT}all`)
                break;
            case types.TEA:
                props.fetchProducts(`${PRODUCTS_ENDPOINT}tea`)
                break;
            case types.COFFEE:
                props.fetchProducts(`${PRODUCTS_ENDPOINT}coffee`);
                break;
            case types.ACCESSORIES:
                props.fetchProducts(`${PRODUCTS_ENDPOINT}accessories`);
                break;
            default:
                props.fetchProducts(`${PRODUCTS_ENDPOINT}all`);
                break;
        }
    }, [props.type])


    const cartCallback = id => {
        const item = props.products.find( product => product.id === id);
        props.addItem(item);
        setToastOpen('cart');
    }

    const wishlistCallback = id => {

        if ( props.isLoggedIn === false ) {
            setToastOpen('guest');
            return;
        }
        const itemIndex = props.wishlistItems.findIndex(item => item === id);

        if (itemIndex === -1) {
            const item = props.products.find( product => product.id === id);
            const wishlistJson = {
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                img: item.img,
                date: new Date(),
            }
            props.addToWishlist(wishlistJson);
            setToastOpen('add');
        } else {
            props.removeFromWishlist(itemIndex);
            setToastOpen('remove');
        }
    }
    
    const isOnWishlist = id => {
        return (props.wishlistItems.findIndex(item => item === id) > -1);
    }
    const getProductStatus = () => {

        const loading = 'Ładowanie produktów...';
        const error = 'Błąd pobierania produktów.';
        if (props.isLoading && !props.error) {
            return (
                    <div className='product-container'>
                        
                        <LinearProgress className='loading-line'/>
                        <Typography className='loading-text'>{loading}</Typography>
                    </div>
            )
        
        } else if (!props.isLoading) {
            
            if (props.error) {
                return (
                    <div className='product-container'>

                        <Typography className='loading-text'>{error}</Typography>
                    </div>
                )
            } else {
                return (
                    <div className='product-container'>
                        <Typography className='product-container-title' variant='h5'>Produkty</Typography>
                        <GridList  className='gridlist' >
                            {props.products.map( (product) => ( 
                               
                                    <ProductPanel key={product.id} {...product} cartCallback={cartCallback} wishlistCallback={wishlistCallback} isOnWishlist={isOnWishlist(product.id)}/>
                            ))}
                        </GridList>

                        <WishlistToast text={toastAdd} open={toastOpen} onClose={handleClose} type='add' />
                        <WishlistToast text={toastRemove} open={toastOpen} onClose={handleClose} type='remove' />
                        <WishlistToast text={cartAdd} open={toastOpen} onClose={handleClose} type='cart' />
                        <WishlistToast text={toastGuest} open={toastOpen} onClose={handleClose} type='guest' />
                    </div>
                )
            }
        } 
    }

    
    return getProductStatus();
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.data,
        isLoading: state.productReducer.isLoading,
        error: state.productReducer.error,
        isLoggedIn: state.userReducer.isLoggedIn,
        wishlistItems: selectIdsFromWishlist(state),
    }
}



export default connect(mapStateToProps, { fetchProducts, addItem, addToWishlist, removeFromWishlist })(ProductList);