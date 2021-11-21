import React, { Component } from 'react'

class Experience extends Component {

    render() {
        return (
            <div className="condiv skills">
                <h2 className="subtopic">Work Experience</h2>

                <div className="box">
                    {<button className="buttonE"><p><a href="https://algex07.github.io/Password-Generator" target="_blank" rel="noreferrer">Password Generator</a></p></button>}
                </div>
                <div className="box">
                    {<button className="buttonE"> <p><a href="https://algex07.github.io/Weather-Dashboard" target="_blank" rel="noreferrer">Weather Dashboard</a></p></button>}
                </div>
                <div className="box">
                    {<button className="buttonE"> <p> <a href="https://algex07.github.io/Timed-Coding-Quiz" target="_blank" rel="noreferrer">Timed Coding Quiz</a></p></button>}
                </div>
                <div className="box">
                    {<button className="buttonE"> <p> <a href="https://algex07.github.io/Work-Schedule-planner" target="_blank" rel="noreferrer">Work Schedule planner</a></p></button>}
                </div>
                <div className="box">
                    {<button className="buttonE"> <p> <a href="https://filipalh.github.io/StockOfTheTalk" target="_blank" rel="noreferrer"> Stock Of The Talk</a></p></button>}
                </div>
                <div className="box">
                    {<button className="buttonE"> <p> <a href="https://nftc-collect.herokuapp.com/" target="_blank" rel="noreferrer"> NFTcollect</a></p></button>}
                </div>
                <div className="box">
                    {<button className="buttonE"> <p> <a href="https://our-note-taker.herokuapp.com/" target="_blank" rel="noreferrer">Note-taker-app</a></p></button>}
                </div>
                <div className="box">
                    {<button className="buttonE">  <p> <a href="https://github.com/Algex07/Professional-README-Generator" target="_blank" rel="noreferrer">Professional-README-Generator</a></p></button>}
                </div>

                <br></br>
                <footer class="footer">
                    <p>"Bringing Concept to Realisation"</p>
                    <p>&copy; Algex services.</p>
                </footer>
            </div>

        )
    }
}

export default Experience