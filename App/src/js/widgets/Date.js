import React from "react";
import axios from "axios";








export default class Date extends React.Component{

    constructor(props) {
        super(props);


        this.state = {
            translated: false,
            converted: false,


        };

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

        //Get date from API
        axios.get('https://world-clock.p.rapidapi.com/json/utc/now', {
            headers: {
                'x-rapidapi-host': 'world-clock.p.rapidapi.com',
                'x-rapidapi-key': 'a4740618f3msh3798e57b20efe3fp1f12c6jsn62bc537683e9'
            }
        })
            .then(response => {
                this.setState({ day: response.data.dayOfTheWeek});
                this.setState({ date: response.data.currentDateTime});
            })
    }

    componentDidUpdate(prevState){

        if(this.state.day !== undefined && this.state.translated === false){
            this.translateDay(this.state.day);
            // console.log("Day translated");
            this.setState({ translated: true})
        }

        if(this.state.date !== undefined && this.state.converted === false){
            this.convertDate(this.state.date);
            // console.log("Date converted");
            this.setState({ converted: true})
        }

    }




    render(){

        const space = <span style={{opacity: "0"}}>_</span>;

        return(
            <a className="date">

                <span className="day">{this.state.day},{space} </span>
                {this.state.date}



            </a>




        )
    }
}


