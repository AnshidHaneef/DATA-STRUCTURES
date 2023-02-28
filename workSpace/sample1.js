// var number = 10;

// var display = function (){
// console.log(number)
// var number = 20;
// }

// display();
// console.log(number);

var number = 10;

var display = function() {
  console.log(number);
  number = 20;
};

display(); // logs 10
console.log(number); // logs 20