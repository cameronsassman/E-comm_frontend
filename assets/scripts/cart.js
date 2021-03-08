// Get the modal
const cart = document.getElementById("cart01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == cart) {
    cart.style.display = "none";
  }
};

let cartList = [];

i = 0;

function add(prdct) {
  let cart = localStorage.getItem("cart");
  let cartList = JSON.parse(cart);
  console.log(cartList);
  cart ? cart : (cartList = []);
  console.log(cartList);
  document.getElementById("amount").innerHTML = cartList.length;
  cartList.push(prdct);
  console.log(cartList);
  localStorage.setItem("cart", JSON.stringify(cartList));
  createCart();
}

function createCart() {
  let cartItems = document.getElementById("cartItem");
  products = [];

  let cart = localStorage.getItem("cart");

  console.log("Your cart has these: ", JSON.parse(cart));
}

function showCart() {
  let carted = document.getElementById("cartItem");
}

function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));

  fetch("https://limitless-basin-17095.herokuapp.com/show-records/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(cart);
      let cartItems = [];

      data.forEach((dataItem) => {
        cart.forEach((cartItem) => {
          if (dataItem.id == cartItem) {
            cartItems.push(dataItem);
          }
        });
      });

      console.log(cartItems);
      document.getElementById("cartContainer").innerHTML = "";
      cartItems.forEach((item) => {
        let cartItem = createCartItem(item);
        document.getElementById("cartContainer").innerHTML += cartItem;
      });
      // console.log(cartItems);
    });
}

function createCartItem(prdct) {
  return `
  <span
                onclick="document.getElementById('cart01').style.display='none'"
                class="close-cart"
                title="Close Modal"
                >&times;</span
              >
  <div class="align-items">
  <img src=${prdct.image} />
          <div class="cart-info">
            <h2>${prdct.name}</h2>
            <p>${prdct.price}</p>
            </div>
            </div>`;
}
