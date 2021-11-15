import React from "react";
import Image from "../tools/Image";

import roomImg from "../../img/roundRoomLevel.png"


export default class Room extends React.Component{
    render(){
        return(
            <div className={"room " + this.props.className}>

                <Image
                    src={roomImg}
                    alt="room image"
                    className={"roundRoomImage"}
                />

            </div>
        )
    }
}


