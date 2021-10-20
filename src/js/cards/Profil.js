import React from "react";
import Image from "../SearchBar";
import Text from "../tools/Text";
import MyDevices from "./MyDevices";


export default class Profil extends React.Component{
    render(){
        return(
            <div className={"profil " + this.props.className}>

                <Image/>

                <Text
                    text={this.props.username}
                />

                <MyDevices/>

            </div>
        )
    }
}


