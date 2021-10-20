import React from "react";
import Logo from "./tools/Logo";


export default class Image extends React.Component{
    render(){
        return(
            <div className={"searchBar " + this.props.className}>

                <input placeholder="Rechercher" type="submit"/>

                <Logo
                    className={"fa-solid fa-magnifying-glass"}
                />

            </div>
        )
    }
}


