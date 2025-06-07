

function DisplayNumber (){

    const sum = 11 + 12 + 13;
    const ranNum = Math.floor(Math.random() * 100)+1;


return(
<div style={{display: "flex", flexDirection: "column" , alignItems: 'center' }}>
<h2>The Sum of Three Number: {sum}</h2>
<h2>And the Random Number: {ranNum} </h2>

</div>

);
}


export default DisplayNumber;