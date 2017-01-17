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
        return 0;
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
        return 0;
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


// A function to get the most frequent element from an array (NOTE: This is not the best case solution)
var frequent;
frequent = function (some_array, tot_count, curr_count, item) {
    for (var i = 0; i < some_array.length; i++) {
        for (var j = i; j < some_array.length; j++) {
            if (some_array[i] == some_array[j])
                curr_count++;
            if (tot_count < curr_count) {
                tot_count = curr_count;
                item = some_array[i];
            }
        }
        curr_count = 0;
    }

    output_string = item + "(" + tot_count + "times ) ";
    return output_string;
};
some_array = [1,2,3,4,'JS','JS','JS','JS','4',4,'4'];

var tot_count = 1; //Least count would at least be 1

var curr_count = 0; // Updates over every iteration and if < than
var item; // Variable to hold the value of most frequent element.

console.log(frequent(some_array,tot_count,curr_count,item));

//An interesting phenomenon observed here is that '4' and 4 get counted as same thing!
// There are ways to change this
//On line 66 use === instead of ==

//End of Day 4.