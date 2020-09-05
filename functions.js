swal({
  title: "An input!",
  text: "Write something interesting:",
  type: "input",
  showCancelButton: true,
  closeOnConfirm: false,
  inputPlaceholder: "Write something"
}, function (inputValue) {
  if (inputValue === false) return false;
  if (inputValue === "") {
    swal.showInputError("You need to write something!");
    return false
  }
  swal("Nice!", "You wrote: " + inputValue, "success");
});
  var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var LowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = Array.from(Array(10).keys());
  var charactors = "!@#$%^&*";

  var allTogether = [
      UpperCase,
      LowerCase,
      numbers,
      charactors
  ];
  var userInput = 20;
  console.log(userInput);
  let passwordLegth = userInput-1;
  let password = '';

/*
  var lett = letters[Math.floor(Math.random()*letters.length)];
  var lett2 = letters[Math.floor(Math.random()*letters.length)];
  var lett3 = letters[Math.floor(Math.random()*letters.length)];
*/
  for (var i = 0; i <= passwordLegth; i++){
    var letterArray = Math.floor(Math.random()*4);
   // console.log(letterArray);
    var numArray = Math.floor(Math.random()*4);
   // console.log(numArray);
   // what doese this work
   var passwordChar = allTogether[letterArray][numArray];
    password = password+passwordChar;
    
  }
  console.log("your password is "+password);
  var LengthPassword = password.length;

  console.log(LengthPassword);



