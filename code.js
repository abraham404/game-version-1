function computerPlayer(){
    let randomComputer = Math.floor(Math.random() * 3);

    switch(randomComputer){
        case 0:

            return 'Rock';

            break;

        case 1:

            return 'Paper';

            break;

        case 2:

            return 'Scissors';

            break;
    }


}

function btn1(){
 
    humanPlayer(0);
    
}

function btn2(){
   
    humanPlayer(1);

}

function btn3(){

    humanPlayer(2);
}

function humanPlayer(btn){
    
   console.log(btn);

    switch(btn){
        case 0:

            return 'Rock';

            break;

        case 1:

            return 'Paper';

            break;

        case 3:

            return 'Scissors';

            break;
    }
   
}


//console.log(computerPlayer());
//console.log(btn1());

console.log(humanPlayer());

//computerPlayer();   