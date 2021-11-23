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
                    <div>
                      <a href="https://github.com/Algex07"target="_blank"rel="noreferrer" ><p>@github</p></a>
                                               
                     <a href="https://linkedin.com/in/amar-algu-09268291"target="_blank"rel="noreferrer" ><p>LinkedIn</p></a>
                      </div>  
                </footer>




            </body>
        )
    }

}




export default Home
