
import React,{useState} from 'react';
import '../Cal.css';
import '../App.css';
 export function C(){
  const [result, Setresult] =useState("");

  const Clear =()=>{
    Setresult("");
  }
  const backspace=()=>{
    Setresult(result.slice(0,result.length-1));
}


//eval function handel the string as number
//to string so we can use is as string on (concat) function
const calculate=()=>{
    Setresult(eval(result).toString());
}

  const handelClick =(e)=>{
    Setresult(result.concat(e.target.name));
  }

return (
<>

<h4 className='head'>Try My Smart Calculater </h4>
<div className="CalSpace">
<div className="Container">
    <form>
<input type="text" value={result}></input>
    </form>

    <div className='Keybord'>
<button onClick={Clear} id="clear" className='light'>Clear</button>
<button onClick={backspace}id="backspace" className='light'>C</button>
<button name='/' onClick={handelClick} className='light' >/</button>
<button name='7' onClick={handelClick}>7</button>
<button name='8' onClick={handelClick}>8</button>
<button name='9' onClick={handelClick}>9</button>
<button name='*'onClick={handelClick} className='light'>X</button>
<button name='4' onClick={handelClick}>4</button>
<button name='5'onClick={handelClick}>5</button>
<button name='6' onClick={handelClick}>6</button>
<button name='-'onClick={handelClick}className='light'>-</button>
<button name='1'onClick={handelClick}>1</button>
<button name='2'onClick={handelClick}>2</button>
<button name='3'onClick={handelClick}>3</button>
<button name='+'onClick={handelClick} className='light'>+</button>
<button name='0' onClick={handelClick}>0</button>
<button name='.' onClick={handelClick}>.</button>
<button name='=' onClick={calculate} id="result" className='light'>=</button>

    </div>

</div>
</div>

</>

);

 }