// Get data from URL
const params = new URLSearchParams(window.location.search);
let category = params.get("category");
let gender = params.get("gender");
let character = params.get("character");
let size = params.get("size");

function getProducts() {
  let list = document.getElementById("cardList");

  fetch("http://127.0.0.1:5000/show-records/")
    .then((res) => res.json())
    .then((data) => {
      data = shuffle(data);
      console.log(data);
      if (category) {
        let filteredItems = data.filter((product) => {
          console.log(product.style.toLowerCase(), category);

          return product.style.toLowerCase() == category;
        });
        console.log(filteredItems);
        filteredItems.forEach((sale, index) => {
          console.log(index, sale);
          let item = createItem(sale);
          list.innerHTML += item;
        });
      } else if (character) {
        let filteredItems = data.filter((product) => {
          console.log(product.character.toLowerCase(), character);

          return product.character.toLowerCase() == character;
        });
        console.log(filteredItems);
        filteredItems.forEach((sale, index) => {
          console.log(index, sale);
          let item = createItem(sale);
          list.innerHTML += item;
        });
      } else if (size) {
        let filteredItems = data.filter((product) => {
          console.log(product.size.toLowerCase(), size);

          return product.size.toLowerCase() == size;
        });
        console.log(filteredItems);
        filteredItems.forEach((sale, index) => {
          console.log(index, sale);
          let item = createItem(sale);
          list.innerHTML += item;
        });
      } else if (gender) {
        let filteredItems = data.filter((product) => {
          console.log(product.gender.toLowerCase(), gender);

          return product.gender.toLowerCase() == gender;
        });
        console.log(filteredItems);
        filteredItems.forEach((sale, index) => {
          console.log(index, sale);
          let item = createItem(sale);
          list.innerHTML += item;
        });
      } else {
        data.forEach((sale, index) => {
          console.log(index, sale);

          let item = createItem(sale);
          list.innerHTML += item;
        });
      }
    });
}

getProducts();

function createItem(shop) {
  const listItem = `
  <li class="card">
    <img src=${shop.image}>
    <p class="details">
    <a href="./product.html?productID=${shop.id}">${shop.name} ~ ${shop.colour}</a>
    <span class="font-fam">${shop.price}</span>
    </p>
    </li>`;
  return listItem;
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
