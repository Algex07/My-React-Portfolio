import React, { Component } from 'react';
import ScrollView from 'react-scroll-text'
// import { Link, animateScroll as scroll } from "react-scroll";
// import ScrollAnimation from 'react-animate-on-scroll';
// import ReactTypingEffect from 'react-typing-effect';
 import profilepic from '../img/ampic.jpg';
// import Social from '../components/Social'
class Home extends Component {
render() {
return (
<body className="condiv">
<header>
<h1>I am Amar</h1>
        
            
             <ScrollView className="scroll" horizontal={true}>Your Web Developer</ScrollView>
             <br></br>
        <img src={profilepic}alt="logo" className="profilepic"></img>
</header>
{/* <Social /> */}

<footer class="footer">
                <p>"Bringing Your Concept to Realisation"</p>
                <p>&copy; Algex services.</p>
            </footer>




</body>
)
}

}




export default Home
