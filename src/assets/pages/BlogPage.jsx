import React, { useRef } from 'react';
import Header from '../component/Header';
import '../css/bolg.css'
import UseState02 from '../component/UseState02';

const BlogPage = () => {
    let head = useRef()
    const change =()=>{
        head.current.classList.remove("hd")
        head.current.classList.add("dh")
    }
    return (
        <div>
            <Header/>
            <div className="bolg">
                <h1>UseRef 03</h1>
                <h1 className='hd' ref={head}>Hello World</h1>
                <button onClick={change} >Click me</button>
            </div>
            <div className="obj">
                <h1>UseState 02</h1>
                <UseState02/>
            </div>
        </div>
    );
};

export default BlogPage;