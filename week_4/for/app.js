/*Exercise A:********************************************************
Create an Array that contains 5 words. Run it with a For loop of Java-
Script to show an alert using each word.*****************************/

var words = ["coffe","coke","limonade","cookies","chocolate"];
var i ;

for (i=0; i < words.length ; i++) {
  alert('Exercise A:' + ' ' + words[i] );
}

/*Exercise B:********************************************************
In the previous Array, transform the first letter of every word in
UpperCase and show an alert for each modified word*******************/

for (i=0; i < words.length ; i++) {
  firstLetter = words[i].substr(0,1);
  up = firstLetter.toUpperCase();
  alert ('Exercise B:' + ' ' + up + words[i].substr(1) );
}

/*Exercise C:********************************************************
Create a variable with an empty string and call it 'sentence'. Then, 
run the previous Array with a For loop and save every word in 'sentence'
At the end, show an unique alert with all the chain******************/

var sentence = '' ;

for (i=0; i < words.length ; i++) {
  sentence += words[i];
}
alert ('Exercise C:' + ' ' + sentence);

/*Exercise D:********************************************************
Create an empty Array and use a For loop of 10 repetitions to add ev-
ery number of the loop on the array. At the end of the For loop, in 
the Array should be 10 elements, from 0 to 9. Show in the nav console
the final Array (use console.log) ***********************************/

var tenElements = [];

for (i=0; i<10 ; i++) {
  tenElements.push(i);
} 
console.log ('Exercise D:' + ' ' + tenElements);