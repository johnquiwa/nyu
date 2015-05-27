var questionOne = prompt('What building do I live in?');
var questionTwo = prompt('What is my first name?');
var questionThree = prompt('When was I born?');
var questionFour = prompt('Who is my girlfriend?');
var questionFive = prompt('Where do I go to school?');
var score = 0;

if (questionOne === "NYBG" || questionOne === "Gehry") {
  score += 1;
}

if (questionTwo === "John" || questionTwo === john) {
  score += 1;
}

if (questionThree === "June 14, 1994") {
  score +=1;
}

if (questionFour === "Raq" || questionFour === "Raquel") {
  score +=1;
}

if (questionFive === "NYU" || questionFive === "New York University") {
  score +=1;
}

alert('You have completed the quiz!');
alert('You have scored ' + score + ' points!')

if (score === 5) {
  document.write('Congrats, you got ' + score + ' questions correct! You get a GOLD crown');
} else if ( score === 3 || score === 4) {
  document.write('Congrats, you got ' + score + ' questions correct! You get a Silver crown');
} else if ( score === 1 || score === 2) {
  document.write('Congrats, you got ' + score + ' questions correct! You get a Bronze crown');
} else {
  document.write('Lol you suck');
}