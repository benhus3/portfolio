document.addEventListener("DOMContentLoaded", function () {   //needs to be in this function else doesnt work as element isnt loaded
    console.log("test");

  // Select all elements with the class 'card-inner'
  const cards = document.querySelectorAll('.card-inner');
  const wrappers = document.querySelectorAll('.card-wrapper');
  const hideOnCardClickElements = document.querySelectorAll('.hide-on-click');


  function toggleCard(card, wrapper) {
    card.classList.toggle('is-flipped');
    wrapper.classList.toggle('card-effect');
    wrapper.classList.toggle('card-effect-remove');
  }


  
  for (let i = 0; i < wrappers.length; i++) {
    cards[i].addEventListener('click', function () {
      // Set the others to display none
      for (let j = 0; j < wrappers.length; j++) {
        if (j !== i) {
          wrappers[j].classList.toggle('hide-card');
          wrappers[j].classList.toggle('show-card');
        }
      }
      wrappers[i].classList.toggle('show-card');
      toggleCard(cards[i], wrappers[i]);

      // Hide heading and paragraph elements when a card is clicked
      hideOnCardClickElements.forEach(element => {
        element.classList.toggle('hidden');
      });
    });
  }


  
//COMMENTED FOR NOW AS CANT SELECT LAST CARD AS OF NOW
// //scroll event listener to reset the cards
// window.addEventListener('scroll', function () {

//   //check all cards
//   for (let i = 0; i < cards.length; i++) {
//     if (cards[i].classList.contains('is-flipped')) {
//       // Hide heading and paragraph elements when a card is clicked
//       hideOnCardClickElements.forEach(element => {
//         element.classList.toggle('hidden');
//       });

//       wrappers[i].classList.toggle('show-card')
//       toggleCard(cards[i], wrappers[i]);
//     }
//     else if  (wrappers[i].classList.contains('hide-card')) {
//       wrappers[i].classList.remove('hide-card')
//       wrappers[i].classList.add('show-card');
//     }
//   }

  
// });

//need to add something if a card is pressed while its fading away as that doesnt work properly*/

});
  

  

  