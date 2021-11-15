import React from "react";
import Sensor from "../props/Sensor";
import Text from "../tools/Text";


export default class Long extends React.Component{
    render(){
        return(
            <div className={"long " + this.props.className}>

                {/*<Sensor/>*/}

                <div className="longContainer">

                    <div className="logo logoLong">

                    </div>

                    <div className="infos">

                        <Text
                            className="title titleLong"
                            text={this.props.title}
                        />

                        <Text
                            className="data dataLong"
                            text={this.props.data}
                        />

                    </div>

                </div>

                <div className="graphLink">

                </div>


            </div>
        )
    }
}


