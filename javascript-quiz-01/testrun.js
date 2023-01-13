// function secondIndexOf(s1, s2) {
//     // Use indexOf twice.
//     let firstSecondString = s1.indexOf[3] ;
//     let secondSecondString = s2.indexOf(firstSecondString);
//     return secondSecondString;
//    }

// secondIndexOf(white, rabbit);{console.log(secondSecondString);}


// function checkAge() {


// let Age = 19;

// if(Age >= 18) {
//     return "Old enough"
// }
// else(Age < 18) {
//     return "Too young"
// }
// }
// console.log(checkAge);

function repdigit(n) {
    // Calculate the ones digit
    // of n with modulo 10.
    // Calculate the tens digit
    // of n by dividing by 10
    // and rounding down.
    // Compare ones and tens digits.
   
    let remainder = n%10;
    let divider =(n-remainder)/10
    if (remainder === divider){
       return "Repdigit!"
    }
    else{
       return "No Repdigit!"
    } 
   }
   
  
 console.log(repdigit(33));
