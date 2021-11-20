import React, { Component } from 'react';
import Navitem from './Navitem';
import "animate.css/animate.min.css";

//navbar
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
                <ul>

                    <Navitem item={<button className="buttonW"  ><h3>Home</h3></button>} tolink="/" activec={this.activeitem}></Navitem>


                    <Navitem item={<button className="buttonW"  ><h3>About</h3></button>} tolink="/about" activec={this.activeitem}></Navitem>


                    <Navitem item={<button className="buttonW"  ><h3>Education</h3></button>} tolink="/education" activec={this.activeitem}></Navitem>


                    <Navitem item={<button className="buttonW"  ><h3>Work Experience</h3></button>} tolink="/Experience" activec={this.activeitem}></Navitem>


                    <Navitem item={<button className="buttonW"  ><h3>Contact</h3></button>} tolink="/contact" activec={this.activeitem}></Navitem>

                </ul>
            </nav>
        )
    }
}

export default Navbar