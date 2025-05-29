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
// let btn = document.querySelector('.oled');
// let swt = document.querySelector('.plid');

// function clickToSee(){
//     let b =document.createElement('h1');
//     b.innerText = "Hello Bacho";
//     b.style.color = "red";
// }
 
// btn.addEventListener

// btn.addEventListener("click", function(){
//     clickToSee()
// })

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