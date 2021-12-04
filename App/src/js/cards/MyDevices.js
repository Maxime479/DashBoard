import React from "react";
import Head from "../props/Head";
import LittleDevice from "./LittleDevice";

import '../../css/cards/MyDevices.css';


export default class MyDevices extends React.Component{
    render(){
        return(
            <div className={"myDevices " + this.props.className}>

                <Head
                    text="Mes Appareils"
                    className="myDevicesHead"
                />

                <div className="devicesContainer">

                    <LittleDevice
                        name="Lampe"
                        icon="fa-solid fa-lightbulb"
                        color="red"
                    />

                    <LittleDevice
                        name="Routeur"
                        icon="fa-solid fa-lightbulb"
                        color="green"
                    />

                    <LittleDevice
                        name="Enceinte"
                        icon="fa-solid fa-lightbulb"
                        color="orange"
                    />

                    <LittleDevice
                        name="Sensor"
                        icon="fa-solid fa-lightbulb"
                        color="blue"
                    />

                </div>


            </div>
        )
    }
}


