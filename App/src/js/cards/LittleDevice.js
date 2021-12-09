import React from "react";
import Text from "../tools/Text";
import Logo from "../tools/Logo";

import '../../css/cards/LittleDevice.css';
import Image from "../tools/Image";


export default class LittleDevice extends React.Component{
    render(){
        return(
            <div className={"device " + this.props.className}>

                <div className={"deviceBack " + this.props.color}>
                    {/*<Logo*/}
                    {/*    className={this.props.icon}*/}
                    {/*/>*/}
                    <Image
                        src={this.props.icon}
                        alt="icône d'appareils"
                        className={"littleIcon " + this.props.child}
                    />
                </div>



                <Text
                    text={this.props.name}
                    className="deviceName"
                />

            </div>
        )
    }
}


