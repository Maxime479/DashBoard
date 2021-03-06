import React from "react";


export default class Image extends React.Component{
    render(){
        return(
            <div>
                <img
                    alt={this.props.alt}
                    src={this.props.src}
                    onClick={this.props.onClick}
                    className={"image " + this.props.className}
                />
            </div>
        )
    }
}


