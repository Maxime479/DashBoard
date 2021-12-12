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


    compareTable = (type) => {

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

    sortTable = (type) => {
        this.setState({devicesData: this.state.devicesData.sort(this.compareTable(type))})
    }


    componentDidMount() {
        this.getDevicesData()
        this.getUserData()
    }

    componentDidUpdate(prevState) {

        if((this.state.choosedTable === undefined) && (this.state.membersData !== undefined)){
            console.log("Did it")
            this.setState({choosedTable: this.userTable(this.state.membersData)})
        }

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
                <td>ID</td>
                <td>Privileges</td>
                <td>Prénom</td>
                <td>Nom</td>
                {/*<td>{new Date(item.birthDate)}</td>*/}
                <td>Login</td>
                <td>Mot de passe</td>
                {/*<td>{item.photo}</td>*/}
                <td>Appareils</td>
                <td>Pièces</td>
            </tr>
            </thead>
            <tbody>
            {membersData.map(function(item, key) {

                return (
                    <tr key = {key} className="adminTabRow">
                        <td>{item._id}</td>
                        <td>{item.privileges}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        {/*<td>{new Date(item.birthDate)}</td>*/}
                        <td>{item.login}</td>
                        <td>{item.password}</td>
                        {/*<td>{item.photo}</td>*/}
                        <td>{item.devices}</td>
                        <td>{item.rooms}</td>
                    </tr>
                )

            })}</tbody>
        </table>)

    }

    devicesTable = (devicesData) =>{

        return(<table>
            <thead className="adminTabRow">
            <tr>
                <td className="iconHead">Icon</td>
                <td onClick={() => {this.sortTable("name")}} >Nom</td>

                <td onClick={() => {this.sortTable("data")}} >Valeur</td>
                <td onClick={() => {this.sortTable("unit")}} >Unité</td>

                <td onClick={() => {this.sortTable("state")}} >État</td>

                <td onClick={() => {this.sortTable("room")}} >Pièce</td>
                <td onClick={() => {this.sortTable("type")}} >Type</td>

                <td onClick={() => {this.sortTable("id")}} >ID</td>
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



    render(){

        if((this.state.devicesData === undefined) || (this.state.membersData === undefined) || (this.state.choosedTable === undefined)){
            console.log("EMPTY");

            return (
                <div>
                    Data Loading...
                </div>
            )
        }else {

            this.showValue(this.state)
            // console.log("LOADED");


            let membersData = this.state.membersData
            let devicesData = this.state.devicesData


                    return (

                    <div className="AdminTabContainer">



                    {this.devicesTable(devicesData)}
                    {this.userTable(membersData)}


                    </div>
                    )

        }

    }
}


