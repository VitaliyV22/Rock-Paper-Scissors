let playerScore= 0
let computerScore = 0
let roundWinner = ""

function playRound(playerSelection,computerSelection) { 
    if (playerSelection == computerSelection) {
    roundWinner = "tie"
    }
    
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection ==="Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")    
    ) {
         playerScore ++
         roundWinner = "player" 
       }
    if (
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection ==="Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")    
    ) {
         computerScore ++
         roundWinner = "computer" 
       }
}