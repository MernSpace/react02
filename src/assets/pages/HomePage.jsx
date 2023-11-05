import React, { useRef } from 'react';
import NavMenu from '../component/NavMenu';
import Header from '../component/Header';
import '../css/homepage.css'
import Form from '../component/Form';
import Fotter from '../component/fotter';


const HomePage = () => {
    let fName = useRef()
    let lName = useRef()
    const click =()=>{
        let fn = fName.value;
        let ln = lName.value;
        alert(fn+" "+ln)
    }

    return (
        <div>
            <Header/>
            <div className="use">
                <h1>UseRef 01</h1>
                <input type='text' ref={(a)=>fName=a} placeholder='Frist Name'/>
                <input type='text' ref={(a)=>lName=a} placeholder='Last Name'/>
                <button onClick={click}>Click me</button>
            </div>
            <div className="form">
                <h1>UseState 01</h1>
                <Form/>
            </div>
            <Fotter/>
        </div>
    );
};

export default HomePage;
