import React, { useState } from 'react';

const Form = () => {
    let [FormObj,setFormObj]=useState({fName:"",lName:"",city:"",gender:""})
    const InputOnChange =(property, value)=>{
        setFormObj((prevObj) => ({
            ...prevObj,
            [property]: value
          }));          
    }
    
    const FormSubmit=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(FormObj))
    }
    
    return (
      <div className='container'>
        <form onSubmit={FormSubmit}>
          <input onChange={(e)=>{InputOnChange("fName",e.target.value)}} value={FormObj.fName} placeholder='First Name' /><br />
          <input onChange={(e)=>{InputOnChange("lName",e.target.value)}} value={FormObj.lName} placeholder='Last Name' /><br />
          <select onChange={(e)=>{InputOnChange("city",e.target.value)}} value={FormObj.city}>
            <option value=''>Choose one</option>
            <option value='Dhaka'>Dhaka</option>
            <option value='Rajshahi'>Rajshahi</option>
          </select>
          <br/>
          <input onChange={()=>{InputOnChange("gender","Male")}} checked={FormObj.gender==='Male'} type='radio' value='male' /> Male
          <input onChange={()=>{InputOnChange("gender","Female")}} checked={FormObj.gender==='Female'} type='radio' value='female' /> Female
          <br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };
  

export default Form;