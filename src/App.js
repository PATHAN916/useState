
import React,{useState} from 'react'
import './App.css';

function App() {
  let [score,setScore]=useState(0,false);
  console.log("INSIDE COUNT")
  return (
    <div className="App">



<div  style={{backgroundColor:score?"red":"white"}}>
    <h1>{score}</h1>
<button onClick={()=>{
    setScore(score++,true);
    console.log(score)
}}>INCREMENT</button>
<button onClick={()=>{
    setScore(score--)
    console.log(score)
}}>DECREMENT</button>

</div>
</div>
  );
}

export default App
