// First loop:

let number = prompt(
  `If you will enter a number i can tell you about 'even' this number or 'odd'`
);

if (number % 2 == 0) {
  alert(`This is an 'even' number`);
} else {
  alert(`This is an 'odd' number`);
}

// Second loop:

let userName = prompt("Please enter your name");

if (!isNaN(userName)) {
  alert(userName + " Is not a Name");
} else {
  alert("Hi " + userName);
}

let userSureName = prompt("Please enter your surename");

if (!isNaN(userSureName)) {
  alert(userSureName + " Is not a Name");
} else {
  alert(
    "It was nice to get to know you better " + userName + " " + userSureName
  );
}

let userYear = prompt("Please enter the year which you was born");

if (userYear == "2004") {
  alert(
    "Hey yo you turned 18 this year, You must serve in the army until 2030 or we will fine you!"
  );
} else if (userYear > "2004") {
  alert(
    "Ok, you have couple of years before serving in the army, but after you hitting 18 we need to take you to serving!"
  );
} else {
  alert("I hope that you served in the army already!");
}

var sup = confirm("Did you serded in the army?");
if (sup == true) {
  alert("Wow man you are so cool!");
} else {
  alert(
    "You gotta be hided in the better place because we will find you wery soon!"
  );
}
