import React from "react";
import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import Device from "../nav/Device";




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

                        <Device
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
