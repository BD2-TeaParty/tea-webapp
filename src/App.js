import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import ProductList from './components/products/ProductList';
import CartView from './components/cart/CartView';
import UserView from './components/user/UserView';
import OrderPage from './components/cart/OrderPage';

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
                    <Route path='/user'>
                        <UserView />
                    </Route>
                    <Route path='/order'>
                        <OrderPage />
                    </Route>
                </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
