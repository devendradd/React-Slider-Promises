import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Slider1 from '../components/slideshow';
import Slider2 from '../components/Slider2';
export default () => (
    <BrowserRouter> 
        <Switch>
            <Route path="/" exact component={Slider1}/>
            <Route path="/slider2" exact component={Slider2} />
        </Switch>
    </BrowserRouter>
)