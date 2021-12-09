import React from "react";



import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import Square from "../cards/Square";
import Long from "../cards/Long";
import Big from "../cards/Big";
import SearchBar from "../SearchBar";
import Date from "../widgets/Date";
import Weather from "../widgets/Weather";
import Image from "../tools/Image";
import axios from "axios";


export default class Home extends React.Component{

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


            userData : [
                {
                    firstName: 'Maxime',
                    lastName: 'Saurin',
                    birthDate: '6 Mars 2000',
                },


            ],

            consumption : {
                lounge: 0,
                bedroom: 0,
                kitchen: 0,
                bathroom: 0,

            },

            sensor: {
                temp: 0,
                hum: 0,
                lum: 0,
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

    //---------------- Conumption Calculator ----------------
    totalConsumption = (room) => {
        let devicesData = this.state.devicesData;
        let consumption = this.state.consumption;
        let cons = 0;

        for(let i=0; i<devicesData.length; i++){

            if(devicesData[i].room.includes(room) && devicesData[i].unit.includes("kWh")){
                cons += devicesData[i].data;
            }

        }

        if(cons !== 0){
            switch (room){
                case "Salon":
                    consumption.lounge = cons;
                    break;
                case "Chambre":
                    consumption.bedroom = cons;
                    break;
                case "Cuisine":
                    consumption.kitchen = cons;
                    break;
                case "Salle de bain":
                    consumption.bathroom = cons;
                    break;
                default:
                    console.log("Room unfound for consumption calcul")
                    break;
            }
        }

        this.setState({consumption: consumption})
    }

    totalSensorData = () => {

        let devicesData = this.state.devicesData;
        let allTemp = [], allHum = [], allLum = [];
        let tempDataMean = 0, tempIndex = 0;
        let temp = 0, hum = 0, lum = 0;

        for(let i=0; i<devicesData.length; i++){

            if(devicesData[i].unit.includes("°") || devicesData[i].unit.includes("C")){
                allTemp.push(devicesData[i].data)
            }

            if(devicesData[i].unit.includes("%")){
                allHum.push(devicesData[i].data)
            }

            if(devicesData[i].unit.includes("lm")){
                allLum.push(devicesData[i].data)
            }

        }

        if(allTemp.length){
            for(let i=0; i<allTemp.length; i++) {
                tempDataMean += allTemp[i];
            }
            tempDataMean = tempDataMean/allTemp.length;
            temp = tempDataMean | 0;
            tempDataMean=0;
        }
        if(allHum.length){
            for(let i=0; i<allHum.length; i++) {
                tempDataMean += allHum[i];
            }
            tempDataMean = tempDataMean/allHum.length;
            hum = tempDataMean | 0;
            tempDataMean=0;
        }
        if(allLum.length){
            for(let i=0; i<allLum.length; i++) {
                tempDataMean += allLum[i];
            }
            tempDataMean = tempDataMean/allLum.length;
            lum = tempDataMean | 0;
        }

        this.setState({sensor: {
                temp: temp,
                hum: hum,
                lum: lum,
            }})


    }

    dataUpdate = () => {
        this.totalConsumption("Salon")
        this.totalConsumption("Chambre")
        this.totalConsumption("Cuisine")
        this.totalConsumption("Salle de bain")

        this.totalSensorData()
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
            console.log("Update Data")
        }

        if(this.state.consumption.lounge === 0 && this.state.devicesData !== undefined){
            this.dataUpdate()
            console.log("Consumption Innitialized")
        }else{
            console.log("Can't Innitialize data")
        }

        // if(this.state.devicesData !== undefined){
        //     this.updateAllDevicesDatas(this.state.devicesData)
        // }

    }






    //---------------- Value Generator ----------------
    //Show clearly value in console
    showValue = (value) => {
        // console.log("------------------------------------------")
        console.log(" ")
        console.log(" ")
        console.log("__________________________________________")
        console.log(value)
        console.log("__________________________________________")
        console.log(" ")
        console.log(" ")
        // console.log("------------------------------------------")
    }


    //Date
    getCurrentDate = () => {
        let nowInMs = Date.now()
        let nowDate = new Date(nowInMs)

        nowInMs = nowInMs - nowDate.getSeconds()*1000 - nowDate.getMinutes()*60000
        nowDate = new Date(nowInMs)

        return nowDate;
    }

    addHours = (date, hours) => {
        return new Date(new Date(date).setHours(date.getHours() + hours));
    }

    formatDate = (date) => {

        let result = "Unknown"

        if(date === undefined){
            result = "No data"
        }


        if(typeof date === "object"){
            result = date.toISOString().slice(0, 10) + " " + date.toLocaleTimeString(('fr-FR'))
        }

        return result
    }

    arrayInclude = (array, string) => {
        let condition = false

        let stringArray = JSON.stringify(array)
        condition = stringArray.includes(string)

        return condition
    }


    //Data
    getRandNb = (min, max) => {
        max++;
        const range = max - min;
        return Math.floor(Math.random() * (range) ) + min;
    }

    boundedData = (data, type) => {

        let prebound = data;
        let afterbound = 0;



        const maxTemp = 27;
        const minTemp = 18;

        const maxHum = 75;
        const minHum = 37;

        const maxLum = 2000;
        const minLum = 0;

        let max, min;

        switch (type){
            case "temp":
                max = maxTemp;
                min = minTemp;
                break;
            case "hum":
                max = maxHum;
                min = minHum;
                break;
            case "lum":
                max = maxLum;
                min = minLum;
                break;
            default:
                console.log("Unknown data type: can't bound")
                return;
        }

        if(data <= min){
            data = min;
        }
        if(data >= max){
            data = max;
        }

        afterbound = data;
        // let cons = {prebound, afterbound}
        // console.log("__________________________________")
        // console.log(cons)
        // console.log("__________________________________")

        return data;
    }

    linearNewData = (oldData, type) => {

        let randEvolution = 1;
        let newData = 0;
        let range = 0;

        let rangeTemp = 1;
        let rangeHum = 3;
        let rangeLum = 200;

        randEvolution = this.getRandNb(0, 5);
        let evolution;

        switch (type){
            case "temp":
                range = rangeTemp;
                break;
            case "hum":
                range = rangeHum;
                break;
            case "lum":
                range = rangeLum;
                break;
            case "elec":
                newData = this.getRandNb(0, 20);
                return newData;
            default:
                console.log("Unknown data type: can't bound")
                return;
        }

        evolution = this.getRandNb(0, range);

        //Choose sens of evolution
        if(randEvolution === (0 || 1)){
            newData = oldData - evolution;
        }
        if(randEvolution === (2 || 3)){
            return oldData;
        }
        if(randEvolution === (4 || 5)){
            newData = oldData + evolution;
        }

        // let cons = {evolution, data: newData}
        // console.log("__________________________________")
        // console.log(cons)
        // console.log("__________________________________")

        return this.boundedData(newData, type);
    }


    forceIntType = (data) => {
        if(typeof data === "number"){
            return data;
        }

        if(typeof data === "string"){
            return parseInt(data);
        }

    }

    generateMissingData = (device) => {

        // Date.prototype.addHours = function(h) {
        //     this.setTime(this.getTime() + (h*60*60*1000));
        //     return this;
        // }
        //

        const id = device.id
        const unit = device.unit
        let oldDataArray = device.stored_data
        let arrayLength = oldDataArray.length-1

        const lastUpdateData = this.forceIntType(oldDataArray[arrayLength].data)
        const lastUpdateDate = new Date(oldDataArray[arrayLength].time)

        let currentDate = this.getCurrentDate()
        let tempDate = lastUpdateDate
        let formattedDate
        let newDatas = []

        let tempData = lastUpdateData
        let type = ""

        //Min = 18°C | Max = 27°C
        let randTemp = Math.floor(Math.random() * 40) + 5;

        //Min = 0lm | Max = 2000lm
        let randLum = Math.floor(Math.random() * 2000);

        //Min = 37% | Max = 75%
        let randHum = Math.floor(Math.random() * 38) + 37;


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


        while(tempDate.getTime() !== currentDate.getTime()){
            tempDate = this.addHours(tempDate, 1)
            formattedDate = this.formatDate(tempDate)

            tempData = this.linearNewData(tempData, type)

            newDatas.push({time: formattedDate, data: tempData})
        }




        if(this.arrayInclude(newDatas, this.formatDate(lastUpdateDate))) {

            let concatArray = oldDataArray.concat(newDatas)
            return concatArray;


            // console.log("OUT")
            //
            // console.log("______________________________________________________________________________________________________________________________")
            // this.showValue(concatArray)
            // console.log("______________________________________________________________________________________________________________________________")
            //
            //
            // console.log("OUT")
        }






    }

    sendData = (id, newData) => {

        let link = '/devices/' + id

        axios.patch(link, {
            body: {
                stored_data: newData
            }
        })
            .then(response => {
                console.log("Update Response")
                console.log(response)
                console.log("Update Response")
            }).end(this.getDevicesData())


    }

    updateAllDevicesDatas = (devicesData) => {
        let nbDevices = devicesData.length

        try{
            for (let i=0; i<nbDevices; i++){
                let newStoredData = this.generateMissingData(devicesData[i])
                this.sendData(devicesData[i]._id, newStoredData)
            }
        }catch (error){
            console.log("Error while updating datas")
            console.log(error)
        }finally{
            console.log("All datas updated")
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
                            selected="home"
                        />
                    </aside>


                    <main className="homeMain">

                        <header className="mainBodyHeader">
                            <SearchBar/>
                            <Date
                            />
                        </header>

                        <div className="rooms">

                            <Square
                                title="Salon"
                                data={this.state.consumption.lounge}
                            />

                            <Square
                                title="Chambre"
                                data={this.state.consumption.bedroom}
                            />

                            <Square
                                title="Cuisine"
                                data={this.state.consumption.kitchen}
                            />

                            <Square
                                title="Salle de bain"
                                data={this.state.consumption.bathroom}
                            />


                        </div>

                        <div className="lowBody">
                            <div className="left">

                                <Long
                                    className="temp"
                                    title="Température"
                                    data={"+" + this.state.sensor.temp + "°C"}
                                />

                                <Long
                                    className="hum"
                                    title="Humidité"
                                    data={this.state.sensor.hum + "%"}
                                />

                                <Long
                                    className="lum"
                                    title="Luminosité"
                                    data={this.state.sensor.lum + "lm"}
                                />

                            </div>

                            <div className="right">

                                <Big
                                    title="Intensité Lumineuse"
                                />


                                <Weather
                                    title="Météo"
                                />

                            </div>

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




