import React from "react";
import Text from "../tools/Text";
import Logo from "../tools/Logo";

import '../../css/props/Head.css';

export default class Head extends React.Component{
    render(){
        return(
            <div className={"head " + this.props.className}>


                <Text
                    text={this.props.text}
                    className={"title " + this.props.classname}
                />

                <Logo
                    className={"fas fa-ellipsis-h"}
                />


            </div>
        )
    }
}


