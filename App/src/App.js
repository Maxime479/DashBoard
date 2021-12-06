import './css/App.css';
import './css/cards.css';


import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './js/routes/Home';
import Rooms from './js/routes/Rooms';
import Devices from './js/routes/Devices';
import Statistics from './js/routes/Statistics';
import Members from './js/routes/Members';
import NotFound from './js/routes/NotFound';


function App() {

    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rooms" component={Rooms}/>
            <Route exact path="/devices" component={Devices}/>
            <Route exact path="/statistics" component={Statistics}/>
            <Route exact path="/members" component={Members}/>
            <Route exact path="/not-found" component={NotFound}/>
            <Redirect to="not-found"/>
        </Switch>
    )
}

export default App;