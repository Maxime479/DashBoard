import React from "react";
import Text from "../tools/Text";
import Logo from "../tools/Logo";


export default class Head extends React.Component{
    render(){
        return(
            <div className={"head " + this.props.className}>

                <header>

                    <Text
                        text={this.props.text}
                    />

                    <Logo
                        className={"fa-regular fa-ellipsis"}
                    />

                </header>

            </div>
        )
    }
}


