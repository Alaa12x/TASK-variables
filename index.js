/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...
let fullName = " Alaa Samer";
console.log(fullName);

let yearOfBirth = 1999;
console.log(yearOfBirth);

let hobby = "Video games and Coding";
console.log(hobby);

let funFact = " I don't have one so far, yeah i know i can be boring sometimes";
console.log(funFact);

const image = "https://scontent.famm3-2.fna.fbcdn.net/v/t39.30808-6/271383343_2177812972356952_2994426251224125970_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE3PIwbbY5BuzMXVt6m7rvlKFgeOKFx0aEoWB44oXHRoXCoVlmJaKzJWqoSFx-b0BFpPUESeyBDziiGOjOYhtnN&_nc_ohc=-ELzukueoYkAX8wPr9e&tn=2oqF4paitgSUXac5&_nc_zt=23&_nc_ht=scontent.famm3-2.fna&oh=00_AT9G7jn3VeZ1ozcnnxxM0biRt1mYglug9en2pRcHLlThHQ&oe=61DBA7AF";

console.log(image);



/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

// const fullNameString = `My name is ${}`;
// const yearOfBirthString =
// const hobbyString =


const fullNameString = `My name is ${fullName}`;
 const yearOfBirthString = `I am ${ 2022 -yearOfBirth}`;
 const hobbyString = " I like to play video games and Coding";



/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars++;
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars--;
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
}
