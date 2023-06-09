import React from "react";
import "../App.css";
import {useState} from "react";
import styled from 'styled-components';


export default function Parent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value)
  };
  const onChangeLastName = (event) => {
    setLastName(event.target.value)
  };   
  const onSubmit = (event) => {
    if (firstName != '' && lastName != ''){
      alert('successful')
    }
  }
  //console.log(firstName, 'firstNamne', lastName, 'lastName');
    return (
     <div className="formDiv">
       <form onSubmit={onSubmit}>
           <input type="text"
             placeholder="first name" 
             id="firstName"
             onChange={onChangeFirstName} 
             />
           <input type="text" 
           placeholder="last name" 
           id="lastName"
           onChange={onChangeLastName}
           />
           <button>Submit</button>
       </form>
      </div>
    );
    
 
  }
  const Button = styled.button`
      background-color: blue;
      color: white;
  
  `
  const Div = styled.div`
  display:flex;
  `
     
  

   


