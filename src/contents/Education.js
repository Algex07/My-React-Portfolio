import React, { Component } from 'react';
import edu from '../img/edu.png';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h2 className="subtopic">My Education</h2>
                <img src={edu} alt="logo" className="conimg"></img>

                <p> Medical Doctor degree </p>
                <p>Anton de Kom University of Suriname, Faculty of Medical Sciences </p>

                <br></br>

                <p> Lyceum I College Diploma, Paramaribo, Suriname (1994)</p>

                <br></br>

                <p> Uoft SCS Boot Camps(Full Stack Developer) (2021) </p>

                <br></br>
                <footer class="footer">
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


export default Education
