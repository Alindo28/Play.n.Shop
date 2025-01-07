export let user = JSON.parse(localStorage.getItem("user"))

if (!user){
    user = {
        tokens : 0
    }

    saveUserTokens(0)
}

export function saveUserTokens(newAmount){
    user.tokens = newAmount
    localStorage.setItem("user",JSON.stringify(user))
}


