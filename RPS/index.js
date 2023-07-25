//  Declaring a function that gets the computer choice

const gameChoices = ["Rock ", "Paper", "Scissors"];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * gameChoices.length);
    let computerChoice = gameChoices[randomChoice]

    const element = document.getElementById('computer_choice')
    element.innerHTML = computerChoice;

    console.log("The Random Computer Choice is:",computerChoice)
}

function getUserChoice() {
    let clickedButtons = document.getElementsByClassName("choice_button")

    for (let i = 0; i < clickedButtons.length; i++) {
        clickedButtons[i].addEventListener("click", function(event) {
            const buttonValue = event.target.value;

            console.log(buttonValue);

            const element = document.getElementById("player_choice");
            element.innerHTML = buttonValue;
        })
    }

    // clickedButton.addEventListener("click", function(event) {
    //     const buttonValue = event.target.value;

    //     console.log(buttonValue)

    //     const element = document.getElementById("player_choice")
    //     element.innerHTML = buttonValue;
    // })
}

getComputerChoice()
getUserChoice()
