import React from "react";
import Image from "../tools/Image";
import Text from "../tools/Text"

import '../../css/addons/Room.css';


import PlusButton from "../../img/button/PlusButton.png"
import MinusButton from "../../img/button/MinusButton.png"



export default class Device extends React.Component{

    constructor(props) {
        super(props);
        this.showDeviceList = this.showDeviceList.bind(this);


        this.state = {
            deviceListStyle: {display: 'none'},
            hidden: true,

            listMade: false,

            listDeviceButton: PlusButton,

            roomData :
                {
                    _id: 1,
                    name: 'Salon',
                    deviceList: [],
                    nbDevices: 0,
                    icon: 'https://www.pngrepo.com/png/206918/512/sofa.png',
                },

        };

    }

    showDeviceList = () => {

        const hide = {display: 'none'};
        const show = {display: 'flex'};

        if(this.state.hidden){
            this.setState({deviceListStyle: show});
            this.setState({hidden: false});
            this.setState({listDeviceButton: MinusButton});
        }else{
            this.setState({deviceListStyle: hide});
            this.setState({hidden: true});
            this.setState({listDeviceButton: PlusButton});
        }
    }

    // consoleIt = () => {
    //     console.log("works");
    // }

    makeDeviceListComp = () => {

        let deviceListComp = [];
        let data = this.state.roomData;

        for(let i=0; i<data.deviceList.length; i++){

            deviceListComp.push(
                <Text
                    text={data.deviceList[i]}
                />
            );
        }

        this.setState({deviceListComp: deviceListComp})


    }


    componentDidMount() {
        this.setState({roomData: this.props.caller})
    }



    componentDidUpdate(prevState) {
        if(this.state.roomData.nbDevices !== 0 && !this.state.listMade){
            this.makeDeviceListComp();
            this.setState({listMade: true})
        }
    }


    render(){

        let newRoom = this.props.caller;

        return(
            <div className={"roomInPage " + this.props.className}>

                <Text
                    text={newRoom.name}
                    className="roomName"
                />


                <Image
                    src={newRoom.icon}
                    className="roomImage"
                    alt="Icon Pièce"

                />

                <div className="nbDevice">
                    <Text
                        text="Appareils : "
                        className="nbDeviceText bold"
                    />

                    <Text
                        text={newRoom.nbDevices}
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
                        alt="boutton de liste d'appareil"
                    />

                </div>




                <div className="deviceList" style={this.state.deviceListStyle}>


                    {this.state.deviceListComp}


                    {/*<Text*/}
                    {/*    text="Lampe salon"*/}
                    {/*/>*/}

                    {/*<Text*/}
                    {/*    text="Lampe murale D"*/}
                    {/*/>*/}

                    {/*<Text*/}
                    {/*    text="Lampe murale G"*/}
                    {/*/>*/}

                    {/*<Text*/}
                    {/*    text="Lampadaire"*/}
                    {/*/>*/}

                    {/*<Text*/}
                    {/*    text="Globe"*/}
                    {/*/>*/}

                </div>



            </div>
        )
    }
}


