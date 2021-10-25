import React from "react";
import Logo from "./tools/Logo";


export default class SearchBar extends React.Component{
    render(){
        return(
            <div className={"searchBar " + this.props.className}>

                <input
                    placeholder="Rechercher"
                    type="search"
                    required
                />

                <Logo
                    className={"fa-solid fa-magnifying-glass"}
                />

            </div>
        )
    }
}


