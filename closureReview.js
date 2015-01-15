var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.
  //code here

var makeCall = callFriend();
makeCall('435-215-9248');


//Write a function that accepts a function as it's only argument and returns a new function 
//(which calls the original function that was passed in) that can only ever be executed once.


var once = function(func) {
	var num = 1;
	return function() {
		if (num === 1) {
			func();
		}
		num--;
	}
	console.log('No more');
}

var shout = function() {
	console.log('shout it out');
};

var run = shout(once());


//Once completed, add a second arguments that allows the function to be executed N number of times. 
//After the function has been called N number of times, console.log('STAHHP');


//DONT KNOW WHY ITS NOT WORKING
var mult = function(func, inv) {
	var num = 0;
	return function() {
		num += 1;
		if (num <= inv) {
			func();
		}
		console.log('STAHHP');
	};
};

var shout = function() {
	console.log('shout it out');
};

var run = mult(shout);



