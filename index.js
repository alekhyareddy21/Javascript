//Day - 1//
//syntax means rules//
console.log(" welcome to alekhya");
// DATA TYPES// THESE ARE PRIMITIVE DATA TYPES
//1. Number
//Used for any number (integer or decimal).
let age = 20;
let marks = 95.5;
//2. String
//Used for text.
let name = "Alekhya";
//3. Boolean
//true / false values.
let isStudent = true;
//4. Undefined
//Variable declared but no value given.
let x;  
// x is undefined
//5. Null
//Empty value (nothing).
let data = null;
//6. Object
//Used to store multiple values in key–value pairs.
let person = { name: "Alekhya", age: 20 };
//7.Array (Type of Object)
//Collection of items.
let fruits = ["apple", "banana", "mango"];
//8. BigInt
//Used for very large numbers.
let bigNumber = 1234567890123456789n;
//varabiles//
fullname = "Alekhya",
console.log(fullname);
//age = 24,//
//console.log(age);//
price = 99.0,
console.log(price);
x = null;
console.log(x);
y = undefined;
console.log(y);
isfollow = false;
console.log(isfollow);
var c= 10;
var c = 20;
console.log(c);
//Data types//
const student = {
    fullName: "alekhya",
    age: 24,
    cgpa: 9.1,
    ispass: true,
};
console.log(typeof student);
console.log(typeof student.fullName);
console.log(typeof student.age);
console.log(typeof student.cgpa);
console.log(typeof student.ispass);

//practice-1//
/*const object = {
    tittle: "ball pen",
    price: 270,
    offer: 5,
    rating: 4,
};
console.log(typeof object);
console.log(typeof object.tittle);
console.log(typeof object.price);
console.log(typeof object.offer);
console.log(typeof object.rating);
console.log(object);*/

//practice-2//
const profile = {
    fullName: "Alekhya reddy",
    posts: 195,
    following: 200,
    followers: 195,
};
console.log(profile);
console.log(typeof profile);
console.log(typeof profile.fullName);
console.log(typeof profile.posts);
console.log(typeof profile.following);
console.log(typeof profile.followers);

//operators//
//arthmetic operators//
let a = 10;
let b = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a/b);
console.log(a**b);
console.log(a++);
console.log(a--);

//assigenment operator//
let e = 3;
let f = 5;
console.log(e=f);
console.log(e+=f);
console.log(e-=f);
console.log(e*=f);
console.log(e%=f);
console.log(e**=f);

//compariosn opeartor//
let j = 4;
let g = 8;
console.log(j==g);
console.log(j===g);
console.log(j!=g);
console.log(j!==g);
console.log(j>g);
console.log(j<g);
console.log(j<=g);
console.log(j>=g);

//logical operator//
/*let r = 6;
let k = 9;
console.log(r&&k);
console.log(r||k);
console.log(r!k);*/ 

//conditional satements//
// if satement//
let age = 25;
if (age >= 18) {
    console.log("you can vote");
}
if (age < 18) {
    console.log("you can not vote");
} 
//pravtice//
let mode = "dark";
let color;

if (mode === "dark");{
color = "black";
}
if (mode === "light");{
color = "white";
}
console.log(color);

// if-else satement//
/*let age = 16;
if (age >= 18){
    console.log("you can vote");
} else {
    console.log("you can not  vote");

}*/

// check the number is even or odd//

let num = 10;
if (num%2 === 0){
    console.log("even");
} else {
    console.log("odd");
}

// else if satement//
/*let mode = "dark";
let color;

if (mode === "dark") {
   color = "black";
} else if  (mode === "light") {
   color = "white";
} else if (mode === "blue") {
    color = "blue";
} else {
    color = "white";
}
   console.log(color);*/

//TERINARY OPEARORS//

/*let isOnline = true;
 console.log(!isOnline);*/

 //practice question chech the number is mulitiply of 5//
  /*let n = prompt("Enter a number");

  if(num % 5 === 0){
    console.log(num, "is multipl of  5");
  } else {
    console.log(num, "is not multiple of 5");
  }*/
  //practice question marks//
  /*let score = 95;
  let grade;

  if(score >=90 && score <=100) {
    grade = "A";
  } else if(score >=70 && score <=89) {
    grade = "B";
  } else if(score >=70 && score <=89) {
    grade = "C";
  }else if(score >=60 && score <=69) {
    grade = "D";
  } else if(score >=50 && score <=59) {
    grade = "E";
  } else if (score >=0 && score <=49) {
    grade = "F";
  }
  console.log("according to  your scores your grade was:",grade );*/

  //loops//

  // for loop//
  for( let i = 1; i <= 5; i++) {
    console.log("Alekhya");
  }
  // practice: caluculate sum of 1 to 5//
  let sum = 0;
  for( let i = 1; i <= 5; i++){
    sum = sum + i;
  }
    console.log("sum = ",sum);
    // while loop//
    let i = 1;
    while(i <= 5 ) {
        console.log("Alekhya");
        i++;
    }
    //do-while loop//
    let m = 1;
    do {
        console.log("m=",m)
        m++;
    } while(m <= 5);

    //for-of loop//
    let str = "Alekhya";
    for(let k of str) {
        console.log("k=",k);
    }

    // for- in loop//
    let principal = {
        name: "ramarao",
        age: 24,
        salry: 20000,
    };
    for (let g in principal){
    console.log(g);
}
// practice print the all even numbers 0 to 100//
for (let num = 0; num <=100; num++){
    if(num %2 === 0){
    console.log("num=",num);
}
}

// practice print the all odd numbers 0 to 100//
for (let num = 0; num <=100; num++){
    if(num %2 !== 0){
    console.log("num=",num);
}
}
// practice: guess the game number and matching number//
/*let gameNum = 25;
let userNum = prompt("Guess the game number:");
while (userNum != gameNum) {
    userNum = prompt("you enterd wroung number. Guess agian:");

}
console.log("congratilons you enterd right number");*/


//strings//
let str2 = "Alekhya";
console.log(str2[0]);

// template literal //

let obj = {
  item: "pen",
  price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("the cost of", obj.item, "is", obj.price, "ruppes");// 10 is highligt the number//

//practice-2//
let specialstring = `This is a template literal ${1 + 2 + 3}`;
console.log(specialstring);

//escape charecter//
console.log("Alekhya  \n Reddy");
console.log("Alekhya  \t Reddy");

//string methodes//
//str.toUppercase//
let  str3 = "Alekhya";
let newstr = str. toUpperCase();
console.log(str3);
console.log(newstr); 

//str.toLowerCase//
let  str4 = "Alekhya";
let newwstr = str. toLowerCase();
console.log(str4);
console.log(newwstr); 

//str.trim()//
let str5 = "   Alekhya reddy in js   "
console.log(str.trim());

//str.slice//
let str8 = "ohamk";
console.log(str8.slice(0,3));

//str.concat(str2)//

let str9 = "Alli";
let str0 = "Alekhya";
let res = str9.concat(str0);
console.log(res);

//str.replace//
let str13 = "hello";
console.log(str13.replace("h","A"));

//str.charAt(idx)//

let str14 = "ilikejs";
console.log(str14.charAt(4));

//practice //

/*let fullName = prompt("enter your fullName without spaces");
let userName = "@" + fullName + fullName.length;
console.log(userName);*/

//just normal practice//
let ber = 0;
console.log(ber);
ber = 2;
console.log(ber);

//arrays//

let marks = [22, 25, 28, 24, 54];
console.log(marks);
console.log(marks.length);

//practice//
let heroes = ["rana","prabas","raviteja","simha"];
console.log(heroes);

//looping over an array//

let heroines = ["alekhya","kamala","manisha", "kavaya","hema"];
for (let A=0; A<heroines.length; A++){
  console.log(heroines[A]);
}

//practices//
let cities = ["dhelli","hyd","chittayala","jpt"];
for(let city of cities){
  console.log(city);

} 

//practice question-1//
let marks3 = [44, 45, 46, 47, 49];
let sum1 = 0;
for (let val of marks3) {
  sum1 +=val;
}
let avg = sum1 / marks3.length;
console.log(`avg marks of the class = ${avg}`);

//practice question-2//
let items = [100,250,352,651,258];
for (let i = 0; i <items.length; i++){
  let offer = items[i] / 10;
  items[i] -= offer;
}
  console.log(items);

  //array methods//
  // 1- push()//

  let vegitables = ["potato", "apple","banana", "lunchi", "panner"]
  vegitables.push("manago", "puri","tamato");
  console.log(vegitables);

  // 2-pop()//
  let nonveg = ["potato", "apple","banana", "lunchi", "panner"]
  nonveg.pop();
  console.log(nonveg);

  // 3-tostring()//
  let alekhya= ["potato", "apple","banana", "lunchi", "panner"]
  console.log(alekhya.toString());

  // 4-concat//
  let moives = ["majilli", "dhill", "oh beby", "balupu"];
  let events = ["star ma", " star event", "zee star"];
  let finial = moives.concat(events);
  console.log(finial) ;

  // 5- unshift //
  let villages = ["mpt", "jpt", "smpt", "kpt"];
  villages.unshift("alekhya");
  console.log(villages);

  // 6- shift//
  let tours = ["goa", "temple", "diu", "beches"];
  let val = tours.shift();
  console.log(tours);

  // 7- slice//
   let doectors = ["hurt doec", "stomch doec", "liver doc", "pain doec"];
  console.log(doectors);
  console.log(doectors.slice());

  // 8- splice//
  let arr = [1, 2, 3, 4, 5, 6, 7];
  //addElement//
  arr.splice(2, 0, 101);
  console.log(arr);
//del Element//
arr.splice(3,1);
console.log(arr);
//replace Elemnet//
arr.splice(3, 1, 101);
console.log(arr);

//practice question //

let compaines = ["Bloomberg", "microsoft", "uber", "googole","ibm","netfilx"];
 compaines.shift();
 console.log(compaines);
 compaines.splice(2,1,"ola");
 console.log(compaines);
 compaines.push("amozon");
 console.log(compaines);

 //function topic//
 /*function myFunction() {
  console.log("hello welcome to Alekhya  channel");
  console.log("we are learning Js");
 }

 
 //function call//
// add function//
function sum8 (a,b) {
   return a+b;
}
  console.log(sum8(5,6));

// subraction//
function sub (a,b) {
   return a-b;
}
console.log(sub(8,3));

//multipliaction//
function mul (a,b) {
  return a*b;
}
console.log(mul(3,4));

// division//
function div(a,b){
  return a / b;
}
console.log(div(10,2));
//squr//
function squr(x){
    return x * x;
}
console.log(squr(5,5));

//practice //
function leap(x,){
    if(x % 4 === 0){
        console.log("it is a Leap Year");
    }
    else{
        console.log("Its  not a leap year");
    }
}
console.log(leap(2024));

// arrow function//
function mul (a,b) {
  return a*b;
}
let arrowMul = (a,b) => {
  return a*b;
}
console.log(arrowMul);

// practice question//
/*function countVowels(str) {
  let count = 0;
  for(const char  of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}*/
//console.log(countvowels("alli"));
// output lo countvowels ante vowels yani uenyaoo oka letter lo ani osthavi //
//ex: allli countVowels = 2 that is  a,i//*/

//call back function//

let string  = [1, 2, 3, 4, 5];
arr.forEach(function print(val) {
  console.log(val);
});


  




