import React from 'react';
import Device from "../nav/Device";


export default class DeviceList extends React.Component{


    render() {

        let deviceList = [];

        // for (var i = 0; i < this.props.level; i++) {
        //     deviceList.push(
        //         <span className='indent' key={i}></span>
        //     );
        // }


        const extractData = this.props.caller;
        // console.log("_____extractData______");
        // console.log(this.props.caller);
        // console.log("_____extractData______");
        //

        if(extractData === undefined){
            console.log("EMPTY");

            return (
                <div>
                    Data Loading...
                </div>
            )
        }else{
            // console.log("LOADED");

            let i= 0;

            for(let deviceIndex=0; deviceIndex<extractData.length; deviceIndex++){

/*
                console.log("_____LISTE______");
                i++;
                console.log(i);
                console.log(extractData[deviceIndex]);
                console.log("_____LISTE______");

*/
                deviceList.push(
                    <Device
                        caller={this.props.caller[deviceIndex]}
                        // caller={extractData[deviceIndex]}
                    />
                )

            }


            return(

                <div className="deviceListContainer">

                    {deviceList}

                </div>

            )


        }





    }
}