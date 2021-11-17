import React from "react";
import { Link } from "react-router-dom";
import Routes from '../routes';

import '../css/Navigation.css';


export default class Navigation extends React.Component{


    constructor(props) {
        super(props);


        this.state = {

            class : {
                    home: 'none',
                    rooms: 'none',
                    devices: 'none',
                    statistics: 'none',
                    members: 'none',
                    done: false,
                }

            ,

        };

    }


    setSelectMenu = (menu) => {

        let temp = this.state.class;

        switch (menu){
            case "home":
                temp.home = "select";
                break;
            case "rooms":
                temp.rooms = "select";
                break;
            case "devices":
                temp.devices = "select";
                break;
            case "statistics":
                temp.statistics = "select";
                break;
            case "members":
                temp.members = "select";
                break;
            default:
                console.log("Menu selection error")
                break;
        }

        temp.done = true;
        this.setState({class: temp});
    }


    render(){

        let select = this.props.selected;

        if(this.state.class.done){

            return(
                <div className={"navigation " + this.props.className}>


                    <nav>

                        <ul>
                            <li><Link to="/" className={this.state.class.home} > Home </Link></li>
                            <li><Link to="/rooms" className={this.state.class.rooms} > Pièces </Link></li>
                            <li><Link to="/devices" className={this.state.class.devices} > Appareils </Link></li>
                            <li><Link to="/statistics" className={this.state.class.statistics} > Statistiques </Link></li>
                            <li><Link to="/members" className={this.state.class.members} > Membres </Link></li>
                        </ul>

                    </nav>



                </div>
            )

        }else{
            this.setSelectMenu(select);

            return(
                <div>Loading...</div>
            )
        }


    }
}


