function addProduct() {
  const insert = document.getElementsByTagName("input");

  fetch("https://limitless-basin-17095.herokuapp.com/add-record/", {
    method: "POST",
    body: JSON.stringify({
      name: insert[0].value,
      character: insert[1].value,
      style: insert[2].value,
      gender: insert[3].value,
      colour: insert[4].value,
      size: insert[5].value,
      price: insert[6].value,
      description: insert[7].value,
      image: insert[8].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("item successfully added");
      document.getElementById("create_form").requestFullscreen();
    });
}
