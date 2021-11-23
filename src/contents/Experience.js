import React, { Component } from 'react'
import psgenerator from '../img/psgenerator.png';
import weather from '../img/weather.png';
import time from '../img/time.png';
import worksch from '../img/worksch.png';
import stock from '../img/stock.png';
import nft from '../img/nft.png';
import note from '../img/note.png';
import fit from '../img/fit.png';
import port from '../img/port.png';

class Experience extends Component {

    render() {
        return (
            <div className="condiv skills">
                <h2 className="subtopic">Work Experience</h2>

                <div className="box">
                <a href="https://algex07.github.io/Password-Generator" target="_blank" rel="noreferrer" ><img src={psgenerator} alt="logo" className="conimg"></img></a>
                    {/* {<button className="buttonE"><p><a href="" target="_blank" rel="noreferrer">Password Generator</a></p></button>} */}
                {/* </div>
                <div className="box"> */}
                <a href="https://algex07.github.io/Weather-Dashboard" target="_blank" rel="noreferrer" ><img src={weather} alt="logo" className="conimg"></img></a>
                    {/* {<button className="buttonE"> <p><a href="https://algex07.github.io/Weather-Dashboard" target="_blank" rel="noreferrer">Weather Dashboard</a></p></button>} */}
                {/* </div>
                <div className="box"> */}
                <a href="https://algex07.github.io/Timed-Coding-Quiz/" target="_blank" rel="noreferrer" ><img src={time} alt="logo" className="conimg"></img></a>
                    {/* {<button className="buttonE"> <p> <a href="https://algex07.github.io/Timed-Coding-Quiz" target="_blank" rel="noreferrer">Timed Coding Quiz</a></p></button>} */}
                </div>
                <div className="box">
                <a href="https://algex07.github.io/Work-Schedule-planner/" target="_blank" rel="noreferrer" ><img src={worksch} alt="logo" className="conimg"></img></a>
                    {/* {<button className="buttonE"> <p> <a href="https://algex07.github.io/Work-Schedule-planner" target="_blank" rel="noreferrer">Work Schedule planner</a></p></button>} */}
                {/* </div>
                <div className="box"> */}
                <a href="https://filipalh.github.io/StockOfTheTalk" target="_blank" rel="noreferrer" ><img src={stock} alt="logo" className="conimg"></img></a>
                    {/* {<button className="buttonE"> <p> <a href="https://filipalh.github.io/StockOfTheTalk" target="_blank" rel="noreferrer"> Stock Of The Talk</a></p></button>} */}
                {/* </div>
                <div className="box"> */}
                <a href="https://nftc-collect.herokuapp.com/" target="_blank" rel="noreferrer" ><img src={nft} alt="logo" className="conimg"></img></a>
                    {/* {<button className="buttonE"> <p> <a href="https://nftc-collect.herokuapp.com/" target="_blank" rel="noreferrer"> NFTcollect</a></p></button>} */}
                </div>
                <div className="box">
                <a href="https://our-note-taker.herokuapp.com/" target="_blank" rel="noreferrer" ><img src={note} alt="logo" className="conimg"></img></a>
                    {/* {<button className="buttonE"> <p> <a href="https://our-note-taker.herokuapp.com/" target="_blank" rel="noreferrer">Note-taker-app</a></p></button>} */}
                {/* </div>
                <div className="box"> */}
                <a href="https://our-workout-tracker.herokuapp.com/" target="_blank" rel="noreferrer" ><img src={fit} alt="logo" className="conimg"></img></a>
                    {/* {<button className="buttonE">  <p> <a href="https://github.com/Algex07/Professional-README-Generator" target="_blank" rel="noreferrer">Professional-README-Generator</a></p></button>} */}
                    <a href="https://algex07.github.io/My-Portfolio-Page/" target="_blank" rel="noreferrer" ><img src={port} alt="logo" className="conimg"></img></a>
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
}

export default Experience