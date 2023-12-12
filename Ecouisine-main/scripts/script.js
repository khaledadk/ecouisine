/*
=============== 
Go to Top Button
===============
*/
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*
=============== 
Nav Height Variable
===============
*/
const navigationHeight = document.querySelector('nav').offsetHeight;
document.documentElement.style.setProperty('--nav-padding', navigationHeight - 5 + 'px');

window.addEventListener('resize', function(event){
  const navigationHeight = document.querySelector('nav').offsetHeight;
  document.documentElement.style.setProperty('--nav-padding', navigationHeight - 5  + 'px');
});

/*
=============== 
Click Sound
===============
*/

const popSound = new Audio('../others/pop.wav');
const clickSound = new Audio('../others/click.wav');

const allButtons = document.querySelectorAll('#checklist > input');
console.log(allButtons)
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function() {
    if (this.checked) {
      popSound.currentTime=0;
      popSound.play();
    } else {
      clickSound.currentTime=0;
      clickSound.play();
    }
  });
}
