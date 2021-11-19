import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Home from './js/routes/Home';

import Rooms from './js/routes/Rooms';
import Devices from './js/routes/Devices';
import Statistics from './js/routes/Statistics';
import Members from './js/routes/Members';

import NotFound from './js/routes/NotFound';


export default () => (
    <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/rooms" exact element={Rooms} />
        <Route path="/devices" exact element={Devices} />
        <Route path="/statistics" exact element={Statistics} />
        <Route path="/members" exact element={Members} />
        <Route element={NotFound} />
    </Routes>
);