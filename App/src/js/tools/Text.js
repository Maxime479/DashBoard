import React from "react";

export default class Text extends React.Component{
    render(){
        return(
            <a className={this.props.className}>
                {this.props.text}
            </a>
        )
    }
}
