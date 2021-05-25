import React from 'react'
import "./Wfooter.css"

function Wfooter() {
    return (
        <div>
            <div className="Contact">
            <div className="heading">CONTACT</div>
            <br/>
            <div className="contents">
                <div>Phno: 987654321,012345678</div>
                <div>Mail id: fync@gmail.com</div>
                <br/>
            </div>
        </div>
        <div className="About">
            <div className="heading">ABOUT US</div>
            <br/>
            <div className="contents1">
                <div> We have designed this project especially to contribute in the current COVID-19 scenario by providing an online platform for purchasing basic products from our nearby stores from groceries to medicines bringing everything closer.
                </div>
                <br/>
                <div>Our project not only focuses on customers but also on the small scale retailers who are suffering gravely in selling their products amidst the pandemic by ensuring safety by preventing long queues in front of shops, Retailers can provide
                    delivery or else allow ordering and let the customers pick up hence reducing queues and spread of COVID 19.</div>
            </div>
            <br/>
        </div>
        </div>
    )
}

export default Wfooter
