import React, { useRef } from 'react';
import Header from '../component/Header'; 
import UseEffect from '../component/UseEffect';
import Fotter from '../component/fotter'
 

const ContactPage = () => {
    const myImg = useRef();
    const change =()=>{
        myImg.current.src="../src/assets/img/pic2.png"
    }

    return (
        <div>
           <Header/>
           <div className="contact">
            <h1>UseRef 04</h1>
            <img ref={myImg} src="../src/assets/img/pic1.png" alt="" />
            <button onClick={change}>Change img</button>
           </div>
           <div className="use">
            <h1>UseEffect IIF</h1>
            <UseEffect/>
           </div>
           <Fotter/>
        </div>
    );
};

export default ContactPage;
