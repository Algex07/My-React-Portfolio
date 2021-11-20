import React, { Component } from 'react';
// import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <div className="contact">
                    <ul className="contactUnorderedList">
                        <li className="contactList">
                            <a href="https://github.com/Algex07" >@github</a>
                        </li>
                        <li className="contactList">
                            <a href="https://linkedin.com/in/amar-algu-09268291" >LinkedIn</a>
                        </li>
                        <li className="contactList">
                            <a href="mailto: [amar.algu@mail.utoronto.ca]"> Email me!</a>
                        </li>
                        <li className="contactList">
                            <a href="#Phone">Mobile</a>
                        </li>
                    </ul>

                </div>

                <footer className="footer">
                    <p>"Bringing Your Concept to Realisation"</p>
                    <p>&copy; Algex services.</p>
                </footer>
            </div>
        )

    }

}

export default Contact