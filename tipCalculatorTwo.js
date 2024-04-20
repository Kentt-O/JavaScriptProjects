let bill = Number(prompt("Please enter your bill:"));

const tip = bill >= 50 && <= 300 ? bill * 0.2 : bill * 0.5;
console.log(`Your bill is ${bill} your tip is ${tip} and the total value is ${bill + tip}`);