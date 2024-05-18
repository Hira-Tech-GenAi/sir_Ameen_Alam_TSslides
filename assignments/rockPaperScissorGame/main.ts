// rock, paper and scissors Game:

let playerOne:string="Rock";
let playerTwo:string="Scissors";
if (playerOne === playerTwo) {
    console.log("It's a tie!");
    
    
}else if((playerOne==="Rock" && playerTwo==="Scissors")
|| (playerOne==="Scissors" && playerTwo==="Paper") ||
(playerOne==="Paper" && playerTwo==="Rock")){
    console.log("Player Win!");
    
}

