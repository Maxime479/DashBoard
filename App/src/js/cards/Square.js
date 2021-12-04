import React from "react";
import Text from "../tools/Text";
import Logo from "../tools/Logo";
import LittleRoom from "../props/LittleRoom";
import Head from "../props/Head";

import '../../css/cards/Square.css';


export default class Square extends React.Component{
    render(){
        return(
            <div className={"square " + this.props.className}>

                <Head
                    text={this.props.title}
                    className="headSquare "
                    classname="titleSquare "
                />

                <body className="squareBody ">

                    <LittleRoom/>

                    <div className="data dataSquare ">

                        <Text
                            className="number "
                            text={"196"}
                        />

                        <Text
                            className="unit "
                            text={"kWh"}
                        />

                    </div>

                </body>

            </div>
        )
    }
}


