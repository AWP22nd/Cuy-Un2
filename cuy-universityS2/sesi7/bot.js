const q = document.getElementById("question")
const a = document.getElementById("answer")

let init = 0

const botSay = () => {
    return [
        "Hi!, I`m Skeclow. Who are you?"
    ]
}

q.innerHTML = botSay()[0]

function botStart() {
    init++
    if (init === 1) {
        console.log("HI BOSS")
    }
}
