// function fact(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * fact(num - 1));
//     }
//   }
//   console.log(fact(5));
// const radius = 10;
// const pi = Math.PI;
// var area_of_circle=pi*radius*radius;
// console.log("The area of the circle is: " + area_of_circle);
// function sumOfDigit(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         let num=i;
//         while(num>0){
//             sum+=num%10;
//             num=Math.floor(num/10);
//         }
//     }
//     return sum;
// }
// console.log(sumOfDigit(200));
// function cube_sq(n){
//     let cube=n*n*n;
//     let square=n*n;
//     console.log("THE CUBE OF NUMBER is "+cube,"and THE SQUARE OF THE NUMBER IS "+square);    
// }
// cube_sq(4);
// function isPalindrome(str) {
//     const len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// console.log(isPalindrome("madam"));
// var divide=(a,b) => a/b;
// console.log(divide(6,12));
// var age=30;
// var percent=71;
// if (age >=30 && percent>=71){
//     console.log("You are eligible for the job")
// }
// else{
//     console.log("you are not eligible for the job")
// }
// function multiply(a,b){
//     return a*b;
// }
// console.log("With return type "+multiply(2,4));
// function mul(a,b){
//     let c=a*b;
//     console.log("without return type "+c);
// }
// mul(3,6);
// function getVowels(string) {
//     var Vowels = 'aAeEiIoOuU';
//     var vowelsCount = 0;
//     for(var i = 0; i < string.length ; i++) {
//        if (Vowels.indexOf(string[i]) !== -1) {
//           vowelsCount += 1;
//       }
//     }
//  return vowelsCount;
//  }
//  console.log("The Number of vowels in - "+"gopinath:" + getVowels("gopinath"));
// function cube(n){
//     return n*n*n;
// }
// let n=prompt("Enter the number: ");
// console.log("cube of the number is "+cube(n));
// var cube=(a,) => a*a*a;
// console.log(cube(6));
// var sq = function (a) {
//     var c=a*a;
//     console.log("square of no ", c);
// };
  
// sq(2);
// function avg(a,b,c){
//     avg=(a+b+c)/3;
//     console.log(avg);
// }
// avg(2,3,4);
// function arithmetic(a,b){
//     c= a+b;
//     d= a-b;
//     f= a*b;
//     e= a/b;

// }
// arithmetic(2,3);
// console.log("ADD "+c,"sub: "+d, "mul: "+f, "div:"+ e);
// function digits_count(n) {
//     var count = 0;
//     if (n >= 1) ++count;
  
//     while (n / 10 >= 1) {
//       n /= 10;
//       ++count;
//     }
  
//     return count;
//   }
  
//   console.log(digits_count(12112));
// var length = prompt("Enter a whole number for the length of your rectangle.");
// var breath = prompt ("Enter a whole number for the breath of your rectangle.");

// function area (length, breath) {
// return length * breath;
// }

// console.log("The area of your rectangle is " + area);
// var a=10;
// if(a%2==0){
//     console.log("Even Number")
// }
// else{
//     console.log("ODD NUMBER")
// }
// var a=10;
// for(i=1;i<a+1;i++){
//     console.log(i+"*"+a+"="+i*a );
// }
// for(i=1;i<16;i++){
//     if(i%2==0){
//         console.log(i+" is even");
//     }
//     else{
//         console.log(i+" odd number")
//     }
// }
// for(i=10;i<100;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }
// var total=0;
// for(i=1;i<50;i++){
//     total +=i; 
// }
// console.log("total:"+total);
// function check(n){
//     if(n<0){
//         console.log("negative no");
//     }
//     else if(n==0){
//         console.log("zero")
//     }
//     else{
//         console.log("positive")
//     }
// }
// check(10)
// function check(age){
//     if(age>=18){
//         console.log("he/she is Major");
//     }
//     else{
//         console.log("He/she is Minor");
//     }
// }
// check(20)
// for(i=1;i<100;i++){
//     if(i%5==0 && i>=85){
//         console.log(i);
//     }
// }
// function fact(n){
//     if(n==1 || n==0){
//         return 1
//     }
//     else{
//         return n*fact(n-1)
//     }
// }
// console.log(fact(10));
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));

// const largest = Math.max(num1, num2, num3);

// console.log("The largest number is " + largest);
// const number = 123456788;
// const numberOfDigits = number.length;
// let sum = 0;
// let temp = number;
// while (temp > 0) {
//     let remainder = temp % 10;
//     sum += remainder ** numberOfDigits;
//     temp = parseInt(temp / 10);
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }
// function countDigit(n)
// {
//     let count = 0;
//     while (n != 0) 
//     {
//         n = Math.floor(n / 10);
//         ++count;
//     }
//     return count;
// } 
// n = 345289467;
// console.log("Number of digits : "+ countDigit(n));
// function sum_of_digit(n)
// {
//     if (n == 0)
//     return 0;
//     return (n % 10 + sum_of_digit(parseInt(n / 10)));
// }
// var num = 12345;
// var result = sum_of_digit(num);
// console.log( "Sum of digits in "+ num
//    +" is "+result );

// const operator = "+";
// const number1 =2;
// const number2 = 6;
// let result;
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }
// console.log(result);
var a=0;
switch (a) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);