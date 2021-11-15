import React from "react";
import Text from "../tools/Text";
import Logo from "../tools/Logo";


export default class Head extends React.Component{
    render(){
        return(
            <div className={"head " + this.props.className}>


                <Text
                    text={this.props.text}
                    className={"title " + this.props.classname}
                />

                <Logo
                    className={"fas fa-ellipsis"}
                />


            </div>
        )
    }
}


