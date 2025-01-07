
export function renderSettings(){
    let menu1But = document.getElementById("menu1");
let menu2But = document.getElementById("menu2");
let navTab = document.getElementById("settings-bg");
let navMain = document.getElementById("settings");

menu1But.addEventListener("click",function(){
    navTab.style.display = "block";
    navMain.style.animationName = "settingsAppear";
    document.body.style.overflow = "hidden";
})

menu2But.addEventListener("click",function(){
    navMain.style.animationName = "settingsDisappear";
    document.body.style.overflow = "visible";
})

navMain.addEventListener("animationend",event => {
    if (event.animationName === "settingsDisappear"){
        navTab.style.display = "none";
    } 
})
let tokenAmount = JSON.parse(localStorage.getItem("user")).tokens
document.getElementById("balance").innerText = tokenAmount
}

