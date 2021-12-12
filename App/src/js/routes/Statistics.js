import React from "react";
import Navigation from "../Navigation";
import Long from "../cards/Long";
import Profil from "../cards/Profil";
import Graph from "../widgets/Graph";
import ObjectID from "bson-objectid";
import Image from "../tools/Image";
import axios from "axios";
import Home from "./Home";








function convertClass(unit) {
    let type = "";
    switch (unit){
        case "°C":
            type = "temp";
            break;
        case "%":
            type = "hum";
            break;
        case "lm":
            type = "lum";
            break;
        case "Wh":
            type = "elec";
            break;
        case "kWh":
            type = "elec";
            break;
        default:
            console.log("Unknown data type: can't bound")
            return;
    }
    return type;
}

export default class Statistics extends React.Component{

    constructor(props) {
        super(props);


        this.state = {

            show: "globals",


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

    // totalSensorData = () => {
    //
    //     let devicesData = this.state.devicesData;
    //     let allTemp = [], allHum = [], allLum = [];
    //     let tempDataMean = 0, tempIndex = 0;
    //     let temp = 0, hum = 0, lum = 0;
    //
    //     for(let i=0; i<devicesData.length; i++){
    //
    //         if(devicesData[i].unit.includes("°") || devicesData[i].unit.includes("C")){
    //             allTemp.push(devicesData[i].data)
    //         }
    //
    //         if(devicesData[i].unit.includes("%")){
    //             allHum.push(devicesData[i].data)
    //         }
    //
    //         if(devicesData[i].unit.includes("lm")){
    //             allLum.push(devicesData[i].data)
    //         }
    //
    //     }
    //
    //     if(allTemp.length){
    //         for(let i=0; i<allTemp.length; i++) {
    //             tempDataMean += allTemp[i];
    //         }
    //         tempDataMean = tempDataMean/allTemp.length;
    //         temp = tempDataMean | 0;
    //         tempDataMean=0;
    //     }
    //     if(allHum.length){
    //         for(let i=0; i<allHum.length; i++) {
    //             tempDataMean += allHum[i];
    //         }
    //         tempDataMean = tempDataMean/allHum.length;
    //         hum = tempDataMean | 0;
    //         tempDataMean=0;
    //     }
    //     if(allLum.length){
    //         for(let i=0; i<allLum.length; i++) {
    //             tempDataMean += allLum[i];
    //         }
    //         tempDataMean = tempDataMean/allLum.length;
    //         lum = tempDataMean | 0;
    //     }
    //
    //     this.setState({sensor: {
    //             temp: temp,
    //             hum: hum,
    //             lum: lum,
    //         }})
    //
    //
    // }

    getSensData = () => new Home().totalSensorData(this.state.devicesData)







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

        if((this.state.sensor === undefined) && (this.state.devicesData !== undefined)) {
            console.log("TRIED")

            this.setState({sensor: this.getSensData()})

        }



        if(this.state.devicesData !== undefined){
            if(prevState.devicesData !== this.state.devicesData){
                this.getDevicesData()
                // console.log("UPDATE")
            }
        }
    }

    showTypeSensors = (type) =>{


        return (
            this.state.devicesData.map(function(item, key) {

                let deviceType = convertClass(item.unit)

                let addPlus = ""
                if(deviceType.includes("temp")){
                    addPlus = "+"
                }

                if(deviceType.includes(type)){

                    return (

                        <div key ={key} className="longSensorCharts">
                            <Long
                                className={convertClass(item.unit)}
                                graphClass={" sensorInGraph"}
                                titleClass={" titleInGraph"}
                                title={item.name}
                                data={addPlus + item.data + item.unit}
                                content={item.room}
                            />

                        </div>

                    )

                }


            })

        )



    }






    render() {

        let tempSensorData = (show) => <Long
                className="temp"
                title="Température"
                data={"+" + ((this.state.sensor === undefined)? null : this.state.sensor.temp) + "°C"}
                onClick={() => {this.setState({show: show})}}
            />

        let humSensorData = (show) => <Long
            className="hum"
            title="Humidité"
            data={((this.state.sensor === undefined)? null : this.state.sensor.hum) + "%"}
            onClick={() => {this.setState({show: show})}}
        />

        let lumSensorData = (show) => <Long
            className="lum"
            title="Luminosité"
            data={((this.state.sensor === undefined)? null : this.state.sensor.lum) + "lm"}
            onClick={() => {this.setState({show: show})}}
        />








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

                        {this.state.show === "temp"? tempSensorData("globals") : null}
                        {this.state.show === "hum"? humSensorData("globals") : null}
                        {this.state.show === "lum"? lumSensorData("globals") : null}


                        <div className="upStats">


                            {this.state.show === "globals"? tempSensorData("temp") : null}
                            {this.state.show === "globals"? humSensorData("hum") : null}
                            {this.state.show === "globals"? lumSensorData("lum") : null}






                            {this.state.show === "temp"? this.showTypeSensors("temp") : null}
                            {this.state.show === "hum"? this.showTypeSensors("hum") : null}
                            {this.state.show === "lum"? this.showTypeSensors("lum") : null}




                            {/*{this.showTypeSensors("temp")}*/}
                            {/*{this.showTypeSensors("hum")}*/}
                            {/*{this.showTypeSensors("lum")}*/}


                            {/*{tempSensorData}*/}
                            {/*{humSensorData}*/}
                            {/*{lumSensorData}*/}


                        </div>




                        <div className="downGraph">

                            <Graph
                                // type={}
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
