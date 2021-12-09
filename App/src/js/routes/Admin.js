import React from "react";
import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import DeviceList from "../list/DeviceList";

import axios from "axios";

import '../../css/Admin.css';




export default class Devices extends React.Component{

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

    getDevicesData = () => {

        axios.get('/devices')
            .then(response => {
                console.log(response)
                console.log(response.data)
                this.setState({devicesData: response.data})
            })
    }

    componentDidMount() {

        this.getDevicesData()

        console.log("STATE")
        console.log(this.state)
        console.log("STATE")


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
                    alt="boutton de navigation"
                />

                <header className="mainHeader">
                    <h1>Smart Home DashBoard</h1>
                </header>

                <body className="mainBody">

                <aside className="navContainer" style={this.state.navStyle}>
                    <Navigation
                        selected="devices"
                        // selected="admin"
                        // penser à rajouter l'option dans le widget
                    />
                </aside>


                <main>

                    {/*<AdminTab*/}
                    {/*    caller={this.state.devicesData}*/}
                    {/*/>*/}






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
