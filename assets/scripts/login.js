function loginForm() {
  let lform = document.getElementById("loginUser");
  let inputs = lform.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  let users;
  fetch("https://limitless-basin-17095.herokuapp.com/show-users/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      users = json;
      console.log(username, password, users);

      loggedin = users.filter((user) => {
        return user.username == username && user.password == password;
      });
      alert("successfully logged in");
      console.log(json);
      // lform.reset();
      if (loggedin.length >= 1) {
        localStorage.setItem("user-logged", JSON.stringify(username, password));
        window.location.href = `./index.html`;
        console.log("worked");
      }
    });
}

function out() {
  localStorage.removeItem("user-logged");
  alert("See you again");
  window.location.href = `./index.html`;
}
