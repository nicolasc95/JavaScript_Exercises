/*Exercise A: *******************************************************
Create a String variable with 10 characters at least and convert all 
the text in UpperCase (use toUpperCase).****************************/

var word1 = 'orthopedics shoes';

console.log(word1.toUpperCase());

/*Exercise B:*******************************************************
Create a String variable with 10 characters at least and generate a 
new String with the first 5 characters. Save the result in a new va-
riable (use substring) ********************************************/

var word2 = 'Change it please';

var word3 = word2.substr(0,5);

console.log(word3);

/*Exercise C:*******************************************************
Create a String variable with 10 characters at least and generate a 
new String with the last 3 characters. Save the result in a new va-
riable (use substring) ********************************************/

var word4 = 'Hasta la vista, baby';

var word5 = word4.substr(-3);

console.log(word5);

/*Exercise C:*******************************************************
Create a String variable with 10 characters at least and generate a 
new String with the first letter in uppercase. Save the result in a
new variable (use substring, toUpperCase, toLowerCase, and + operat-
or) ***************************************************************/

var word6 = "hello Word How Are You";
var word7 = word6.substr(0,1)
var word8 = word6.substr(1);

word9 = word7.toUpperCase() + word8.toLowerCase();

console.log(word9);
