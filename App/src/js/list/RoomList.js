import React from 'react';
import Room from "../nav/Room";


export default class RoomList extends React.Component{

    // componentDidUpdate(prevProps) {
    //     if (this.props.id !== prevProps.id) {
    //         this.setDefaultTranslation(this.props.context)
    //     }
    // }

    render() {

        let roomList = [];

        // for (var i = 0; i < this.props.level; i++) {
        //     roomList.push(
        //         <span className='indent' key={i}></span>
        //     );
        // }


        const extractData = this.props.caller;
        console.log("_____extractData______");
        console.log(this.props.caller);
        console.log("_____extractData______");


        if(extractData === undefined){
            console.log("EMPTY");

            return (
                <div>
                    Data Loading...
                </div>
            )
        }else{
            console.log("LOADED");

            let i= 0;

            for(let roomIndex=0; roomIndex<extractData.length; roomIndex++){

                // console.log("_____LISTE______");
                // i++;
                // console.log(i);
                // console.log(extractData[roomIndex]);
                // console.log("_____LISTE______");

                roomList.push(
                    <Room
                        caller={extractData[roomIndex]}
                    />
                )

            }


            return(

                <div className="roomListContainer">

                    {roomList}

                </div>

            )


        }





    }
}