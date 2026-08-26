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
        console.log({name: a.value})
    } else if (init === 2) {
        console.log({age: a.value})
    } else if (init === 3) {
        console.log({hobby: a.value})
    } else if (init === 4) {
        console.log({favFood: a.value})
    } else if (init ===5) {
        finishing()
    } else {
        botEnd()
    }
}

function finishing() {
    console.log("Finishing . . .")
}

function botEnd() {
    console.log("Bot end . . .")
}
