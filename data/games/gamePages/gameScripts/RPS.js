document.getElementById("rock").onclick = function(){playRound("rock")} 
document.getElementById("paper").onclick = function(){playRound("paper")} 
document.getElementById("scissor").onclick = function(){playRound("scissor")} 

let playerDisplay = document.getElementById("pChoice");
let playerPoint = document.getElementById("pp");
let opponentPoint = document.getElementById("op");
let opponentDisplay = document.getElementById("oChoice");
let resultDisplay = document.getElementById("result");
let choices = ["rock","paper","scissor"]
let pPoint = 0;
let oPoint = 0;

function playRound(choice){
    let opponent = choices[Math.floor(Math.random() * 3)]
    let result = ""

    switch (opponent){
        case "rock":
            opponentDisplay.textContent = "👊";
            break;
        case "paper":
            opponentDisplay.textContent = "✋";
            break;
        case "scissor":
            opponentDisplay.textContent = "✌️";
            break;
    }
    switch(choice){
        case "rock":
            playerDisplay.textContent = "👊"
            break;
        case "paper":
            playerDisplay.textContent = "✋"
            break;
        case "scissor":
            playerDisplay.textContent = "✌️"
            break;
    }

    if (choice === opponent){
        result = "It's a Tie"
    }
    else{
        switch(choice){
            case "rock":
                result += opponent === "scissor" ? "You Won" : "You lose";
                break;
            case "paper":
                result += opponent === "rock" ? "You Won" : "You lose";
                break;
            case "scissor":
                result += opponent === "paper" ? "You Won" : "You lose";
                break;
        }
    }
    if (result === "You Won"){
        resultDisplay.style.color = "#33eb13"
        pPoint += 1
    }
    else if (result === "You lose"){
        resultDisplay.style.color = "#eb2c13"
        oPoint += 1
    }
    else{
        resultDisplay.style.color = "#6b636e"
    }

    resultDisplay.textContent = result;
}