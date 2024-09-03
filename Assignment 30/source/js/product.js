let backBtn = document.querySelector("#back");
let shoeTitle = document.querySelector("h1");
let shoeDesc = document.querySelector("p");
let shoeImage = document.querySelector("img");
let productsArray = [
  { id: 1, title: "Sport Shoe", price: 53, img: "images/1.png" },
  { id: 2, title: "Women Shoe", price: 81, img: "images/2.png" },
  { id: 3, title: "Boots", price: 34, img: "images/3.png" }
];
let locationParams = new URLSearchParams(location.search);
let mainProductID = locationParams.get("id");

let mainProductObject = productsArray.find(function (product) {
  return product.id === Number(mainProductID);
});

if (mainProductObject) {
  shoeTitle.innerHTML = mainProductObject.title;
  shoeImage.setAttribute("src", mainProductObject.img);
} else {
  location.href =
    "https://localhost/sabzlearn-js/247-coding-of-shoes-shop-project-2/source/";
}

backBtn.addEventListener("click", function () {
  history.back();
});
