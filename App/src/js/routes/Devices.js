import React from "react";
import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import DeviceList from "../list/DeviceList";

import Image from "../tools/Image";
import axios from "axios";





export default class Devices extends React.Component{

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



    getDevicesData = () => {

        axios.get('/devices')
            .then(response => {
                this.setState({devicesData: response.data})
            })
    }

    componentDidMount() {

        this.getDevicesData()

    }

    componentDidUpdate(prevState) {
        if(prevState.devicesData !== this.state.devicesData){
            this.getDevicesData()
            console.log("UPDATE")
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
                            selected="devices"
                        />
                    </aside>


                    <main>

                        <DeviceList
                            caller={this.state.devicesData}
                        />

                        {/*<button onClick={() => {console.log(this.state.devicesData)}}>*/}
                        {/*    CONSOLE*/}
                        {/*</button>*/}





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
