import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import ProductList from './components/products/ProductList';
import CartView from './components/cart/CartView';

function App() {
    return (

        <Router>
            <div className='container'>
                <Navbar />

                <div className='content-container'>
                <Switch>
                    <Route exact path='/'>
                        <ProductList type='all'/>
                    </Route>
                    <Route path='/tea'>
                        <ProductList type='tea' />
                    </Route>
                    <Route path='/cart'>
                        <CartView />
                    </Route>
                </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
