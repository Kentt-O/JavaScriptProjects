const dayOfTheWeek = prompt("Please enter a day of the week:");

//switch cases with selection statements.

if (dayOfTheWeek === "Monday") {
    console.log('prepare work video');
}
else if (dayOfTheWeek === "Tuesday") {
    console.log('Go to the gym');
    console.log("Dance classes by 8pm");
}
else if (dayOfTheWeek === "Wednesday") {
    console.log('Teach class by 3pm');
    console.log("Go to the coffee shop");
}
else if (dayOfTheWeek === "Thursday") {
    console.log('Go to the gym');
    console.log("Dance classes by 8pm");
}
else if (dayOfTheWeek === "Friday") {
    console.log('Go to the market');
    console.log("Movie night");
    console.log("Read a poem to kids in the orphanage");
} else {
    console.log('Not a day of the week\nget some rest!!');
}


switch (dayOfTheWeek) {
    case Monday:
        console.log('Prepare Lesson Notes');
        console.log('Prepare timeline for projects');
        break;
    case Tuesday:
        console.log('Attend meetings and PTAs');
        console.log('Teach the local school');
        console.log('Speak at an evening event');
        break;
    case Wednesday:
        console.log('Pick up laundry by 1pm');
        console.log('Eat at a quiet cafe');
        console.log('Evening dance classes with Ella');
        break;
    case Thursday:
        console.log('Take an early morning walk');
        console.log('Go to the vet with Shifi for his shots');
        console.log('Go to the mart and restock');
        console.log('Eat in a fancy restaurant, catfish and some good delicacies');
        console.log('Drop off a card for my lover');
        break;
    case Friday:
        console.log('Get together with the boys');
        console.log('Play video games');
        console.log('Go home and make love');
        break;
    case Saturday || Sunday:
        console.log('Go to church for choir rehearsals');
        console.log('Sunday service');
        console.log('Sing Kumbabya and hold hands with the breathren');
        break;
    default:
        console.log('Not a valid day!!');
}