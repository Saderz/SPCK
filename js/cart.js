let prodcuts = {};

const displayProductsCart = () => {
  const tab = document.getElementById("productLI");
  const totalPrice = document.getElementById("TotalPriceDislay");
  products.forEach((item) => {
    const trEle = document.createElement("tr");
    const tdEle1 = document.createElement("td");
    const tdEle2 = document.createElement("td");
    const tdEle3 = document.createElement("td");

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("cart-info");

    const productIMG = document.createElement("img");
    productIMG.src = item.image;

    const divInfo = document.createElement("div");
    const productName = document.createElement("p");
    productName.innerHTML = item.name;
    const productPrice = document.createElement("small");
    productPrice.innerHTML = item.price + " $";
    const pdCss = document.createElement("br");

    divInfo.appendChild(productName);
    divInfo.appendChild(productPrice);
    divInfo.appendChild(pdCss);

    cardInfo.appendChild(productIMG);
    cardInfo.appendChild(divInfo);

    tdEle1.appendChild(cardInfo);

    const productQuantity = document.createElement("div");
    productQuantity.classList.add("quantity");
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = item.quantity;
    quantityInput.min = "1";
    quantityInput.max = "9";

    productQuantity.appendChild(quantityInput);
    tdEle2.appendChild(productQuantity);

    tdEle3.classList.add("subtotalPrice");
    tdEle3.innerHTML = item.price*item.quantity + " $";

    trEle.appendChild(tdEle1);
    trEle.appendChild(tdEle2);
    trEle.appendChild(tdEle3);

    tab.appendChild(trEle);
  });
  var data = document.querySelectorAll(".subtotalPrice");
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum = sum + parseFloat(data[i].childNodes[0].nodeValue);
  }
  totalPrice.innerHTML = sum + " $";
};

const getProductsCart = () => {
  products = JSON.parse(localStorage.getItem("cartList"));
  displayProductsCart();
}

getProductsCart();

jQuery(
  '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
).insertAfter(".quantity input");
jQuery(".quantity").each(function () {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find(".quantity-up"),
    btnDown = spinner.find(".quantity-down"),
    min = input.attr("min"),
    max = input.attr("max");

  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
  btnDown.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
});