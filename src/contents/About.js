import React, { Component } from 'react';
import me from '../img/me.png';



class About extends Component {
    render() {
        return (

            <div className="condiv">

                <form class="form">
                <img src={me} alt="logo" className="conimg"></img>
                    <h3>Hi,</h3>
                    
                    <br></br>
                    <p>I am a full Stack Developer.</p>
                    <p>My hobbies are; Basketball, Soccer, and having a go at playing Chess!</p>
                    <p>My "Motto" is "Compete with yourself and Succes will follow"</p>

                </form>
                <br></br>
                <br></br>
                <footer class="footer">
                    <p>"Bringing Concept to Realisation"</p>
                    <p>&copy; Algex services.</p>
                </footer>
                <div>
                      <a href="https://github.com/Algex07"target="_blank"rel="noreferrer" ><p>@github</p></a>
                                               
                     <a href="https://linkedin.com/in/amar-algu-09268291"target="_blank"rel="noreferrer" ><p>LinkedIn</p></a>
                      </div>  
            </div>


        )
    }
}

export default About