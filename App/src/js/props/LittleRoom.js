import React from "react";
import Image from "../tools/Image";

import '../../css/props/LittleRoom.css';

import roomImg from "../../img/roundRoomLevel.png"


export default class LittleRoom extends React.Component{
    render(){
        return(
            <div className={"room " + this.props.className}>

                <Image
                    src={roomImg}
                    alt="image pièce"
                    className={"roundRoomImage"}
                />

            </div>
        )
    }
}


