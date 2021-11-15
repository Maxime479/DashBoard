import React from "react";


export default class Image extends React.Component{
    render(){
        return(
            <div>
                <img
                    alt="photo de profil"
                    src={this.props.src}
                    onClick={this.props.onclick}
                    className={"image " + this.props.className}
                />

            </div>
        )
    }
}


