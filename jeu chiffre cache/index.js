function getDifficulty(){
    let level = 0;
    while(level <= 0 || level >= 6){
        alert('chose difficulty from 1 to 5');
        level = prompt("chose difficulty from 1 to 5");
    }
    return level;
}
let button = document.getElementById('play');
button.addEventListener('click', ()=> {
    let level = getDifficulty();
    alert(`you chose level ${level}: you have ${8 - level} guesses. The number is between 1 and ${level * 4}`);
    let numCache = Math.floor(Math.random() * 4 * level) + 1;
    let tries = 8 - level;
    let playerChoice = prompt(`make a guess for a number between 1 and ${level * 4}`);
    while(tries > 0){
        if(playerChoice == numCache){
            alert("you win!");
            break;
        } else {
            tries --;
            playerChoice = prompt(`make a guess for a number between 1 and ${level * 4}`);
        }
    }
    if (tries === 0){
        alert('you loose!');
    }
});
