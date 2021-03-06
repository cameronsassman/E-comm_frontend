function getProducts() {
  let list = document.getElementById("cardList");
  // http://127.0.0.1:5000/show-records/
  fetch("https://limitless-basin-17095.herokuapp.com/show-records/")
    .then((res) => res.json())
    .then((data) => {
      data = shuffle(data);
      data.forEach((sale, index) => {
        if (index < 6) {
          console.log(index, sale);
          let item = createItem(sale);
          list.innerHTML += item;
        }
      });
    });
}

getProducts();

function createItem(shop) {
  const listItem = `
  <li class="card">
    <img src=${shop.image}/>
    <p class="details">
    <a href="./product.html?productID=${shop.id}"> ${shop.name} ~ ${shop.colour} </a>
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
