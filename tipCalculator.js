// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

const bill = Number(prompt("Please enter your bill:"));

if (bill >= 50 && bill <= 300) {
    let tip = (15 / 100) * bill;
    let totalBillWithTip = tip + bill;
    console.log(`Your bill is ${bill} your tip is ${tip}`);
}
else if (bill > 300) {
    let tip = (20 / 100) * bill;
    let totalBillWithTip = tip + bill;
    console.log(`Your bill is ${bill} your tip is ${tip}`);
} else {
    console.log(`Your bill is ${bill} you have zero tip`);
}