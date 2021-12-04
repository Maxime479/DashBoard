import React from "react";
import Image from "../tools/Image";
import Text from "../tools/Text"

import '../../css/addons/Room.css';


import PlusButton from "../../img/button/PlusButton.png"
import MinusButton from "../../img/button/MinusButton.png"



export default class Device extends React.Component{

    constructor(props) {
        super(props);
        // this.consoleIt = this.consoleIt.bind(this);
        this.showDeviceList = this.showDeviceList.bind(this);


        this.state = {
            deviceListStyle: {display: 'flex'},
            hidden: false,

            listDeviceButton: PlusButton,

        };

    }

    showDeviceList = () => {

        const hide = {display: 'none'};
        const show = {display: 'flex'};

        if(this.state.hidden){
            this.setState({deviceListStyle: show});
            this.setState({hidden: false});
            this.setState({listDeviceButton: PlusButton});
        }else{
            this.setState({deviceListStyle: hide});
            this.setState({hidden: true});
            this.setState({listDeviceButton: MinusButton});
        }
    }

    // consoleIt = () => {
    //     console.log("works");
    // }


    render(){
        return(
            <div className={"roomInPage " + this.props.className}>

                <Text
                    text="Salon"
                    className="roomName"
                />


                <Image
                    src="https://www.pngrepo.com/png/206918/512/sofa.png"
                    className="roomImage"

                />

                <div className="nbDevice">
                    <Text
                        text="Appareils : "
                        className="nbDeviceText bold"
                    />

                    <Text
                        text="5"
                        className="nbDeviceNumber"
                    />
                </div>


                <div className="listDevice">
                    <Text
                        text="Liste des appareils "
                        className="listDeviceText bold"
                    />

                    <Image
                        src={this.state.listDeviceButton}
                        className="listDeviceButton"
                        onClick={this.showDeviceList}
                    />

                </div>




                <div className="deviceList" style={this.state.deviceListStyle}>

                    <Text
                        text="Lampe salon"
                    />

                    <Text
                        text="Lampe murale D"
                    />

                    <Text
                        text="Lampe murale G"
                    />

                    <Text
                        text="Lampadaire"
                    />

                    <Text
                        text="Globe"
                    />

                </div>



            </div>
        )
    }
}


