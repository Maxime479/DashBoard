import React from "react";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";
import Square from "../cards/Square";
import Long from "../cards/Long";
import Big from "../cards/Big";
import Profil from "../cards/Profil";
import Device from "../cards/Device";
import MyDevices from "../cards/MyDevices";


export default class Devices extends React.Component{


    render() {

        return(
            <div className="App">

                <header className="mainHeader">
                    <h1>DashBoard</h1>
                </header>

                <body className="mainBody">

                    <aside className="navContainer">
                        <Navigation
                            selected="devices"
                        />
                    </aside>


                    <main>



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

                        <MyDevices
                        />

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
