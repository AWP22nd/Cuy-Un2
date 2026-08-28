const q = document.getElementById("question")
const a = document.getElementById("answer")

let init = 0

const botSay = (data) => {
    return [
        "Hi!, I`m Skeclow. Who are you?",
        `Hi ${data?.name}, What is your age?`,
        `Aight, you are ${data?.age}. What do you like doing? `,
        `WOW ${data?.hobby}, it is so amazing. BTW what is your fav food?`,
        `${data?.favFood}??? HELL YEAH, Looks delicious XD`
    ]
}

q.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({name : a.value })
    } else if (init === 2) {
        botDelay({age : a.value })
    } else if (init === 3) {
        botDelay({ hobby : a.value})
    } else if (init === 4) {
        botDelay({ favFood : a.value })
    } else if (init ===5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(answerUser) {
    console.log({usersData : usersData})
    setTimeout (() => {
        q.innerHTML = botSay(answerUser)[init]
    }, [200])
    usersData.push( a.value )
    a.value = ""
}

function finishing() {
    q.innerHTML = `Thank you ${usersData[0]}for your time :D`
    a.value = "Yeah, Thank you too!"
}

function botEnd() {
    window.location.reload()
}
