// // // console.log('ar');
// // // console.log('first file puss')

// const { use } = require("react")

// // // let a = [1, 2, 3, 4, 5];
// // // let b = a.slice(0, 3);
// // // console.log(b);
// // // console.log('second file push');
// // // console.log (a);

// // let arr = [1, 2, 3, 4, 5];
// // let arr2 = arr.splice(0, 3);
// // console.log(arr2);
// // console.log('third file push');
// // console.log(arr);
// // console.log('fourth file push');

// let sym = Symbol('description');

// let a = {
//     name: 'John',
//     age: 0,//     [sym]: 'This is a symbol property',
//     city: 'New York'
// }
// console.log(a)
// // Object.freeze(a); // Freezes the object, preventing any changes to its properties
// console.log(a[sym] = "chut marina");
// console.log(a)

// // a.usergreet = function lol(){
// //    console.log('owfjoe')
// // }
// // console.log(a.usergreet())

// let user = {
//     name: "arshaikh",
//     age: 2,//     email: "arshaikh2700@gmail.com"
// }

//  user.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} eas old.`);
// }
// console.log( user.greet()); // Output: Hello, my name is arshaikh and I am 22 years old.

// let a = {
//     1 : 'a',
//     2 : 'b'
// }
// let b = {
//     3 : 'c',
//     4 : 'd'
// }
// let c = Object.assign({}, a, b)

// console.log(c);

// let users = {
//     namez: 'arsh',
//     agez:21// }

// let user = {
//     name: 'armh',
//     age: 9
// }

// let cmd = {...users, ...user}

// console.log(cmd);

// const userdb = [
//     {
//         name: 'arshaikh',
//         age: 21,
//         single: false
//     },
//     {
//         name: 'mahek',
//         age: 18,
//         single: false
//     },
//     {
//         name: 'ziyan',
//         age: 21,
//         single: true
//     }
// ];
// console.log(Object.keys(userdb))
// console.log(Object.values(userdb));
// console.log(Object.hasOwnProperty('name'));
// console.log(userdb[0].name + ' and ' + userdb[1].name)

// const users = {
//     id: 1,
//     name: 'arshaikh',
//     username: 'arzh'
// }

// const {username} = users;

// console.log(` Hey ${username} welcome to the site `)
// console.log(`  You Commented ${username} Hahahah `) OBJECT DE-STRUCTERING

// JSON in db looks like this

// {
// "id": 1,
// "username": "arzh",
// "name": "arshaikh"
// }

// and this

// [

//     {
//             "id": 1,
//     "username": "arzh",
//     "name": "arshaikh"
//     },
//     {
//             "id": 2,
//     "username": "arsh",
//     "name": "arshaikh0"
//     },
//     {
//             "id": 3,
//     "username": "armh",
//     "name": "arshaikh9"
//     }

// ]

// swt.addEventListener("click", function(){
//     clickToSee()
// })

// function addUser(num1, num2){
//     console.log(num1 + num2)

// }
// addUser(1,2)

// function addUser(num1, num2){
//     let a = num1+num2;
//     return a
// }

// let result = addUser(3, 4);

// console.log(result);

// function isUserIn(username){
//     return `Welcome ${username} You Just Fucking Logged In`;
// }

// console.log(isUserInn("arshaikh"));

// function isUserIn(username){
//     if(username === undefined){
//         console.log("lodu username tera baap dega make lode bhosdike");
//     }
//     else{
//     return `Welcome ${username} You Just Fucking Logged In`;
//     }
// }

// console.log(isUserInn());

// function addToCart(...val){

//     return val;

// }

// console.log(addToCart("dildo", "condom", "period blood"));

// let blinkit = {
//     name: "mahek",
//     area: "amroli"
// }

// function addObjects(e){
//      return `${e.name} is from ${e.area} thats why they get orders done`
// }
// console.log(addObjects(blinkit));

// function addObjectz(e){
//      return `${e.name} is from ${e.area} thats why they don't get orders done`
// }

// console.log(addObjectz({
//     name: "arshaikh",
//     area: "sachin"
// }))

// let arr = [100, 200, 300, 700, 7100]

// function getArr(e){
//     return `you have to give someone ${e[4]}`
// }

// console.log(getArr(arr))

// function getArr(e){
//     return `you have to give someone ${e[4]}`
// }

// console.log(getArr([100, 200, 300, 400, 1150]));

// console.log('we back mf');
// if(true){
// let abq = 300;
// const bbq = 400;
// var cbq = 600;
// }

// console.log(abq)  //will throw error
// console.log(bbq)  //will throw error
// console.log(cbq) //works perfectly when used in blocked scoped but you cant access var in function scope

// function addTwo(){

//      let bola = "arora"
//      function addThree(){
//         console.log(bola)
//         let bumra = "cr7"
//      }
//      addThree()

//     //  console.log(bumra)  // this will throw error cuz you cannt access child function's variable in parent one
// }
// addTwo()
// dolDab()   // this will throw an error cuz you cant run function before initialization if your holding it into variables
// let dolDab = function(){
//     let b = "bruhhhh"
//     console.log(b)
// }
// dolDab()

// let btn = document.querySelector('.oled');
// let swt = document.querySelector('.plid');

// function clickToSee(){
//     let b =document.createElement('h1');
//     b.innerText = "CHUT";
//     b.style.color = "green";
//      document.body.appendChild(b);
// }

// // btn.addEventListener

// btn.addEventListener("click", function(){
//     clickToSee()
// })

// you cant use this keyword in node enviroment but if used in function you will see methods and values but,
//  still if you refer to variable or something this will return undefined in function if used in node enviroment
// you cant use this keyword in arrow function
// ******* so where do we use it the most it will be in browser********

// console.log(this)   //( from now on i am refering this keyword in browser console) this this keyword will refer to global context and in global context if script is empty it will return window object if there is other variable in script it will return those too

// // if you use this in objects like this

// let a = {

//     name: 'arshaikh',
//     age: 21,
//     welcomeGreet: function(){
//         console.log(`hey, ${this.name}`);
        
//     }

// }
// a.welcomeGreet()
// a.name = "lodu" // change the current context now this will refer to this new value
// a.welcomeGreet()

// *****arrow function[explicit return and implicit return function]*******
// explicit return function
// const aandkafunction = () => {
//       let b = "gand";
//       return b
// }  // when you use curly braces({}) you have to use return

// console.log(aandkafunction());

// const bundkafunction = (lund1, lund2) => ( lund1+lund2 )//implicit return funtion/one line function(you'll use paranthisis() and dont have to use retun)
// console.log(bundkafunction(3, 4));

// you cant use this keyword in arrow function 

// *****************IIFE(Immedietly Invoked Function Expression)*****************
//named iife
// (function arZod(){
//    console.log(`yall okayyy`);
// })();
// // unnamed iife
// (function(){
//    console.log(`ewww i aint`);
// })();
// //arrow iife and how to pass variable in funaction
// ( (name) => {
//    console.log(`hey, ${name} welcome to console`);
   
// } )("arshaikh");

// let a = 10

// if( a < 3 ){
//     console.log('yes it is');
// }else if( a != 10){
//     console.log("how'd you thik that 3 is greater than 10");
// }else{
//     console.log("here we are");
    
// }

// let month = 6;

// switch (month){
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 10:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     default :
//     console.log("the month does'nt exist");
//     break;  
// }

// loops

// for ( let i = 1; i < 11; i++){
//     console.log(`${i} is i`);
//     for (let j = 1; j< 11; j++){
//         console.log(j + (j * i));
        
//     }
    
// }

// let a = 0;

// do{
  
//    console.log(` ${a} i love mahek `);
//     a++ 
   
// }while(a < 10)

// working of loops with array

// let arr = ['superman', 'spiderman', 'batman', 'deadpool'];

// for (let i = 0; i < arr.length; i++){
//     console.log(`your hero is ${arr[i]}`);
// }

// let arr = ['superman', 'spiderman', 'batman', 'deadpool'];
// let i = 0;

// do{
 
//     console.log(`${arr[i]}`);
//     i++

// }while(i < arr.length)

// switch and continue in loops

// for (let a = 0; a < 10; a++){
//     if(a == 5){
//     console.log(`a is not ${a}`);
//     break;
//     }
//     console.log(`a is ${a}`);
    
// }

// for (let a = 0; a < 10; a++){
//     if(a == 5){
//     console.log(`a is not ${a}`);
//     continue;
//     }
//     console.log(`a is ${a}`);
    
// }

// important url: https://developer.mozilla.org/en-US/docs/Glossary/Control_flow and 
// https://latentflip.com/loupe/?code=ZnVuY3Rpb24gb25lKCkgew0KICB0d28oKTsNCn0NCg0KZnVuY3Rpb24gdHdvKCkgew0KICB0aHJlZSgpOw0KfQ0KDQpmdW5jdGlvbiB0aHJlZSgpIHsNCiAgY29uc29sZS5sb2coIkhlbGxvIik7DQp9DQoNCm9uZSgpOw0K!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

