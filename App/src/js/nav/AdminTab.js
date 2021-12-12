import React from "react";
import axios from "axios";


export default class AdminTab extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

            devicesData: [],
            membersData: [],


        };

    }

    getDevicesData = () => {

        let tempDevices = {}
        let tempArray = []

        axios.get('/devices')
            .then(response => {
                console.log("RÉPONSE")
                console.log(response)
                console.log(response.data)

                this.setState({devicesData: response.data})
            })
    }

    getUserData = () => {
        axios.get('/users')
            .then(response => {
                this.setState({membersData: response.data})
            })
    }


    compareTable = (table, type) => {

        if(table.includes("devices")){
            switch (type){
                case 'name':
                    return(
                        function compare( a, b ) {
                            if ( a.name < b.name ){
                                return -1;
                            }
                            if ( a.name > b.name ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'state':
                    return(
                        function compare( a, b ) {
                            if ( a.state < b.state ){
                                return -1;
                            }
                            if ( a.state > b.state ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'data':
                    return(
                        function compare( a, b ) {
                            if ( a.data < b.data ){
                                return -1;
                            }
                            if ( a.data > b.data ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'id':
                    return(
                        function compare( a, b ) {
                            if ( a._id < b._id ){
                                return -1;
                            }
                            if ( a._id > b._id ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'unit':
                    return(
                        function compare( a, b ) {
                            if ( a.unit < b.unit ){
                                return -1;
                            }
                            if ( a.unit > b.unit ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'room':
                    return(
                        function compare( a, b ) {
                            if ( a.room < b.room ){
                                return -1;
                            }
                            if ( a.room > b.room ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'type':
                    return(
                        function compare( a, b ) {
                            if ( a.type < b.type ){
                                return -1;
                            }
                            if ( a.type > b.type ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                default:
                    return(
                        function compare()  {
                            return 0;
                        }
                    )
            }
        }

        if(table.includes("members")){
            switch (type){
                case 'first_name':
                    return(
                        function compare( a, b ) {
                            if ( a.first_name < b.first_name ){
                                return -1;
                            }
                            if ( a.first_name > b.first_name ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'last_name':
                    return(
                        function compare( a, b ) {
                            if ( a.last_name < b.last_name ){
                                return -1;
                            }
                            if ( a.last_name > b.last_name ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'password':
                    return(
                        function compare( a, b ) {
                            if ( a.password < b.password ){
                                return -1;
                            }
                            if ( a.password > b.password ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'id':
                    return(
                        function compare( a, b ) {
                            if ( a._id < b._id ){
                                return -1;
                            }
                            if ( a._id > b._id ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'login':
                    return(
                        function compare( a, b ) {
                            if ( a.login < b.login ){
                                return -1;
                            }
                            if ( a.login > b.login ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'birthdate':
                    return(
                        function compare( a, b ) {
                            if ( a.birthdate < b.birthdate ){
                                return -1;
                            }
                            if ( a.birthdate > b.birthdate ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'privileges':
                    return(
                        function compare( a, b ) {
                            if ( a.privileges < b.privileges ){
                                return -1;
                            }
                            if ( a.privileges > b.privileges ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'devices':
                    return(
                        function compare( a, b ) {
                            if ( a.devices < b.devices ){
                                return -1;
                            }
                            if ( a.devices > b.devices ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                case 'rooms':
                    return(
                        function compare( a, b ) {
                            if ( a.rooms < b.rooms ){
                                return -1;
                            }
                            if ( a.rooms > b.rooms ){
                                return 1;
                            }
                            return 0;
                        }
                    )
                default:
                    return(
                        function compare()  {
                            return 0;
                        }
                    )
            }
        }



    }

    sortTable = (table, type) => {

        if(table.includes("devices")){
            this.setState({devicesData: this.state.devicesData.sort(this.compareTable(table, type))})
        }

        if(table.includes("members")){
            this.setState({membersData: this.state.membersData.sort(this.compareTable(table, type))})
        }

    }


    componentDidMount() {
        this.getDevicesData()
        this.getUserData()
    }

    componentDidUpdate(prevState) {

        // if((this.state.choosedTable === undefined) && (this.state.membersData !== undefined)){
        //     console.log("Did it")
        //     this.setState({choosedTable: this.userTable(this.state.membersData)})
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

    // handleChange() {
    //
    //     try{
    //         this.sendStateInDB()
    //     }finally {
    //         this.getDevicesData()
    //         this.getUserData()
    //     }
    //
    // }

    userTable = (membersData) =>{

        return(<table>
            <thead className="adminTabRow">
            <tr>
                <td onClick={() => {this.sortTable("members", "privileges")}} className="firstCol">Privileges</td>

                <td>Photo</td>

                <td onClick={() => {this.sortTable("members", "first_name")}} >Prénom</td>
                <td onClick={() => {this.sortTable("members", "last_name")}} >Nom</td>
                <td onClick={() => {this.sortTable("members", "birthdate")}} >Birthdate</td>
                <td onClick={() => {this.sortTable("members", "login")}} >Login</td>
                <td onClick={() => {this.sortTable("members", "password")}} >Mot de passe</td>

                <td onClick={() => {this.sortTable("members", "devices")}} className="devicesCol">Appareils</td>
                <td onClick={() => {this.sortTable("members", "rooms")}} >Pièces</td>

                <td onClick={() => {this.sortTable("members", "id")}}  className="lastCol">ID</td>

            </tr>
            </thead>
            <tbody>
            {membersData.map(function(item, key) {

                let birth = new Date(item.birthdate).toLocaleString()
                let idx = birth.indexOf(",")
                birth = birth.slice(0, idx)


                return (
                    <tr key = {key} className="adminTabRow">

                        <td>{item.privileges}</td>

                        <td><img
                            alt="profil photo"
                            src={item.photo}
                            className="tableIcon tablePhoto"
                        /></td>

                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{birth}</td>
                        <td>{item.login}</td>
                        <td>{item.password}</td>

                        <td>{item.devices}</td>
                        <td>{item.rooms}</td>

                        <td>{item._id}</td>
                    </tr>
                )

            })}</tbody>
        </table>)

    }

    devicesTable = (devicesData) =>{

        return(<table>
            <thead className="adminTabRow">
            <tr>
                <td className="iconHead firstCol">Icon</td>
                <td onClick={() => {this.sortTable("devices", "name")}}>Nom</td>

                <td onClick={() => {this.sortTable("devices", "data")}} >Valeur</td>
                <td onClick={() => {this.sortTable("devices", "unit")}} >Unité</td>

                <td onClick={() => {this.sortTable("devices", "state")}} >État</td>

                <td onClick={() => {this.sortTable("devices", "room")}} >Pièce</td>
                <td onClick={() => {this.sortTable("devices", "type")}} >Type</td>

                <td onClick={() => {this.sortTable("devices", "id")}}   className="lastCol">ID</td>
            </tr>
            </thead>
            <tbody>
            {devicesData.map(function(item, key) {

                let state

                if(item.state === true){
                    state = <span className="showOn">ON</span>

                }else{
                    state = <span className="showOff">OFF</span>
                }


                return (
                    <tr key = {key} className="adminTabRow">
                        <td><img
                            alt="device icon"
                            src={item.icon}
                            className="tableIcon"
                        /></td>
                        <td>{item.name}</td>

                        <td>{item.data}</td>
                        <td>{item.unit}</td>

                        <td>{state}</td>

                        <td>{item.room}</td>
                        <td>{item.type}</td>

                        <td>{item._id}</td>
                    </tr>
                )

            })}</tbody>
        </table>)

    }

    selectedTable = (table, type) => {

        if(type.includes("members")){
            return this.userTable(table)
        }

        if(type.includes("devices")){
            return this.devicesTable(table)
        }

    }


    switchTable = (data, type) => {

        this.setState({choosedTable: data, tableType: type})

    }



    render(){

        if((this.state.devicesData === undefined) || (this.state.membersData === undefined)){
            console.log("EMPTY");

            return (
                <div>
                    Data Loading...
                </div>
            )
        }else {

            // console.log("LOADED");

                    return (

                    <div className="AdminTabContainer">

                        <div className="tableChooseButton">

                            <button onClick={() => {this.switchTable(this.state.devicesData, "devices")}}>Appareils</button>
                            <button onClick={() => {this.switchTable(this.state.membersData, "members")}}>Membres</button>


                        </div>


                    {(this.state.choosedTable === undefined) ? null  : this.selectedTable(this.state.choosedTable, this.state.tableType)}


                    </div>
                    )

        }

    }
}


