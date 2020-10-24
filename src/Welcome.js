import React from 'react'
import "./Welcome.css";
import Wheader from './Wheader';
import Wbody from './Wbody';
import Wfooter from './Wfooter';

function Welcome() {
    return (
        <div>
           <Wheader/>
           <Wbody/>
           <Wfooter/> 
        </div>
    )
}

export default Welcome
