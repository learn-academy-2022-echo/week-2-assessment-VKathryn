# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: Parameters are names used to call the value into a function, the argument is the value being passed into a function by use of a parameter. So the parameters are how you identify the values and the argument is the value itself.


Researched answer: Function parameters are the names listed in the function's definition, and function arguments are the real values being passed to the function

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: I don't remember the answer to this question. I would start my research to determine the predefined parameters needed for the .map() built in method by pulling up the syllabus, my notes from class and using an online search from there to ensure that I have a firm understanding of the answer.

Researched answer: The predefined parameters are currentValue, function(), index and arr. The currentValue is a required parameter and as the name suggests, it contains the value of the current element in the array. The function() is required and refers to the function to be run for each array element. The index is the index of the element and arr contains the array on which the function is being applied.

3. What is the difference between map and filter?

Your answer: Filter returns a smaller array by identifying the elements asked for and returning only the values in which the elements are present. Map iterates through an array and returns an array of the exact length as the input. They are both higher order functions.

Researched answer: My above answer is correct, and I also discovered that map creates a new array by transforming each element in the array, and filter creates a new array by removing elements that are not called for. I knew this logically, but it's interesting to consider. 

4. What is the DOM? 

Your answer: The DOM is defined as the Document Object Model. It allows all of the different coding languages to be presented in an understandable way to the user.

Researched answer: The DOM is the Document Object Model, which is the visual representation of code. When a user looks at a website, they are looking at the result of all of the languages used to write the code being translated through the DOM. It isn't a coding language, but it enables a website to access the different elements of the website. The components of the website; documents, the header, the footer, the tables, can all be accessed and changed using the DOM.

5. What is React? Why would you use it?

Your answer: React is a programming language that in effect uses recycled bits of code to build an application. You can spend more time customizing and creating unique features, and less time building standard features. It saves both time and effort which are very valuable qualities. 

Researched answer: React is a JavaScript library created by Facebook, in order to allow developers to easily create user interfaces for websites and applications. Each item in React is a component, which are independent, reusable pieces of code. These components are used to build entire applications. It is a very dynamic and scalable tool. JSX is a markdown syntax extension to Javascript, it is used to write the components in React and behaves similarly to HTML mixed with Javascript.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I haven't heard this term yet! I will reference the syllabus & online searches to understand the reference.

Researched answer: In JavaScript, moving all declarations to the top of the current scope(script or function) is behavior referred to as hoisting. This means that it is possible to declare a variable after it has been used. Hoisting enables functions to be used in code before they have been declared.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A user story is the smallest unit of work in an agile framework, and it is a informal explanation of a feature in software written in the perspective of the end user. This articulates the value of the work by simply explaining the outcome. 

2. Spread operator: In Javascript, the spread operator (...) is regularly used with destructuring and allows us to copy all or some of an existing array or object into another array or object.

//const faveBooks = ["This Time Tomorrow", "Harry Potter", "A Discovery of Witches"];
//const faveBook = ["Women Who Run With Wolves"];
//const booksCombined = [...faveBooks, ...faveBook];

3. React props: Props is a shortening of properties and are used to pass date from one component to another. Using them enables the flow of data in your app to be dynamic. They can be used with or without destructuring.

4. Conditional rendering: Conditional rendering refers to being able to selectively render only some of the distinct components you've created. In React, conditional rendering works the same as conditioning in JavaScript.

5. DOM events: DOM events are an indicator of something occuring with user interfacing, or by the browser. Some examples include when a user clicks, or double clicks on a button, when an input field is changed, or when an HTML form is submitted. 
