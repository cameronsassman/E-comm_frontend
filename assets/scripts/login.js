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
      lform.reset();
    });
}
