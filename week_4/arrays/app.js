/*Exercise A:********************************************************
Show in console the 5th and 11th months with the next array:["January",
"February","March", "April", "May", "June","July","August","September", 
"October", "November", "December"](use console.log)******************/

var months = ["January","February","March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];

console.log('Exercise A:' + months[4] + ' ' + months[10]);

/*Exercise B:********************************************************
Order alphabetically the month's array and show it in the console (use
sort)****************************************************************/

console.log('Exercise B:' + months.sort() );

/*Exercise C:********************************************************
Add an element at the array's beginning and end (use unshift and push)
*********************************************************************/

months.unshift('Monday');
months.push('Sunday');
console.log('Exercise C:' + months);

/*Exercise D:********************************************************
Delete an element at the array's beginning and end (use shift and pop)
*********************************************************************/

months.shift();
months.pop();
console.log('Exercise D:' + months);

/*Exercise E:********************************************************
Reverse the array's order. (use reverse)*****************************/

console.log('Exercise E:' + months.reverse() );

/*Exercise F:********************************************************
Join all the array's elements in an unique String where every month 
will be separate with a script "-" (use join) ***********************/

console.log('Exercise F:' + months.join('-') );

/*Exercise G:********************************************************
Create a copy of the array of months that contains May through November. 
(use slice) *********************************************************/

var months = ["January","February","March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"] ;

anotherMonths = months.slice(4,11);
console.log('Exercise G:' + anotherMonths );

