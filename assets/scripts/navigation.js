function openNav() {
  // Get links from navigation
  const links = document.getElementById("navbar");

  //   Check styles on links
  links.style.width == "0px"
    ? (links.style.width = "100vw")
    : (links.style.width = "0px");
}
