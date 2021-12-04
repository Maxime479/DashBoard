import React from "react";
import Text from "../tools/Text";
import Logo from "../tools/Logo";
import Slider from "../props/Slider";
import Head from "../props/Head";

import '../../css/cards/Big.css';


export default class Big extends React.Component{
    render(){
        return(
            <div className={"big " + this.props.className}>

                <Head
                    text={this.props.title}
                    className="headBig"
                    classname="titleBig"
                />

                <Slider/>

            </div>
        )
    }
}


