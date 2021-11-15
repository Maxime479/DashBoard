import React from "react";
import Text from "../tools/Text";
import Logo from "../tools/Logo";
import Room from "../props/Room";
import Head from "../props/Head";


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

                    <Room/>

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


