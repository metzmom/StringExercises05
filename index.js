let language = 'JavaScript';


//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
console.log(language.slice(0,1)+language.slice(4,5));


//b) Without using .slice(), use method chaining to accomplish the same thing.
//language.indexOf('J');
let language1 = language;
//console.log(language1)
let firstCap = language1[0];
//console.log(firstCap);
let secondCap = language1[4];
//console.log(secondCap);
console.log(firstCap + secondCap)
let initials = (firstCap +secondCap)
console.log(initials);


let phrase = "JavaScript";
console.log(phrase.length);
console.log(phrase[phrase.length - 10]+phrase[phrase.length-6]);



//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."



console.log(`The abbreviation for '${language}' is '${initials}'.`)
//` is ${'JS'}.`)


//d) Just for fun, try chaining 3 or more methods together, and then print the result.
