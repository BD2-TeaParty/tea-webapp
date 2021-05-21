import logo from './logo.svg';
import './App.css';
// import { Router } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import ProductList from './components/products/ProductList';
// import { Typography } from '@material-ui/core';
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
                </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
