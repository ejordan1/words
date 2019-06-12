var romans = ["I", "V", "X", "L", "C", "D", "M"]

var romanString = "LXXVVII";
//bit that is good, bit that still needs work
//if (nextProblemSame is V,)
//need to have the part that is fine, part that is problem, part that is before
 alert(convertBasic(43));
nextProblemSame(romanString);

function translateToRoman(romanString){
  var completedSection = "";
  var toDo = romanString;

}

function convertBasic(number){
  if (number > 4000){
    alert("numberTooHigh");
    return;
  }
  debugger;
  number = parseInt(number);
  var romanNum = "";
  for (var i = 0; i < number.toString().length; i++){
    var toAdd = "";
    var dig = number % 10;
    var fives = false;
    if (dig > 5){
      fives = true;
      dig -= 5;
      toAdd += romans[i + 1];
    }
    for (var j = 0; j < dig; j++){
      toAdd += romans[i];
    }
    romanNum = toAdd + romanNum;
  }
  return romanNum;
}

//gets next problem part of the numberal
function nextProblemSame(roman){

  // while(problemString != "")
    var thatAreFine = "";
    var problemString = "";
    while(roman.length > 0 && problemString === ""){
      //save and remove first character
      var currentChar = roman.charAt(roman.length - 1);
      var currentString = currentChar;
      roman = roman.substring(0, roman.length - 1);
      //go through until its not the same
      while(roman.charAt(roman.length - 1) === currentChar){
        currentString += roman.charAt(roman.length - 1);
        roman = roman.substring(0, roman.length - 1);
      }
      //seems shitty to have break in while loop like this
      if (isProblemPart(currentString)){
        problemString = currentString;
      } else {
        thatAreFine += currentString;
      }
    }
  // alert(thatAreFine);
  // alert(problemString);
  // alert(roman);
}

function isProblemPart(romanString){
  ///if its a 5s

  if (romans.indexOf(romanString.charAt(0)) % 2 === 1){
    if (romanString.length > 1){
      return true;
    }
    //else should be a 1s place
  } else {
    if (romanString.length > 3){
      return true;
    }
  }
  return false;
}
