function showProducts() {
  let list = document.getElementById("product-items");

  // fetch("https://limitless-basin-17095.herokuapp.com/show-records/")
  fetch("http://127.0.0.1:5000/show-records/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => createtr(item));
    });
}

function createtr(product) {
  const tableitem = ` <tr>
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.character}</td>
    <td>${product.style}</td>
    <td>${product.gender}</td>
    <td>${product.colour}</td>
    <td>${product.size}</td>
    <td>${product.price}</td>
    <td>${product.description}</td>
    <td>${product.image}</td>
    <td>
      <a
        href="https://limitless-basin-17095.herokuapp.com/show-records/${product.id}/"
        >Delete</a
      >
    </td>
  </tr>`;
  let list = document.getElementById("product-items");
  console.log("hello");
  list.innerHTML += tableitem;
}

showProducts();
