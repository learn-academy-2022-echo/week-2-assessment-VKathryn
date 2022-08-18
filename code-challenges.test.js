// ASSESSMENT 2: Coding Practical Questions with Jest


// const { it } = require("node:test");
// const { describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.

// a describe method that lists the name of the function OR naming of the particular test.
// describe("hello", () => {
//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("returns a string that says hi", () => {
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(hello()).toEqual("hi");
//     });
//   });

//  const hello = function() {
//     return "hi";
//  };
//  console.log(hello())

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Psuedocode 
// Create a function named brian that takes an object as an argument and checks if it's divisible by 3.
// input - object
// output - `${"Object"} is divisible by 3` or `${"Object"} is not divisible by 3`


// a) Create a test with expect statements for each of the variables provided.
describe("brian", () => {
    it("returns number is divisible by 3 or not divisible by 3 based on input", () => {
        expect(brian(object1.number)).toEqual("15 is divisible by 3"); 
        expect(brian(object2.number)).toEqual("0 is divisible by 3");
        expect(brian(object3.number)).toEqual("-7 is not divisible by 3");
    });
})
    // This command returns a failed test for undefined object1. 

    const object1 = { number: 15 }

    const brian = (number) => {
        if(number % 3 === 0) {
            return `${number} is divisible by 3`
        } else {
            return `${number} is not divisible by 3`
        }
     } 
        console.log(brian(object1.number))
        // this returns the expected output
    
    // Expected output: "15 is divisible by three"

const object2 =  { number: 0 }
console.log(brian(object2.number))
// Expected output: "0 is divisible by three"

const object3 = { number: -7 }
console.log(brian(object3.number))
// Expected output: "-7 is not divisible by three"

// 15 is divisible by 3
// 0 is divisible by 3
// -7 is not divisible by 3

// b) Create the function that makes the test pass.

// const brian = (number) => {
//     if(number % 3 === 0) {
//         return `${number} is divisible by 3`
//     } else {
//         return `${number} is not divisible by 3`
//     }
//  } 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Psuedocode: Create a function named nounCap that takes an array and returns an array with the words in Uppercase, using .map and .toUpperCase, .string, .join
// Input is the two const's provided, const randomNouns1 and randomNouns2. 
// Output: Expected output is each array returned with all of the first letters capitalized.


// a) Create a test with expect statements for each of the variables provided.

describe("nounCap", () => {
    it("returns an array with the first letter capitalized", () => {
        expect(nounCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
        expect(nounCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]);
    });
});

// Positive fail with Jest

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// // b) Create the function that makes the test pass.

const nounCap = (array) => {
        
    let eachItem = array.map((value) => {
      
        
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    });
 
     return eachItem;
    }
    console.log(nounCap(randomNouns1))
    console.log(nounCap(randomNouns2))


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Psuedo Code 
// Create a function using string.length, 
// input: 3 const's provided
// output: log the index of the first vowel in the const

// a) Create a test with expect statements for each of the variables provided.

describe("vowelFinder", () => {
        it("searches for first vowel in a string and returns index", () => {
          expect(vowelFinder(vowelTester1)).toEqual(1);
          expect(vowelFinder(vowelTester2)).toEqual(0);
          expect(vowelFinder(vowelTester3)).toEqual(2);
        });
      });

      // returns positive failed test

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


const vowelFinder = (string) => {
    let vowels = ["a", "e", "i", "o", "u"]
    for (i = 0; i < string.length; i++) {
        if (vowels.includes(string[i]))
        return i        
    }
}
    console.log(vowelFinder(vowelTester1))
    console.log(vowelFinder(vowelTester2))
    console.log(vowelFinder(vowelTester3))

// 

// b) Create the function that makes the test pass.
