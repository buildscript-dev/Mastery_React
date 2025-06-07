

function JutsuCard({name, type, chakraCost}){
    return(
     <>
      <h2> Hey, {name} usage his {type} jutus.</h2>
      <h2>So what, Now his chakra will reduces to {chakraCost}.</h2> 
       </>
    );
}
export default JutsuCard;