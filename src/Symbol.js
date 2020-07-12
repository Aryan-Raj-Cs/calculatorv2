import React from 'react';
function Symbol(props) {
 
 let symbol=['%','(',')','CE','1','2','3','+','4','5','6','-','7','8','9','*','0','.','=','/'];
 const add=(e)=>{
  props.click(e.target.value);
 }

 const clear=()=>{
props.allClear();

 }
 
 const result=()=>{
  props.showResult();
  
   }
 
    return (
    <div >

     {symbol.map((val,index)=>{
       if(val=='CE'){
        return <button onClick={clear} value={val}>{val}</button>
      }
      else if(val=='='){
        return <button onClick={result} value={val}>{val}</button>
      }
      else{
        return <button onClick={(e)=>{add(e)}} value={val}>{val}</button>
      }
       


     })}

    </div>
  );
}

export default Symbol;
