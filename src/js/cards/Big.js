import React from "react";
import Text from "../tools/Text";
import Logo from "../tools/Logo";
import Slider from "../props/Slider";
import Head from "../props/Head";


export default class Big extends React.Component{
    render(){
        return(
            <div className={"big " + this.props.className}>

                <Head
                    text={this.props.title}
                />

                <Slider/>

            </div>
        )
    }
}


