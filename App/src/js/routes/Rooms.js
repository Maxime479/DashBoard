import React from "react";
import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import ObjectID from "bson-objectid";
import RoomList from "../list/RoomList";
import Image from "../tools/Image";


export default class Rooms extends React.Component{

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

            ],

            roomsData : [
                {
                    _id: 1,
                    name: 'Salon',
                    deviceList: [],
                    nbDevices: 0,
                    icon: 'https://www.pngrepo.com/png/251704/512/sofa.png',
                },
                {
                    _id: 2,
                    name: 'Chambre',
                    deviceList: [],
                    nbDevices: 0,
                    icon: 'https://www.pngrepo.com/png/279892/512/bedroom-hotel.png',
                },
                {
                    _id: 3,
                    name: 'Salle de bain',
                    deviceList: [],
                    nbDevices: 0,
                    icon: 'https://www.pngrepo.com/png/194922/512/bathtub-bathroom.png',
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


    updateRoomData = () => {

        let loungeList = [];
        let bedroomList = [];
        let bathroomList = [];

        let loungeCounter = 0;
        let bedroomCounter = 0;
        let bathroomCounter = 0;


        let data = this.state.devicesData;
        let newRoomsData = this.state.roomsData;



        for(let deviceIndex=0; deviceIndex<data.length; deviceIndex++){

            let i=0;

            // console.log("_____LISTE______");
            // i++;
            // console.log(newRoomsData[deviceIndex]);
            // console.log(i);
            // console.log(data[deviceIndex]);
            // console.log("_____LISTE______");

            switch (data[deviceIndex].room){
                case "Salon":
                    loungeList.push(data[deviceIndex].name);
                    loungeCounter++;
                    break;
                case "Chambre":
                    bedroomList.push(data[deviceIndex].name);
                    bedroomCounter++;
                    break;
                case "Salle de bain":
                    bathroomList.push(data[deviceIndex].name);
                    bathroomCounter++;
                    break;
                default:
                    console.log("ERROR - Unknown Room")
                    console.log(data[deviceIndex])
                    console.log("ERROR - Unknown Room")
                    break;
            }


            newRoomsData[0].deviceList = loungeList;
            newRoomsData[0].nbDevices = loungeCounter;

            newRoomsData[1].deviceList = bedroomList;
            newRoomsData[1].nbDevices = bedroomCounter;

            newRoomsData[2].deviceList = bathroomList;
            newRoomsData[2].nbDevices = bathroomCounter;

            // console.log("_____FINAL______");
            // console.log(newRoomsData);
            // console.log("_____FINAL______");


            this.setState({roomsData: newRoomsData});

        }

    }


    componentDidMount() {
        if(this.state.roomsData[0].nbDevices === 0){
            console.log("UPDATE")
            this.updateRoomData();
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
                        selected="rooms"
                    />
                </aside>


                <main>




                    <RoomList
                        caller={this.state.roomsData}
                    />

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
