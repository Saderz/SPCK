let products = [];

const displayProducts = () => {
  const boxRow = document.getElementsByClassName("row")[0];
  boxRow.innerHTML = "";
  products.forEach((cardItem) => {
    const card = document.createElement("div");
    card.classList.add("col-sm-6", "col-md-4", "col-lg-3");
    const divBox = document.createElement("div");
    divBox.classList.add("box");
    const productLink = document.createElement("a");
    productLink.href = "./product.html?productId=" + cardItem.id;
    divBox.appendChild(productLink);
    card.appendChild(divBox);

    const boxImg = document.createElement("div");
    boxImg.classList.add("img-box");
    const img = document.createElement("img");
    img.src = cardItem.image;
    boxImg.appendChild(img);
    productLink.appendChild(boxImg);

    const detailBox = document.createElement("div");
    detailBox.classList.add("detail-box");
    const productName = document.createElement("h6");
    productName.innerHTML = cardItem.name;
    const productPrice = document.createElement("h6");
    productPrice.innerText = " Price ";
    const priceValue = document.createElement("span");
    priceValue.innerHTML = " $" + cardItem.price;
    productPrice.appendChild(priceValue);
    detailBox.appendChild(productName);
    detailBox.appendChild(productPrice);
    productLink.appendChild(detailBox);

    if (cardItem.status === "new") {
      const newProduct = document.createElement("div");
      newProduct.classList.add("new");
      const newTag = document.createElement("span");
      newTag.innerHTML = "New";
      newProduct.appendChild(newTag);
      productLink.appendChild(newProduct);
    }

    boxRow.appendChild(card);
  });
};


let product = {};
let imageDe = {};

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

const getImageDetail = () => {
  fetch(
    `https://65103f433ce5d181df5d0feb.mockapi.io/products-detail/${productId}`
  )
    .then((res) => {
      return res.json();
    })
    .then((image) => {
      imageDe = image;
      displayImage();
    });
  };

const handleAddToCart = () => {
  const cartList = JSON.parse(localStorage.getItem("cartList"));
  if (cartList) {
    const productIndex = cartList.findIndex((item) => item.id === product.id);
    if (productIndex > -1) {
      cartList[productIndex].quantity += 1;
    } else {
      product.quantity = 1;
      cartList.push(product);
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));
  } else {
    product.quantity = 1;
    localStorage.setItem("cartList", JSON.stringify([product]));
  }
};

const displayProduct = () => {
  document.getElementById("product-img").src = product.image;
  document.getElementById("product-type").innerHTML = product.type;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = `${product.price} $`;
  const addBtn = document.getElementById("add-to-cart");
  const getProducts = async () => { 
    const url = new URL(`https://65103f433ce5d181df5d0feb.mockapi.io/products?type=${product.type}`);
    url.searchParams.append("page", 1);
    url.searchParams.append("limit", 4);
    const response = await fetch(url);
    products = await response.json();
    displayProducts();
  };
  getProducts();
  addBtn.addEventListener("click", handleAddToCart);
};

const displayImage = () => {
  document.getElementById("img-1").src = imageDe.imageDetail[0];
  document.getElementById("img-2").src = imageDe.imageDetail[1];
  document.getElementById("img-3").src = imageDe.imageDetail[2];
  document.getElementById("img-4").src = imageDe.imageDetail[3];
  $(".imageProduct").on("click", function (e) {
    document.getElementById("product-img").src = e.target.src;
  });
};

if (!productId) {
  window.location = "./product.html?productId=1";
} else {
  getProductDetail();
  getImageDetail();
};