import { useState } from "react";
import database from "../utils/firebase";
import createNewGameRoom from "../utils/dbInteraction";

function Test() {
    const [name , setName] = useState();
    const [age , setAge] = useState();
        
    // Push Function
    function Push() {
        createNewGameRoom(6);
    }
    
    return (
      <div className="test" style={{marginTop : 250}}>
        <center>
        <input placeholder="Enter your name" value={name} 
        onChange={(e) => setName(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your age" value={age} 
        onChange={(e) => setAge(e.target.value)}/>
        <br/><br/> 
        <button onClick={Push}>PUSH</button>
        </center>
      </div>
    );
  }
    
  export default Test;