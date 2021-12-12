import React from "react";
import Sensor from "../props/Sensor";
import Text from "../tools/Text";

import '../../css/cards/Long.css';


export default class Long extends React.Component{
    // graphClass;
    render(){
        return(
            <div className={"long " + this.props.className}>

                {/*<Sensor/>*/}

                <div className="longContainer">

                    <div className="logo logoLong">

                    </div>

                    <div className={"infos " + this.props.graphClass}>

                        <Text
                            className={"title titleLong " + this.props.titleClass}
                            content={this.props.content}
                            text={this.props.title}
                        />

                        <Text
                            className="data dataLong"
                            text={this.props.data}
                        />

                    </div>

                </div>

                <div className="graphLink" onClick={this.props.onClick}>

                </div>


            </div>
        )
    }
}


