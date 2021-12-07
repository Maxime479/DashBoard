import React from "react";



import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import Square from "../cards/Square";
import Long from "../cards/Long";
import Big from "../cards/Big";
import SearchBar from "../SearchBar";
import Date from "../widgets/Date";
import Weather from "../widgets/Weather";
import ObjectID from "bson-objectid";
import Image from "../tools/Image";
import axios from "axios";


export default class Home extends React.Component{

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


            userData : [
                {
                    firstName: 'Maxime',
                    lastName: 'Saurin',
                    birthDate: '6 Mars 2000',
                },


            ],

            consumption : {
                lounge: 0,
                bedroom: 0,
                kitchen: 0,
                bathroom: 0,

            },

            sensor: {
                temp: 0,
                hum: 0,
                lum: 0,
            },

            devicesData : [
                {
                    _id: ObjectID("61acc6f8b230570391d7ca62"),
                    name: 'Lampe',
                    room: 'Salon',
                    state: false,
                    type: 'light',
                    icon: 'https://www.icone-png.com/png/15/14621.png',
                    data: 47,
                    unit: 'kWh',
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

    totalConsumption = (room) => {
        let devicesData = this.state.devicesData;
        let consumption = this.state.consumption;
        let cons = 0;

        for(let i=0; i<devicesData.length; i++){

            if(devicesData[i].room.includes(room) && devicesData[i].unit.includes("kWh")){
                cons += devicesData[i].data;
            }

        }

        if(cons !== 0){
            switch (room){
                case "Salon":
                    consumption.lounge = cons;
                    break;
                case "Chambre":
                    consumption.bedroom = cons;
                    break;
                case "Cuisine":
                    consumption.kitchen = cons;
                    break;
                case "Salle de bain":
                    consumption.bathroom = cons;
                    break;
                default:
                    console.log("Room unfound for consumption calcul")
                    break;
            }
        }

        this.setState({consumption: consumption})
    }

    totalSensorData = () => {

        let devicesData = this.state.devicesData;
        let allTemp = [], allHum = [], allLum = [];
        let tempDataMean = 0, tempIndex = 0;
        let temp = 0, hum = 0, lum = 0;

        for(let i=0; i<devicesData.length; i++){

            if(devicesData[i].unit.includes("°") || devicesData[i].unit.includes("C")){
                allTemp.push(devicesData[i].data)
            }

            if(devicesData[i].unit.includes("%")){
                allHum.push(devicesData[i].data)
            }

            if(devicesData[i].unit.includes("lm")){
                allLum.push(devicesData[i].data)
            }

        }

        if(allTemp.length){
            for(let i=0; i<allTemp.length; i++) {
                tempDataMean += allTemp[i];
            }
            tempDataMean = tempDataMean/allTemp.length;
            temp = tempDataMean | 0;
            tempDataMean=0;
        }
        if(allHum.length){
            for(let i=0; i<allHum.length; i++) {
                tempDataMean += allHum[i];
            }
            tempDataMean = tempDataMean/allHum.length;
            hum = tempDataMean | 0;
            tempDataMean=0;
        }
        if(allLum.length){
            for(let i=0; i<allLum.length; i++) {
                tempDataMean += allLum[i];
            }
            tempDataMean = tempDataMean/allLum.length;
            lum = tempDataMean | 0;
        }

        this.setState({sensor: {
                temp: temp,
                hum: hum,
                lum: lum,
            }})


    }

    dataUpdate = () => {
        this.totalConsumption("Salon")
        this.totalConsumption("Chambre")
        this.totalConsumption("Cuisine")
        this.totalConsumption("Salle de bain")

        this.totalSensorData()
    }




    // componentDidUpdate(prevState){
    //
    //     if(prevState.devicesData !== this.state.devicesData){
    //         this.consUpdate()
    //         console.log("Consumption Updated")
    //     }
    //
    // }


    getDevicesData = () => {

        axios.get('/devices')
            .then(response => {
                this.setState({devicesData: response.data})
            })
    }

    componentDidMount() {

        this.getDevicesData()

    }

    componentDidUpdate(prevState) {
        if(prevState.devicesData !== this.state.devicesData){
            this.getDevicesData()
            console.log("UPDATE")
        }

        if(this.state.consumption.lounge === 0 && this.state.devicesData !== undefined){
            this.dataUpdate()
            console.log("Consumption Innitialized")
        }else{
            console.log("NOPE")
        }

    }




    render() {

        return(
            <div className="App">

                <Image
                    src="https://www.pngrepo.com/png/311018/512/navigation.png"
                    onClick={this.displayNav}
                    className="navButton"
                    alt="boutton de navigation"
                />

                <header className="mainHeader">
                    <h1>Smart Home DashBoard</h1>
                </header>

                <body className="mainBody">

                <aside className="navContainer" style={this.state.navStyle}>
                        <Navigation
                            selected="home"
                        />
                    </aside>


                    <main className="homeMain">

                        <header className="mainBodyHeader">
                            <SearchBar/>
                            <Date
                            />
                        </header>

                        <div className="rooms">

                            <Square
                                title="Salon"
                                data={this.state.consumption.lounge}
                            />

                            <Square
                                title="Chambre"
                                data={this.state.consumption.bedroom}
                            />

                            <Square
                                title="Cuisine"
                                data={this.state.consumption.kitchen}
                            />

                            <Square
                                title="Salle de bain"
                                data={this.state.consumption.bathroom}
                            />


                        </div>

                        <div className="lowBody">
                            <div className="left">

                                <Long
                                    className="temp"
                                    title="Température"
                                    data={"+" + this.state.sensor.temp + "°C"}
                                />

                                <Long
                                    className="hum"
                                    title="Humidité"
                                    data={this.state.sensor.hum + "%"}
                                />

                                <Long
                                    className="lum"
                                    title="Luminosité"
                                    data={this.state.sensor.lum + "lm"}
                                />

                            </div>

                            <div className="right">

                                <Big
                                    title="Intensité Lumineuse"
                                />


                                <Weather
                                    title="Météo"
                                />

                            </div>

                        </div>

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




