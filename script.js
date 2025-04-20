function getComputerChoice() {
    const x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return 'rock';
    } else if (x === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Example usage to test the function
console.log(getComputerChoice()); // Possible outputs: rock, paper, scissors
console.log(getComputerChoice());
console.log(getComputerChoice());