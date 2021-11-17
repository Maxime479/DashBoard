import React from "react";
import { Link } from "react-router-dom";
import Routes from '../routes';


export default class Navigation extends React.Component{
    render(){
        return(
            <div className={"navigation " + this.props.className}>


                <nav>

                    <ul>
                        <li><Link to="/" > Home </Link></li>
                        <li><Link to="/rooms" > Pièces </Link></li>
                        <li><Link to="/devices" > Appareils </Link></li>
                        <li><Link to="/statistics" > Statistiques </Link></li>
                        <li><Link to="/members" > Membres </Link></li>
                    </ul>

                </nav>



            </div>
        )

    }
}


