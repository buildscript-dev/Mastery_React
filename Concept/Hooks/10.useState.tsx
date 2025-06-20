

// It lets your components remember stuff and update UI when that stuff changes.

import { useState } from "react";


function ChakraCounter(){
  const [chakra, setChakra] = useState(100);
  //useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.

  return (
    <div>
      <h1>Current Chakra: {chakra}</h1>
      <button onClick={() => setChakra(chakra + 10)}>Increase Chakra</button>
      <button onClick={() => setChakra(chakra - 10)}>Decrease Chakra</button>
    </div>
  );}

export default ChakraCounter;