import React from "react";
import Head from "../props/Head";
import Device from "./Device";


export default class MyDevices extends React.Component{
    render(){
        return(
            <div className={"myDevices " + this.props.className}>

                <Head
                    text="Mes Appareils"
                    className="myDevicesHead"
                />

                <div className="devicesContainer">

                    <Device
                        name="Lampe"
                        icon="fa-solid fa-lightbulb"
                        color="red"
                    />

                    <Device
                        name="Routeur"
                        icon="fa-solid fa-lightbulb"
                        color="green"
                    />

                    <Device
                        name="Enceinte"
                        icon="fa-solid fa-lightbulb"
                        color="orange"
                    />

                    <Device
                        name="Sensor"
                        icon="fa-solid fa-lightbulb"
                        color="blue"
                    />

                </div>


            </div>
        )
    }
}


