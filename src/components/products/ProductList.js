import { GridList, LinearProgress, Typography } from "@material-ui/core";
import { useEffect } from "react"
import { connect } from "react-redux"
import { PRODUCTS_ENDPOINT } from "../../util/ApiLinks";
import * as types from '../../util/fetchTypes';
import { fetchProducts } from '../../redux/actions/productActions';
import './ProductList.css';
import ProductPanel from "./ProductPanel";
import { addItem } from "../../redux/actions/cartActions";
import { addToWishlist, removeFromWishlist } from "../../redux/actions/userActions";
import { selectIdsFromWishlist } from "../../redux/selectors/user";

const ProductList = props => {

    // console.log('\nProductList::\n', props);
    
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
    }

    const wishlistCallback = id => {

        const itemIndex = props.wishlistItems.findIndex(item => item === id);

        if (itemIndex === -1) {
            const item = props.products.find( product => product.id === id);
            const wishlistJson = {
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                img: item.img
            }
            props.addToWishlist(wishlistJson);
        
        } else props.removeFromWishlist(itemIndex);
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
                               
                                    <ProductPanel {...product} cartCallback={cartCallback} wishlistCallback={wishlistCallback}/>
                            ))}
                        </GridList>
                    </div>
                )
            }
        } 
    }

    
    return getProductStatus();
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.productReducer.data,
        isLoading: state.productReducer.isLoading,
        error: state.productReducer.error,
        wishlistItems: selectIdsFromWishlist(state),
    }
}



export default connect(mapStateToProps, { fetchProducts, addItem, addToWishlist, removeFromWishlist })(ProductList);