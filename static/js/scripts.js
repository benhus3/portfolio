document.addEventListener("DOMContentLoaded", function () {   //needs to be in this function else doesnt work as element isnt loaded
    console.log("test");

  // Select all elements with the class 'card-inner'
  const cards = document.querySelectorAll('.card-inner');
  const wrappers = document.querySelectorAll('.card-wrapper');
  const body = document.querySelector('body');


  function toggleCard(card, wrapper) {
    card.classList.toggle('is-flipped');
    wrapper.classList.toggle('card-effect');
    wrapper.classList.toggle('card-effect-remove');
  }


  for (let i = 0; i < wrappers.length; i++) {
    cards[i].addEventListener('click', function () {
      //set the others to display none
      for (let j = 0; j < wrappers.length; j++) {
        if (j !== i) {
          wrappers[j].classList.toggle('hide-card');
        }
      }
      toggleCard(cards[i], wrappers[i]);
    });


  }

//scroll event listener to reset the cards
window.addEventListener('scroll', function () {
  //check all cards
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains('is-flipped')) {
      toggleCard(cards[i], wrappers[i]);
    }
    else if  (wrappers[i].classList.contains('hide-card')) {
      wrappers[i].classList.toggle('hide-card')
    }
  }
});

});
  

  

  