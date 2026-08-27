const q = document.getElementById("question")
const a = document.getElementById("answer")

let init = 0

const botSay = (data) => {
    return [
        "Hi!, I`m Skeclow. Who are you?",
        `Hi ${data?.name}, What is your age?`,
        `Aight you are ${data?.age}, What do you like doing? `,
        `WOW ${data?.hobby}, it is so amazing. BTW what is your fav food?`,
        `${data?.favFood}??? HELL YEAH, Looks delicious XD`
    ]
}

q.innerHTML = botSay()[0]

function botStart() {
    init++
    if (init === 1) {
        setTimeout(botDelay({name : a.value }), 100)
    } else if (init === 2) {
        setTimeout(botDelay({age : a.value }), 100)
    } else if (init === 3) {
        setTimeout(botDelay({ hobby : a.value}), 100)
    } else if (init === 4) {
        setTimeout(botDelay({ favFood : a.value }), 100)
    } else if (init ===5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(answerUser) {
    q.innerHTML = botSay(answerUser)[init]
}

function finishing() {
    console.log("Finishing . . .")
}

function botEnd() {
    console.log("Bot end . . .")
}
