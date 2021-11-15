import React from "react";
import Text from "../tools/Text";


export default class Slider extends React.Component{
    render(){
        return(
            <div className={"slider " + this.props.className}>

                <Text
                    text="55"
                    className="dataBig"
                />

                <Text
                    text="%"
                    className="unitBig"
                />

            </div>
        )
    }
}


