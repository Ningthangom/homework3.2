// Assignment Code
var generateBtn = document.querySelector("#generate");


let password = "Your secure password";



// Write password to the #password input
function writePassword() {
    // var password = generatePassword();

    var passwordText = document.querySelector("#password");

      /*window.*/alert("A secure password should contain special charactor, upper case letter, lower case letter, and at least 8");
    var passowrdLength1 = prompt(" How long do you want your password to be?");

        // ask the user to choose a number for the length of passowrd
            while (passowrdLength1 < 8){
                if ( passowrdLength1 <8 ){
          /* window.*/confirm("choose a number greater than 8 for the length of your password");
                   var passowrdLength1 = prompt(" Choose a number greater than 8?");
                }
             }

             if (passowrdLength1 >= 8){
               /* window.*/alert("Great");
             }



        var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var LowerCase = "abcdefghijklmnopqrstuvwxyz";
        var numbers = "0123456789";
        var charactors = "!@#$%^&*";
      /*  var allTogether = [
          UpperCase,
          LowerCase,
          numbers,
          charactors
      ];
      */

     var allTogether = [];
             if (confirm("Would you like upper case?")){
              allTogether= allTogether.concat(UpperCase);
             }
            
             if (confirm("Would you like to havve lower case?")){
              allTogether= allTogether.concat(LowerCase);
           }
          
            if (confirm("Would you like to have special charactor?")){
              allTogether= allTogether.concat(charactors);
            }
            if (confirm("Would you like to have numbers?")){
              allTogether= allTogether.concat(numbers);
            }
           // alert(allTogether);
     
        var userInput = passowrdLength1;
        console.log(userInput);
        let passwordLegth = userInput;
         password = '';


        /*
        var lett = letters[Math.floor(Math.random()*letters.length)];
        var lett2 = letters[Math.floor(Math.random()*letters.length)];
        var lett3 = letters[Math.floor(Math.random()*letters.length)];
        */
        for (var i = 0; i < passwordLegth; i++){

          // this two math.random lines willl select elements from alltogether-array
          var letterArray = Math.floor(Math.random()*allTogether.length);
          var charArray = Math.floor(Math.random()*allTogether[letterArray].length);
       // console.log(letterArray);
       // alert(charArray);
        //  var numArray = Math.floor(Math.random()*4);
        // console.log(numArray);
        // this put the randomly selected elements together
        var passwordChar = allTogether[letterArray][charArray];
          password = password+passwordChar;
          
        }
        console.log("your password is "+password);
        var LengthPassword = password.length;

        console.log(LengthPassword);

          passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword());






/*
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy";
var numbers = "0123456789";
var charactors = "!@#$%^&*";

var togetherArray = [
  letters,
  numbers,
  charactors
]

var togetherLength = togetherArray.length;
var generatedPassword = '';

for ( var i = 0; i = passowrdLength; i++){
    generatedPassword += togetherArray.charAt(Math.floor(Math.random() * togetherLength));
 }

 console.log(generatedPassword); */

 /*

function makePassword(password1){

  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy";
var numbers = "0123456789";
var charactors = "!@#$%^&*";

var togetherArray = [
  letters,
  numbers,
  charactors
]

var togetherLength = togetherArray.length;
var generatedPassword = '';

for ( var i = 0; i = passowrdLength; i++){
    generatedPassword += togetherArray.charAt(Math.floor(Math.random() * togetherLength));
 }

return generatedPassword;

}


console.log(generatedPassword); */


document.getElementById("password").innerHTML = password;








