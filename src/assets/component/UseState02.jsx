import React, { useState } from 'react';

const obj = () => {
    const [obj, setObj]=useState({
        name:"sifat",
        age:20,
        city:"rajshahi"
    })
    const change=()=>{
        setObj(previous=>({
            ...previous,
            name:"new name",
            age:"new age",
            city:"new city"
        }))
    }
    return (
        <div>
            <h1>{obj.name}</h1>
            <h1>{obj.age}</h1>
            <h1>{obj.city}</h1>
            <button onClick={change}>change the datas</button>
        </div>
    );
};

export default obj;