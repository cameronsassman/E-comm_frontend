function addProduct() {
  const inputs = document.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/add-record/", {
    method: "POST",
    body: JSON.stringify({
      name: inputs[0].value,
      character: inputs[1].value,
      style: inputs[2].value,
      gender: inputs[3].value,
      colour: inputs[4].value,
      size: inputs[5].value,
      price: inputs[6].value,
      description: inputs[7].value,
      image: inputs[8].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("item successfully added");
      document.getElementById("create_form").reset();
    });
}
// fetch("https://limitless-basin-17095.herokuapp.com/add-record/"
