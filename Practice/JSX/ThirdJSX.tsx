


function DisplayCondition(){
const isLoggedIn = true;
const isTernary = true;

let logMessage;
if(isLoggedIn){
 logMessage= <h2>Welcome back, legend!</h2>
}
else{
    logMessage = <h2>Please login to continue.</h2>
}
    return(
<div style={{display: "flex", flexDirection: "column" , alignItems: 'center' }}>

<h2>{logMessage}</h2>
{isTernary ? (<h2>Well, Ready to start...</h2>)
: (<h2>Or, End This War...</h2>)}
        </div>
    );
}


export default DisplayCondition;