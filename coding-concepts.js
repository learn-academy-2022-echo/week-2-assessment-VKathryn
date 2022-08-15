// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
console.log(cohort.split(""))

// a) Your answer: This command will log "E", "c", "h", "o", "2", "0", "2", "2"
// b) Verify and explain:  This returned the output below. I forgot to include the space in the list of characters to be listed! The split command returns the input with the change selected applied to each character in the string. I'm also not sure why it returned single quotes instead of double. In my research, I think they are interchangeable with Javascript, so I believe this is the reason why.
// actual return:
// 'E', 'c', 'h',
// 'o', ' ', '2',
// '0', '2', '2'


// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
  console.log(greeter("LEARN Student"))

// a) Your answer: This will return `Hello, LEARN Student!`
// b) Verify and explain: This returns undefined because the const does not contain the command 'return', which is needed on line 24 in order to complete the function. If return is added on line 24 in front of `Hello, ${name}!`, the function will return `Hello, LEARN Student!` as expected.


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: I was correct. The const above instructs the code to return the same array with the values multiplied by two. This is an example of a map function, because it returns an array of the same length as the input.


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: This will return [11, 13, 15]
// b) Verify and explain: This uses the modulo character to instruct the code to return only the odd numbers in the array. This is an example of a filter because it returns a smaller array than it was presented with by returning the values that were identified by using modulo. (number => number % 2 !== 0) this piece of code is determining if the number is even or odd, by finding if the number modulo 2 does not equal zero, return it to the new array.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: This object, myCodingSkills, contains lots of data to reference. The console log is asking for index 0 from the section named Languages, from the object myCodingSkills. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This does not contain return, and so it will not return anything.
// b) Verify and explain: This returns: Learn { student: 'George', cohort: 'Echo', year: 2022 }. I did some research and learned that contructors do not usually have a return statement! The constructor's task is to write the necessary components within itself, and it automatically becomes the result.


