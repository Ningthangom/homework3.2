/*var items = [1, 2, 3, 4, 5];
var newItems = [];

for (var i = 0; i < 3; i++) {
  var idx = Math.floor(Math.random() * items.length);
  newItems.push(items[idx]);
  items.splice(idx, 1);
}

console.log(newItems);

*/
/*
function randCol() {
    var colArr = [];
    for (var i = 0; i < 6; i++) {
    var colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e","f"];
      var rand = colors[Math.floor(Math.random() * 16)];
      colArr.push(rand);
    }
    return "#" + colArr.join("")
  }
             
  function chngClr() {
   document.body.style.background = randCol();
  }
  */

 var brands = ["Acer", "Apple", "Sony", "Samsung"];
  function consoleInside(arr) {

    // We then loop through the selected array.
    for (var i = 0; i < arr.length; i++) {

      // Each time we print the value inside the array.
      console.log(arr[i]);
    }
    console.log("---------");
  }


  // FUNCTION CALLS (Execution)
  // =======================================================================================

  // Here we call the function to run our for-loop code on each of the following arrays.
  consoleInside(brands);
  /*
  consoleInside(heroes);
  consoleInside(booksOnMyShelf);
  consoleInside(thingsInFrontOfMe);
  consoleInside(howIFeel);
  */

 var numbers = ["1", "2", "3", "4"];
  function numbersInside(number1) {

    // We then loop through the selected array.
    for (var i = 0; i < number1.length; i++) {

      // Each time we print the value inside the array.
      console.log(number1[i]);

      let show = number1[i][Math.floor(Math.random() * numbers[i])];
    }
    console.log("---------");
  }

  let show = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(show);
  console.log("----------")
  numbersInside(numbers);
  console.log("----------")
  var letterArray = Math.floor(Math.random()*4);
  console.log(letterArray);
/*
  var arr = [true, 2, 3, "4"];
arr.push(5); 
console.log(arr);               // [true, 2, 3, "4", 5]

last_element = arr.pop(); 
console.log(arr);               // [true, 2, 3, "4"]
console.log(last_element);      // 5
  

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
    console.log(result);
}

*/