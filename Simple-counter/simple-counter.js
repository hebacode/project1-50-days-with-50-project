let addCounter = 0;

function counter (counterValue) {
  
if (addCounter < counterValue) {

  addCounter ++;
  console.log(addCounter);
}


else if ( counterValue < addCounter ){
  addCounter -=1;
  console.log(addCounter);
}

  counterFunc();
  } 


  function counterFunc() {
    const numberElement = document.querySelector('.js-number')
    .innerHTML = addCounter;
  }

  

