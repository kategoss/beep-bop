// // business logic
//
// var num = $("#userInput");
// var result = [];
//
// var containsZeros = num.indexOf("0");
// var containsOne = num.indexOf("1");
// var divByThree = (num / 3 === 0);
//
// var num = $("#userInput");
// for(var i = 0; < num.length; i++){
//   var num = nums[1];
//
//   var final = [num]
//   finals.push(final);
// }
// // var ifContainsZero = function(zeroNumber) {
// //   num.forEach(function(num) {
// //
// // var ifNumberContainsZero = function(zero) {
// //   for (var i = 0; i >= num.length; i++) {
// //     var num = num[i];
// //   }
// // }
// //
//   containsZeros.forEach(function(containsZero) {
//     if (num === containsZero) {
//       return true;
//     } else if (num === containsOne) {
//       return true;
//     } else if (num % 3 === 0) {
//       return true;
//     }
//   });
  //   }
  // });

//   if (num === "ifContainsZero")
// var num = ('#userInput');
// num.toString().indexOf('0')
// return zero;



// user interface logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var number = $('#userInput').val();
    var newNumber = [];

    if (number < "0") {
      alert ("Please enter a positive number.");

   } else if (number === "0") {
      newNumber.push("Beep!");
   } else if (number === "1") {
      newNumber.push("Boop!");
      console.log(newNumber);
   // } else if (number === divByThree) {
   //    newNumber = "I'm sorry, Dave. I'm afraid I can't do that.";
   } else {
      newNumber.push(number);
   }

  $("#result").text(newNumber);
  });
});
