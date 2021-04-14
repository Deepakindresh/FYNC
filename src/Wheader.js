import React from 'react'
import "./Wheader.css"
import Logo2 from './img/fync.png'
import Logo1 from './img/logo.png'


function Wheader() {
    return (
        <div className="header">
            <img className="log1" src={Logo1} alt="l"/>
            <img className="log2" src={Logo2} alt="l"/>
            
        </div>
    )
}

export default Wheader