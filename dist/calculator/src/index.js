import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {evaluate} from "mathjs"
import { useState } from 'react';




function Calculator(){

  const [equation,setEquation] = useState("");
  const [test,setTest] = useState("");
  const [decimal,setdecimal] = useState(false);
  const [result,setResult] = useState("");
  const [operator,setOperator] = useState("");
  const [disableZero,setDisableZero] = useState(false);

  
  // sanitizes equation state, empty  equation state value is evaluated as zero
function toZero(formula){

let strFormula = decimalSanitizer(formula);
//console.log(operationSanitizer(strFormula));
//console.log(newStrFormula);

//let strFormula = operationSanitizer(tFormula);
//operationSanitizer("5*-+5")

  if(strFormula === ""){
    return 0
  }else {
    return strFormula
  }

}


function decimalSanitizer(decimialEQ){
  var deciEQ = String(decimialEQ);
  let arrEQ = deciEQ.split("");
  

if (arrEQ[1] && arrEQ[3] == "."){
  /*let newArrEQ =*/ arrEQ.splice(3,1);
  let newArrEQ = arrEQ.join("");
  //console.log(newArrEQ)
  return newArrEQ
  
}else{
  //console.log(arrEQ.join(''))
  return arrEQ.join('')
}

}

/*
function operationSanitizer(operatorNum){
let arrOperator = [];
let arrEquation = [];
let final = [];
arrOperator = operator.split("");
//
//console.log(arrOperator);
//
arrEquation = operatorNum.split("");
console.log(arrEquation);
//console.log(arrEquation[arrEquation.length-2]);

if (arrOperator.length >=2 && arrOperator[arrOperator.length-1] != "-"){
  let first = arrEquation[0];
  let second = arrEquation[arrEquation.length-1];
  final.push(first);
  final.push(second);
  final.splice(1,0,arrOperator[arrOperator.length-1]);
   return final.join("");
 
}else{
  return arrEquation.join("");
}
}
*/

function operationSanitizer(numEXP){

  let arrSelectedOperator = [];
  let arrEquation = [];
  let final = [];
  arrSelectedOperator = operator.split("");
  arrEquation = numEXP.split("");

  const arrOperator = [
    "\\+\\*",
    "\\/\\*",
    "\\-\\*",
    "\\+\\/",
    "\\-\\/",
    "\\*\\/",
    "\\-\\+",
    "\\/\\+",
    "\\*\\+"
   
  ]

  var re = new RegExp(arrOperator.join("|"),"i");
  let testResult = re.test(numEXP);
  //let testResult = numEXP.match(re);
  //console.log(re);
 // console.log(testResult);
  //console.log(numEXP.match(arrOperator[0]));

  if (testResult == true){
    let first = arrEquation[0];
    let second = arrEquation[arrEquation.length-1];
    final.push(first);
    final.push(second);
    final.splice(1,0,arrSelectedOperator[arrSelectedOperator.length-1]);
     return final.join("");
  }else{
    return arrEquation.join("");
   
  }


}


function decimialLimit(){
 return setdecimal(false);
 
}


  function Calculate(EQ){

   let finalEQ = operationSanitizer(EQ);
   //console.log(EQ)
   //console.log(evaluate(finalEQ))
   //let finalEQ =EQ;

    return finalEQ===0 ? NaN : evaluate(finalEQ) ;
  };
    




  return(
    <div id="Calculator-body">
      <div id="container">
      
      
        <div id="display">
          {toZero(equation)}
        
        </div>

   
        <div id="button-container">
          <button className="button" id="clear"  onClick={()=>{setEquation("");setdecimal(false)}}>AC</button>
          <button className="button" id="divide" onClick={ ()=>{setEquation(equation+"/");setdecimal(false);setOperator(operator+"/")}} >/</button>
          <button className="button" id="multiply" onClick={()=>{setEquation(equation+"*");setdecimal(false);setOperator(operator+"*")}}>X</button>

          <button className="button" id="nine" onClick={()=>{setEquation(equation+"9");setResult(9);setdecimal(false);setDisableZero(false)}} >9</button>
          <button className="button" id="eight" onClick={()=>{setEquation(equation+"8");setResult(8);setdecimal(false);setDisableZero(false)}} >8</button>
          <button className="button" id="seven" onClick={()=>{setEquation(equation+"7");setResult(7);setdecimal(false);setDisableZero(false)}}>7</button>

          <button className="button" id="add" onClick={()=>{setEquation(equation+"+");setResult("+");setdecimal(false);setOperator(operator+"+")}}>+</button>
          
          <button className="button" id="six" onClick={()=>{setEquation(equation+"6");setResult(6);setdecimal(false);setDisableZero(false)}}>6</button>
          <button className="button" id="five" onClick={()=>{setEquation(equation+"5");setResult(5);setdecimal(false);setDisableZero(false)}}>5</button>
          
          <button className="button" id="four" onClick={()=>{setEquation(equation+"4");setResult(4);setdecimal(false);setDisableZero(false)}}>4</button>
          <button className="button" id="subtract" onClick={()=>{setEquation(equation+"-");setResult("-");setdecimal(false);setOperator(operator+"-");setDisableZero(false)}}>-</button>

          <button className="button" id="three" onClick={()=>{setEquation(equation+"3");setResult(3);setdecimal(false);setDisableZero(false)}}>3</button>
          <button className="button" id="two" onClick={()=>{setEquation(equation+"2");setResult(2);setdecimal(false);setDisableZero(false)}}>2</button>
          <button className="button" id="one" onClick={()=>{setEquation(equation+"1");setResult(1);setdecimal(false);setDisableZero(false)}}>1</button>
          <button className="button" id="equals" onClick={()=>{setEquation(Calculate(equation));console.log(equation);setdecimal(false);setDisableZero(false)}}>=</button>
          
          <button className="button" id="zero" disabled={disableZero} onClick={()=>{setEquation(equation+0);setDisableZero(true)}}>0</button>
          <button className="button" id="decimal" disabled={decimal} onClick={()=>{setEquation(equation+".");setdecimal(true) }}>.</button>
         


        </div>
      </div>
    </div>
  )
}



const Display = (props)=>{
  return(
    <div id="display">
      {props.input}
    </div>
  )
}



/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

ReactDOM.render(<Calculator/>,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

