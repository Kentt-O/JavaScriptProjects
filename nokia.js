'use strict';
const promptList = `
Nokia menu map 
List of menu functions

1 -> Phone book 
2 -> Messages
3 -> Chat
4 -> Call register
5 -> Tones
6 -> Settings
7 -> Call divert
8 -> Games
9 -> Calculator
10 -> Reminders
11 -> Clock
12 -> Profiles
13 -> SIM services
`;

const phoneBookPrompt = `
1 -> Search
2 -> Services Nos. 
3 -> Add name
4 -> Erase
5 -> Edit
6 -> Assign tone
7 -> Send b'card
8 -> Options
9 -> Speed dials
10 -> Voice tags
11 -> Back
`;

const optionsPrompt = `
1 -> Type of view
2 -> Memory status
3 -> Back
`;

const messagesPrompt = `
1 -> Write messages
2 -> Inbox
3 -> Outbox
4 -> Pictures messages
5 -> Templates
6 -> Smileys
7 -> Message settings
8 -> Info service
9 -> Voice mailbox number
10 -> Service command editor
11 -> Back
`;

const messageSettingsPrompt = `
1 -> Set 1
2 -> Common
`;

const set1Prompt = `
1 -> Message centre number
2 -> Message sent as
3 -> Message validity
`;

const commonPrompt = `
1 -> Delivery reports
2 -> Reply via same centre
3 -> Character support
`;

const callRegisterPrompt = `
1 -> Missed calls
2 -> Received calls
3 -> Dialled numbers
4 -> Erase recent call lists
5 -> Show call duration
6 -> Show call costs
7 -> Call cost settings
8 -> Prepaid credit
`;

const showCallDurationPrompt = `
1 -> Last call duration
2 -> All calls' duration
3 -> Received calls' duration
4 -> Dialled calls' duration
5 -> Clear timers
`;

const showCallCostsPrompt = `
1 -> Last call cost
2 -> All calls' cost
3 -> Clear counters
`;

const callCostSettingsPrompt = `
1 -> Call cost limit
2 -> Show costs in
`;

const tonesPrompt = `
1 -> Ringing tone
2 -> Ringing volume
3 -> Incoming call alert
4 -> Composer
5 -> Message alert tone 
6 -> Keypad tones
7 -> Warning and game tones
8 -> Vibrating alert
9 -> Screen saver
`;

const settingsPrompt = `
1 -> Call settings
2 -> Phone settings
3 -> Security settings
4 -> Restore factory settings
`;

const callSettingsPrompt = `
1 -> Automatic redial
2 -> Speed dialling
3 -> Call waiting options
4 -> Own number sending
5 -> Phone line in use 
6 -> Automatic answer
`;

const phoneSettingsPrompt = `
1 -> Language 
2 -> Cell info display 
3 -> Welcome note
4 -> Network selection
5 -> Lights
6 -> Confirm SIM service actions
`;

const securitySettingsPrompt = `
1 -> PIN code request
2 -> Call barring service
3 -> Fixed dailling
4 -> Closed user group
5 -> Phone security
6 -> Change access codes
`;

const clockPrompt = `
1 -> Alarm clock
2 -> Clock setting
3 -> Date setting
4 -> Stopwatch
5 -> Countdown timer
6 -> Auto update of date and time
`;

console.log(promptList);
const userInput = Number(prompt("Enter your choice: "));

switch (userInput) {
    case 1:
        console.log("Phone book");

        console.log(phoneBookPrompt);
        const digitEntered = Number(prompt("Enter your choice: "));

        switch (digitEntered) {
            case 1:
                console.log("Search");
                break;
            case 2:
                console.log("Service Nos.");
                break;
            case 3:
                console.log("Add Name");
                break;
            case 4:
                console.log("Erase");
                break;
            case 5:
                console.log("Edit");
                break;
            case 6:
                console.log("Assign tone");
                break;
            case 7:
                console.log("Send b'card");
                break;
            case 8:
                console.log("Options");

                console.log(optionsPrompt);
                const digitEntered = Number(prompt("Enter your choice: "));

                switch (digitEntered) {
                    case 1:
                        console.log("Type of view");
                        break;
                    case 2:
                        console.log("Memory status");
                        break;
                    case 3:
                        console.log("phoneBookPrompt");
                        break;
                    default:
                        console.log("Invalid input");
                        break;
                }
                break;
            case 9:
                console.log("Speed dials");
                break;
            case 10:
                console.log("Voice tags");
                break;
            case 11:
                console.log(promptList);
                break;
            default:
                console.log("Invalid input");
                break;
        }
        break;
    case 2:
        console.log("Messages");

        console.log(messagesPrompt);
        const digitE = Number(prompt("Enter your choice: "));

        switch (digitE) {

            case 1:
                console.log("Write messages");
                break;

            case 2:
                console.log("Inbox");
                break;

            case 3:
                console.log("Outbox");
                break;

            case 4:
                console.log("Picture messages");
                break;

            case 5:
                console.log("Templates");
                break;

            case 6:
                console.log("Smileys");
                break;

            case 7:
                console.log("Message Settings");
                break;

            case 8:
                console.log("Info service");
                break;

            case 9:
                console.log("Voice mailbox number");
                break;

            case 10:
                console.log("Service command editor");

            case 11:
                console.log(promptList);
                break;
            default:
                console.log("Invalid input");
                break;
        }

        break;
    case 3:
        console.log("Chat");
        break;
    case 4:
        console.log("Call register");
        break;
    case 5:
        console.log("Tones");
        break;
    case 6:
        console.log("Settings");
        break;
    case 7:
        console.log("Call divert");
        break;
    case 8:
        console.log("Games");
        break;
    case 9:
        console.log("Calculator");
        break;
    case 10:
        console.log("Reminders");
        break;
    case 11:
        console.log("Clock");
        break;
    case 12:
        console.log("Profiles");
        break;
    case 13:
        console.log("SIM services");
        break;
    default:
        console.log("Invalid input");
        break

}

