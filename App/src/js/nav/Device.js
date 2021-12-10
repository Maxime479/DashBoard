import React from "react";
import Image from "../tools/Image";
import Text from "../tools/Text"

import '../../css/addons/Device.css';

import OffButton from "../../img/button/OffButton.png"
import OnButton from "../../img/button/OnButton.png"
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

        if(this.state.deviceData.state === true){
            this.setState({switchButton: OnButton});
            this.setState({onState: true});
        }else{
            this.setState({switchButton: OffButton});
            this.setState({onState: false});
        }

        this.setState({reload: true})

    }

    whatButton = (state) => {

        if(state === true){
            return OnButton;
        }else{
            return OffButton;
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

    showValue = (value) => {
        // console.log("------------------------------------------")
        console.log(" ")
        console.log(" ")
        console.log("__________________________________________")
        console.log(value)
        console.log("__________________________________________")
        console.log(" ")
        console.log(" ")
        // console.log("------------------------------------------")
    }

    componentDidMount() {
        this.setState({deviceData: this.props.caller})
        this.setState({switchButton: this.whatButton(this.props.caller.state)})
        this.setState({onState: this.props.caller.state})
    }


    sendStateInDB = () => {

        // const state = !this.state.onState;
        const state = !this.props.caller.state;
        const id = this.state.deviceData._id;

        const link = '/devices/' + id

        // axios({
        //     method: 'put',
        //     url: link,
        //     headers: {},
        //     data: {
        //         state: state
        //     }
        //
        // })

        axios.put(link, {
                state: state,
        })
            .then(response => {
                this.setState({devicesData: response.data})
            })
    }

    handleChange() {

        try{
            this.sendStateInDB();
        }finally {
            this.setState({deviceData: this.props.caller})
            this.setState({onState: this.props.caller.state})
            this.setState({switchButton: this.whatButton(this.props.caller.state)})
        }

    }


    render(){

        let newDevice = this.props.caller;

        // if(!this.state.innit){
        //     // console.log("INNIT");
        //     // console.log(newDevice);
        //     // console.log("INNIT");
        //     this.setState({deviceData: newDevice})
        //     this.setState({innit: true})
        // }


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
                            // src={this.state.switchButton}
                            src={this.whatButton(this.props.caller.state)}
                            className="onOffButton"
                            alt="boutton on/off"
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

        }else{
            // this.showValue(this.props.caller)
            console.log("Type Unknown")
            return null;
        }
    }
}


