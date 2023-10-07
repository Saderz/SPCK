$(document).ready(function () {
  $(".color-choose input").on("click", function () {
    var headphonesColor = $(this).attr("data-image");

    $(".active").removeClass("active");
    $(".left-column img[data-image = " + headphonesColor + "]").addClass(
      "active"
    );
    $(this).addClass("active");
  });
});

let product = {};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("productId");

const getProductDetail = () => {
  fetch(`https://65103f433ce5d181df5d0feb.mockapi.io/products/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      product = data;
      displayProduct();
    });
};

const handleAddToCart = () => {
  const cartList = JSON.parse(localStorage.getItem("cartList"));
  if (cartList) {
    cartList.push(product);
    localStorage.setItem("cartList", JSON.stringify(cartList));
  } else {
    localStorage.setItem("cartList", JSON.stringify([product]));
  }
};

const displayProduct = () => {
  document.getElementById("product-img").src = product.image;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = `${product.price}$`;
  const addBtn = document.getElementById("add-to-cart");
  addBtn.addEventListener("click", handleAddToCart);
};

if (!productId) {
  alert("Khong co san pham nao duoc chon");
} else {
  getProductDetail();
}
