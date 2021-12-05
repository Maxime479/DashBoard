import React from "react";
import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import Device from "../nav/Device";
import DeviceList from "../list/DeviceList";

import ObjectID from "bson-objectid";





export default class Devices extends React.Component{

    constructor(props) {
        super(props);


        this.state = {

            devicesData : [
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Lampe',
                    room: 'Salon',
                    on: false,
                    type: 'light',
                    icon: 'https://www.icone-png.com/png/15/14621.png',
                    data: 0,
                    unit: 'lm',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Multiprise',
                    room: 'Chambre',
                    on: true,
                    type: 'power_strip',
                    icon: 'https://icon-library.com/images/382_electrical-electric-power-socket-512.png',
                    data: 25,
                    unit: 'kWh',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    on: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },

            ],

        };

    }




    render() {

        return(
            <div className="App">

                <header className="mainHeader">
                    <h1>DashBoard</h1>
                </header>

                <body className="mainBody">

                    <aside className="navContainer">
                        <Navigation
                            selected="devices"
                        />
                    </aside>


                    <main>

                        <DeviceList
                            caller={this.state.devicesData}
                        />

                        {/*<button onClick={() => {console.log(this.state.devicesData)}}>*/}
                        {/*    CONSOLE*/}
                        {/*</button>*/}





                    </main>


                    <aside className="profilContainer">
                        <Profil
                            username="Maxime"
                        />
                    </aside>

                </body>





            </div>


        )
    }
}
