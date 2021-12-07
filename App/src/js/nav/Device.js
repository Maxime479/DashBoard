import React from "react";
import Image from "../tools/Image";
import Text from "../tools/Text"

import '../../css/addons/Device.css';

import OffButton from "../../img/button/OffButton.png"
import OnButton from "../../img/button/OnButton.png"

import ObjectID from "bson-objectid";
import axios from "axios";



export default class Device extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            switchButton: OffButton,
            onState: false,
            innit: false,
        };

        this.handleChange = this.handleChange.bind(this);


    }

    loadSwitchState = () => {

        if(this.state.deviceData.state){
            this.setState({switchButton: OnButton});
            this.setState({onState: true});
        }else{
            this.setState({switchButton: OffButton});
            this.setState({onState: false});
        }

    }

    shortName = (name) => {

        switch (name){
            case "Capteur de température":
                return "Capteur de temp"
            case "Capteur de temp":
                return "Capteur de temp"
            case "Capteur de luminosité":
                return "Capteur de lum"
            case "Capteur d'humidité":
                return name
            default:
                console.log("Can't short name")
                return "Unfound"
        }

    }


    componentDidUpdate(prevState){
        if(this.state.onState !== this.state.deviceData.state){

            this.loadSwitchState();
        }

    }


    sendStateInDB = () => {
        let state = !this.state.onState;
        let id = this.state._id;

        // axios.post('changeDeviceState',
        //     {
        //     params: {
        //         id: id,
        //         state: state,
        //     },
        //     // headers: {
        //     //     'x-rapidapi-host': 'world-clock.p.rapidapi.com',
        //     //     'x-rapidapi-key': 'a4740618f3msh3798e57b20efe3fp1f12c6jsn62bc537683e9'
        //     // }
        // })
        //     // .then(response => {
        //     //     this.setState({ day: response.data.dayOfTheWeek});
        //     //     this.setState({ date: response.data.currentDateTime});
        //     // })
        //     .then(() => console.log("New device state send"))
    }

    handleChange() {
        this.sendStateInDB();
    }


    render(){

        let newDevice = this.props.caller;

        if(!this.state.innit){
            console.log("INNIT");
            console.log(newDevice);
            console.log("INNIT");
            this.setState({deviceData: newDevice})
            this.setState({innit: true})
        }


        if(newDevice.type.includes('light') || newDevice.type.includes('power_strip') || newDevice.type.includes('media')){

            return(
                <div className={"deviceInPage " + this.props.className}>

                    <div className="deviceInPageHead">
                        <Image
                            className="deviceImage"
                            src={newDevice.icon}
                            alt="Icon de l'appareil"

                        />

                        <Image
                            src={this.state.switchButton}
                            className="onOffButton"
                            alt="boutton on/off"
                            // onClick={this.sendStateInDB()}
                            onClick={this.handleChange}

                        />


                    </div>


                    <Text
                        text={newDevice.name}
                        className="deviceName"
                    />

                    <Text
                        text={newDevice.room}
                        className="deviceRoom"
                    />



                </div>
            )

        }else if(newDevice.type.includes('sensor')){

            return(
                <div className={"deviceInPage " + this.props.className}>

                    <div className="deviceInPageHead sensorHead">
                        <Image
                            className="deviceImage sensorImage"
                            src={newDevice.icon}
                            alt="Icone du capteur"

                        />

                        <Text
                            text={newDevice.data + newDevice.unit}
                            className="sensorData"
                        />



                    </div>


                    <Text
                        text={this.shortName(newDevice.name)}
                        // text={newDevice.name}
                        className="deviceName"
                    />

                    <Text
                        text={newDevice.room}
                        className="deviceRoom"
                    />



                </div>
            )

        }


    }
}


