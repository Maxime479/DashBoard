import React from "react";
import {LineChart,Line,Tooltip,Legend,CartesianGrid,
        BarChart, Bar, XAxis, YAxis } from 'recharts';

import '../../css/Statistics.css';



const data = [
    {
        "name": "Jan 2019",
        "Product A": 3432,
        "Procuct B": 2342
    },
    {
        "name": "Feb 2019",
        "Product A": 2342,
        "Procuct B": 3246
    },
    {
        "name": "Mar 2019",
        "Product A": 4565,
        "Procuct B": 4556
    },
    {
        "name": "Apr 2019",
        "Product A": 6654,
        "Procuct B": 4465
    },
    {
        "name": "May 2019",
        "Product A": 8765,
        "Procuct B": 4553
    }
]


const dataGraphiqueBar = [
    {name: 'Geeksforgeeks', students: 400},
    {name: 'Technical scripter', students: 700},
    {name: 'Geek-i-knack', students: 200},
    {name: 'Geek-o-mania', students: 1000}
];

export default class Graph extends React.Component{
    render(){
        return(
            <div className={"graph " + this.props.className}>


                <LineChart width={730} height={250} data={data}
                                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Product A" stroke="#0095FF" />
                    <Line type="monotone" dataKey="Procuct B" stroke="#FF0000" />
                </LineChart>

                <BarChart width={600} height={600} data={dataGraphiqueBar}>
                    <title title={"evolution temperature et humidité"}/>
                    <Bar dataKey="students" fill="green" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>


            </div>
        )
    }
}


