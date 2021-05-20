import { connect } from "react-redux"


const ProductList = props => {

    
    return (
        <div>
            <h1>XD</h1>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.productReducer.data,
        isLoading: state.productReducer.isLoading,
        // data: [],
        error: state.productReducer.error,
    }
}

export default connect(mapStateToProps)(ProductList);