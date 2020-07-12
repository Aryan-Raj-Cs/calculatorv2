import React, { useState } from 'react';
import './structure.css';
import Button from '@material-ui/core/Button';
import Symbol from './Symbol.js';
function Structure() {
  const [value,setValue]= useState("");
  const [result,setResult]= useState("");
 
 const expression=()=>{


 }
 
 const addValue=(v)=>{
   setValue((oldvalue)=>{
   return oldvalue+=v;

   })

 }
 const clear=(v)=>{
  setValue((oldvalue)=>{
  return "";

  })

}
const Result=()=>{
  setValue((oldvalue)=>{
  try{
  return eval(oldvalue);
  }
  catch{
 return "Wrong";
  }

  })

}
 
  return (
    <div className="maincontent">
    <div className="main">
    <textarea value={value}/>

     <Symbol click={addValue} allClear={clear} showResult={Result}/>
     </div>

    </div>
  );
}

export default Structure;
