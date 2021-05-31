import React from 'react'
import image from './img/Map_Sample.png'
import "./Wmap.css"
import Footer from './Footer'
function Wmap() {
    return (
        <div >
            <div style={{ backgroundImage: `url(${image})`, height: "800px", backgroundRepeat: "no-repeat", width:"100%",backgroundSize:"cover",marginBottom:"-550px"}}>
            </div>
            <div className="Buttons" onClick={() => window.open("https://map-fync.web.app/","_self")}>
              Go to Maps
            </div>
        </div>
    )
}

export default Wmap
