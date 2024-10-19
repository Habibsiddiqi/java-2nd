// --------chapter-6--15-------

// ===========Q1=========

var a = 10;

++a;

console.log("++a is", a);
a++;
console.log("a++ is", a);
--a;
console.log("--a is", a);
a--;

console.log("a-- is", a);

// ===========q2=========

var a = 2,
  b = 1;

// --a = 1
// --a - --b = 1
// --a - --b + ++b = 2
// --a - --b + ++b + b-- = 3

var result = --a - --b + ++b + b--;
// console.log(result)

// ===========q3=========

// var input = prompt("enter your name")

// if (input){
// console.log("Hello!", input)
// }
// else{
//     console.log("Enter your name!")
// }

// ===========q4=========

// let table = prompt("Enter Table Number;")
// table = parseInt(table)
// for(let i=1; i <= 10; i++){
//     let result = table * i
//     var listItem = table + " x " + i + " = " + result ;
//     console.log(listItem)
// }

// ===========q5=========
// Subject names
// let subj1 = prompt("Enter subj1");
// let subj2 = prompt("Enter subj2");
// let subj3 = prompt("Enter subj3");

// Subject marks
// let num1 = parseInt(prompt("Enter Num1"));
// let num2 = parseInt(prompt("Enter Num2"));
// let num3 = parseInt(prompt("Enter Num3"));

// let obt = num1 + num2 + num3;

// let total = 100 * 3;
// if (num1 <= 100 && num2 <= 100 && num3 <= 100) {
//     let result = (obt / total) * 100;
//     console.log("Total Obtained Marks: " + obt);
//     console.log("Percentage: " + result.toFixed(2) + "%");
// } else {
//     console.log("Marks entered should be 100 or less for each subject. Try again!");
// }

// if (num1 <= 100 && num2 <= 100 && num3 <= 100){
// console.log(subj1 + ": " + num1 + " marks, " + (num1 / 100 * 100).toFixed(2) + "%");
// console.log(subj2 + ": " + num2 + " marks, " + (num2 / 100 * 100).toFixed(2) + "%");
// console.log(subj3 + ": " + num3 + " marks, " + (num3 / 100 * 100).toFixed(2) + "%");
// }
// else {
//     console.log("Marks entered should be 100 or less for each subject. Try again!")
// }

// --------chapter-6--9--------
// var nam = prompt("enter to city name")
// console.log("Welcome of city light", nam)

// var nam1 = prompt("Your Gender \nmale\nfemale")
// if ("male" == nam1) {
//     console.log("Good Morning Sir");
// }
// else if ("female" == nam1) {
//     console.log("Good Morning Mam");
// }
// else {
//     console.log("re Write!")
// }

// var nam1 = prompt("Traffic colour\nRed\nYellow \nGreen")
// if (nam1=="Red"){
//     console,log("Must Stop")
// }
// else if (nam1=="Yellow"){
//     console.log("Ready To Move")
// }
// else if (nam1=="Green"){
//     console.log("Move Now")
// }
// else{
//     console.log("Please Re-Type!")
// }

// var num2= prompt("Enter fuel in liter!")

// if (fuel < 0.25) {
//     console.log("Please refill the fuel in your car");
// } else {
//     console.log("Fuel level is sufficient");
// }

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true\nts pre increament");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true\npost bad mai hoga");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true\nyes");
// }
// if (c === 13){
// alert("condition 2 is true\nyes");
// }
// if (++c < 14){
// alert("condition 3 is true\n no");
// }
// else{
//     console.log("no")
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// else{
//     console.log("no1")
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat\n its false cat small then car");
//     }

// let numberOfSubjects = prompt("How many subjects do you have?");
// let totalPercentage = 0;
// let percentages = [];

// for (let i = 0; i < numberOfSubjects; i++) {
//   let subjectPercentage = prompt(`Enter percentage for subject ${i + 1}:`);
//   percentages.push(parseFloat(subjectPercentage));
//   totalPercentage += parseFloat(subjectPercentage);
// }

// let averagePercentage = totalPercentage / numberOfSubjects;

// console.log("Individual Subject Percentages:");
// for (let i = 0; i < percentages.length; i++) {
//   console.log(`Subject ${i + 1}: ${percentages[i]}%`);
// }

// console.log(`Total Percentage: ${totalPercentage}%`);
// console.log(`Average Percentage: ${averagePercentage}%`);

// let grade1;
// if (averagePercentage >= 90) {
//     grade = "A";
// } else if (averagePercentage >= 80) {
//     grade = "B";
// } else if (averagePercentage >= 70) {
//     grade = "C";
// } else if (averagePercentage >= 60) {
//     grade = "D";
// } else {
//     grade = "F";
// }


// let number1 = parseInt(prompt("Enter the subject1 marks:"));
// let number2 = parseInt(prompt("Enter the subject2 marks:"));
// let number3 = parseInt(prompt("Enter the subject3 marks:"));

// let totalSub = number1 + number2 + number3;
// let parsentage = totalSub / 3;
// let grade ;
// let remarks;
// if (parsentage >= 80) {
//     grade="A1"
//     remarks= 'Excellent'
// }
// else if (parsentage >= 70) {
//     grade="A"
//     remarks= 'Good'
// }
// else if (parsentage >= 60) {
//     grade="B"
//     remarks= 'you need to im'
// }
// else if (parsentage >= 60) {
//     grade="C"
// }
// else {
//     grade="Fail"
// }
// console.log("Total Marks=",300)
// console.log("Marks Obtain=", totalSub)
// console.log(parsentage.toFixed(2),"%")
// console.log("grade=",grade)
// // Store a secret number between 1 and 10
// let secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt user to guess the secret number
// let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check the user's guess
// if (userGuess === secretNumber) {
//     console.log("Bingo! Correct answer.");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     console.log("Close enough to the correct answer.");
// } else {
//     console.log("Sorry, that's not correct. The secret number was " + secretNumber + ".");
// }


// let ramdame = parseInt(prompt("Enter the randome number"))
// let user = parseInt(prompt("NOw yours Enter the randome number"))


// if(user == ramdame){
//     console.log('Bingo! Correct answer')
// }
// else{
//     console.log("Close enough to the correct answer")
    
// }


// let user = prompt("Enter the number!")
// user = parseInt(user);

// if(user %3 == 0){
    
//     console.log("the num divisible by 3")

// }
// else{
//     console.log("please try again")
// }


// let user = prompt("Enter the number!")
// user = parseInt(user);
// if( user % 2 ==0){
//     console.log("the even num", user)
// }
// else{
//     console.log("odd number", user)
// }


let user = parseInt(prompt("Enter the Today temperature!"))
if (user>=40 ){
    console.log("Its to hot out side")
}
else if (user>30){
    console.log("The Weather today is Normal.")
}
else if (user>20){
    console.log("Today’s Weather is cool.”")
}
else if (user>10){
    console.log("OMG! Today’s weather is so Cool.")
}
else{
    console.log("OMG")
}