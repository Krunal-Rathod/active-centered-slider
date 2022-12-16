'use strict';

//////////////////
// Default Parameters
const bookings = [];
const createBooking = function(flightNumber, passenger = 1, price = 199 * passenger) {
    const booking = {
        flightNumber,
        passenger,
        price
    }
    bookings.push(booking);
    //console.log(booking);
}
createBooking('AS456', 2, 800);
createBooking('RT123');

// Function:
const lowerFun = function(str) {
    return str.toLowerCase();
}
const funTransform = function(str, fn) {
    //console.log(`Transform string: ${fn(str)}`);
}
funTransform('A Closer Look at Functions', lowerFun);

const fun = () => console.log('🎉 Fun!!');
//document.body.addEventListener('click', fun)

// Function returning function:
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// const greeter = greet('Hello');
// greeter('Krunal')
// greet('Hello')('Krunal');


////////////////////////
// The call and apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        //console.log(`${name} book a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.booking.push({flight: `${this.iataCode}${flightNum}`, name});
    }
}
lufthansa.book(52, 'Krunal');
lufthansa.book(25, 'KR');

const euroWing = {
    airline: 'Euro Wing',
    iataCode: 'EW',
    booking: []
}

const book = lufthansa.book;
//book(45, 'Sara');
book.call(euroWing, 85, 'Sara');

// Tax Rate
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 100)); // 110
// console.log(addTax(1, 150)); // 300
// const addVAT = addTax.bind(null, 0.1);
// console.log(addVAT(100)); // 110
// console.log(addVAT(150)); // 165

// Function return function
const addTax = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}
const output = addTax(0.1);
//console.log(output(100));

//////////////////////
// Coding Challenge #1
const poll = {
    question: "What is your favourite programming laguage?",
    options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get Answer
        const answer = Number(prompt(`${this.question} \n ${this.options.join('\n')} \n (Write option number)`));

        // Register Answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        console.log(this.answers);
        
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
}
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

////////////////////////////////
// Coding Challenge #2
/*
This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!

2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
*/
(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue';
    });
})();