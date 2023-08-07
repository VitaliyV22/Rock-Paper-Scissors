//UI
const playerText = document.querySelector("#PlayerText") ;
const computerText = document.querySelector("#ComputerText") ;
const scoreText = document.querySelector("#ScoreText") ;
const selButtons = document.querySelector("#selbutton") ;

let player ;
let computer ;
let score ;



selButtons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    randomChoice()
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    scoreText.textContent = game() ;


}));


function randomChoice(){

    const randNum = Math.floor(Math.random() * 3) +  1  ;
    
    switch(randNum){
        case 1 :
            computer = "Rock" ;
            break ;
        case 2 :
            computer = "Paper" ;
            break ;
        case 3 :
            computer = "Scissors" ;
            break ;    
       }
    }

function game() {
    if(player == computer) {
        return "Draw !";
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? "You win" : "You lose"
    }
    else if(computer == "Paper"){
        return (player == "Scissors") ? "You win" : "You lose" 
    }
    else if(computer == "Scissors"){
        return (player == "Rock") ? "You win" : "You lose" 
    }
 
}

