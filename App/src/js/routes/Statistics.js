import React from "react";
import Navigation from "../Navigation";
import Long from "../cards/Long";
import Profil from "../cards/Profil";
import Graph from "../widgets/Graph";
import ObjectID from "bson-objectid";
import Image from "../tools/Image";
import axios from "axios";




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




    sortSensors = (devicesData) => {

        let tempDevice = [];

        for(let i=0; i<devicesData.length; i++){


            if(devicesData[i].type.includes("sensor")){
                tempDevice.push(devicesData[i])
            }
        }

        return tempDevice
    }

    getDevicesData = () => {

        axios.get('/devices')
            .then(response => {
                this.setState({devicesData: this.sortSensors(response.data)})
            })
    }

    componentDidMount() {
        this.getDevicesData()
    }

    componentDidUpdate(prevState) {

        if(this.state.devicesData !== undefined){
            if(prevState.devicesData !== this.state.devicesData){
                this.getDevicesData()
                // console.log("UPDATE")
            }
        }
    }




    render() {

        if (this.state.devicesData === undefined){
            return (
                <div>
                    Loading...
                </div>
            )
        }else{
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
                            selected="statistics"
                        />
                    </aside>


                    <main className="mainStat">


                        <div className="upStats">

                            {this.state.devicesData.map(function(item, key) {

                                return (

                                    <div key ={key} className="longSensorCharts">
                                        <Long
                                            // className="temp"
                                            title={item.name}
                                            data={item.data}
                                        />


                                    </div>

                                )

                            })}

                        </div>



                        {/*<div className="upStats">*/}

                        {/*    <Long*/}
                        {/*        className="temp"*/}
                        {/*        title="Température"*/}
                        {/*        data="+25°C"*/}
                        {/*    />*/}

                        {/*    <Long*/}
                        {/*        className="hum"*/}
                        {/*        title="Humidité"*/}
                        {/*        data="30%"*/}
                        {/*    />*/}

                        {/*    <Long*/}
                        {/*        className="lum"*/}
                        {/*        title="Luminosité"*/}
                        {/*        data="150lm"*/}
                        {/*    />*/}


                        {/*</div>*/}

                        <div className="downGraph">

                            <Graph
                                caller={this.state.devicesData}
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
}
