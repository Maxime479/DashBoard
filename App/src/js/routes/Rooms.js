import React from "react";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";
import Square from "../cards/Square";
import Long from "../cards/Long";
import Big from "../cards/Big";
import Profil from "../cards/Profil";
import Room from "../nav/Room";


export default class Rooms extends React.Component{


    render() {

        return(
            <div className="App">

                <header className="mainHeader">
                    <h1>DashBoard</h1>
                </header>

                <body className="mainBody">

                    <aside className="navContainer">
                        <Navigation
                            selected="rooms"
                        />
                    </aside>


                    <main>




                        <Room
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
