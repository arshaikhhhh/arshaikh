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

// ******* so where do we use it the most it will be in browser********

console.log(this)   //( from now on i am refering this keyword in browser console) this this keyword will refer to global context and in global context if script is empty it will return window object if there is other variable in script it will return those too

// if you use this in objects like this

let a = {

    name: 'arshaikh',
    age: 21,
    welcomeGreet: function(){
        console.log(this.username);
        
    }

}