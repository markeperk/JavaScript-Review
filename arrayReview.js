var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function
  //code here

var last = function(arr) {
	return arr[arr.length - 1];
};

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];
  //code here

var even = function(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i] % 2 === 1) {
			arr.splice(i, 1);
		}
	};
};

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'.
//Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. 
//If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
  //code here

// var randomArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
// can't get it to do true

var check = function(num, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (num === arr[i]) {
			alert('true');
		}
	}
	alert(false)
};


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] 
//and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here

second = first.slice(0);
second.push(6, 7);


alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here

var longest = function (sent) {
	var longestWord = ['a'];
	var arr = sent.split(' ');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > longestWord[0].length) {
			longestWord.splice(0,1);
			longestWord.push(arr[i]);
		}
	}
	return longestWord[0];
}

longest(sentence);



//Alternative nonsense that works
// var longest = function(sent) {
// 	var arr = sent.split(' ');
// 	var num = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		var char = arr[i].length;
// 		num.push(char);
// 	}
// 	var max = Math.max.apply(Math, num);
// 	var place = num.indexOf(max);
// 	var word = arr.slice(place, place + 1);
// 	return word;
// };


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?
  //code here

var capitalize = function (str) {
	var arr = str.split(' ');
	var arrNew = [];
	for (var i = 0; i < arr.length; i++) {
		arrNew.push(arr[i].charAt(0).toUpperCase() + arr[i].substring(1));
	}
	return arrNew.join(' ');
}

capitalize(myPoem);



var capitalize = function(words) {
	var arr = words.split(" ");
	var capArr = [];
	for (var i = 0; i < 1; i++) {
		var word = arr[i].charAt(0).toUpperCase() + arr.slice(0);
		capArr.push(word);
	}
	var newSent = capArr.join(' ');
	return newSent;
}

capitalize(myPoem);

 

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelCounter = function(str) {
	var arr = str.split('');
	var total = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
			total.push(arr[i]);
		}
	}
	var count = total.length;
	return count;
}

vowelCounter(theOdyssey);


