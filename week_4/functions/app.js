/*Exercise A:********************************************************
Create a sum function that obtains two numeric values ​​and returns the
result. Execute the function and save the result in a variable, show-
ing the value in the nav console.************************************/

var result

function sum(a,b) {
  return a + b ;
}
result = sum(4,7) ;
console.log('Exercise A: 4 + 7 = ' + result) ;

/*Exercise B:********************************************************
To the previous function, add a validation to control if any of the 
parameters isn't a number. In that case, show an alert clarifying that
one of the parameters has an error and retrn 'NaN' value as a result.
*********************************************************************/

var result

function sum(a,b) {
  if ( (typeof(a) == 'number') && (typeof(b) == 'number') ) {
    return a + b ;
  }else {
    window.alert('Exercise B: a parameter have an error')
    return NaN ;
  }
}
result = sum(4,7) ;
console.log('Exercise B - True: 4 + 7 = ' + result) ;
result = sum("A",7) ;
console.log('Exercise B - False: A + 7 = ' + result) ;

/*Exercise C:********************************************************
Create a function 'validate integer' that receive a number as a para-
meter and return 'true' if it's an integer number.******************/

function validateInteger (a) {
  a === Math.round(a) ? console.log ('Exercise C: True') : console.log ('Exercise C: False') ;
}

validateInteger(8);
validateInteger(9.5);