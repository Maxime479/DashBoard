import React from "react";

import Logo from "../tools/Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import Square from "../cards/Square";
import Long from "../cards/Long";
import Big from "../cards/Big";
import SearchBar from "../SearchBar";


export default class Home extends React.Component{

    constructor(props) {
        super(props);


        this.state = {
            account: 0,
            color: "light",

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

    changeStyle = () => {

        let color = this.state.color

        if(color === "light"){
            this.setState({
                color: "dark"
            })
        }else{
            this.setState({
                color: "light"
            })
        }
    };



    render() {

        return(
            <div className="App">

                <header className="mainHeader">
                    <h1>DashBoard</h1>
                </header>

                <body className="mainBody">

                    <aside className="navContainer">
                        <Navigation
                            selected="home"
                        />
                    </aside>


                    <main>

                        <header className="mainBodyHeader">
                            <SearchBar/>
                            <a className="date">
                                <span className="day">Lundi, </span>
                                18 Octobre 2021
                            </a>
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

                        <div className="lowBody">
                            <div className="datas">

                                <Long
                                    className="temp"
                                    title="Température"
                                    data="+25°C"
                                />

                                <Long
                                    className="hum"
                                    title="Humidité"
                                    data="30%"
                                />

                                <Long
                                    className="lum"
                                    title="Luminosité"
                                    data="150lm"
                                />

                            </div>

                            <Big
                                title="Intensité Lumineuse"
                            />
                        </div>

                    </main>


                    <aside className="profilContainer">
                        <Profil
                            username="Maxime"
                        />
                    </aside>

                </body>





            </div>

        )
    }
}




