import React from "react";
import {LineChart,Line,Tooltip,Legend,CartesianGrid,
        BarChart, Bar, XAxis, YAxis } from 'recharts';

import '../../css/Statistics.css';
import axios from "axios";


const data = [
    {
        "name": "semaine 45",
        "capteur luminosite ": 150,
        "capteur temperature": 25,
        "capteur humidite": 50,
    }, {
        "name": "semaine 46",
        "capteur luminosite ": 500,
        "capteur temperature": 20,
        "capteur humidite": 60,
    }, {
        "name": "semaine 47",
        "capteur luminosite ": 400,
        "capteur temperature": 21,
        "capteur humidite": 55,
    }, {
        "name": "semaine 48",
        "capteur luminosite ": 300,
        "capteur temperature": 17,
        "capteur humidite": 58,
    }, {
        "name": "semaine 49",
        "capteur luminosite ": 400,
        "capteur temperature": 25,
        "capteur humidite": 40,
    },

]

const dataGraphiqueBar = [
    {name: ' semaine 45', Wh: 300},
    {name: ' semaine 46', Wh: 500},
    {name: ' semaine 47', Wh: 200},
    {name: ' semaine 48', Wh: 350},
    {name: ' semaine 49', Wh: 600},

]




export default class Graph extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    componentDidMount = () => {

        axios.get('/devices')
            .then(response => {
                this.setState({devicesData: response.data})
            })

    }

    sortSensors(deviceData) {
        for (let i = 0; i < this.state.devicesData.length; i++){
           if (this.state.devicesData.type === 'sensor'){
               let valeurData = this.state.devicesData[i].devicesData.stored_data.object.data;

           }

        }}
    //devicesData = this.state.devicesData.type

    render(){
        return(
            <div className={"graph " + this.props.className}>
                <LineChart width={730} height={250} data={data}

                                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 30]}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="capteur temperature" stroke="#0095FF" />
                    <Line type="monotone" dataKey="capteur humidite" stroke="#FF0000" />

                </LineChart>

                <LineChart width={730} height={250} data={data}

                           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 1000]}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="capteur luminosite " stroke="#ff0000" />
                </LineChart>

                <BarChart width={600} height={600} data={dataGraphiqueBar}>
                    <title title={"Comsommation energie "}/>
                    <Bar dataKey="Wh" fill="green" />
                    <CartesianGrid stroke="#ccc" />
                    <tooltip/>
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>


            </div>
        )
    }
}


