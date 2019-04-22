//modal for the greeting message
//source: https://www.w3schools.com/howto/howto_css_modals.asp


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("type-greeting");

// Get the <span> element that closes the modal
var modalClose = document.getElementsByClassName("modal-content")[0];

//get the paragraph element that holds the text
var modalText = document.getElementById("modalP");

// When the user clicks on the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }
var i = 0;
function showModal(e) {
  modal.style.display = "block";
  modalText.innerHTML = "";
  i = 0;
  typeWriter();
}

function hideModal(e){
  modal.style.display="none";
}

btn.addEventListener('click', showModal);
btn.addEventListener('focus', showModal);
btn.addEventListener('blur', hideModal);

// When the user clicks on <span> (x), close the modal
modalClose.onclick = function() {
  hideModal(null);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Typewriter for the greeting message
//https://www.w3schools.com/howto/howto_js_typewriter.asp
var txt = 'Hi! I’m Andrea. I love making usable products. An experienced business analyst, I am now adding UX skills to my toolbox!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    modalText.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
