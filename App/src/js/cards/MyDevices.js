import React from "react";
import Head from "../props/Head";
import LittleDevice from "./LittleDevice";

import '../../css/cards/MyDevices.css';
import axios from "axios";


export default class MyDevices extends React.Component{



    constructor(props){
        super(props);

        this.state = {

            deviceList: [],
            dataLoaded: false,
            devicesLoaded: false,

        }
    }



    getDevicesData = () => {

        // this.setState({devicesLoaded: false})

        axios.get('/devices')
            .then(response => {
                this.setState({devicesData: response.data})
                this.setState({dataLoaded: true})
            })
    }

    componentDidMount() {

        if(this.state.dataLoaded === false){
            console.log("DONE")
            this.getDevicesData()
            console.log(this.state)
        }else{
            this.setState({devicesData: this.props.data})
        }

    }

    componentDidUpdate(prevState) {

        // if (this.state.dataLoaded === true){
        //     console.log("STATE")
        //     console.log(this.state)
        //     console.log("STATE")
        //     this.setState({dataLoaded: false})
        // }

        if(this.state.dataLoaded === true && this.state.devicesLoaded === false){
            this.makeList()
        }
    }

    makeList = () => {

        console.log("done")

        let data = this.state.devicesData;
        let nbDevices = data.length;
        let deviceList = [];

        for(let i = 0; i < nbDevices; i++){

            let lightIcon = "fa-solid fa-lightbulb"
            let lightColor = "orange"

            let stripIcon = "fa-solid fa-lightbulb"
            let stripColor = "red"

            let mediaIcon = "fa-solid fa-lightbulb"
            let mediaColor = "green"

            let sensorIcon = "fa-solid fa-lightbulb"
            let sensorColor = "blue"


            let color;
            console.log(color)


            switch (data[i].type){
                case "light":
                    color = lightColor
                    break;
                case "power_strip":
                    color = stripColor
                    break;
                case "media":
                    color = mediaColor
                    break;
                case "sensor":
                    color = sensorColor
                    break;
                default:
                    color = lightColor
                    console.log("Type not found for little devices")
                    break;
            }

            deviceList.push(
                <LittleDevice
                    name={data[i].name}
                    icon={data[i].icon}
                    color={color}
                />
            )
        }

        this.setState({deviceList: deviceList})
        this.setState({devicesLoaded: true})
    }


    render(){

        if(this.state.deviceList === undefined){
            console.log("EMPTY");

            return (
                <div>
                    Data Loading...
                </div>
            )
        }else {
            console.log("LOADED");

            return(
                <div className={"myDevices " + this.props.className}>

                    <Head
                        text="Mes Appareils"
                        className="myDevicesHead"
                    />

                    <div className="devicesContainer">

                        {this.state.deviceList}

                        {/*<LittleDevice*/}
                        {/*    name="Lampe"*/}
                        {/*    icon="fa-solid fa-lightbulb"*/}
                        {/*    color="red"*/}
                        {/*/>*/}

                        {/*<LittleDevice*/}
                        {/*    name="Routeur"*/}
                        {/*    icon="fa-solid fa-lightbulb"*/}
                        {/*    color="green"*/}
                        {/*/>*/}

                        {/*<LittleDevice*/}
                        {/*    name="Enceinte"*/}
                        {/*    icon="fa-solid fa-lightbulb"*/}
                        {/*    color="orange"*/}
                        {/*/>*/}

                        {/*<LittleDevice*/}
                        {/*    name="Sensor"*/}
                        {/*    icon="fa-solid fa-lightbulb"*/}
                        {/*    color="blue"*/}
                        {/*/>*/}

                        {/*<LittleDevice*/}
                        {/*    name="Lampe"*/}
                        {/*    icon="fa-solid fa-lightbulb"*/}
                        {/*    color="red"*/}
                        {/*/>*/}

                        {/*<LittleDevice*/}
                        {/*    name="Routeur"*/}
                        {/*    icon="fa-solid fa-lightbulb"*/}
                        {/*    color="green"*/}
                        {/*/>*/}

                        {/*<LittleDevice*/}
                        {/*    name="Enceinte"*/}
                        {/*    icon="fa-solid fa-lightbulb"*/}
                        {/*    color="orange"*/}
                        {/*/>*/}

                        {/*<LittleDevice*/}
                        {/*    name="Sensor"*/}
                        {/*    icon="fa-solid fa-lightbulb"*/}
                        {/*    color="blue"*/}
                        {/*/>*/}

                    </div>


                </div>
            )

        }



    }
}


