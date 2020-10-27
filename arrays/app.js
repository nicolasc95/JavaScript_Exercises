/*Exercise A:********************************************************
Show in console the 5th and 11th months with the next array:["January",
"February","March", "April", "May", "June","July","August","September", 
"October", "November", "December"](use console.log)******************/

var months = ["January","February","March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"] ;

console.log('Exercise A:' + months[4] + ' ' + months[10]) ;

/*Exercise B:********************************************************
Order alphabetically the month's array and show it in the console (use
sort)****************************************************************/

console.log('Exercise B:' + months.sort() ) ;

/*Exercise C:********************************************************
Add an element at the array's beginning and end (use unshift and push)
*********************************************************************/

months.unshift('Monday') ;
months.push('Sunday') ;

console.log('Exercise C:' + months) ;