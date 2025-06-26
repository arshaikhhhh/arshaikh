//BOMBBASTIC LINE/   everything goes through the object in javascript
// ------wrote something bibilic at line number 1124
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
// named iife
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
// short hand version of if-else
//  let b = 100;

//  (b == 100) ? console.log("yes b sahi hai") : console.log("no its not");

// AND(&&), OR(||) in if-else

// let i = {

//    node : "arzh",
//    logged: true,
//    email: "arzh@email.com",
//    phone: false

// }
// AND(&&) Example
// if(i.node && i.logged == true){
//     console.log("we so back " + i.node);

// }else{
//     console.log("logg in mf");

// }

// OR(||) Example
// if(i.email || i.phone == true){
//     console.log("danm you use personal info wow");
// }
// else{
//     console.log("bhai i am mark zuckerburg");
// }

// important url: https://developer.mozilla.org/en-US/docs/Glossary/Control_flow and
// https://latentflip.com/loupe/?code=ZnVuY3Rpb24gb25lKCkgew0KICB0d28oKTsNCn0NCg0KZnVuY3Rpb24gdHdvKCkgew0KICB0aHJlZSgpOw0KfQ0KDQpmdW5jdGlvbiB0aHJlZSgpIHsNCiAgY29uc29sZS5sb2coIkhlbGxvIik7DQp9DQoNCm9uZSgpOw0K!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// Higher Order Array Loops + ForIN + Map(new datatype, you can only pass a unique value in this)

// let map = new Map();
// map.set("IN", "india")
// map.set("USA", "United States Of America")
// map.set("IN", "india") //loop wont recognise this cuz its not unique value
// map.set("FR", "France")
// // ForOf(for of is only higher order loop which can iterate on Map datatype cuz it does not require key which map does not have)
// for (const e of map) {
//    console.log(`it ${e}`);

// }

// let a = ['arshaikh', 'mahek', 'ziyan']

// for (const e of a) {
//     console.log(e);

// }

// ForIN(Can Be Used On Objects And Array(But With Specific Method) Both)

// let bol = {

//     name: "Arshaikh",
//     age: 21,
//     soc: "insta"

// }

// for (const i in bol) {
//    console.log(`${i} is ${bol[i]}`);
// }

// use on Arrays
// let a = ['arshaikh', 'mahek', 'ziyan']

// for (const i in a){
//     console.log(a[i]);
// }

// forEach(mostly used) on array+ objects in array
// you can use functions(which dont have name cuz it is call back function and call back functions does'nt have name)
//  or arrow function on forEach
// on array

// let lol = [1,2,3,4,5,6,7,8,9]

// lol.forEach( (e) => {
//    console.log(e);

// } )

// let dbInfo = [
//     {
//         name: "arshaikh",
//         phone: "9106775722",
//         age: "20",
//         email: "arshaikh2700@gmail.com"
//     },
//     {
//         name: "mahek",
//         phone: "9484034020",
//         age: "18",
//         email: "mahek@google.com"
//     },
//     {
//         name: "ziyan",
//         phone: "9120391309",
//         age: "21",
//         email: "ziyan@google.com"
//     }
// ]

// dbInfo.forEach( (e) => {
//     console.log(`the name of account is ${e.name} the phone number is ${e.phone} and age of user is ${e.age} and here is email ${e.email}`);

// } )

// the parameters you can pass in function are index, item and array it self

// let wind = ["ar", "mahu", "zack"]

// wind.forEach( (index, item, arr) => {
//    console.log(index, item, arr);

// } )

// filter()
// let arr = [1,2,3,4,5,6,7,8,9,10]

// let numbs = arr.filter( (e) => ( e>5 ) )
// console.log(numbs);

// const books = [
//   { name: "To Kill a Mockingbird", publishYear: 1960, author: "Harper Lee" },
//   { name: "Green Eggs and Ham", publishYear: 1960, author: "Dr. Seuss" },
//   { name: "1984", publishYear: 1949, author: "George Orwell" },
//   { name: "Brave New World", publishYear: 1932, author: "Aldous Huxley" },
//   { name: "The Great Gatsby", publishYear: 1925, author: "F. Scott Fitzgerald" },
//   { name: "The Catcher in the Rye", publishYear: 1951, author: "J.D. Salinger" },
//   { name: "The Lord of the Rings", publishYear: 1954, author: "J.R.R. Tolkien" },
//   { name: "Fahrenheit 451", publishYear: 1953, author: "Ray Bradbury" },
//   { name: "The Two Towers", publishYear: 1954, author: "J.R.R. Tolkien" },
//   { name: "Pride and Prejudice", publishYear: 1813, author: "Jane Austen" },
//   { name: "Harry Potter and the Sorcerer’s Stone", publishYear: 1997, author: "J.K. Rowling" },
//   { name: "Harry Potter and the Chamber of Secrets", publishYear: 1998, author: "J.K. Rowling" },
//   { name: "The Alchemist", publishYear: 1988, author: "Paulo Coelho" },
//   { name: "Matilda", publishYear: 1988, author: "Roald Dahl" }
// ];

// let brr = books.filter( (e) => {
//     return e.publishYear === 1998 && e.author === "J.K. Rowling"

// } )
// console.log(brr);

// map()

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let dehm = arr.map( (e) => ( e * 2 ) )
// console.log(dehm);

// const books = [
//   { name: "To Kill a Mockingbird", publishYear: 1960, author: "Harper Lee" },
//   { name: "Green Eggs and Ham", publishYear: 1960, author: "Dr. Seuss" },
//   { name: "1984", publishYear: 1949, author: "George Orwell" },
//   { name: "Brave New World", publishYear: 1932, author: "Aldous Huxley" },
//   { name: "The Great Gatsby", publishYear: 1925, author: "F. Scott Fitzgerald" },
//   { name: "The Catcher in the Rye", publishYear: 1951, author: "J.D. Salinger" },
//   { name: "The Lord of the Rings", publishYear: 1954, author: "J.R.R. Tolkien" },
//   { name: "Fahrenheit 451", publishYear: 1953, author: "Ray Bradbury" },
//   { name: "The Two Towers", publishYear: 1954, author: "J.R.R. Tolkien" },
//   { name: "Pride and Prejudice", publishYear: 1813, author: "Jane Austen" },
//   { name: "Harry Potter and the Sorcerer’s Stone", publishYear: 1997, author: "J.K. Rowling" },
//   { name: "Harry Potter and the Chamber of Secrets", publishYear: 1998, author: "J.K. Rowling" },
//   { name: "The Alchemist", publishYear: 1988, author: "Paulo Coelho" },
//   { name: "Matilda", publishYear: 1988, author: "Roald Dahl" }
// ];

// let brr = books.map( (e) => {
//    return console.log(`this book ${e.name} was published in ${e.publishYear} and written by ${e.author}`)
// })

// chaining
// chaining on array
// let a = [1,2,3,4,5,6,7,8,9,10]

// let b = a.map( (e) => ( e * 10 ) ).filter( (e) => ( e>50 ) )

// console.log(b);

// chaining on objects in arrays

// const users = [
//   {
//     name: "Alice Johnson",
//     number: "9876543210",
//     username: "alicejohnson",
//     password: "alice@123",
//     createdAt: 2022
//   },
//   {
//     name: "Bob Smith",
//     number: "9123456780",
//     username: "bobsmith",
//     password: "bob@2022",
//     createdAt: 2022   // same as Alice
//   },
//   {
//     name: "Charlie Patel",
//     number: "9988776655",
//     username: "charliepatel",
//     password: "charlie2023!",
//     createdAt: 2023
//   },
//   {
//     name: "Diana Mehta",
//     number: "9012345678",
//     username: "dianamehta",
//     password: "diana2024#",
//     createdAt: 2024
//   },
//   {
//     name: "Ethan Verma",
//     number: "9090909090",
//     username: "ethanverma",
//     password: "ethan@2025",
//     createdAt: 2025
//   }
// ];

// let userChain = users.filter( (e) => ( e.createdAt == 2022 ) ).map( (e) => ( console.log(`this account ${e.username} created on ${e.createdAt}`)
//  ) )

// reduce()

// reduce on arrays

// let arr = [1,2,3]

// let prr = arr.reduce( (acc, crr) => ( acc+crr ))

// console.log(prr);

//  reduce on objects in arrays

// const shoppingCart = [
//   {
//     productName: "Wireless Mouse",
//     price: 800,
//     quantity: 2,
//     total: 1600
//   },
//   {
//     productName: "Keyboard",
//     price: 1200,
//     quantity: 1,
//     total: 1200
//   },
//   {
//     productName: "Laptop Stand",
//     price: 1500,
//     quantity: 1,
//     total: 1500
//   },
//   {
//     productName: "Notebook",
//     price: 60,
//     quantity: 5,
//     total: 300
//   },
//   {
//     productName: "Pen Set",
//     price: 100,
//     quantity: 3,
//     total: 300
//   }
// ];

// let arr = shoppingCart.reduce( (acc,crr) => ( acc+crr.price ), 0)

// console.log(arr);

//  chaining on reduce
// const shoppingCart = [
//   {
//     productName: "Wireless Mouse",
//     productType: "electronics",
//     price: 800,
//     quantity: 2,
//     total: 1600
//   },
//   {
//     productName: "Keyboard",
//     productType: "electronics",
//     price: 1200,
//     quantity: 1,
//     total: 1200
//   },
//   {
//     productName: "Laptop Stand",
//     productType: "electronics",
//     price: 1500,
//     quantity: 1,
//     total: 1500
//   },
//   {
//     productName: "Notebook",
//     productType: "stationery",
//     price: 60,
//     quantity: 5,
//     total: 300
//   },
//   {
//     productName: "Pen Set",
//     productType: "stationery",
//     price: 100,
//     quantity: 3,
//     total: 300
//   }
// ];

//  let arr = shoppingCart.filter( (e) => ( e.productType == "stationery" ) ).reduce( (acc, crr) => ( acc+crr.total ), 0)
//  let arr2 = shoppingCart.filter( (e) => ( e.productType == "electronics" ) ).reduce( (acc, crr) => ( acc+crr.total ), 0)

//  console.log(`your stationery total is ${arr} and electronics total is ${arr2}`);
//  console.log(`total bill: ${arr+arr2}`);

// let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// let b = a.map( (e) => ( e - 9 ) )
// console.log(b);

// let b = a.filter( (e) => ( e>35 ) )
// console.log(b);

// let b = a.reduce( (acc, crr) => ( acc+crr ), 0)
// console.log(b);

// let chain = a.filter( (e) => ( e>56 ) ).reduce( (acc, crr) => ( acc+crr ), 0)
// console.log(chain);

// const users = [
//   { name: "Alice", age: 25, isSubscribed: true },
//   { name: "Bob", age: 30, isSubscribed: false },
//   { name: "Charlie", age: 22, isSubscribed: true },
//   { name: "David", age: 28, isSubscribed: false },
//   { name: "Eve", age: 35, isSubscribed: true },
// ];

// let arr = users.filter( (e) => ( e.isSubscribed == true )).map((e)=>( e.name))
// console.log(arr);

// let arr = users.reduce((acc, crr) => ( acc+crr.age/5 ), 0)
// console.log(arr);

// let arr = users.filter( (e) => ( e.isSubscribed == true ) ).reduce( (acc, crr) => ( acc+crr.isSubscribed ), 0)
// console.log(arr);

// let arr = users.map( (e) => ( e.name ) ).join()
// console.log(arr);

// ✅ Total items in the cart (add all quantities)

// ✅ Total cart value (price × quantity for all items)

// ✅ List of product names above ₹1000 (after multiplying quantity)

// ✅ Make a new array with 18% GST added in each item (new key: priceWithGST)
// const cart = [
//   { product: "Shirt", price: 1200, quantity: 2 },
//   { product: "Jeans", price: 2400, quantity: 1 },
//   { product: "Socks", price: 150, quantity: 4 },
//   { product: "Jacket", price: 3200, quantity: 1 },
// ];

// let arr = cart.reduce( (acc, crr) => (acc+crr.quantity), 0)
// console.log(arr);

// let arr = cart.map( (e) => ( e.price*e.quantity ) ).reduce( (acc, crr) => ( acc+crr ), 0)
// console.log(arr);

// let arr = cart.filter( (e) => ( e.price*e.quantity>1000 ) ).map( (e) => ( e.product ) )
// console.log(arr);

// console.log(" worse day of my coding journey 03/06/2025 lose motivation watched webseires and stuff till 8:21 ")

// ***create element and push it to HTML***
// let cnt = 0;

// function crElmnt() {
//   cnt++;
//   var prada = document.createElement('h2');
//   prada.innerText = "lmao";
//   prada.className = `diddy${cnt}`;
//   prada.style.color = "yellow";
//   document.body.appendChild(prada);
// }

// let crd = document.querySelector('.oled');
// crd.addEventListener("click", function () {
//   crElmnt();
// });

// ***delete element from html start from last*******

// let dt = document.querySelector('.plid');
// dt.addEventListener("click", function () {
//   // Select all h2s with class starting with 'diddy'
//   let allDiddys = document.querySelectorAll('h2');
//     let last = allDiddys[allDiddys.length - 1];
//     last.remove();

// });

// ***
// let r = document.querySelectorAll('#button');
// let m = document.body;

// r.forEach( (btn) => {
//     btn.addEventListener("click", (e) =>{
//         if(e.target.className == 'red'){
//             m.style.backgroundColor = "red"
//         }else if(e.target.className == 'green'){
//             m.style.backgroundColor = "green"
//         }else if(e.target.className == "blue"){
//             m.style.backgroundColor = e.target.className
//         }
//     } )

// } )

// setInterval( function trom(){
// //   **method 1 */
//        let time = new Date();
//        let v = time.toTimeString()
//        let dido = document.querySelector('.clock');
//        dido.innerHTML = v;
// // **method 2 */
// if(time.getMinutes() < 10 || time.getSeconds() < 10 ){
// let v = "0" + time.getHours() + " : " + "0" + time.getMinutes() + " : " + "0" + + time.getSeconds();
// let dido = document.querySelector('.clock');
// dido.innerHTML = v;
// }else{
// let v = time.getHours() + " : " + time.getMinutes() + " : "  + + time.getSeconds();
// let dido = document.querySelector('.clock');
// dido.innerHTML = v;
// }
// }, 1000)

// **** BMI Cals ***

// let form = document.querySelector('form');
// let r = document.querySelector('#result');
// let d = document.querySelector('#final')
// form.addEventListener('submit', function(e){
//      e.preventDefault()
//      let height = parseInt(document.querySelector('#height').value);
// let weight = parseInt(document.querySelector('#weight').value);
//        let fm = (weight / (height*height) * 10000).toFixed(2);

//      if(height === "" || height < 0 || isNaN(height)){
//        r.innerHTML = `<span>Invalid Value<span>`;
//      }
//      else if(weight === "" || weight < 0 || isNaN(weight)){
//        r.innerHTML = `<span>Invalid Value<span>`;
//      }else{
//        r.innerHTML = `<span>The BMI Value Is ${fm}</span>`;
//        console.log(fm);
//      }
//      let threesome = parseInt(fm)
//      if(threesome<18.50){
//        d.innerHTML = `<span> underweight </span>`
//      }else if(threesome >= 18.50 && threesome < 24.90){
//        d.innerHTML = `<span> normal weight </span>`
//      }else if(threesome >= 25 && threesome < 29.90){
//        d.innerHTML = `<span> overweight </span>`
//      }else{
//        d.innerHTML = `<span> Obese </span>`
//      }

// })

//  ** Math Guess ???S

// let num1 = document.querySelector('.math1');
// let num2 = document.querySelector('.math2');
// let guess = document.querySelector('.sum');
// let btn = document.querySelector('.done');
// let btn2 = document.querySelector('.start');
// let cnt=document.querySelector('.c');
// let score = 0;
// function ransum(){
//         let a =(Math.floor(Math.random()*16) * 100).toFixed(0)
//       let b = (Math.floor(Math.random()*16) * 100).toFixed(0)
//       num1.innerHTML = a;
//       num2.innerHTML = b;
//       cnt.innerHTML = score;
//       btn2.style.display = "none";
//       guess.style.display = "flex";
//       btn.style.display = "flex";
// }

// btn2.addEventListener("click", function(){
//    ransum();
// })
// btn.addEventListener("click", function(){
//      let result = parseInt(num1.innerHTML)+parseInt(num2.innerHTML);
//      if(guess.value == result){
//       ransum();
//       guess.value = "";
//       score++
//       cnt.innerHTML = score;
//      }else{
//       score = 0;
//        cnt.innerHTML = score;
//       document.body.style.backgroundColor = "red"
//       btn2.style.display = "flex";
//         guess.style.display = "none";
//       btn.style.display = "none";
//      }
// })

// *********Async JS*****
// setTimeout(()=>{
//     console.log("arshaikh");

// }, 2000) // this will print arshaikh in colsole after 2 seconds
// let str = document.querySelector("#start");
// let stp = document.querySelector("#stop");
// let inter;

// str.addEventListener('click', function(){
//   if(!inter){
//   inter = setInterval(()=>{
//     console.log("arshaikh");
//   }, 1000)
//   }
// })

// stp.addEventListener('click', function(){
//   clearInterval(inter)
//   inter = null;
// })
// let str = document.querySelector("#start");
// let stp = document.querySelector("#stop");
// let inter;
// let clr =
// str.addEventListener('click', function(){
//   if(!inter){
//   inter = setInterval(()=>{
//     document.body.style.background = `rgb(${Math.floor(Math.random()*16)*200}, ${Math.floor(Math.random()*10)*100}, ${Math.floor(Math.random()*9)*100})`
//   }, 1000)
// }
// })

// stp.addEventListener('click', function(){
//   clearInterval(inter)
//   inter = null;
// })
// let insert = document.querySelector('.keyin');
// const input = document.getElementById("fakeInput");

// document.body.addEventListener("click", () => {
//   input.focus();
// });

// window.addEventListener('keydown', function(e){
//     insert.innerHTML = `
//     <table>
//   <tr>
//     <td>key</td>
//     <td>keycode</td>
//     <td>code</td>
//   </tr>
//   <tr>
//     <td>${e.key === " "?"space" : e.key}</td>
//     <td>${e.keyCode}</td>
//     <td>${e.code}</td>
//   </tr>
// </table>
//     `
// })
// let btn = document.querySelector('#o');
// let img = document.querySelector('#pfp');
// let urn = document.querySelector('.un');

// let url = "https://api.github.com/users/BlackArch0";

// btn.addEventListener('click', function(){
// let req = new XMLHttpRequest();
// req.open('GET', url)
// req.onreadystatechange = function(){
//   let data = JSON.parse(this.responseText)
//   img.innerHTML = `<img class="pfp" src="${data.avatar_url}">`;
//   urn.innerHTML = `<span>${data.login}</span>`

// }
// req.send()
// })

// let profile = document.querySelector("#pfp");
// let nam = document.querySelector("#nom");
// let insta = document.querySelector("#ig");
// let btn = document.querySelector("button");
// btn.addEventListener('click', function(){
// console.log("Fetching user...");
// fetch("https://api.github.com/users/BlackArch0")
//   .then((res) => res.json())
//   .then((data) => {

//   profile.src = data.avatar_url
//   nam.innerHTML = data.name
//   insta.innerHTML = data.blog

//   })
//   .catch((error) => console.log( "the problem is : ", error));
// })

//   let b = document.querySelector('#gen');
//       let body = document.querySelector('body');

// fetch('https://api.imgflip.com/get_memes')
//   .then(res => res.json())
//   .then(e => {
//      function lm(){
//     e.data.memes.forEach(meme => {
//       let img = document.createElement('img');
//       img.src = meme.url;
//       img.alt = meme.name;
//       img.style.width = '200px'; // optional styling
//       img.style.margin = '10px'; // optional styling
//       body.appendChild(img);
//     });

//   }
//   b.addEventListener('click', lm)
//   })
//   .catch(error => console.log(error));
// function getDT(){
// fetch("https://v2.jokeapi.dev/joke/Dark")
//   .then((res) => res.json())
//   .then((e) => {
//     let a = document.querySelector("#main");

//     let c = document.querySelector("#del");
//       if (e.type == "twopart") {
//         a.innerHTML = e.setup;
//         c.innerHTML = e.delivery;
//       } else {
//         a.innerHTML = e.joke;
//         c.innerHTML = ""; // Clear delivery if it's a single joke
//       }
//       // console.log(e.json());
//     })
//   .catch((err) => console.log("the error is", err));
// }
//   let b = document.querySelector("#gen");

//   b.addEventListener("click", function () {
//           getDT()

//       })
// console.log("happy birthday");>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!***********************************************************************************************************************************************

// let user = [
//   {
//     username: "arshaikh",
//     phone: 1234567890,
//     insta: "arshaikh.co",
//     single: true,
//   },
//   { username: "uknow", phone: 90987654321, insta: "example", single: true },
//   { username: "uknow2", phone: 9030335432, insta: "exampleig", single: false }
// ];
// user
//   .filter((a) => {
//     return a.single === true;
//   })
//   .map((e) => {
//     console.log(e.username + " we are single");
//   });
// *****************OOP(Object Oriented Programing)****
//
// (1)Object Literal
// {}
// yes this is object literal like literaly bro it is object 
//
// (2) constructor function
// function getProps(username, pass, uid){
//       this.username = username;
//       this.pass = pass;
//       this.uid = uid;
//       return this;
// }
// let user1 = new getProps("teri maa ki chut bhadve", "dub ke marja madharchod", 69)
// let user2 = new getProps("sorry but i dont agree with your opinion", "everyone should have there own opinion thats okay", 2)
// let user3 = getProps("teri maa ki chut bhadve", "dub ke marja madharchod", 69)
// console.log(user1);
// console.log(user2);
// check out 1128 till end of new mentioned for more

//4 pillars of OOP(bade bade name given by chhote bade devs)
// abstraction- hiding details
// encapsulation- wraping up of data(you can control who use what)
// inheritance(in proto)
// polymorphism- poly= many morphism= forms, poly+morphism= many forms/types 
// (you better learn all of this from chatgpt)
// Mostly OOP Done here ig now advance part of OOP Or JS whatever yoy wanna call it

// (3) Prototypes(proto or in js __proto__)
// javascript has protoypal behaviour and its not about just oop its about mechanism of javascript how it works prototype and proto is different and thats why some call it proto to avoid confusion
// default behaviour of js is protoypal behaviour means it will try its best to find what you were asking for(upar se upar jaege like we use dot notation to find anything whatever value it is and no matter how long the code or line it self get, will access child, parents, grand parents, great grand parent, good great grand parents and then comes __proto__ than more __proto__ of it until we dont get protos it will keep trying and when it doesn't find it than only and ONLY then it will stop) i love javascript its the most hard working language bro i developed a feelings i love you ccan i kiss shoudld we get married 
// if yoy created array(array is object in it self in javascript actually everything is object so when you trace the __proto__ tree) it look like this
// array>>object>null(null itself is array in js but this is referance of real world so yeall it says you get nothing and you should jump into river full of lava cuz you just made javascript feel worthless she a queen bro i love her muhaahhh)
// same with strings, string>>object
// even function it in itself is object you can access the value of by dot notation and make it work like funcName.power = 2 bla bla
// and we call it protoypal inheritance js wont give up and who not give up easily i fall in love with em so i love js we should get married 
// i am jssexual lmao
// proto is like c:// of windows you cant go anywhere beyonf that
// this(keyword) is also an object at the end
// this key word simply means whoever called go to them(in matru bhasha hindi jisne bhi bulaya hai uske paas jao)
// jis ka matlab this ~ hitesh chaudhry-2023 (chai aur javascript chapter 43:timetamp 19:40)
// basically this is sytectic sugar of js for protoypal inheritance
//the new keyword/// new keyword create new instance
// new keyword functionality: creates new object---linked to prototype propety of constructor function(this means is has access to properties and methods definedon the contructor's prototype)
// then the constrctor is called ----the constructor function(new in most cases) is called with the specified arguments and this(keyword) is bound to the newly created object {i.e check try run OOP.2 code}if there is no explicit return calue is specified from the contructor(which is new again in mostly cases i assume) javascript assume this(not keyword), the newly created object, to be the intended return value (well u have to watch 43rd video i guess sometimes in future lol its sde2 stuff)
// and then the newly freshly brand new goodest chummershvari new NEWLY made object is returned once the constructo is called[three laters but gand faad right]
//end of new/


//BOMBBASTIC LINE/   everything goes through the object in javascript{
// if you access object in js you can use it in pretty much everything
// let b = {
//     user: "lol",
//     pass: "xD",
//     num: 512,
//     func: function(){
//         console.log(this.user +" chura rha meri lines");
//     }
// }


// Object.prototype.pmkabeta = function(){
//     console.log("me india ke pm ka beta hu aur " + this.user + " se milna chahta hu");
//    //pm ka beta hai bhai kisi se bhi mil sakta hai you know higher power xD 
// }

// b.pmkabeta()

// console.log(b);
//}
// also javascript stops when it finds the value so if you assign value to array like here Array.prototype.pmkabeta and function than you will not be access it in Objects
// you can link multiple objects arrays using __proto__

// let human = {
//     naam: "abdul rahim shaikh",
//     proffesion: "front end dev",
//     irl: 27,
//     isDead: false
// }
// let user = {
//     username: "ar",
//     id: 427,
//     socials: "arshaikh.co",
//     __proto__: human 
// }
// console.log(user.__proto__.isDead);

// user.__proto__.isDead = true; // you can access the value outside too
// console.log(user.__proto__.isDead);

// modern syntext is
// Object.setPrototypeOf(user, human)

// call
 
// function setUsername(username){
//     this.username = username
// }

// function createUser(username, email, pass){
//     setUsername.call(this, username)
//    // call pass the current execution context to another function 
//     this.email = email
//     this.pass = pass
// }

// let chai =  new createUser("chai", "chai@fb", "123")

// console.log(chai);

// class

// class User {
//     constructor(username, email, pass){
//         this.username = username
//         this.email = email
//         this.pass = pass
//     }

//     encrtyptPass(){
//         console.log(`${this.pass}ihruhrwuhrwu`);
//     }
// }

// let user1 = new User("arshaikh", "ar4270000@gmail.com", "085839")

// console.log(user1.encrtyptPass());

// inhertitance in class

// class User {
//     constructor(username, socials, email){
//         this.username = username
//         this.socials = socials
//         this.email = email
//     }

//     isLogIn(){
//         console.log(`yes the ${this.username} is logged in`);
        
//     }
// }

// class Human extends User{
//     constructor(username, naam, age, isDead){
//         super(username)
//         this.naam = naam
//         this.age = age
//         this.isDead = isDead
//     }
//     fnc(){
//         console.log(` ${this.username} in irl is ${this.naam}`);
        
//     }
//     
//     static setId(){
//       return `69`  
//       }       // if you dont want to give id to every value which is originated from this class use static
// }

// let user1 = new Human("ar", "abdul rahim", "22", false);

// user1.fnc()
// console.log(user1.setId())
// console.log(user1 instanceof User); // instanceof

// getter setter
// class User{
//     constructor(user,email){
//         this.user = user
//         this.email = email
//     }
//     get email(){
//         this._email.toUpperCase()
//     }
//     set email(cl){
//         this._email = `${cl}senitized`
//     }
// }
// let user1 = new User("ar", "ar@427.co")
// console.log(user1._email);

/// lexical scope
// function outer(cl){
    
//     return function inner(){
//         console.log(cl);
        
//     }
// }

// let sv = outer("ar") (this function stores the value and lexical scope of outer fcuntion in memory and thats called clouser)
// sv()