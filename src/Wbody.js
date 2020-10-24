import React from 'react'
import "./Wbody.css"
import l1 from './img/bg.jpg'
import l2 from './img/coffee.jpg'
import l3 from './img/India.jpg'
import l4 from './img/Corona.png'
import l5 from './img/medic.png'

function Wbody() {
    return (
    <div className="body">
        <div className="slidershow">        
            <div className="slides">
                <input type="radio" name="r" id="r1" checked/>
                <input type="radio" name="r" id="r2"/>
                <input type="radio" name="r" id="r3"/>
                <input type="radio" name="r" id="r4"/>
                <input type="radio" name="r" id="r5"/>
                <div className="slide s1">
                    <img src={l1} alt=""/>
                    <div className="content">
                    </div>
                </div>
                <div className="slide">
                    <img src={l2} alt=""/>
                </div>
                <div className="slide">
                    <img src={l3} alt=""/>
                </div>
                <div className="slide">
                    <img src={l4} alt=""/>
                </div>
                <div className="slide">
                    <img src={l5} alt=""/>
                    <div className="content c">
                        <a href="" type="button">Sign in as User</a>
                        <a href="" type="button">Sign in as Retailer</a>
                    </div>
                </div>
            </div>
            <div class="navigation">
                <label for="r1" className="bar"></label>
                <label for="r2" className="bar"></label>
                <label for="r3" className="bar"></label>
                <label for="r4" className="bar"></label>
                <label for="r5" className="bar"></label>
            </div>
        </div>
    </div>
    )
}

export default Wbody