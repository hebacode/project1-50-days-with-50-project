 const buttElem = document.querySelector('.js-play-btn');

    let randomNumber = Math.floor(Math.random() * 100 + 1);

    const inputElem = document.querySelector('.js-input-field');

  let guestNumber ;

buttElem.addEventListener('click' , () => 

  {

     const inputValue = Number(inputElem.value);

    if (inputValue < 1 || inputValue > 100 || isNaN(inputValue)){
      alert('Enter a number between 1 and 100');
      updateResult();

      return;

    }
 

    else if (inputValue === randomNumber) {
      guestNumber = 'You Got it!'
      console.log(guestNumber);
      updateResult();
      return;
    }
    
    else if (inputValue < randomNumber) {
      guestNumber = 'Too Low!';
      console.log(guestNumber);
      updateResult();

    }
    else {

      guestNumber = 'Too High!';
      console.log(guestNumber); 
      updateResult();

    };


     

inputElem.value = '';
inputElem.focus();

});

function updateResult () {

 document.querySelector('.js-show-result').innerHTML = guestNumber;

}
