// Value of x, y, a, b

var x = 10;
var y = "abc";
var a = x;
var b = y;
//
 values x=10 y="abc" a=10 b= "abc"

// Value of x, y, a, b
var x = 10;
var y = "abc";
var a = x;
var b = y;
a = 5;
b = "def";
//
x=10 y="5defc" a=10 b="5defc"

//x=10 y="abc" a=10 b="abc"

// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr;
arr.push(2);
//
arr = [1] arrCopy = (2) [1,2]

// Value of obj
var obj = { name: "ryan" };
obj = { surname: "florance" };
//
obj = { surname: "florance" };

// What's the output.
var arr = ["Hi"];
var arr2 = arr;
console.log(arr === arr2);
//
output is true;

// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2);
console.log(arr == arr2);
//
output of 1st is true;
//
output of 2nd is false;

//What's the output
console.log([10] === [10]);
//
false

// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> ?
console.log(personObj2); // -> ?
//
name: "Alex", age: 25}
 {name: "John", age: 50}

// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);
//
output = true

// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a);
console.log(b);
//
 output 10 and 5

// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a);
console.log(b);
//
{a: 1} {a:1}

// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b);

//
[1] [1] true

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};

var clone = Object.assign({}, person);
