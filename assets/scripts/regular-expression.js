var str1 = "Visit W3Schools O";
var str2 = "Hellooo World! Hello W3Schools!";
var str3 = "1000,10,555,231,472547293"

var pattern1 = /s/i;
var res1 = str1.match(pattern1);
console.log({ res1 })


var pattern2 = /s/g;
var res2 = str1.match(pattern2);
console.log({ res2 })

var pattern3 = /s/ig;
var res3 = str1.match(pattern3);
console.log({ res3 })


var pattern4 = /s/g; // you given i instated of g then output in false
var res4 = pattern4.global;
console.log({ res4 })


var pattern5 = /s/i; // you given g instated of i then output in false
var res5 = pattern5.ignoreCase;
console.log({ res5 })

var pattern6 = /o+/ig; //  do a global search for at least one "o" in a string
var res6 = str2.match(pattern6);
console.log({ res6 })

var pattern7 = /lo*/ig; //  do a global search for an "l", followed by zero or more "o" characters
var res7 = str2.match(pattern7);
console.log({ res7 })

var pattern8 = /lo?/ig; //  do a global search for a "l", followed by zero or one "o" characters
var res8 = str2.match(pattern8);
console.log({ res8 })

var pattern9 = /\d{3}/g; //  do a global search for a substring that contains a sequence of three digits
var res9 = str3.match(pattern9);
console.log({ res9 })

var pattern10 = /\d{3,6}/g; //  to global search for a substring that contains a sequence of three - six digits.
var res10 = str3.match(pattern10);
console.log({ res10 })

var pattern11 = /\d{3,6}/g; //  to global search for a substring that contains a sequence of at least three digits.
var res11 = str3.match(pattern11);
console.log({ res11 })