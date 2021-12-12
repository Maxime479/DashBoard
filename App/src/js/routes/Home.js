import React from "react";



import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import Square from "../cards/Square";
import Long from "../cards/Long";
import Big from "../cards/Big";
import SearchBar from "../SearchBar";
import DateWidget from "../widgets/Date";
import Weather from "../widgets/Weather";
import Image from "../tools/Image";
import axios from "axios";


export default class Home extends React.Component{

    constructor(props) {
        super(props);


        this.state = {

            arrayLoaded: false,

            pageLoads: 0,

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
        let tempData = 0;

        for(let i=0; i<devicesData.length; i++){

            if(devicesData[i].room.includes(room) && (devicesData[i].unit.includes("kWh") || devicesData[i].unit.includes("Wh"))){
                tempData = devicesData[i].data;
                if(typeof tempData === 'number'){
                    // console.log({devicesData})
                    cons += tempData;
                }
            }
        }

        if(cons !== 0){
            switch (room){
                case "Salon":
                    consumption.lounge = cons;
                    break;
                case "salon":
                    consumption.lounge = cons;
                    break;
                case "Chambre":
                    consumption.bedroom = cons;
                    break;
                case "chambre":
                    consumption.bedroom = cons;
                    break;
                case "Cuisine":
                    consumption.kitchen = cons;
                    break;
                case "cuisine":
                    consumption.kitchen = cons;
                    break;
                case "Salle de bain":
                    consumption.bathroom = cons;
                    break;
                case "salle de bain":
                    consumption.bathroom = cons;
                    break;
                default:
                    console.log("Room unfound for consumption calcul")
                    return;
            }
        }

        if(consumption !== undefined){
            // console.log("DATAAAA")
            // console.log(consumption)
            // console.log(this.state.devicesData)
            // console.log("DATAAAA")
            this.setState({consumption: consumption})
        }

    }

    totalSensorData = (devicesData) => {

        // let devicesData = this.state.devicesData;
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

        let returnData = {
            temp: temp,
            hum: hum,
            lum: lum,
        }

        return returnData
    }

    dataUpdate = () => {
        this.totalConsumption("Salon")
        this.totalConsumption("Chambre")
        this.totalConsumption("Cuisine")
        this.totalConsumption("Salle de bain")



        this.setState({sensor: this.totalSensorData(this.state.devicesData)})

    }

    getDevicesData = () => {
        axios.get('/devices')
            .then(response => {
                this.setState({devicesData: response.data})
            })
    }

    componentDidMount() {
        let data
        this.getDevicesData()

        //
        // let tempo = {
        //     temp: [],
        //     hum: [],
        //     lum: [],
        //     elec: [],
        // };
        // //
        // //
        // //
        // let tempData = 28;
        // let lumData = 850;
        // let humData = 39;
        // // let elecData = 12;
        // //
        // for(let i=0; i<20; i++){
        //     tempData = this.getNewData(tempData, "temp")
        //     tempo.temp.push(tempData)
        //     //
        //     // lumData = this.getNewData(lumData, "lum")
        //     // tempo.lum.push(lumData)
        //
        //     // humData = this.getNewData(humData, "hum")
        //     // tempo.hum.push(humData)
        //     //
        //     // elecData = this.getNewData(elecData, "elec")
        //     // tempo.elec.push(elecData)
        // }
        // //
        // this.showValue(tempo)

    }

    componentDidUpdate(prevState) {



        if(this.state.devicesData !== undefined){



            // console.log("GGGGGGGGGGGGGGGGGGGGGG")
            // console.log(this.state.devicesData[2])
            // console.log("GGGGGGGGGGGGGGGGGGGGGG")
            //


            // data = this.generateMissingData(this.state.devicesData[2])
            // if(data !== undefined){
            //     console.log("GGGGGGGGGGGGGGGGGGGGGG")
            //     console.log(data)
            //     console.log("GGGGGGGGGGGGGGGGGGGGGG")
            //
            //     this.setState({arrayLoaded: true})
            // }



        }else{
            // console.log("FATAL ERROR")
        }






        // if(prevState.devicesData !== this.state.devicesData){
        //     this.getDevicesData()
        //     console.log("Update Data")
        // }
        //
        let cons = this.state.consumption

        let data = this.state.devicesData

        if(((cons.lounge && cons.bedroom && cons.bathroom && cons.kitchen) === 0) && (this.state.devicesData !== undefined) && (this.state.pageLoads <= 50)){
            this.dataUpdate()
            // console.log("Consumption Innitialized")
            // console.log(" ")
            // console.log({deviceData: data})
            // console.log(" ")
            // console.log("Consumption Innitialized")

            this.setState({pageLoads: (this.state.pageLoads + 1)})
        }else if(this.state.pageLoads <= 51){
            // console.log("Can't Innitialize data")
        }

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

    getNewData = (lastData, type) => {

        let newValue;
        let min, max;
        let minRange, maxRange;

        switch (type) {
            case "temp":
                max = lastData + 3;
                min = lastData - 3;
                minRange = 18;
                maxRange = 27;
                break;
            case "hum":
                max = lastData + 10;
                min = lastData - 10;
                minRange = 0;
                maxRange = 1200;
                break;
            case "lum":
                max = lastData + 250;
                min = lastData - 250;
                minRange = 35;
                maxRange = 75;
                break;
            case "elec":
                return this.getRandNb(0, 20);
            default:
                console.log("Unknown data type: can't bound")
                return 0;
        }

        newValue = Math.floor(Math.random() * (max - min + 1) + min);
        while(newValue < minRange || newValue > maxRange){
            newValue = Math.floor(Math.random() * (max - min + 1) + min);
        }

        return newValue;
    }



    forceIntType = (data) => {
        if(typeof data === "number"){
            return data
        }

        if(typeof data === "string"){
            return parseInt(data)
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

            tempData = this.getNewData(tempData, type)

            newDatas.push({time: formattedDate, data: tempData})
        }


        if(this.arrayInclude(newDatas, this.formatDate(lastUpdateDate))) {

            let concatArray = oldDataArray.concat(newDatas)

            console.log("OUT")
            console.log("______________________________________________________________________________________________________________________________")
            this.showValue(newDatas)
            console.log("______________________________________________________________________________________________________________________________")
            console.log("OUT")

            return concatArray;

        }
    }

    sendData = (id, newData) => {

        let link = '/devices/' + id

        axios.put(link, {
            stored_data: newData
        })
            .then(response => {
                console.log("Updated Response")
                console.log(response)
                console.log("Updated Response")
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
                            <SearchBar
                                onClick={() => {console.log(this.state)}}
                            />
                            <DateWidget
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
                                    data={"+" + (this.state.sensor.temp) + "°C"}
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




