/**
 * Created by yugshende.
 */
//More Functions.
//Day 5
//Exercises from the Functions chapter of Eloquent Javascript
var min;
min = function (num1,num2) {
    if(num1<num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
    else{
        return "Equal!";
    }
};
console.log(min(num1=2,num2=4));


var isEven;
isEven = function (a_number) {
    if(a_number == 0){
        return true;
    }
    else if(a_number == 1){
        return false;
    }
    else{
        return isEven(a_number-2);
    }
};
console.log(isEven(75)); //OUTPUT: false
console.log(isEven(50));// OUTPUT: true

//Bean Counting Part 1
//Take a string input and count number of Bs in it.

var BeanCount;

BeanCount = function (some_string) {
    var count=0;
    for(var i=0;i<some_string.length;i++){
        // if(some_string.charAt(i) == 'B') {
        //     count++;
        // }
    }
    return count;
};
console.log(BeanCount('BBBBB'));

//Bean Counting Part 2
//Take a string as input and another character as input and calculate number of occurences of that character in the given string.
var anyCount;
anyCount = function (some_string,some_char) {
    var count = 0;
    for(var i=0;i<some_string.length;i++){
        if(some_string.charAt(i) === some_char){
            count++;
        }
    }
    return count;
};

console.log(anyCount('BEBEBEBEB','E'));

//Part 2 of the exercise wants to modify BeanCount function such that it makes use of anyCount function
var BeanCount;

BeanCount = function (some_string) {
    var count= anyCount(some_string,'B');
    return count;
};
console.log(BeanCount('BBBBB'));

//End of exercises in Eloquent Javascript.
//End of Day 5.