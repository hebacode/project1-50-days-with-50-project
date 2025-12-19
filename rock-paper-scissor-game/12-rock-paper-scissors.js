 let score = JSON.parse(localStorage.getItem('score')) ||  {
          wins: 0,
          losses: 0,
          ties: 0 
        };

   updatescoreElement();

/*

      if (score === null){
       score = {
          wins: 0,
          losses: 0,
          ties: 0 
        };
      }


*/


let isAutoPlaying = false;

let intervalID;

    function autoPlay (){

      if (!isAutoPlaying){

         intervalID = setInterval(function(){
        const playerMove = pickComputerMove();
        playGame(playerMove);
      },1000);

       isAutoPlaying = true;

      }

      else {
        clearInterval(intervalID);
        isAutoPlaying = false;
      }
    
    }



      function playGame (playerMove) {
         const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors'){
            if (computerMove === 'scissors'){
            result = 'Tie.';
          }
          else if (computerMove === 'rock') {
            result = 'You lose';
          }
          else if (computerMove === 'paper') {
            result = 'You win';
        }
        }

      else if (playerMove === 'paper'){
        if (computerMove === 'paper') {
         result = 'Tie.';
      }
        else if (computerMove === 'scissors') {
        result = 'You lose';
      }
       else if (computerMove === 'rock') {
        result = 'You win';
    }
       }

     else if (playerMove === 'rock'){
      
      if (computerMove === 'rock') {
       result = 'Tie.';
      }
      else if (computerMove === 'paper') {
        result = 'You lose';
      }
      else if (computerMove === 'scissors') {
        result = 'You win';
      }
     }  

     if (result === 'You win'){
      score.wins += 1;
     }
     else if (result === 'You lose'){
      score.losses += 1;
     }
        
    else if (result === 'Tie.'){
      score.ties += 1;
    }

// this is how i acces the value from local storage later. linke name'message' 
    localStorage.setItem('score', JSON.stringify(score));
    
// after we save localstorage we need to update the score on the page.

    updatescoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${playerMove}-emoji.png"  class="move-icon">
    <img src="images/${computerMove}-emoji.png"  class="move-icon">
      Computer`;

    
      }

      function updatescoreElement () {

         document.querySelector('.js-score')
          .innerHTML = `
           wins: ${score.wins},losses: ${score.losses},Ties: ${score.ties} 
          `;
      }


      function pickComputerMove () {

         const randomNumber = Math.random();

          let computerMove = '';

          if (randomNumber >= 2 / 3 && randomNumber < 1){
            computerMove = 'scissors';
          }
          else if (randomNumber >= 1 / 3 && randomNumber < 2 /3){
            computerMove = 'paper';
          }
          else if (randomNumber >= 0 && randomNumber < 1 / 3){
            computerMove = 'rock';
          }

          return computerMove;
          // any thing after return is not gonna run.

      }