import React from "react";
import Image from "../tools/Image";
import Text from "../tools/Text";
import MyDevices from "./MyDevices";

import '../../css/cards/Profil.css';


export default class Profil extends React.Component{
    render(){
        return(
            <div className={"profil " + this.props.className}>

                <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnujNmRpIR4M38nTjHOZQYdZk3DSykbotmbA&usqp=CAU"
                    className="profilImage"
                    alt="photo de profil"
                />

                <Text
                    text={"Bonjour " + this.props.username + " !"}
                />

                <MyDevices
                />

            </div>
        )
    }
}


