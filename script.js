// Assignment Code
var generateBtn = document.querySelector("#generate");

let password = "Your secure password";

// Write password to the #password input
function writePassword() {
    // var password = generatePassword();

    var passwordText = document.querySelector("#password");

     alert("A secure password should contain special charactor, upper case letter, lower case letter, and at least 8");
    var passowrdLength1 = prompt(" How long do you want your password to be?");

      // checking  the length of the password 
            if ( passowrdLength1 <8 ){
                confirm("choose a number greater than 8 for the length of your password");
                 passowrdLength1 = prompt("Choose a number that is equal to or greater than 8");
            }
            
            if(passowrdLength1>128){
            /* window.*/confirm("choose a number less than 128");
                passowrdLength1 = prompt("Choose a number less than 128 but greater than 8");
            }
// if the user choose a number less than 8 this will break the code 

// initialing the strings
        var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var LowerCase = "abcdefghijklmnopqrstuvwxyz";
        var numbers = "0123456789";
        var charactors = "!@#$%^&*";
   
//create an empty array and concatnate the charactors as the user confirms with user input
     var allTogether = [];
             if (confirm("Would you like upper case?")){
              allTogether= allTogether.concat(UpperCase);
             }
            
             if (confirm("Would you like to have lower case?")){
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

        // initializing password
         password = '';

        for (var i = 0; i < passwordLegth; i++){

          // this two math.random lines willl select elements from alltogether-array
          var letterArray = Math.floor(Math.random()*allTogether.length);
          var charArray = Math.floor(Math.random()*allTogether[letterArray].length);
       
        // this put the randomly selected elements together
        var passwordChar = allTogether[letterArray][charArray];
          password = password+passwordChar;
          
        }
        console.log("your password is "+password);
        var LengthPassword = password.length;

        console.log(LengthPassword);

          passwordText.value = password;

}

document.getElementById("password").innerHTML = password;






