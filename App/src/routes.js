import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './js/routes/Home';

import Rooms from './js/routes/Rooms';
import Devices from './js/routes/Devices';
import Statistics from './js/routes/Statistics';
import Members from './js/routes/Members';

import NotFound from './js/routes/NotFound.js';


export default () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/devices" exact component={Devices} />
        <Route path="/statistics" exact component={Statistics} />
        <Route path="/members" exact component={Members} />
        <Route component={NotFound} />
    </Switch>
)