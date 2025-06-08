// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.

import { useEffect, useRef, useState } from "react";


function Refresh(){
    const [count, setCount] = useState(0)
const num = useRef(0)

useEffect(() =>{
    num.current = num.current + 1
console.log(`rerending and the value of num if ${num.current}`)
});


return(
    <>
    
    <h2>{count}</h2>
    <button onClick={(setCount) => count +1}></button>
    
    
    </>
);
}

export default Refresh;