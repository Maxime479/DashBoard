import React from "react";
import Image from "../tools/Image";
import Text from "../tools/Text"

import '../../css/addons/Member.css';


export default class Member extends React.Component{


    constructor(props) {
        super(props);



        this.state = {

            converted: false,
        };

    }


    convertDate = (timestamp) => {

        let day, month, year;

        day = timestamp.slice(8, 10);
        month = timestamp.slice(5, 7);
        year = timestamp.slice(0, 4);


        let newDate = day + "/" + month + "/" + year;

        let data = this.state.memberData;
        data.birthdate = newDate;
        this.setState({memberData: data});
        this.setState({converted: true});

        // console.log("converted");

    }





    componentDidMount() {
        this.setState({memberData: this.props.caller})
    }




    componentDidUpdate(prevState) {
        if(this.state.memberData !== undefined && !this.state.converted){
            this.convertDate(this.state.memberData.birthdate);
        }
    }







    render(){

        let newMember = this.props.caller;



        return(
            <div className={"memberInPage " + this.props.className}>

                <Text
                    text={newMember.first_name}
                    className="memberName"
                />


                <Image
                    src={newMember.photo}
                    className="memberImage"

                />

                <div className="top">
                    <div className="lineMemberInfos">
                        <Text
                            text="Pièces : "
                            className="bold"
                        />

                        <Text
                            text={newMember.rooms}
                        />
                    </div>

                    <div className="lineMemberInfos">
                        <Text
                            text="Appareils : "
                            className="bold"
                        />

                        <Text
                            text={newMember.devices}
                        />
                    </div>

                    <div className="lineMemberInfos">
                        <Text
                            text="Privilèges : "
                            className="bold"
                        />

                        <Text
                            text={newMember.privileges}
                        />
                    </div>
                </div>

                <div className="bottom">
                    <div className="lineMemberInfos">
                        <Text
                            text="Identifiant : "
                            className="bold"
                        />

                        <Text
                            text={newMember.login}
                        />
                    </div>

                    <div className="lineMemberInfos">
                        <Text
                            text="Mot de passe : "
                            className="bold"
                        />

                        <Text
                            text="******"
                        />
                    </div>

                    <div className="lineMemberInfos">
                        <Text
                            text="Date de naissance : "
                            className="bold"
                        />

                        <Text
                            text={!this.state.memberData ? "Loading..." : this.state.memberData.birthdate}
                        />
                    </div>
                </div>









            </div>
        )
    }
}


