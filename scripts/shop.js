import { products } from "../data/products.js";
import { renderSettings } from "./settings.js";
import { saveUserTokens } from "../data/user.js";

let grid = document.getElementById("products");


function renderShop() {
    let user = JSON.parse(localStorage.getItem("user"))
    let html = "";
    for (let product of products) {
    let req = user.tokens >= product.price ? "able" : "unable";
    let balanceReq = user.tokens >= product.price ? "enoughbalance" : "lowbalance";
    html += `<div class="productCard">
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p class="tokenReq"><span class=${req}>${product.price}</span> Tokens</p>
            <button data-product-name="${product.name}" class="redeemBut ${balanceReq}">Redeem</button>
        </div>`;
  }
  grid.innerHTML = html

  renderSettings()

  document.querySelectorAll(".redeemBut").forEach((button) => {
    button.addEventListener("click", function(){
      let productName = button.dataset.productName;
      createConfirmation(productName,user);
    });
  });
}

function createConfirmation(productName,user) {
  let matchedProduct;
  products.forEach((item) => {
    if (item.name === productName) {
      matchedProduct = item;
    }
  });

  if (user.tokens >= matchedProduct.price){
    document.body.style.overflow = "hidden";
    let redeemPage = document.createElement("div")
  redeemPage.id = "redeemPage"
   redeemPage.innerHTML = `<div id="redeemMain">
            <img src="${matchedProduct.image}" alt="">
            <p class="itemName">${matchedProduct.name}</p>
            <p>Balance: <span class="userBalance">${user.tokens}</span> Tokens</p>
            <p>Price: <span class="price">${matchedProduct.price}</span> Tokens</p>

            <div class="confirmationButs">
                <button data-price="${matchedProduct.price}" class="confirmBut">Confirm</button>
                <button class="cancelBut">Cancel</button>
            </div>
            
        </div>`;
    document.body.appendChild(redeemPage)
        

  document.querySelectorAll(".confirmBut").forEach((button) => {
    button.addEventListener("click", (event) => {
      let price = Number(button.dataset.price);
      confirm(price,user);
    });
  });

  document.querySelectorAll(".cancelBut").forEach((button) => {
    button.addEventListener("click", (event) => {
      cancel()
    });
  });
  }

  

}

function confirm(price,user) {
  let newAmount =  user.tokens - price;
  saveUserTokens(newAmount)
  document.body.style.overflow = "visible";
  document.getElementById("redeemPage").remove();
  renderShop()
}

function cancel(){
    document.body.style.overflow = "visible";
  document.getElementById("redeemPage").remove();
  renderShop()
}

renderShop();


