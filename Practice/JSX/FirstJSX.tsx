

function DisplayProfile(){


  const name = "Madara Uchiha";
  const village = "Hidden Leaf Village";
  const userInput = 1000;
  const chakra = userInput - 1;

return(

    <div style={{display: "flex", flexDirection: "column" , alignItems: 'center' }}> 
       <h2>{name}</h2>
      <h2>{village}</h2>
      <h2>Chakra Level: {chakra}</h2> 
    <img src="https://www.pngplay.com/wp-content/uploads/12/Madara-Uchiha-No-Background.png" alt="Madara Uchiha" width="250"/>
    </div>


);
}

export default DisplayProfile;