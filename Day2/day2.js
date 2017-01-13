//All types of loops in Javascript.
//Pretty basic example please add issues/pull request if you can make it better, thank you!

var pattern = "*"; // String declaration
var magic_number = 7;  // Integer Number declaration
for(i =1;i <= magic_number;i++){
    console.log(pattern);
    pattern = pattern + ("*"); // General logic to append to a string
}


pattern = ["*","**","***","****","*****","******","*******"]; //Array declaration (Quite simple!)

for (x in pattern){

    console.log(pattern[x]); // x holds the key values always. FUTURE WORK: Show x in key-value like data structures for Javascript.
}

magic_number = 0;
while(magic_number < 7){
    console.log(pattern);
    pattern = pattern + ("*");
    magic_number += 1;
}

magic_number = 0;
do {
    console.log(pattern);
    pattern = pattern + ("*"); //alternate: pattern += "*";
    magic_number += 1;
}while(magic_number < 7);



