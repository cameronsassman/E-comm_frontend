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
  if (i >= 0) {
    document.getElementById("amount").innerHTML = i += 1;
  }
  cartList.push(prdct);
  console.log(cartList);
  createCart();
}

function createCart() {
  let cartItems = document.getElementById("cartItem");
  products = [];
  cartItems.innerHTML = "";
  cartList.forEach((item) => {
    products = Items.filter((clothing) => {
      return clothing.prdct == item;
    });
    products.forEach((product) => {
      cartItems.innerHTML += `
      <img src=${prdct.image} />
              <div class="cart-info">
                <p>${prdct.name}</p>
                <p>${prdct.price}</p>
                <p>Size:${prdct.size}</p>`;
    });
  });
}

function showCart() {
  let carted = document.getElementById("cartItem");
}
