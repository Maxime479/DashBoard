import React from "react";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";
import Square from "../cards/Square";
import Long from "../cards/Long";
import Big from "../cards/Big";
import Profil from "../cards/Profil";
import Test from "../addons/Test";
import Member from "../nav/Member";


export default class Members extends React.Component{


    render() {



        return(
            <div className="App">

                <header className="mainHeader">
                    <h1>DashBoard</h1>
                </header>

                <body className="mainBody">

                    <aside className="navContainer">
                        <Navigation
                            selected="members"
                        />
                    </aside>


                    <main>




                        <Member
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
