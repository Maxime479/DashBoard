import './css/App.css';
import './css/cards.css';

import './css/cards/Big.css';
import './css/cards/Device.css';
import './css/cards/Long.css';
import './css/cards/MyDevices.css';
import './css/cards/Profil.css';
import './css/cards/Square.css';

import './css/props/Head.css';
import './css/props/Room.css';
import './css/props/Sensor.css';
import './css/props/Slider.css';



import Home from "./js/routes/Home.js";
import Rooms from "./js/routes/Rooms.js";
// import React from "react";
import React, {Component} from "react";
import './js/icons/FontAwesomeIcon';


import Navigation from "./js/Navigation";
import {Link} from "react-router-dom";
import { Route,Routes } from 'react-router-dom';


// import {BrowserRouter as Routes, Route} from "react-router-dom";
import Devices from "./js/routes/Devices";
import Statistics from "./js/routes/Statistics";
import Members from "./js/routes/Members";
import NotFound from "./js/routes/NotFound";
import Device from "./js/cards/Device";
import Profil from "./js/cards/Profil";

function App() {

  //Auto Reload
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.location.reload();
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);


  return (
      <Members />
  );
}


// function App(){
//
//   //Auto Reload
//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     window.location.reload();
//   //   }, 5000);
//   //   return () => clearTimeout(timer);
//   // }, []);
//
//
//
//
//   return (
//
//
//       <div>
//
//           <Routes>
//               <ul>
//                   <Link to="/">
//                       <li> Pièces </li>
//                   </Link>
//
//                   <Link to="/Devices">
//                       <li> Appareils </li>
//                   </Link>
//
//
//
//
//               </ul>
//
//
//               <Route path="/" exact component={Rooms}/>
//               <Route path="/Devices" exact component={Devices}/>
//           </Routes>
//
//
//
//
//
//       </div>
//
//
//   );
//
//
// }








// class App extends Component {
//   render() {
//     return(
//         <div style={{background: 'grey'}}>
//
//             Hello
//
//
//           <nav>
//
//             <ul>
//               <li><Link to="/" > Home </Link></li>
//               <li><Link to="/rooms"  > Pièces </Link></li>
//               <li><Link to="/devices"  > Appareils </Link></li>
//               <li><Link to="/statistics"  > Statistiques </Link></li>
//               <li><Link to="/members"  > Membres </Link></li>
//
//             </ul>
//
//           </nav>
//
//
//             <Routes>
//                 <Route path="/" exact element={Home} />
//                 <Route path="/rooms" exact element={Rooms} />
//                 <Route path="/devices" exact element={Devices} />
//                 <Route path="/statistics" exact element={Statistics} />
//                 <Route path="/members" exact element={Members} />
//                 <Route element={NotFound} />
//             </Routes>
//         </div>
//     )
//   }
// }


export default App;