const { futimesSync } = require("fs");

const personalInformation = { //destructing objects
    firstname : 'usman',
    lastname : 'ali'
}
const {firstname:fn,lastname:ln}=personalInformation;//repalcing the names
console.log(`${fn} ${ln}`)
//Destructing arrays
let {firstname,middlename,lastname}=['Usman','ali','ansari']
lastname= 'don'
console.log(lastname) 
//Object literls
function addressMaker(city,state){
    const newAdress = {city,state}
    console.log(newAdress)
}
addressMaker('Lahore','Pakistan')
//Object Literals
function addressMaker1(address){
    const  {city,state} = address;
    const newAdress={
        city,
        state
    }
    console.log(`${newAdress.city},${newAdress.state}`)
}
addressMaker1({city:'Lahore',state:'Pakistan'})
//For of loop
let incomes = [1000,2000,4000]
let total=0
for(const income of incomes){
    console.log(income)
    total+=income
}
console.log(total)

let fullName = "usman is king of coding"
for(const char of fullName){
    console.log(char)
    
}
//spread operator
let example1= [1,2,3,4,5]
let example2= [...example1]
example2.push('true')
console.log(example2)
//anothor exapmle
let exapmle3={
    firstname:'usman'
}
//Rest operator
function add(...nums){
    console.log(nums)
}
add(1,2,3,6,8,9)
//arrow functions
function sum(...num){
    let total= num.reduce((x,y)=>x*y)
    console.log(total)
}
sum(1,24,7,8,9)
//Default param
function summ(numArray=[]){
    let total = 0
    numArray.forEach((element) => {
        total+=element;
    });
    console.log(total)
}
summ()
//Includes()
let arr =[1,2,36,7]
console.log(arr.includes(2))//it checks is elements is present in the or not
//pad start and pad end
let exa4='usman'
console.log(exa4.padStart(20,'a'))
console.log(exa4.padEnd(20,'a'))
//trailing commas
//async await

const fetch = import('node-fetch');

async function getTop100Campers() {
  const response = await fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  const json = await response.json();
  console.log(json);
}

getTop100Campers();
//sets
const exampleSet= new Set ([1,1,1,1,2,2,2,2])
exampleSet.add(4).add(17)
console.log(exampleSet)
console.log(exampleSet.size)