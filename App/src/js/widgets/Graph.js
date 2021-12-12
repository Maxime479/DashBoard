import React from "react";
import {LineChart,Line,Tooltip,Legend,CartesianGrid,
        BarChart, Bar, XAxis, YAxis } from 'recharts';

import '../../css/Statistics.css';
import axios from "axios";


const tempData = [
    {time: ' semaine 45', data: 24},
    {time: ' semaine 46', data: 23},
    {time: ' semaine 47', data: 22},
    {time: ' semaine 48', data: 27},
    {time: ' semaine 49', data: 21},

]



const dataGraphiqueBar = [
    {time: ' semaine 45', data: 300},
    {time: ' semaine 46', data: 500},
    {time: ' semaine 47', data: 200},
    {time: ' semaine 48', data: 350},
    {time: ' semaine 49', data: 600},

]

const CustomToolTip = () => {
    return(
        <div className="cTT">
            <a href=""> this is custom</a>
        </div>
    )
}




export default class Graph extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    componentDidMount = () => {
        this.setState({devicesData: this.props.caller})
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
                {/*<LineChart width={730} height={250} data={data}*/}

                {/*                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>*/}
                {/*    <CartesianGrid strokeDasharray="3 3" />*/}
                {/*    <XAxis dataKey="time" />*/}
                {/*    <YAxis type="number" domain={[0, 30]}/>*/}
                {/*    <Tooltip />*/}
                {/*    <Legend />*/}
                {/*    <Line type="monotone" dataKey="capteur temperature" stroke="#0095FF" />*/}
                {/*    <Line type="monotone" dataKey="capteur humidite" stroke="#FF0000" />*/}

                {/*</LineChart>*/}








                <LineChart width={730} height={250} data={tempData}

                           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>


                    <XAxis dataKey="time" />
                    <YAxis type="number" domain={[0, 40]}/>

                    <CartesianGrid strokeDasharray="3 3" />

                    <Tooltip content={<CustomToolTip/>}/>
                    {/*<Legend />*/}
                    <Line type="monotone" dataKey="data" stroke="#ff0000" />
                </LineChart>






                {/*<BarChart width={600} height={600} data={dataGraphiqueBar}>*/}
                {/*    <title title={"Comsommation energie "}/>*/}
                {/*    <Bar dataKey="data" fill="green" />*/}
                {/*    <CartesianGrid stroke="#ccc" />*/}
                {/*    <tooltip/>*/}
                {/*    <XAxis dataKey="time" />*/}
                {/*    <YAxis />*/}
                {/*</BarChart>*/}


            </div>
        )
    }
}


