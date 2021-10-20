import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Logo extends React.Component{
    render() {
        return(
            // ex : className="fas fa-phone-alt"

            // <FontAwesomeIcon
            //     icon={this.props.icon}
            // />

            <i className={this.props.className}>
            </i>


        )
    }
}





