import React from "react";
import Sensor from "../props/Sensor";
import Text from "../tools/Text";


export default class Long extends React.Component{
    render(){
        return(
            <div className={"long " + this.props.className}>

                <Sensor/>

                <div>

                    <Text
                        className="title"
                        text={this.props.title}
                    />

                    <Text
                        className="data"
                        text={this.props.data}
                    />

                </div>

            </div>
        )
    }
}


