function searchProduct() {
  const searchForm = document.getElementById("search-product");
  const search = searchForm.getElementsByTagName("input")[0].value;
}
fetch("https://limitless-basin-17095.herokuapp.com/show-records/")
.then((response) => response.json())
.then((json) => {
  console.log(json);
  console.log(search);
  if (search) {
      let matchedSearch = json.filter((searchProduct) => {
          return searchProduct.character == search;
      });
      document.getElementById("")
  }