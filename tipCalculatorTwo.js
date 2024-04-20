let bill = Number(prompt("Please enter your bill:"));

const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(`Your bill is ${bill} your tip is ${tip} and the total value is ${bill + tip}`);