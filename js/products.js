import products from "./products.json" assert { type: "json" };

(function burgerSwitch() {
  let burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
})();

(function cartSwitch() {
  let cart = document.querySelector(".cart"),
    basket = document.querySelector(".icon-basket"),
    close = document.querySelector(".cart-close");

  basket.addEventListener("click", function () {
    cart.classList.toggle("active");
  });
  close.addEventListener("click", function () {
    cart.classList.remove("active");
  });
})();

(function accordionSwitch() {
  const accordion = document.getElementsByClassName("container");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
})();

(function productsGeneration(data) {
  data.sort(() => Math.random() - 0.5);

  for (let i = 0; i < data.length; i++) {
    let productsField = document.querySelector(".products-field");

    let productSection = document.createElement("div");
    productSection.className = "product-section";
    productsField.appendChild(productSection);

    let productPrice = document.createElement("p");
    productPrice.className = "product-price";
    productPrice.innerHTML = data[i].price + "$";
    productSection.appendChild(productPrice);

    let productImg = document.createElement("img");
    productImg.className = "product-img";
    productImg.src = data[i].link;
    productSection.appendChild(productImg);

    let productInfo = document.createElement("div");
    productInfo.className = "product-info";
    productSection.appendChild(productInfo);

    let productName = document.createElement("h2");
    productName.className = "product-name";
    productName.innerHTML = data[i].name;
    productInfo.appendChild(productName);

    let productButton = document.createElement("div");
    productButton.className = "product-button";
    productInfo.appendChild(productButton);

    let productButtonMinus = document.createElement("button");
    productButtonMinus.className = "product-button-minus";
    productButtonMinus.innerHTML = "-";
    productButton.appendChild(productButtonMinus);

    let productButtonValue = document.createElement("input");
    productButtonValue.className = "product-button-value";
    productButtonValue.setAttribute("type", "number");
    productButtonValue.value = 0;
    console.log(productButtonValue.value);
    productButton.appendChild(productButtonValue);

    let productButtonPlus = document.createElement("button");
    productButtonPlus.className = "product-button-plus";
    productButtonPlus.innerHTML = "+";
    productButton.appendChild(productButtonPlus);
  }
})(products);
