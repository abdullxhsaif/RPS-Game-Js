const result = document.getElementById(`result`);
const choices = [`rock`, `paper`,`scissors`];

function play(player) {
    
    let computer = choices[Math.floor(Math.random() * 3)];

    if (player === computer) {
        result.textContent = `tie! both chose ${player}`
    } else if (
        (player === `rock` && computer === `scissors`) ||
        (player === `paper` && computer === `rock`) ||
        (player === `scissors` && computer === `paper`) )
        {
            result.textContent = `you win ${player} beats ${computer}`;
    } else {
          result.textContent = `you lost ${computer} beats ${player}`
    }
}

document.getElementById(`rock`).addEventListener(`click`,() => play(`rock`));
document.getElementById(`paper`).addEventListener(`click`,() => play(`paper`));
document.getElementById(`scissors`).addEventListener(`click`,() => play(`scissors`));

