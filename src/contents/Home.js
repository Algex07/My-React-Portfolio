import React, { Component } from 'react';
import ScrollView from 'react-scroll-text'
import profilepic from '../img/ampic.jpg';

class Home extends Component {
    render() {
        return (
            <body className="condiv">
                <header>
                    <h1>I am Amar</h1>


                    <ScrollView className="scroll" horizontal={true}><p>Your Web Developer</p></ScrollView>
                    <br></br>
                    <img src={profilepic} alt="logo" className="profilepic"></img>
                </header>

                <br></br>
                <footer class="footer">
                    <p>"Bringing Concept to Realisation"</p>
                    <p>&copy; Algex services.</p>
                </footer>




            </body>
        )
    }

}




export default Home
