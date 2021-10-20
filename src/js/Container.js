import React, {useState} from "react";
import Logo from "./tools/Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Navigation from "./Navigation";
import Profil from "./cards/Profil";
import Square from "./cards/Square";
import Long from "./cards/Long";
import Big from "./cards/Big";
import SearchBar from "./SearchBar";
import Text from "./tools/Text";


export default class container extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            account: 0,
            color: "blue",

            userData : [
                {
                    firstName: 'Maxime',
                    lastName: 'Saurin',
                    birthDate: '6 Mars 2000',
                    // img : imgMax,
                },

                {
                    firstName: 'Altaïr',
                    lastName: 'Ibn La-Ahad',
                    birthDate: '11 janvier 1165',
                    // img : imgLoic,
                },
            ],

        };

    }

    changeAccount = number => () => {
        this.setState({
            account: number
        })
    };

    changeStyle = color => () => {
        this.setState({
            color: color,
        })
    };



    render() {

        return(
            <div className="App">

                <header>

                    <h1>DashBoard</h1>

                </header>

                <aside>
                    <Navigation/>
                </aside>


                <body>

                    <header>
                        <SearchBar/>
                        <Text
                            className="date"
                            text="Lundi, 18 Octobre 2021"
                        />
                    </header>

                    <div className="rooms">

                        <Square
                            title="Salon"
                        />

                        <Square
                            title="Chambre"
                        />

                        <Square
                            title="Cuisine"
                        />

                        <Square
                            title="Salle à manger"
                        />


                    </div>

                    <div>
                        <div className="datas">

                            <Long
                                title="Température Intérieur"
                                data="+25°C"
                            />

                            <Long
                                title="Humidité"
                                data="30%"
                            />

                        </div>

                        <Big
                            title="Intensité Lumineuse"
                        />
                    </div>

                </body>


                <aside>
                    <Profil/>
                </aside>



            </div>

        )
    }
}




