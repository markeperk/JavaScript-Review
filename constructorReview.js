//Create a Animal Constructor that has the following parameters. species, name, legs, color, food 
//(which is an array of foods they can eat).

  //code here

var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
};


//Now create a person function that creates an object and returns it 
//(not in constructor form) that has the following parameters. name, age, height, gender
  //code here

var person = function(name, age, height, gender) {
  var obj = {};
    obj.name = name;
    obj.age = age;
    obj.height = height;
    obj.gender = gender;
  return obj;
};


//Create a animal array and a person array.
  //code here

var animal = [];
var person = [];


//Create two instances of Animal and push those into your animal array
  //code here

var anim1 = new Animal('Arachnid', 'Black Widow', '8', 'Black', 'People');
var anim2 = new Animal('Arachnid Arachnus', 'Hobo', '8', 'Brown', 'Cats');


//Create two instances of person and push those into your person array.
  //code here

var pers1 = new


//Now we want every instance of Animal to have a eat method. This method will choose a 
//random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".
  //code here


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/