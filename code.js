
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
function computerPlayer(){
    let randomComputer = Math.floor(Math.random() * 3);

    switch(randomComputer){
        case 0:
            computerMove = 'rock';
            return 'Rock';

            break;

        case 1:
            computerMove = 'paper';
            return 'Paper';

            break;

        case 2:
            computerMove = 'scissors';
            return 'Scissors';

            break;
    }


}


function humanPlayer(human){

    computer = computerPlayer();

    let ties = 0, wins = 0, losses = 0;

    switch(human){
        case 'Rock':
            playerMove = 'rock';
            if (computer === human){
                
                score.ties += 1;
                resul = 'Tie'
            
            }else if (computer === 'Paper'){
                
                score.losses += 1;
                resul =  'You Lose'

            }else {

                score.wins += 1;
                resul = 'You Win';

            }

            showHumanComputer();
            return resul;
            
            break;

        case 'Paper':
            playerMove = 'paper';
            if (computer === human){
                
                score.ties += 1;
                resul = 'Tie'
            
            }else if (computer === 'Scissors'){

                score.losses += 1;
                resul = 'You Lose'

            }else if (computer === 'Rock'){

                score.wins += 1;
                resul =  'You Win';

            }

            showHumanComputer();
            return resul;

            break;

        case 'Scissors':
            playerMove = 'scissors';
            if (computer === human){
                
                score.ties += 1;
                resul = 'Tie'
            
            }else if (computer === 'Rock'){

                score.losses += 1;
                resul = 'You Lose'

            }else if (computer === 'Paper'){

                score.wins += 1;
                resul =  'You Win';

            }

            showHumanComputer();
            return resul;
            
            
            break;
    }


}

function reset(){
    score ={
        wins: 0,
        losses: 0,
        ties: 0   
    }
    computerMove = 'robot';
    playerMove = 'human'
    setResul();
    showHumanComputer();
}

function showHumanComputer(){
   

    document.getElementById('status').innerHTML = resul;
    document.getElementById('human').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">`
    document.getElementById('computer').innerHTML = `<img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`
    

    setResul();

}


setResul();

function setResul(){

    localStorage.setItem('score',JSON.stringify(score));


    console.log(score);
    document.getElementById('win').innerHTML = 'Wins: ' + score.wins;
    document.getElementById('losses').innerHTML = 'Losses: ' + score.losses;
    document.getElementById('ties').innerHTML = 'Ties: ' + score.ties;
}

