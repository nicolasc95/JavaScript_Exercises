/*Exercise A:********************************************************
Create a sum function that obtains two numeric values ​​and returns the
result. Execute the function and save the result in a variable, show-
ing the value in the nav console.************************************/

var result

function sum1(a,b) {
  return a + b;
}
result = sum1(4,7);
console.log('Exercise A: 4 + 7 = ' + result);

/*Exercise B:********************************************************
To the previous function, add a validation to control if any of the 
parameters isn't a number. In that case, show an alert clarifying that
one of the parameters has an error and retrn 'NaN' value as a result.
*********************************************************************/

var result

function sum2 (a,b) {
  if ( (typeof (a) == 'number') && (typeof (b) == 'number') ) {
    return a + b;
  }else {
    alert ('Exercise B: a parameter have an error');
    return NaN;
  }
}
result = sum2 (4,7) ;
console.log ('Exercise B - True: 4 + 7 = ' + result) ;
result = sum2 ("A",7) ;
console.log ('Exercise B - False: A + 7 = ' + result) ;

/*Exercise C:********************************************************
Create a function 'validate integer' that receive a number as a para-
meter and return 'true' if it's an integer number.******************/

function validateInteger (a) {
  return Number.isInteger(a);
}
console.log ("Exercise C: 8" + ' ' + validateInteger (8));
console.log ("Exercise C: 9.5" + ' ' + validateInteger (9.5));

/*Exercise D:********************************************************
Add to exercise 6-B a call who validate that the numbers being integers.
In case of decimal numbers, show an alert with the error and return the
number round. *******************************************************/

var result

function sum3(a,b) {
  if ((typeof (a) != 'number') || (typeof (b) != 'number')) {
    alert ('Exercise D: a parameter have an error');
    return NaN;
  }else if ( (a === Math.round(a)) && (b === Math.round(b))) {
    return a + b;
  }else {
    alert ('Exercise D: a parameter is not integer');
    return Math.round(a) + Math.round(b);
  }
}
result = sum3 (4,7);
console.log ('Exercise D - True: 4 + 7 = ' + result);
result = sum3 ("A",7);
console.log ('Exercise D - False: A + 7 = ' + result);
result = sum3 (4.3,7);
console.log ('Exercise D - False: 4.3 + 7 = ' + result);

/*Exercise E:********************************************************
Transform the validation of exercise 6-B into a separate function and 
call it within the sum function, checking that everything continues 
working.***** *******************************************************/

var result

function sum4 (a,b) {
  if (validation (a,b)) {
    return a + b;
  } else{
    return NaN;
  }
}
function validation (a,b){
  if ( (typeof (a) == 'number') && (typeof (b) == 'number') ) {
    return true;
  }else {
    alert ('Exercise E: a parameter have an error')
    return false;
  }
}

result = sum4 (4,7) ;
console.log ('Exercise E - True: 4 + 7 = ' + result);
result = sum4 ("A",7) ;
console.log ('Exercise E - False: A + 7 = ' + result);