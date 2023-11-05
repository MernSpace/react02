import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    let [data,setData]= useState();
    useEffect(()=>{
    (async()=>{
        let res = await fetch('https://dummyjson.com/products/1')
        let json = await res.json()
        setData(json)
    })()
    },[])
    return (
        <div>
          {JSON.stringify(data)}  
        </div>
    );
};

export default UseEffect;