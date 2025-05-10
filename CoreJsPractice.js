// JS Practice

// let name = "Rajdip"
// let Coder= "Programmer"
// let gender = "male"
// let raj_ds = "Rajdip_ds"
// console.log(name);
// console.log(Coder);
// console.log(gender);
// console.log(raj_ds);

// var x=5;
// console.log(x);

// var x=99;
// console.log(x);


// let y;
// y=10;
// console.log(y);

// let z=222;
// console.log(z);


// // const s= 66;
// // console.log(s);

// // s=2;
// // console.log(s);




// let w = 10;
// let t =2;

// console.log(w+t);  //12
// console.log(w-t);  //8
// console.log(w*t);  // 20
// console.log(w/t); //5
// console.log(w%t); //0
// console.log(w**t); //100
// //console.log(w+t);





// let n=100;
// console.log(n + undefined); // NaN


// let isJsProgrammingLanguage =true;
// let isJsHard = false;

// console.log(isJsProgrammingLanguage);
// console.log(isJsHard);



// let favNumb= 29;

// console.log(favNumb + undefined);  // NaN


// Strict equality -> value and type must match then true else false
let a = 222;
let b =99;
let c="33";
let d=33;

// console.log(a>b); //t
// console.log(a<b); //f
// console.log(a>=b); //t
// console.log(a<=b); //f
// console.log(a===b); //f
// console.log(a===c); //f
// console.log(c===d); //f
//console.log(b===d); //f



let firstName="Rajdip";
let lastName="Sanyal";
console.log(firstName.slice(2,5)); //jdi

firstName += "Developer";
console.log(firstName);

console.log(firstName.concat(lastName));

console.log(firstName.length); // 15
console.log(lastName.length); //6

console.log(firstName.split('')); // ['R', 'a', 'j', 'd', 'i', 'p', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

console.log(firstName.split(" ").join("-")); // ['Rajdip']

console.log(lastName.includes("a"));


let zz= "      Rajdip      ";
console.log(zz.trim()); //Rajdip


let favActorFirstName= "Emraan"
let favActorLastName= "Hashmi"

console.log(favActorFirstName.concat(favActorLastName));

let favSingerFullName ="Sonu Nigam"
console.log(favSingerFullName.toUpperCase());
console.log(favSingerFullName.toLowerCase());


let massage = `My favourite actor is ${favActorFirstName} ${favActorLastName} is very talented and all songs are evergreen`
console.log(massage.toUpperCase());

massage += `Emraan and KK duo are unforgottable.`
console.log(massage.toUpperCase());


// convert number to string
let number =100
number = number.toString();
console.log(typeof number);

number=500
number = String(number);
console.log(typeof number);



let password ="Rajdip"

if(password>8)
{
    console.log("Password is greater than 8");
    
}

else if(password<8)
    {
        console.log("Password is less than 8");
    }

    else{
        console.log("Password should be reset");
    }


    const favSingers=["KK","Sonu Nigam","Mohit Chauhan"]
    console.log(favSingers[0]);

    const favNumbers=[1,2,3,4]
    console.log(favNumbers[2]); //3


    //2D array in js
    const mixedArr=["Arijit",1,["KK","Sonu Nigam"],4567,true]
    console.log(mixedArr[2]);
    console.log(mixedArr[2][0]); //KK
    console.log(mixedArr[2][1]); //Sonu Nigam

    // Multi dimensional array in  js
    const mixedArr1=["Arijit",1,["KK","Sonu Nigam"],["Shreya","Sunidhi","Neeti"],4567,true]
    console.log(mixedArr1[3]);
    console.log(mixedArr1[3][0]); //Shreya
    console.log(mixedArr1[3][1]); //Sunidhi
    console.log(mixedArr1[3][2]); //Neeti



    const car = {
        type: "abc",
        model: "BMW",
        color: "red",

    };

    console.log(car);
    console.log(typeof car);

    car.model= "Tyota";

    console.log(car.model);

    car.wheels="smooth";

    console.log(car.wheels);
    console.log(car);


    function MyFunction(p,q)
    {
        return p*q;

    }

    const result= MyFunction(2,5);
    console.log(result);



 
    function Rajdip1(x,y){

        return x/y;
        //return x*y;
    }

    const result1=Rajdip1(10,2);
    const result2=Rajdip1(20,2);
    console.log(result1);
    console.log(result2);
    
  
  // Callback Function
  // Example1

  function greet(name,cb){
    console.log(`Hello ${name}`)
    cb()
  }

  function cb(){
    console.log(`I am Callback function`)
  }

  greet("Rajdip",cb) // We have pased the value for the parameter name and we passed aniother function cb() inside greet()

  greet("Raju", function cb(){
    console.log(`I am again callback funcion`)
  })


  function showCallFunc(fn){
    const a = 100
    fn(a)
  }


  showCallFunc(function(a){
    console.log(a);
  });


// Execution Context
var n=2;
function abc(num)
{
    var ans = num*num;
    return ans;
}
var s1= abc(n);
var s2= abc(4);
console.log(s1);
console.log(s2);


//Function declaration vs Function expression

//Function declaration

sayHello("Rajdip Sanyal") // function is hoisted so we can call it before function is defined

function sayHello(username)
{
    console.log(`Hello ${username}`)
}

sayHello("Rajdip Sanyal rajjjjj")



//Function expression

//abcde("Rajdip+Chandrima") // uncaught ReferenceError ReferenceError: Cannot access 'abcde' before initialization
const abcde = function(user)
{
    console.log(`Hello ${user}`)
}
abcde("Rajdip+Chandrima")


// Function declaration 2

function sum( n1,n2){
console.log(`The sum is ${n1+n2} of n1 and n2 `)
}

sum(1000,5) //1005
sum(1000) //NaN 


const r1=function(b1,b2,b3)
{
    console.log(`The cube is: ${b1*b2*b3}`)
}

r1(2,2,2)


//Default Parameter
function d1(n1=2,n2=10) // Default Parameter
{
  console.log(`The sum is: ${n1+n2}`)
}

d1(100,100) // 200
d1(500) // 510 (n2=10 default)
d1() // 12


S1("Rajdip","Chandrima") // Function decalaration hoisted top of the scope we can call it before it is defined so we get output 
function S1(user1, user2){
  console.log(`The names are: ${user1 + " and " + user2}`)
}

S1("Rajdip","Chandrima") //The names are: Rajdip and Chandrima




//a11("RAJDIP", "SOHINI") // function expression aren't hoisted we can't call it before it is defined we will get error
const a11= function S2(user1, user2)
{
  console.log(`The names are: ${user1} and ${user2}`)
}

a11("RAJDIP", "SOHINI") //The names are: RAJDIP and SOHINI




//Named Function
function rajj(q12){
  console.log(`the value is ${q12}`)
}
rajj("Rajdip Sanyal")


//Anonymous Function
const raj=function(z){
  console.log(`This is ${z} function`)
}
raj("Anonymous");
 


var x=2;
function EC(num){
  var ans= num*num;
  return ans
}
var c1= EC(x); //4
var c2= EC(4); //16
console.log(c1,c2)


//Variable hoisting
console.log(name)
var name="Rajdip"
//let name = "rajdip"; // Reference error (let,const are belong from TDZ)

//function hoisting
sayHello();
function sayHello()
{
  console.log("Hi I am Rajdip Sanyal from WB");
}

//Hoisting with local scope
function performTask(){
  res=1000;
  console.log(res);
  var res;
}
performTask()



//Global Scope
let name3 = "Rajdip"
console.log(name3)


for(let i=0;i<5;i++)
{
  console.log(i) //local
}

//console.log(i)


function showMsg()
{
  let msg = "Raju Hiii"
  console.log(msg)
}

//showMsg()
//console.log(msg)


//IIFE



// closure
function outer()
{
  let count =0;
  return function inner()
  {
    count++;
    console.log(`The counter is: ${count}`)
  }
}

const increment = outer()
increment();
increment();


//closure Example
function xyz()
{
  let count1=0;
  return function efg(){
    count1++;
    console.log(`The count is: ${count1}`)
  }
}

const Chandrima = xyz()
Chandrima()
Chandrima()


//Object methods

const person = {
  name: "Rajdip",
  age: 26,
  tell: function sss()
  {
    console.log(`"Hi I love mamon"`)
  }
}

console.log(person["tell"]()) // to call function in object use obj reference


const Mamon = {
  name1 : "Chandrima",
  age: 25,
  name4: "Raj",
  fact: function chan()
  {
    console.log(`Hi, I am ${Mamon.name1} and my age is ${Mamon.age} and I love ${Mamon.name4}`)
  } 
}

console.log(Mamon["fact"]())
    
    
// Check property in obj

const Person1={
  name5: "Rajdip",
  age: 26,
  hobbies: ["Playing", "Singing"],
}

console.log("age" in Person1)
console.log("name5" in Person1)
console.log("address" in Person1)


console.log(Person1.name5 !== undefined) //t
console.log(Person1.city !== undefined) //f


//Object.create()

const Person2 = {
  name: "",
  age: 0,
}

var Rr = Object.create(Person2);
Rr.name="Rajdip Sanayl + Chandrima"
Rr.age=26
console.log(Rr);


const developer = {
  name: "Rajdip",
  age: 26,
  address: {
    City: "Chandannagar",
    State: "WB"
  },
  fact1: () => {
    console.log(`My name is ${developer.name}, age is ${developer.age}`)
  }
}

console.log(developer["fact1"]())



// shallow copy 

const details = {
  name : "Pritam",
  age : 25,
  address : ["Shymnagar","Nadia","WB"]
}

let obj_copy = details; // reference of details is copied to obj_copy

obj_copy.address=["Chandannagar","Hooghly"]
obj_copy.name="Rajdip"
obj_copy.age=26

console.log(obj_copy)


//Deep copy

const details1 = {
  name : "Pritam",
  age : 25,
  address : ["Shymnagar","Nadia","WB"]
}

const details2 = {}

for(prop in details1)
{
  details2[prop] = details1[prop]
}

details2.name = "Rajdip"
details2.age=26

console.log(details2)
console.log(details1)


const f ={
  a: 1, b: 1000
}

let s = Object.keys(f); // returns the array of object's key names
console.log(s)

const f1 ={
  a: 1, b: 1000
}

let ss = Object.values(f1); // returns the array of object's values
console.log(ss)


const yz = {

  name: "Rajdip Sanyal",
  age: 26
}

let t = Object.entries(yz)
console.log(yz) //returns the array of key value pairs in obj


//Array like obj

sum(22,44,66)
function sum () {
console.log(arguments);
console.log(arguments.length);
console.log(arguments[0]);

}

// convert array obj to array -> Array.from()
let dd = "123"

let dd1 = Array.from(dd)
console.log(dd1)

// Pure 

function abcdef(x,z)
{
  return x+z;
}

console.log(abcdef(3,5))

//Impure 
var count2=0;

function wxy(value)
{
  count2+=value;
  return count2;
}

console.log(wxy(50)); //50

console.log(wxy(50)); //100












    
    
    
    
    
    
 















































