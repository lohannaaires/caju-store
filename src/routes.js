import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import AdmPanel from './pages/AdmPanel';
import ProductRegister from './pages/ProductRegister';
import NewProducts from './pages/NewProducts';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/novos-produtos' component={NewProducts} />
                <Route path='/cadastro' component={Register} />
                <Route path='/panel' component={AdmPanel} />
                <Route path='/inventario' component={Inventory} />
                <Route path='/registro-produto' component={ProductRegister} />
            </Switch>
        </BrowserRouter>
    )
}