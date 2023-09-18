// first probleme
let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(tab) {
  let tabEven = [];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
      let tabElement = tab[i];
      tabEven.push(tabElement);
    }
  }
  return tabEven;
}
let evenArray = evenNumbers(tab);
console.log(evenArray);

// second probleme
let person = [
{ name = 'faruk',
  age ='31' ,
  email = 'person1@gmail.com'},
{  name = 'romaissa',
   age='35' ,
   email = 'person2@gmail.com'},
{  name = 'mohammed',
   age ='45' ,
   email = 'person3@gmail.com'
},
{ name = 'amina',
  age='23' ,
  email = 'person4@gmail.com'
}
]

function object(person){
let array=[];
for (let i=0; i< person.length,i++){
if (person[i].age > 30){
let personNme = person[i].name;
array.push(personNme);
}
}
return array;
}

let personOver30 = object(person);
console.log(personOver30);

// therd problem - Stack -
let stack = []
stack.push('faruk')
stack.push('mohammed')
stack.push('amina')
stack.push('rania')
console.log(stack)

let name = stack.pop()
console.log(stack)

function peek(stack){
  let lastEelemnt = stack.length-1
  return stack[lastEelemnt]
}
console.log(peek(stack))

function isEmpty(stack){
  return stack.length === 0
}
console.log(isEmpty(stack))


// fourth problem - queue  -
let queue = []
queue.push('faruk')
queue.push('mohammed')
queue.push('amina')
queue.push('rania')
console.log(queue)


let firstOut = queue.shift()
console.log(queue)

function isEmpty(queue){
  return queue.length === 0
}
console.log(isEmpty(queue))


// fifth problem 
let string = 'elena'
function DeletVowels(String){
let result =[]
let Vowels = ['e','i','a','u','o']

for (let i = 0; i < string.length ; i++){
if(!Vowels.includes(string[i]))
{
let notVowel = string[i]
result.push(notVowel)
}

}
return result
}
let delet = DeletVowels(string)
console.log(delet)


// sixth problem 
let array1 =[1,3,5,7,9,10]
let array2 =[1,2,3,4,5,6,7,8,9,10]

function similar(array1, array2){
let similarArray =[]
for (let i =0 ; i < array1.length ; i++){

for (let j = 0 ; j< array2.length ; j++ ){

if (array1[i] == array2[j]){
let similarNumber = array2[j]
similarArray.push(similarNumber)
}
}
}
return similarArray
}
let tab = similar(array1 , array2)
console.log(tab)



