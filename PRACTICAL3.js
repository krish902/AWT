//let variable
let Let = "Let variable";
console.log(Let);
//const keyword
const pi = 3.14;
console.log(pi);
//arraow function
const addnumber = (n1, n2) => n1 + n2;
console.log(addnumber(10, 20));
//spread of ...
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

const obj1 = { name: "Krish", age: 19 };
const obj2 = { ...obj1, gender: "Male" };
console.log(obj2);

//for/of loop
const array = [10, 20, 30];
for (const el of array) {
  console.log(el);
}

//Map objects
const mymap = new Map();
const keystring = "Krish";
const keyobj = {};
const keyfunc = function () {};

mymap.set(keystring, "value associated with 'Krish'");
mymap.set(keyobj, "value associated with keyobj");
mymap.set(keyfunc, "value associated with keyfunc");

console.log(mymap.size);

console.log(mymap.get(keystring)); // "value associated with 'a string'"
console.log(mymap.get(keyobj)); // "value associated with keyObj"
console.log(mymap.get(keyfunc)); // "value associated with keyFunc"

//set objects
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true
console.log(mySet1);

//classes
class c1 {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  greeting() {
    console.log(`Hello world! I am ${this.name}`);
  }
}

const obj = new c1("Krish", "Male");

//promises
let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);

//symbol
const symbol = Symbol("uniqueKey");
const objs = { [symbol]: "This is a symbol key." };

//rest
const sumN = (...array) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

//default
const greet = (name = "Krish1") => {
  console.log(`Hello, ${name}!`);
};
