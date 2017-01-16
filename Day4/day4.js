/**
 * Created by yugshende on 15/01/17.
 */

//Day 4
//More about Arrays and Functions in this one.
//Source: W3Resources
//Chapter 3 Functions of Eloquent Javascript book


//Array declaration
var some_array = [1,2,3,4,5];

some_array = null;  //Somewhat like Deleting from memory, but the object/property/variable still exists!

//A function to  get first N elements of an array

first = function (array, n) {
    if (array == null) {
        return void 0;
    }
    if (n == null) {
        return array[0];
    }
    if (n < 0) {
        return [];
    }
    return array.slice(0, n);
};
//Functions are declared as variables.

console.log(first([1,2,3,4],2));



//A function get last N values

last = function(array,n){
    if(array==null){
        return void 0;
    }
    if(n==null){
        return array[array.length-1];
    }
    if(n <0) {
        n = Math.abs(n); //In Python array[-2] returns last two elements. That's what I was looking to achieve here as well.
    }
    return array.slice(Math.max(array.length-n,0));
};

console.log(last([1,2,3,4,5,6],-2));



