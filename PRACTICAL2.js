let array = [1, "Krish", true];
//Find the length of the array
let length = array.length;
console.log("Length of the array : ", length);

//access and display specific elements using indexing
console.log("Index 0 : ", array[0]);
console.log("Index 3 : ", array[2]);

//use array methods
array.push("Bhikadiya"); //add element at the end
console.log(array);
array.pop(); // remove element from start
console.log(array);
array.shift();
console.log(array);
array.unshift(0);
console.log(array);
let joinedarray = array.join(", ");
console.log(joinedarray);

delete array[0];
console.log(array);

let array2 = [7, false, 8];
let concatenated = array.concat(array2);
console.log("Concatenated : ", concatenated);

let flattened = [
  [1, 2],
  ["Krish", "Bhikadiya"],
  [true, false],
].flat();
// nested array ==> single array
console.log("Flattened array : ", flattened);

array.splice(1, 1, 10, 11); //Remove 1 element at index 1 and add 10 and 11 at the same position
console.log("After splice : ", array);

let sliced = array.slice(1, 4);
console.log(sliced);

//create an object
let person = {
  name: "Krish Bhikadiya",
  age: 19,
  gender: "Male",
};

function display(person) {
  console.log("Name : ", person.name);
  console.log("Age : ", person.age);
  console.log("Gender : ", person.gender);
}

display(person);
