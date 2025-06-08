import { useEffect, useState } from "react";
import Timer from "../../Concept/Hooks/9.useEffect";


function ChakraCountDown(){
const [chakra, setChakra] = useState(30)

if (chakra === 100)return; 

useEffect(() =>{
    const Timer = setTimeout( () => {
       setChakra((prev)=> prev + 1)
    },100)
    return () => clearTimeout(Timer); 
},[chakra]);

return(
    <div>
        <h1>Chakra CountDown</h1>
        <h2>I'm restoring my Charkra</h2>
        <h2>Chakra Level: {chakra} </h2>
    </div>
);
}

export default ChakraCountDown;