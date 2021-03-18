// Get the modal
const cart = document.getElementById("cart01");

let cartList = [];

i = 0;
// add product
function add(prdct) {
  // using local storage
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart ? cart : (cart = [0]);
  // getting products from database
  fetch("https://limitless-basin-17095.herokuapp.com/show-records/")
    .then((res) => res.json())
    .then((data) => {
      // filtering selected items
      let selectedItem = data.filter((product) => {
        return product.id == prdct;
      });
      console.log(selectedItem[0]);
      cart.push(selectedItem[0]);

      if (selectedItem.length > 0) {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    });
  createCart();
}
// creating cart items
function createCart() {
  let cartItems = document.getElementById("cartItem");
  products = [];
  // using local storage
  let cart = localStorage.getItem("cart");
  document.getElementById("amount").innerHTML = JSON.parse(
    localStorage.getItem("cart")
  ).length;
  console.log("Your cart has these: ", JSON.parse(cart));
}
// show cart items
function showCart() {
  let carted = document.getElementById("cartItem");
}

function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart ? cart : (cart = []);

  fetch("https://limitless-basin-17095.herokuapp.com/show-records/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(cart);

      let cartItems = [];

      data.forEach((dataItem) => {
        cart.forEach((cartItem) => {
          if (dataItem.id == cartItem.id) {
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
      calcTotal();
      // console.log(cartItems);
    });
}
// displaying cart data in html format
function createCartItem(prdct) {
  return `
  <span
                onclick="document.getElementById('cart01').style.display='none'"
                class="close-cart"
                title="Close Modal"
                >&times;</span
              >           
  <div class="align-items" id="totalProduct${prdct.id}" product-price=${prdct.price}>
  <img src=${prdct.image} />
          <div class="cart-info">
            <h2>${prdct.name}</h2>
            <p>${prdct.price}</p>
            <button onclick="removeProduct(${prdct.id})">remove</button>
            </div>
            </div>
            `;
}
// calculating the total price of products
function calcTotal() {
  // Get all elements with product-price attribute
  let products = document.querySelectorAll("[product-price]");
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += parseInt(
      products[i].getAttribute("product-price").substring(1)
    );
  }

  console.log(totalPrice);
  let productTotal = document.getElementsByClassName("cart-total")[0];

  productTotal.innerHTML += totalPrice;
}
// removing products
function removeProduct(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart ? cart : (cart = []);
  console.log(cart);
  fetch("https://limitless-basin-17095.herokuapp.com/show-records/")
    .then((res) => res.json())
    .then((data) => {
      // removing products by its id
      let cartMinusItem = data.filter((product) => {
        return product.id == id;
      });
      console.log(cartMinusItem);
      let newCart = cart.filter((product) => {
        return !deepEqual(product, cartMinusItem[0]);
      });
      console.log(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log(JSON.parse(localStorage.getItem("cart")));
      window.location.reload();
    });

  renderCart();
}
// deepequal removing from cart
function deepEqual(product, cartMinusItem) {
  const keys1 = Object.keys(product);
  const keys2 = Object.keys(cartMinusItem);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = product[key];
    const val2 = cartMinusItem[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === "object";
}
// checkout clears cart and refreshes page
function deleteItem() {
  window.localStorage.clear();
  alert("Thank you for your purchase");
  window.location.reload();
}
