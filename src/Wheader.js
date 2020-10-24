import React from 'react'
import "./Wheader.css"
import Logo1 from './img/leaf1.png'
import Logo2 from './img/leaf2.png'



function Wheader() {
    return (
        <div className="header">
            <img className="log1" src={Logo1} alt="l"/>
            <h1>DEEPGROKS</h1>
            <img className="log2" src={Logo2} alt="l"/>
            <ul>
                <li><a href=""><button class="btn success">Home</button></a></li>
                <li><a href=""><button class="btn success">About</button></a></li>
                <li><a href=""><button class="btn success">Help</button></a></li>
                <li><a href=""><button class="btn success">Info</button></a></li>
            </ul>
        </div>
    )
}

export default Wheader
//rfce
