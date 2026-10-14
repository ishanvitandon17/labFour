

let answer = confirm("Are you ready?");
console.log(answer);

function showOdds() {
    document.getElementById("result").textContent =
        "The odds are never in your favour. May the strongest survive!";
}

function checkAnswer() {
    let answer = confirm("Yes to Enter | Cancel to try and escape back to your District.");
    console.log(answer);

    if (answer === true) {
        document.getElementById("result").textContent =
            "You are in the arena. The Capitol and President Snow are watching. Good luck!";
    } else {
        document.getElementById("result").textContent =
            "The Capitol is waiting... There is no escape. Will you change your mind?";
    }
}
