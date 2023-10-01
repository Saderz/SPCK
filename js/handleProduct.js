let currentPage = 1;
const nextPageBtn = document.getElementById("next");
const previousPageBtn = document.getElementById("previous");
const getProducts = async () => {
  let products = [];
  // const response = await fetch(
  //   "https://65103f433ce5d181df5d0feb.mockapi.io/products"
  // );
  const url = new URL("https://65103f433ce5d181df5d0feb.mockapi.io/products");
  // Phân trang với page là số trang muốn tới còn limit là giới hạn trong 1 trang
  url.searchParams.append("page", currentPage);
  url.searchParams.append("limit", 7);
  // Sắp xếp các sản phẩm theo thứ tự giảm dần thời gian tạo (cái mới nhất thì lên đầu)
  url.searchParams.append("sortBy", "createdAt");
  url.searchParams.append("order", "asc");
  const response = await fetch(url);
  products = await response.json();

  const displayCard = (data) => {
    const boxRow = document.getElementsByClassName("row")[1];
    data.forEach((cardItem) => {
      const card = document.createElement("div");
      card.classList.add("col-sm-6", "col-md-4", "col-lg-3");
      const divBox = document.createElement("div");
      divBox.classList.add("box");
      const productLink = document.createElement("a");
      productLink.href = "";
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
      priceValue.innerHTML = " $" + cardItem.price ;
      productPrice.appendChild(priceValue);
      detailBox.appendChild(productName);
      detailBox.appendChild(productPrice);
      productLink.appendChild(detailBox);
  
      if(cardItem.status === "new") {
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
  
  displayCard(products);
};

const handleNextPage = () => {
  currentPage += 1;
  getProducts();
};

nextPageBtn.addEventListener("click", handleNextPage);

const handlePreviousPage = () => {
  currentPage -= 1;
  getProducts();
};

previousPageBtn.addEventListener("click", handlePreviousPage);

getProducts();