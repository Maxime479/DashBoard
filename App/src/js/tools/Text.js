import React from "react";

export default class Text extends React.Component{
    render(){
        return(
            <a
                className={this.props.className}
                room-content={this.props.content}
            >

                {this.props.text}
            </a>
        )
    }
}
