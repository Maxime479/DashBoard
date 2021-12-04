import React from "react";
import Image from "../tools/Image";
import Text from "../tools/Text"

import PlusButton from "../../img/button/PlusButton.png"
import MinusButton from "../../img/button/MinusButton.png"

import '../../css/addons/Member.css';

export default class Member extends React.Component{
    render(){
        return(
            <div className={"memberInPage " + this.props.className}>

                <Text
                    text="Maxime Saurin"
                    className="memberName"
                />


                <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnujNmRpIR4M38nTjHOZQYdZk3DSykbotmbA&usqp=CAU"
                    className="memberImage"

                />

                <div className="top">
                    <div className="lineMemberInfos">
                        <Text
                            text="Pièces : "
                            className="bold"
                        />

                        <Text
                            text="4"
                        />
                    </div>

                    <div className="lineMemberInfos">
                        <Text
                            text="Appareils : "
                            className="bold"
                        />

                        <Text
                            text="12"
                        />
                    </div>

                    <div className="lineMemberInfos">
                        <Text
                            text="Privilèges : "
                            className="bold"
                        />

                        <Text
                            text="Administrateur"
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
                            text="Maxime479"
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
                            text="06/03/2000"
                        />
                    </div>
                </div>









            </div>
        )
    }
}


