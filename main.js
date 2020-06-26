/* This assignment will give you some practice with creating arrays and using their methods. */

/* Please note that his is NOT a function-based challenge (aside from your challenge banner function). Everything should be in the global scope--this means you will benefit from using `for` loops instead of `while`. */


// Challenge 0
// Challenge banner time! Write a function that console.logs "####### Challenge n #######", where n is the number passed into the function.
// Call this function before each of the below challenges, passing in the number of the current challenge.
function challenge(n){
  return '############ Challenge ' + n +  ' ############'
}


// Challenge 1 DONE
// Loop through the following array, console.logging out each value.
console.log(challenge(1))
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];

for ( i = 0 ; i < students.length ; i++){
  console.log(students[i])
}

// Challenge 2 DONE
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
console.log(challenge(2))
const grades = [100, 80, 110, 75, 83, 64];

for ( k = grades.length -1 ; k > 0; k-- ){
  console.log(grades[k])
}

// Challenge 3 DONE
// Console.log out only the even numbers in the following array.
console.log(challenge(3))
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
for( i = 0; i <= positiveNumbers.length ; i++){
  if (positiveNumbers[i] % 2 === 0){
    console.log(positiveNumbers[i])
  }
}


// Challenge 4 DONE
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
console.log(challenge(4))
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
for ( i = 0 ;i <= mixedSignNumbers.length ; i++ ){
  if (mixedSignNumbers[i] % 2 === 0){
    console.log(mixedSignNumbers[i])
  }
}

// Challenge 5 DONE
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
console.log(challenge(5))

const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
let newSymmetricalCapitals1 = symmetricalCapitals.splice(0,2)
symmetricalCapitals
let newSymmetricalCapitals2 = symmetricalCapitals.splice(symmetricalCapitals.length-1, 1)
symmetricalCapitals



// Challenge 6  Why doesn't work here but work in JS
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
console.log(challenge(6))
const fibonacciNumbers = [0,1, 1, 2, 3, 5, 8, 13];

fibonacciNumbers[fibonacciNumbers.length] = 1000;
let add1 = fibonacciNumbers[fibonacciNumbers.length-1];

fibonacciNumbers[fibonacciNumbers.length] = 2000
let add2 = fibonacciNumbers[fibonacciNumbers.length-1]

add2;
fibonacciNumbers;

// Challenge 7  NOT DONE []
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.
let me = ['slow','lazy','eat jung','pig','sweetTooth']
let result7 = me.
result7
// console.log(me[0])
// console.log(me[1])
// console.log(me[2])
// console.log(me[3])
// console.log(me[4])


// Challenge 8 DONE
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
console.log(challenge(8))
let newArr = []
newArr.push('hello', 'there', "to",'YOOM')
newArr.unshift( 'LINH', 'says')
newArr


// Challenge 9 DONE
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
console.log(challenge(9))
for ( i = 2 ; i <= 10 ; i++){
  console.log(students[i])
}


// Challenge 10 DONE
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.
console.log(challenge(10))


// Challenge 11 DONE
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the two arrays are the same, because `slice` does NOT modify the original array.
console.log(challenge(11))

let newStudents = students.slice(3,11)
console.log(newStudents)



// Challenge 12 DONE
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
console.log(challenge(12))
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
let pull = dinosaurs.splice(4,3)
pull;

// Challenge 13 DONE
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
console.log(challenge(13))
const stringDinosaurs = dinosaurs.join('*')
stringDinosaurs;


// Challenge 14 DONE
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
console.log(challenge(14))
let reverseDinosaurs = dinosaurs.reverse()
reverseDinosaurs;



// Challenge 15 DONE
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
console.log(challenge(15))
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
let allColor = primaries.concat(secondaries)
allColor;