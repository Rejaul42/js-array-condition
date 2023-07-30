var num1 = 13;
var num2 =79;
var num3 = 45;

/**
 * Without else if condition
 **/

// if(num1 > num2){
//     if(num1 > num3){
//         console.log('num1 is big');
//     }
//     else{
//         console.log('num3 is big');
//     }
// }
// else{
//     if(num2 > num3){
//         console.log('num2 is big');
//     }
//     else{
//         console.log('num3 is big');
//     }
// }

/**
 * Whit else if condition
 **/

if(num1 > num2 && num1 > num3){
    console.log('num1 is big');
}
else if(num1 > num2 && num1 < num3){
    console.log('num3 is big');
}
else if(num1 < num2 && num2 > num3){
    console.log('num2 is big');
}
else{
    console.log('num3 is big');
}