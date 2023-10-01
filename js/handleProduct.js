const getProducts = async () => {
  let products = [];
  const response = await fetch(
    "https://65103f433ce5d181df5d0feb.mockapi.io/products"
  );
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

getProducts();