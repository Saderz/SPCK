let products = [];
let products2 = [];
let currentPage = 1;

// const productsList = document.getElementById("products-list");
// const nameElm = document.getElementById("name");
// const priceElm = document.getElementById("price");
// const quantityElm = document.getElementById("quantity");
// const addBtn = document.getElementById("add-btn");

const displayProducts = () => {
  const boxRow = document.getElementsByClassName("row")[1];
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

const getProducts = async () => {
  const url = new URL("https://65103f433ce5d181df5d0feb.mockapi.io/products");
  // Phân trang với page là số trang muốn tới còn limit là giới hạn trong 1 trang
  url.searchParams.append("page", currentPage);
  url.searchParams.append("limit", 8);
  // Sắp xếp các sản phẩm theo thứ tự giảm dần thời gian tạo (cái mới nhất thì lên đầu)
  url.searchParams.append("sortBy", "createdAt");
  url.searchParams.append("order", "asc");
  const response = await fetch(url);
  products = await response.json();
  displayProducts();
};

const url2 = new URL("https://65103f433ce5d181df5d0feb.mockapi.io/products");
const response2 = await fetch(url2);
products2 = await response2.json();
const totalPages = Math.ceil(products2.length / 8);

if (window.location.href.indexOf("shop") > -1) {
  const nextPageBtn = document.getElementById("next");
  const previousPageBtn = document.getElementById("previous");
  
  if (currentPage = 1) {
    previousPageBtn.style.opacity = "0";
    previousPageBtn.style.pointerEvents = "none";
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      currentPage ++;
      console.log(currentPage);
      if (currentPage !== 1) {
        previousPageBtn.style.opacity = "1";
        previousPageBtn.style.pointerEvents = "auto";
      };
      if (currentPage == totalPages) {
        nextPageBtn.style.opacity = "0";
        nextPageBtn.style.pointerEvents = "none";
      };
      getProducts();
    }
  };
  
  nextPageBtn.addEventListener("click", handleNextPage);
  
  const handlePreviousPage = () => {
    if (currentPage <= totalPages) {
      currentPage--;
      console.log(currentPage);
      if (currentPage === 1) {
        previousPageBtn.style.opacity = "0";
        previousPageBtn.style.pointerEvents = "none";
      };
      if (currentPage !== totalPages) {
        nextPageBtn.style.opacity = "1";
        nextPageBtn.style.pointerEvents = "auto";
      };
      getProducts();
    }
  };

  previousPageBtn.addEventListener("click", handlePreviousPage);
};

getProducts();