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

                <Device
                    name="Lampe"
                    icon="fa-solid fa-lightbulb"
                />

            </div>
        )
    }
}


