import React from "react";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";
import Square from "../cards/Square";
import Long from "../cards/Long";
import Big from "../cards/Big";
import Profil from "../cards/Profil";
import Test from "../addons/Test";
import Member from "../nav/Member";
import MemberList from "../list/MemberList";
import ObjectID from "bson-objectid";



export default class Members extends React.Component{


    constructor(props) {
        super(props);


        this.state = {

            membersData : [
                {
                    _id: ObjectID("61a55ff945c22fa07e4f2cbc"),
                    first_name: 'Maxime',
                    last_name: 'Saurin',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnujNmRpIR4M38nTjHOZQYdZk3DSykbotmbA&usqp=CAU',
                    login: 'Maxime479',
                    password: 'MaximeMdp8574',
                    birthdate: "2000-03-06T23:00:00.000+00:00",
                    rooms: 0,
                    devices: 0,
                    privileges: 'Administrateur',
                },
                {
                    _id: ObjectID("61ad3280ca8b17093f1c282e"),
                    first_name: 'Loïc',
                    last_name: 'Clemence',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnujNmRpIR4M38nTjHOZQYdZk3DSykbotmbA&usqp=CAU',
                    login: 'lucho',
                    password: 'lucho963tt',
                    birthdate: "2000-11-10T00:00:00.000+00:00",
                    rooms: 0,
                    devices: 0,
                    privileges: 'Membre',
                },
                {
                    _id: ObjectID("61a55ff945c22fa07e4f2cbc"),
                    first_name: 'Theophile',
                    last_name: 'De Larquier',
                    photo: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/118958086_2644984885753140_5218341333869949535_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=r6leLvOi4sEAX-QS8yy&tn=kHofl1W8yG4UpUVU&_nc_ht=scontent-cdg2-1.xx&oh=ddb3ecf34677732dc1780e447b931e77&oe=61CA55F4',
                    login: 'TheophTTV',
                    password: 'theophLeBg547',
                    birthdate: "2000-05-05T00:00:00.000+00:00",
                    rooms: 0,
                    devices: 0,
                    privileges: 'Membre',
                },


            ],


        };

    }





    render() {



        return(
            <div className="App">

                <header className="mainHeader">
                    <h1>DashBoard</h1>
                </header>

                <body className="mainBody">

                    <aside className="navContainer">
                        <Navigation
                            selected="members"
                        />
                    </aside>


                    <main>




                        <MemberList
                            caller={this.state.membersData}
                        />




                    </main>


                    <aside className="profilContainer">
                        <Profil
                            username="Maxime"
                        />
                    </aside>

                </body>





            </div>


        )
    }
}
