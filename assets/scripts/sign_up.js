// Get the modal
const signup = document.getElementById("su01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signup) {
    signup.style.display = "none";
  }
};

function createAccount() {
  let form = document.getElementById("createAcc");
  const inputs = form.getElementsByTagName("input");
  let user = {
    name: inputs[0].value,
    surname: inputs[1].value,
    email: inputs[2].value,
    username: inputs[3].value,
    password: inputs[4].value,
    inCart: "",
  };

  console.log(user);
  fetch("https://limitless-basin-17095.herokuapp.com/add-user/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("user successfully added");
      form.reset();
    })
    .catch((err) => console.log(err));
}
