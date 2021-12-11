import React from "react";
import axios from "axios";

import '../../css/widgets/Weather.css';
import Text from "../tools/Text";
import Image from "../tools/Image";


export default class Weather extends React.Component{

    constructor(props) {
        super(props);


        this.state = {
            converted: false,
            iconCode: '04d',
            city: 'Paris',
            doFakeForTests: true,

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
        let oldApiKey = "1d90a51ee8d83a9cf3b533c78e8fcb68"
        let weatherStackKey = "d9f59ca37c2636197f24cc34057704fb"
        let openWeatherKey = '768a35a09a1701be84498950a95e7cf5'

        let doFake = this.state.doFakeForTests

        //Replace apiKey by non-working one to avoid using a valid key unnecessarily
        if(doFake === true){
            console.log("Fake data put on weather for development")
            weatherStackKey = oldApiKey
            openWeatherKey = oldApiKey
        }else{
            doFake = false
        }

        //Get weather informations from WeatherStack API
        axios.get('http://api.weatherstack.com/current?access_key=' + weatherStackKey + '&query=Paris&unit=m', {
        })
            .then(response => {

                const data = response.data;
                console.log(response)
                let location, temp, humidity, precip, wind;

                if(response.status === 200 && !(response.data.success === false)){
                    location = data.location.name + ", " + data.location.region + ", " + data.location.country
                    temp = data.current.temperature
                    humidity = data.current.humidity
                    precip = data.current.precip
                    wind = data.current.wind_speed

                    temp += "°C"
                    humidity += " %"
                    precip += " mm"
                    wind += " km/h"
                }else{

                    if(doFake === true){
                        location = this.state.fakeWeatherData.location
                        temp = this.state.fakeWeatherData.temp
                        humidity = this.state.fakeWeatherData.humidity
                        precip = this.state.fakeWeatherData.precip
                        wind = this.state.fakeWeatherData.wind
                    }else{
                        console.log("Can't found weather data")
                        location = this.state.unfound
                        temp = this.state.unfound
                        humidity = this.state.unfound
                        precip = this.state.unfound
                        wind = this.state.unfound
                    }
                }


                this.setState({location: location})
                this.setState({temp: temp})

                // let icon = "http://openweathermap.org/img/wn/" + "" + "@2x.png"
                // this.setState({icon: data.current.weather_icons})

                this.setState({humidity: humidity})
                this.setState({precip: precip})
                this.setState({wind: wind})
            })




        //Get location code from OpenWeatherMap API to put in url to get good icon
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=' + openWeatherKey, {
        })
            .then(response => {
                // console.log(response)

                let placeIconCode
                let brokenCloudsIconCode = ""

                if(response.status === 200){
                    placeIconCode = response.data.weather[0].icon
                }else{
                    placeIconCode = brokenCloudsIconCode
                }
                this.setState({iconCode: placeIconCode})

                let icon = "http://openweathermap.org/img/wn/" + placeIconCode + "@2x.png"
                this.setState({icon: icon})
            })
            .catch(error => {
                console.log({api_error: error})
                let icon = "http://openweathermap.org/img/wn/" + '04d' + "@2x.png"
                this.setState({icon: icon})
            })}

    componentDidUpdate(prevState){

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


