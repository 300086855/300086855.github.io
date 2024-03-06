
const hours = new Date().getHours(); // get the current hour


const isMorning = hours >= 4 && hours < 12; // is it morning?
const isAfternoon = hours >= 12 && hours < 17; // is it afternoon?
const isEvening = hours >= 17 || hours < 4; // is it evening?


const getMessage = () => {
    
    if (isMorning) return "Good Morning!"
    
    if (isAfternoon) return "Good Afternoon!"

    if (isEvening) return "Good Evening!"

    return ""
}

const message = getMessage()

document.querySelector('#welcome h1').textContent = message
document.querySelector('#welcome p').textContent = `The time is ${hours} hours`

const secretMessage = "I love to code most times... maybe..."
localStorage["It's a secret to everybody."] = secretMessage