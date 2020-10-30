/*Exercise A:********************************************************
Create a random number between 0 and 1 using the function Math.random()
If the value is bigger or equal than 0.5, show an alert with the mess-
age "Greater than 0,5". Else, an alert with the message "Lower than 0,5"
*********************************************************************/

if(Math.random() >= 0.5) {
  console.log('Exercise A: Grater than 0,5');
}else { 
  console.log('Exercise A: Lower than 0,5');
}

/*Exercise B:********************************************************
Create a variable with the name "Age" that contains a integer number
between 0-100 and display the following alert messages:*************/

//  i)"Baby" if the age is lower than 2 years old. //
// ii)"Kid" if the age is between 2-12 years old //
// iii)"Teen" if the age is between 13-19 years old //
// iv)"Young" if the age is between 20-30 years old //
// v)"Adult" if the age is between 31-60 years old //
// vi)"Elderly" if the age is between 61-75 years old //
// vii) "Old man" if the age is greater than 75 years old //

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var Age = getRandomInt(0,100);

if(Age < 2) {
  alert('Exercise B: Baby' + ' ' + Age);
  console.log('Exercise B: Baby' + ' ' + Age);
}else if(Age <= 12) {
  alert('Exercise B: Kid' + ' ' + Age);
  console.log('Exercise B: Kid' + ' ' + Age);
}else if(Age <= 19) {
  alert('Exercise B: Teen' + ' ' + Age);
  console.log('Exercise B: Teen' + ' ' + Age);
}else if(Age <= 30) {
  alert('Exercise B: Young' + ' ' + Age);
  console.log('Exercise B: Young' + ' ' + Age);
}else if(Age <= 60) {
  alert('Exercise B: Adult' + ' ' + Age);
  console.log('Exercise B: Adult' + ' ' + Age);
}else if(Age <= 75) {
  alert('Exercise B: Elderly' + ' ' + Age);
  console.log('Exercise B: Elderly' + ' ' + Age);
}else {
  alert('Exercise B: Old man' + ' ' + Age);
  console.log('Exercise B: Old man' + ' ' + Age);
};