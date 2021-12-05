import React from "react";
import axios from "axios";

import '../../css/widgets/Weather.css';
import Head from "../props/Head";
import Slider from "../props/Slider";
import Text from "../tools/Text";
import Image from "../tools/Image";


export default class Weather extends React.Component{

    constructor(props) {
        super(props);


        this.state = {
            iconed: false,
            converted: false,


        };

    }

    exeampleRequestAxios = () => {

        const data = undefined;

        axios.post('url', {"body":data}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

    }


    translateDay = (day) => {

        let frenchDay = "";

        switch (day){
            case "Monday":
                frenchDay = "Lundi";
                break;
            case "Tuesday":
                frenchDay = "Mardi";
                break;
            case "Wednesday":
                frenchDay = "Mercredi";
                break;
            case "Thursday":
                frenchDay = "Jeudi";
                break;
            case "Friday":
                frenchDay = "Vendredi";
                break;
            case "Saturday":
                frenchDay = "Samedi";
                break;
            case "Sunday":
                frenchDay = "Dimanche";
                break;
            default:
                frenchDay = "Unfound";
                break;
        }

        this.setState({day: frenchDay});

    }

    findMonth = (month) => {

        let strMonth = "";

        switch (month){
            case "01":
                strMonth = "Janvier";
                break;
            case "02":
                strMonth = "Février";
                break;
            case "03":
                strMonth = "Mars";
                break;
            case "04":
                strMonth = "Avril";
                break;
            case "05":
                strMonth = "Mai";
                break;
            case "06":
                strMonth = "Juin";
                break;
            case "07":
                strMonth = "Juillet";
                break;
            case "08":
                strMonth = "Août";
                break;
            case "09":
                strMonth = "Septembre";
                break;
            case "10":
                strMonth = "Octobre";
                break;
            case "11":
                strMonth = "Novembre";
                break;
            case "12":
                strMonth = "Décembre";
                break;
            default:
                strMonth = "Unfound";
                break;
        }

        return strMonth;

    }


    convertDate = (date) => {

        // date in timestamp format : "2021-12-04T20:44Z";

        let convertedDate;
        let day, month, year;

        day = parseInt(date.slice(8, 10));
        month = this.findMonth(date.slice(5, 7));
        year = date.slice(0, 4);




        convertedDate = day + " " + month + " " + year;

        this.setState({date: convertedDate});

    }



    componentDidMount() {

        let dateApiData;
        axios.get('http://api.weatherstack.com/current?access_key=1d90a51ee8d83a9cf3b533c78e8fcb68&query=Paris&unit=m', {
        })
            .then(response => {

                const data = response.data;

                let location = data.location.name + ", " + data.location.region + ", " + data.location.country
                this.setState({location: location})

                let temp = data.current.temperature + "°C"
                this.setState({temp: temp})

                // let icon = "http://openweathermap.org/img/wn/" + "" + "@2x.png"
                // this.setState({icon: data.current.weather_icons})

                this.setState({humidity: data.current.humidity})

                let precip = data.current.precip + " mm"
                this.setState({precip: precip})

                let wind = data.current.wind_speed + " km/h"
                this.setState({wind: wind})


                console.log(data)
            })


        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=768a35a09a1701be84498950a95e7cf5', {
        })
            .then(response => {

                this.setState({iconCode: response.data.weather[0].icon})



                console.log("Icon")
                console.log(response.data)
                console.log("Icon")
            })



    }

    componentDidUpdate(prevState){

        if(this.state.iconCode !== undefined && this.state.iconed === false){


            let icon = "http://openweathermap.org/img/wn/" + this.state.iconCode + "@2x.png"
            this.setState({icon: icon})

            console.log("Icon Loaded")
            this.setState({ iconed: true})
        }
    }




    render(){
        return(
            <div className={"weather " + this.props.className}>

                {/*<Head*/}
                {/*    text={this.props.title}*/}
                {/*    className="headBig"*/}
                {/*    classname="titleBig"*/}
                {/*/>*/}


                <div className="body">

                    <Text
                        className="location"
                        text={this.state.location}
                    />

                    <div className="main">
                        <div className="leftWeather">
                            <Image
                                src={this.state.icon}
                                className="weatherImage"
                            />

                            <a className="tempWeather">{this.state.temp}</a>

                        </div>


                        <div className="rightWeather">

                            <a>Vent : {this.state.wind}</a>
                            <a>Précipitation : {this.state.precip}</a>
                            <a>Humidité : {this.state.humidity}</a>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}


