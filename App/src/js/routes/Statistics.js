import React from "react";
import Navigation from "../Navigation";
import Long from "../cards/Long";
import Profil from "../cards/Profil";
import Graph from "../widgets/Graph";
import ObjectID from "bson-objectid";
import Image from "../tools/Image";




export default class Statistics extends React.Component{

    constructor(props) {
        super(props);


        this.state = {

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
                />

                <header className="mainHeader">
                    <h1>Smart Home DashBoard</h1>
                </header>

                <body className="mainBody">

                <aside className="navContainer" style={this.state.navStyle}>
                        <Navigation
                            selected="statistics"
                        />
                    </aside>


                    <main className="mainStat">


                        <div className="upStats">

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

                        <div className="downGraph">

                            <Graph
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
