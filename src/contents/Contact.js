import React, { Component } from 'react';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import email from '../img/email.png';
import moblie from '../img/mobile.png';

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h2 className="subtopic">Contact Me</h2>
                <div className="contact">
                    <ul className="contactUnorderedList">
                        <li className="contactList">
                            <a href="https://github.com/Algex07" target="_blank" rel="noreferrer" ><img src={github} alt="logo" className="conimg"></img></a>
                        {/* </li>
                        {/* <br></br> */}
                        {/* <li className="contactList"> */} 
                            <a href="https://linkedin.com/in/amar-algu-09268291" target="_blank" rel="noreferrer" ><img src={linkedin} alt="logo" className="conimg"></img></a>
                        {/* </li>
                        <li className="contactList"> */}
                            <a href="mailto: [amar.algu@mail.utoronto.ca]" target="_blank" rel="noreferrer"><img src={email} alt="logo" className="conimg"></img></a>
                        {/* </li>
                        <li className="contactList"> */}
                            <a href="#Phone" target="_blank" rel="noreferrer"><img src={moblie} alt="logo" className="conimg"></img></a>
                        </li>
                    </ul>
                </div>
                <br></br>
                <footer className="footer">
                    <p>"Bringing Concept to Realisation"</p>
                    <p>&copy; Algex services.</p>
                    <div>
                      <a href="https://github.com/Algex07"target="_blank"rel="noreferrer" ><p>@github</p></a>
                                               
                     <a href="https://linkedin.com/in/amar-algu-09268291"target="_blank"rel="noreferrer" ><p>LinkedIn</p></a>
                      </div>  
                </footer>
            </div>
        )

    }

}

export default Contact