import React from "react";
import Navigation from "../Navigation";
import Profil from "../cards/Profil";

import axios from "axios";

import '../../css/Admin.css';
import Image from "../tools/Image";
import AdminTab from "../nav/AdminTab";




export default class Admin extends React.Component{

    constructor(props) {
        super(props);


        this.state = {

            loaded: true,

            navStyles: {
                none: {display: 'none'},
                block: {display: 'flex'},

            },

            navStyle: {
                display: 'flex'
            },

        };

        this.displayNav = this.displayNav.bind(this);

    }

    displayNav = () => {

        let style = this.state.navStyle

        if(style.display.includes('none')){
            this.setState({navStyle: this.state.navStyles.block})
        }else{

            this.setState({navStyle: this.state.navStyles.none})
        }

    }





    render() {
        return(
            <div className="App">

                <Image
                    src="https://www.pngrepo.com/png/311018/512/navigation.png"
                    onClick={this.displayNav}
                    className="navButton"
                    alt="boutton de navigation"
                />

                <header className="mainHeader">
                    <h1>Smart Home DashBoard</h1>
                </header>

                <body className="mainBody">

                <aside className="navContainer" style={this.state.navStyle}>
                    <Navigation
                        selected="admin"
                        // selected="admin"
                        // penser à rajouter l'option dans le widget
                    />
                </aside>


                <main>

                    <AdminTab
                        caller={this.state.devicesData}
                    />






                </main>


                <aside className="profilContainer">
                    <Profil
                        username="Maxime"
                        // loaded={this.state.loaded}
                        // data={this.state.devicesData}
                    />
                </aside>

                </body>





            </div>

        )
    }
}
