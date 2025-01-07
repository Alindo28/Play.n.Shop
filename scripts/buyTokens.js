import { renderSettings } from "./settings.js";
import {packages} from "../data/packages.js"
import {saveUserTokens} from "../data/user.js";

let packagesGrid = document.getElementById("packages")


function createOkPage(packPrice,packAmount){
    let user = JSON.parse(localStorage.getItem("user"))
    document.body.style.overflow = "hidden";
    let okpage = document.createElement("div")
    okpage.innerHTML = 
        `<div id="token-purchase">
            <img id="checkmark" src="images/1398913_circle_correct_mark_success_tick_icon.png" alt="">
            <p id="purchasetext">Your purchase of <span id="amount">${packAmount}</span> tokens was successful</p>
            <button id="ok">OK</button>
        </div>`
    okpage.id = "token-purchase-bg"
    document.body.appendChild(okpage)

    document.getElementById("ok").addEventListener("click",event => {
        document.body.style.overflow = "visible";
        let newAmount = user.tokens + Number(packAmount)
        saveUserTokens(newAmount)
        document.getElementById("token-purchase-bg").remove()
        renderSettings()
    })
}

function renderBuyPage(){
    for (let pack of packages){
        let packageCard = document.createElement("div");
        packageCard.innerHTML = `
            <p class="packageAmount">${pack.amount} tokens</p>
            <p class="packagePrice">${pack.price} USD</p>
            <button data-amount="${pack.amount}" data-price="${pack.price}" class="packageBuy">Buy</button>`
        
        packageCard.classList.add("package")
        packagesGrid.appendChild(packageCard)
    }

    document.querySelectorAll(".packageBuy").forEach(but => {
        but.addEventListener("click",event => {
            let packPrice = but.dataset.price
            let packAmount = but.dataset.amount
            createOkPage(packPrice,packAmount)
        })
    })
}

renderSettings()
renderBuyPage()