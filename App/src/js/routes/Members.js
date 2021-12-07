import React from "react";
import Navigation from "../Navigation";
import Profil from "../cards/Profil";
import MemberList from "../list/MemberList";
import ObjectID from "bson-objectid";
import Image from "../tools/Image";
import axios from "axios";



export default class Members extends React.Component{


    constructor(props) {
        super(props);


        this.state = {

            navStyles: {
                none: {display: 'none'},
                block: {display: 'flex'},

            },

            navStyle: {
                display: 'flex'
            },

        };


        this.displayNav = this.displayNav.bind(this);

    }


    getUserData = () => {

        axios.get('/users')
            .then(response => {
                this.setState({membersData: response.data})
            })


    }

    componentDidMount() {

        this.getUserData()

    }



    displayNav = () => {

        let style = this.state.navStyle

        if(style.display.includes('none')){
            this.setState({navStyle: this.state.navStyles.block})
        }else{

            this.setState({navStyle: this.state.navStyles.none})
        }

    }



    render() {



        return(
            <div className="App">

                <Image
                    src="https://www.pngrepo.com/png/311018/512/navigation.png"
                    onClick={this.displayNav}
                    className="navButton"
                />

                <header className="mainHeader">
                    <h1>Smart Home DashBoard</h1>
                </header>

                <body className="mainBody">

                <aside className="navContainer" style={this.state.navStyle}>
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
