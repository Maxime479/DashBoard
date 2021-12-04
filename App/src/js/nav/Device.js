import React from "react";
import Image from "../tools/Image";
import Text from "../tools/Text"

import '../../css/addons/Device.css';

import OnOffButton from "../../img/button/OnOffButton.png"


export default class Device extends React.Component{
    render(){
        return(
            <div className={"deviceInPage " + this.props.className}>

                <div className="deviceInPageHead">
                    <Image
                        className="deviceImage"
                        src="https://www.icone-png.com/png/15/14621.png"

                    />

                    <Image
                        src={OnOffButton}
                        className="onOffButton"
                        // onClick={t}

                    />


                </div>


                <Text
                    text="Lampe Salon"
                    className="deviceName"
                />

                <Text
                    text="Salon"
                    className="deviceRoom"
                />



            </div>
        )
    }
}


