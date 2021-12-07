import React from "react";
import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import DeviceList from "../list/DeviceList";

import ObjectID from "bson-objectid";
import Image from "../tools/Image";





export default class Devices extends React.Component{

    constructor(props) {
        super(props);


        this.state = {

            navStyles: {
                none: {display: 'none'},
                block: {display: 'flex'},

            },

            navStyle: {
                display: 'flex'
            },

            devicesData : [
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Lampe',
                    room: 'Salon',
                    state: false,
                    type: 'light',
                    icon: 'https://www.icone-png.com/png/15/14621.png',
                    data: 0,
                    unit: 'lm',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Multiprise',
                    room: 'Chambre',
                    state: true,
                    type: 'power_strip',
                    icon: 'https://icon-library.com/images/382_electrical-electric-power-socket-512.png',
                    data: 25,
                    unit: 'kWh',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Capteur d\'humidité',
                    room: 'Salon',
                    state: true,
                    type: 'sensor',
                    icon: 'https://i.ibb.co/d04mT2Z/logoHum.png',
                    data: 32,
                    unit: '%',
                },

            ],

        };

        this.displayNav = this.displayNav.bind(this);

    }

    displayNav = () => {

        let style = this.state.navStyle

        if(style.display.includes('none')){
            this.setState({navStyle: this.state.navStyles.block})
        }else{

            this.setState({navStyle: this.state.navStyles.none})
        }

    }




    render() {

        return(
            <div className="App">

                <Image
                    src="https://www.pngrepo.com/png/311018/512/navigation.png"
                    onClick={this.displayNav}
                    className="navButton"
                />

                <header className="mainHeader">
                    <h1>Smart Home DashBoard</h1>
                </header>

                <body className="mainBody">

                    <aside className="navContainer" style={this.state.navStyle}>
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
