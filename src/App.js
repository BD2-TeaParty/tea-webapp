import logo from './logo.svg';
import './App.css';
// import { Router } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import ProductList from './components/products/ProductList';
// import { Typography } from '@material-ui/core';
function App() {
    return (
        // <div className="App">
        //     <header className="App-header">

        //         <Typography style={{color: '#fff'}}> XD </Typography>

        //     </header>
        // </div>
        <Router>
            <div className='container'>
                <Navbar />

                <Switch>
                    <Route exact path='/'>
                        <ProductList />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
