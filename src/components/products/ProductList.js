import { LinearProgress, Typography } from "@material-ui/core";
import { useEffect } from "react"
import { connect } from "react-redux"
import { PRODUCTS_ENDPOINT } from "../../util/ApiLinks";
import * as types from '../../util/fetchTypes';
import { fetchProducts } from '../../redux/actions/productActions';
import './ProductList.css';

const ProductList = props => {

    console.log('\nProductList::\n', props);
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
                        <Typography>tu produkty</Typography>
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
    }
}


export default connect(mapStateToProps, { fetchProducts })(ProductList);