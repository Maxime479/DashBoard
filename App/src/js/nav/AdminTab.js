import React from "react";
import Image from "../tools/Image";
import Text from "../tools/Text"

import '../../css/addons/Device.css';

import axios from "axios";
import Device from "./Device";


export default class AdminTab extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

            devicesData: [],
            membersData: [],


        };

        this.handleChange = this.handleChange.bind(this);
    }


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


    getDevicesData = () => {

        let tempDevices = {}
        let tempArray = []

        axios.get('/devices')
            .then(response => {
                console.log("R2PONSE")
                console.log(response)
                console.log(response.data)

                // tempDevices = response.data
                // delete tempDevices.stored_data
                //
                // for(let i=0; i<tempDevices.length; i++){
                //     tempArray.push(Object.keys(tempDevices[i]))
                // }
                //
                // this.setState({devicesData: tempArray})
                this.setState({devicesData: response.data})
            })
    }

    getUserData = () => {
        axios.get('/users')
            .then(response => {
                this.setState({membersData: response.data})
            })
    }




    componentDidMount() {
        this.getDevicesData()
        this.getUserData()
    }

    componentDidUpdate(prevState) {
        // if(prevState.devicesData !== this.state.devicesData){
        //     this.getDevicesData()
        // }
    }

    // sendDataInDB = () => {
    //
    //     // const state = !this.state.onState;
    //     const state = !this.props.caller.state;
    //     const id = this.state.deviceData._id;
    //
    //     const link = '/devices/' + id
    //
    //     // axios({
    //     //     method: 'put',
    //     //     url: link,
    //     //     headers: {},
    //     //     data: {
    //     //         state: state
    //     //     }
    //     //
    //     // })
    //
    //     axios.put(link, {
    //         state: state,
    //     })
    //         .then(response => {
    //             this.setState({devicesData: response.data})
    //         })
    // }

    handleChange() {

        try{
            this.sendStateInDB()
        }finally {
            this.getDevicesData()
            this.getUserData()
        }

    }

    // showState = () => {
    //
    // }
    //




    render(){

        if((this.state.devicesData === undefined) || (this.state.membersData === undefined)){
            console.log("EMPTY");

            return (
                <div>
                    Data Loading...
                </div>
            )
        }else{

            this.showValue(this.state)
            // console.log("LOADED");


            // const adminTab = this.state.devicesData.map(function(data){
            //     return <li>{data._id} - {data.name}</li>;
            // })







            let membersData = this.state.membersData
            let devicesData = this.state.devicesData

            const resultArray = Object.keys(devicesData);


            return(

                <div className="AdminTabContainer">

                    {/*<ul>*/}
                    {/*    {adminTab}*/}
                    {/*</ul>*/}

                    {/*Users*/}
                    {/*<table>*/}
                    {/*    <thead className="adminTabRow">*/}
                    {/*    <tr>*/}
                    {/*        <td>ID</td>*/}
                    {/*        <td>Privileges</td>*/}
                    {/*        <td>Prénom</td>*/}
                    {/*        <td>Nom</td>*/}
                    {/*        /!*<td>{new Date(item.birthDate)}</td>*!/*/}
                    {/*        <td>Login</td>*/}
                    {/*        <td>Mot de passe</td>*/}
                    {/*        /!*<td>{item.photo}</td>*!/*/}
                    {/*        <td>Appareils</td>*/}
                    {/*        <td>Pièces</td>*/}
                    {/*    </tr>*/}
                    {/*    </thead>*/}
                    {/*    <tbody>*/}
                    {/*    {membersData.map(function(item, key) {*/}

                    {/*        return (*/}
                    {/*            <tr key = {key} className="adminTabRow">*/}
                    {/*                <td>{item._id}</td>*/}
                    {/*                <td>{item.privileges}</td>*/}
                    {/*                <td>{item.first_name}</td>*/}
                    {/*                <td>{item.last_name}</td>*/}
                    {/*                /!*<td>{new Date(item.birthDate)}</td>*!/*/}
                    {/*                <td>{item.login}</td>*/}
                    {/*                <td>{item.password}</td>*/}
                    {/*                /!*<td>{item.photo}</td>*!/*/}
                    {/*                <td>{item.devices}</td>*/}
                    {/*                <td>{item.rooms}</td>*/}
                    {/*            </tr>*/}
                    {/*        )*/}

                    {/*    })}</tbody>*/}
                    {/*</table>*/}




                    {/*Devices*/}
                    <table>
                        <thead className="adminTabRow">
                        <tr>
                            <td>ID</td>

                            <td>Icon</td>
                            <td>Nom</td>

                            <td>État</td>

                            <td>Valeur</td>
                            <td>Unité</td>

                            <td>Pièce</td>
                            <td>Type</td>
                            <td>rooms</td>
                        </tr>
                        </thead>
                        <tbody>



                        {devicesData.map(function(item, key) {

                        for(let i=0; i<devicesData.length; i++){

                            let device = devicesData[i]



                            return (
                                <tr key = {key} className="adminTabRow">
                                    <td>{device._id}</td>

                                    <td><img
                                        src={device.icon}
                                        className="tableIcon"
                                    /></td>
                                    <td>{device.name}</td>
                                    <td>{device.room}</td>

                                    {/*<td>{item.state}</td>*/}

                                    <td>{device.data}</td>
                                    <td>{device.unit}</td>

                                    <td>{device.room}</td>
                                    <td>{device.type}</td>
                                </tr>
                            )

                        }




                            // return (
                            //     <tr key = {key} className="adminTabRow">
                            //         <td>{item._id}</td>
                            //         <td><img
                            //             src={item.icon}
                            //             className="tableIcon"
                            //         /></td>
                            //         <td>{item.name}</td>
                            //         <td>{item.room}</td>
                            //
                            //         {/*<td>{item.state}</td>*/}
                            //
                            //         <td>{item.data}</td>
                            //         <td>{item.unit}</td>
                            //
                            //         <td>{item.room}</td>
                            //         <td>{item.type}</td>
                            //     </tr>
                            // )

                        })}


                        </tbody>
                    </table>


                </div>
            )
        }



    }
}


