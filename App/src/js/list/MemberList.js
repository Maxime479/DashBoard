import React from 'react';
import Member from "../nav/Member";


export default class MemberList extends React.Component{
    
    render() {

        let memberList = [];

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

            for(let memberIndex=0; memberIndex<extractData.length; memberIndex++){

                console.log("_____LISTE______");
                i++;
                console.log(i);
                console.log(extractData[memberIndex]);
                console.log("_____LISTE______");

                memberList.push(
                    <Member
                        caller={extractData[memberIndex]}
                    />
                )

            }


            return(

                <div className="memberListContainer">

                    {memberList}

                </div>

            )


        }





    }
}