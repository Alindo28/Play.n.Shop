import { renderSettings } from "./settings.js";
import { gamesData } from "../data/games/gameData.js";

renderSettings()
let gamesGrid = document.getElementById("gamesGrid")

function renderGamezone(){
    for (let game of gamesData){
        let element = document.createElement("div")
        element.innerHTML = `
            <img class="gameIcon" src="${game.gameIcon}" alt="">
            <p class="gameName">${game.gameName}</p>
            <button class="playBut">Coming soon</button>`
            // <a href="${game.gameLink}"><button class="playBut">Play</button></a>

      element.classList.add("gameCard")
      gamesGrid.appendChild(element)
    }
}
renderGamezone()