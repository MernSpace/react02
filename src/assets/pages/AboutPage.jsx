import React, { useRef, useState } from 'react';
import NavMenu from '../component/NavMenu';
import Header from '../component/Header';
import '../css/about.css'
import Fotter from '../component/fotter'

const AboutPage = () => {
    let h1= useRef();
    const change=()=>{
        h1.current.innerText ="New Head"
    }
    const [number, setNumber]= useState(0)
  


    return (
        <div>
            <Header/>
            <div className="about">
                <h1>UseRef 02</h1>
                <h1 ref={h1}>Heading</h1>
                <button onClick={change}>Click me</button>

            </div>
            <div className="useState">
                <h1>UseState 02</h1>
                <h1>{number}</h1>
                <button onClick={()=>{setNumber(number+1)}}>click</button>
            </div>
            <Fotter/>
        </div>
    );
};

export default AboutPage;
