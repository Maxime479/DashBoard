import './css/App.css';
import './css/cards.css';

import Home from "./js/routes/Home.js";
import React, {useEffect} from "react";
import './js/icons/FontAwesomeIcon';

function App() {

  //Auto Reload
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.location.reload();
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);


  return (
      <Home />
  );
}

export default App;
