//Function to find a letter in the entered word
// function letterFinder(word, match) {
//     for (var i=0; i<word.length;i++) {
//         if (word[i]==match){
//             console.log("found the", match, "at", i);
//         }
//         else{
//             console.log("---No match found at",i);
//         }
//     }
// }
// letterFinder("Vivek", "v");

//Program to print odd and even numbers upto the user enter limit
function OddEven(limit) {
    console.log("All the even numbers are:");
    for(var i=1;i<=limit;i++) {
        if (i%2 == 0){
            console.log(i);
        }
    }
    console.log("All the odd numbers are:");
    for(var j=1;j<=limit;j++) {
        if (j%2 != 0){
            console.log(j);
        }
    }
}
OddEven(23);