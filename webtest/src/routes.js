import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import homepage from './pages/Home';
import vaipaulin from  './pages/Home/vaipaulin';

// Importar as páginas

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={homepage}/>
                <Route path="/paulin" component={vaipaulin}/>
            </Switch>
        </BrowserRouter>
    )


}