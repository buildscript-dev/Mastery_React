//Components can be passed as props, which stands for properties.
//The component receives the argument as a props
//Props are read-only inside the child — you just use them, don’t change them.

import { title } from "process";



// function App() {
//   return <Greeting name="Madara" title="Ghost of Uchiha" />;
// }


function Greeting({name, title}){
    return(
        <div>

            <h2>Hey, {name}</h2>
            <h2>You are {title}</h2>
        </div>
    );
}

export default Greeting;