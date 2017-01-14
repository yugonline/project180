//Wrapping up on types
// Day 3 was mostly me wrapping up all data type possibilities
// Source: Eloquent Javascript

var a = 5; //Integer
console.log(typeof a); // OUPUT: Number
var a = 5.6; //Float
console.log(typeof a); // OUTPUT: Number
// Surprised? Its because Javascript has a single datatype Numbers for both decimal and integer values and those extremely small values with the exponent notation
//This Number datatype doens't stop here.
var a = 0xFF;
console.log(a,typeof a); //Value: 255 and Datatype: Number

//Two special Number types are Infinity and NaN
var a = 1/0;
console.log(a,typeof a);
var a = "Javacript" //String
var b = " Is Awesome"
var c = 5
console.log(typeof a);
//String Concatenation (String1 + String2)
console.log(a+b); //NOTE: + is the only operation allowed on String -,/,* are not.
var a = true;
console.log(typeof a);// Boolean

//NOTE: typeof here isn't a function like it is in Ruby and Python but a Unary operator.
//This Unary operator returns a string value containing the data type of the variable passed to it

//Moving on.
console.log("ABC" < "XYZ"); //< and > is used for both alphabets and numbers.

//Javascript inherently supports Unicode and does not need special packages. So anything from Hindi to Klingon can be represented


//Logical operations

console.log(true && false);
console.log(true || false);
console.log(true && !false); //! is another Unary operation made to flip a boolean value
// || and && can be used to handle value types other than Boolean as well
console.log(null ||'User'); //OUTPUT: 'User'
console.log("Yug"||"User"); //OUTPUT: 'Yug'
//Therefore || will take the left value if it exists or consider User if it doesn't. Nice way to set a placeholder/default value.

//null and undefined are two values that are in Javascript which are mostly interchangeable

console.log(8*null); //OUTPUT: 0
console.log("5"-1); // OUTPUT: 4
console.log("5"+1); //OUTPUT: 51, Refer above to String Concatenation point
console.log("five"*2);//NAN
console.log(true == 1);//TRUE
console.log(true === 1); //FALSE. == and === are two different operators. === will ignore automatic type conversion


//That's it! All data types covered! Some corner cases have been purposefully left out for brevity. But as far as I see it. We have done the first Chapter of Eloquent Javascript!