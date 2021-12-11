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
            iconCode: '04d',

            fakeWeatherData: {

                location : "Paris" + ", " + "Ile-de-France" + ", " + "France",
                temp : 6 + "°C",
                humidity : 30 + " %",
                precip : 2 + " mm",
                wind : 12 + " km/h",


            },

            unfound : "Unk",


        };

    }



    componentDidMount() {

        let dateApiData;

        let oldApiKey = "1d90a51ee8d83a9cf3b533c78e8fcb68"
        let apiKey = "d9f59ca37c2636197f24cc34057704fb"

        axios.get('http://api.weatherstack.com/current?access_key=' + apiKey + '&query=Paris&unit=m', {
        })
            .then(response => {

                const data = response.data;
                console.log(response)

                let location, temp, humidity, precip, wind;

                if(response.status === 200 && !(response.data.success === false)){






                    location = data.location.name + ", " + data.location.region + ", " + data.location.country
                    temp = data.current.temperature + "°C"
                    humidity = data.current.humidity + " %"
                    precip = data.current.precip + " mm"
                    wind = data.current.wind_speed + " km/h"



                }else{



                    location = this.state.unfound
                    temp = this.state.unfound
                    humidity = this.state.unfound
                    precip = this.state.unfound
                    wind = this.state.unfound



                }



                this.setState({location: location})

                this.setState({temp: temp})

                // let icon = "http://openweathermap.org/img/wn/" + "" + "@2x.png"
                // this.setState({icon: data.current.weather_icons})

                this.setState({humidity: humidity})

                this.setState({precip: precip})

                this.setState({wind: wind})
            })


        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=768a35a09a1701be84498950a95e7cf5', {
        })
            .then(response => {

                this.setState({iconCode: response.data.weather[0].icon})
            })



    }

    componentDidUpdate(prevState){

        if(this.state.iconCode !== undefined && this.state.iconed === false){

            let parisCode = "04d"


            // let icon = "http://openweathermap.org/img/wn/" + this.state.iconCode + "@2x.png"
            let icon = "http://openweathermap.org/img/wn/" + parisCode + "@2x.png"
            this.setState({icon: icon})

            console.log("Icon Loaded")
            this.setState({iconed: true})
        }
    }




    render(){
        return(
            <div className={"weather " + this.props.className}>


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
                                alt="icon météo"
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


