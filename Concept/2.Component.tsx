//Component are Reuseable block of UI.
// Function Component...
// This are simple JavaSCript Funciton with JSX...



// Components can be passed as props, which stands for properties.
//Props are like function arguments, and you send them into the component as attributes.




function Shinobi(props){
const name= props.name;
const clan = "Uchiha"
const title= "Ghost of Uchiha..."
const age = 100

    return(
    <div style={{display: "flex", flexDirection: "column" , alignItems: 'center' }}>
        <h2>I'm {name} from {clan} clan, People Known me as {title} and i lives more than {age} year.</h2>
    </div>

    );

}

export default Shinobi;