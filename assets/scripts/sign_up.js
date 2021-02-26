// Get the modal
const signup = document.getElementById("su01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signup) {
    signup.style.display = "none";
  }
};
