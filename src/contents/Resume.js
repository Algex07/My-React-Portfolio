import React, { Component } from 'react';
import resume from '../img/resume.png';


class Resume extends Component {
    render() {
        return (
            <div className="condiv">
                <h2 className="subtopic">My Resume</h2>
            <div >
                <a href="https://1drv.ms/b/s!AntDQ8ve--87hOgbuPs6nC4gjrJkyw?e=y0O4JI" target="_blank" rel="noreferrer"><img src={resume} alt="logo" className="conimg"></img></a>
            </div>
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
};








export default Resume