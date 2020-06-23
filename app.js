                          // CHAPTERS 21-25


// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your Name");
// var lastName  = prompt("Enter Your Last Name");
// var userName  = firstName + " " + lastName;
// alert("Hello "+userName); 


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var user = prompt("Enter Your Favorite Mobile Name");
// document.write("My favorite phone is : "+user+"<br>"+"Length of string is :"+user.length);


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var a = "Pakistani";
// document.write("String : "+a+"<br>"+"Index of n is : "+a.indexOf("n"));


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var a = "Hello World";
// document.write("String : "+a+"<br>"+"Last index of l is : "+a.lastIndexOf("l"));


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var a = "Pakistani";

// document.write("String Pakistani <br>Charachter at index 3 : "+a[3]);

// 6. Repeat Q1 using string concat() method.

// var firstName = "Saadullah"
// var lastName  = "Aslam"
// var userName  = firstName + " " + lastName;
// alert("Hello "+userName);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// var newCity = city.replace("Hyder","Islam");
// document.write("City "+city+"<br>"+"After Replacement : "+newCity);


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var line = "Ali and Sami are best friends. They play cricket and football together";

// var change = line.replace(/and/g,"&");

// document.write("Befor replacement : "+line+"<br>"+"After replacement : "+change);



// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var value = 472;

// document.write("Value : "+value+" <br>"+"Type String"+"<br>"+"Value : "+parseInt(value)+" <br>"+"Type Number");


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var input = prompt("Enter Your Favorite Dry Fruit");


// document.write("User input : "+input+"<br>"+"Upper Case : "+(input = input.toUpperCase()));


// 11. Write a program that takes user input. Convert and
// show the input in title case

// var input = prompt("Enter A Word");
// var firstChar = input.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = input.slice(1);
// otherChar = otherChar.toLowerCase();
// var change = firstChar + otherChar ;
// document.write("User input : "+input+"<br>"+"Title Case : "+change);


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36 ;
// num = num.toString()
// document.write("Number : "+num+"<br>"+"Result : "+num.replace(".",""));


// 13. Write a program to take user input and store username
//  in a variable.If the username contains any special 
//  symbol among [@ . , !], prompt the user to enter a 
//  valid username. For character codes of [@ .  
// Note: ASCII code of ! is 33 ASCII code of , is 44 
// ASCII code of . is 46 ASCII code of @ is 64
// var username = prompt("Enter user name")
// var a = String.fromCharCode(33);
// var b = String.fromCharCode(44);
// var c = String.fromCharCode(64);

// if (username.match(a) || username.match(b) || username.match(c)) {
// alert("Enter a valid username");
// } else {
//     alert("Hello"+username);
// }        


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// var a = ["cake","apple pie","cookie,chips","patties"];

// var b = prompt("Search Your Favorite Bakery Item");

// b = b.toLowerCase();

// if (a[0]===b) {
//     document.write(b+" is available at index "+a[0].indexOf(b)+" in our bakery");
// } else if (a[1]===b) {
//     document.write(b+" is available at index "+a[1].indexOf(b)+" in our bakery");
// } else if (a[2]===b) {
//     document.write(b+" is available at index "+a[2].indexOf(b)+" in our bakery");
// } else if (a[3]===b) {
//     document.write(b+" is available at index "+a[3].indexOf(b)+" in our bakery");
// }
// else {
//     document.write(b+" is not available at index in our bakery");
// }


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// var pass = prompt("Enter the password");
// var convert = parseInt(pass);

// if (pass.length < 6) {
//     alert("Password must contian at least 6 charachter");
// } else if (convert === pass ){
//     alert("Password can not begin with a number");
// } else{
//     alert("Login Successfully");
// }


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";

// var array = university.split("");

// document.write(array[0]+"<br>"+array[1]+"<br>"+array[2]+"<br>"+array[3]+"<br>"+array[4]+"<br>"+array[5]+"<br>"+array[6]+"<br>"+array[7]+"<br>"+array[8]+"<br>"+array[9]+"<br>"+array[10]+"<br>"+array[11]+"<br>"+array[12]+"<br>"+array[13]+"<br>"+array[14]+"<br>"+array[15]+"<br>"+array[16]+"<br>"+array[17]+"<br>"+array[18]+"<br>"+array[19]+"<br>"+array[20]);


// 17. Write a program to display the last character of a user
// input.

// var input = prompt("Enter Word");

// document.write("User input : "+input+"<br> Last charachter input : "+input.charAt(input.length-1));


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var a = "The quick brown fox jumps over the lazy dog";

// document.write(a.repeat());



                        // CHAPTERS 26-30



// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = +prompt("Enter Your Number");

// document.write("Number : "+num+"<br>"+"Round of value : "+Math.round(num)+"<br>"+"Floor value : "+Math.floor(num)+"<br>"+"Ceil value : "+Math.ceil(num));


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = +prompt("Enter Your Number");

// document.write("Number : "+num+"<br>"+"Round of value : "+Math.round(num)+"<br>"+"Floor value : "+Math.floor(num)+"<br>"+"Ceil value : "+Math.ceil(num));


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var value = -4 ;
// document.write("The absolute value of "+value+" is : "+Math.abs(value));



// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var dice = Math.random()*6;
// document.write("Random dice value : "+Math.round(dice));


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var random = Math.round(Math.random());

// if (random === 0) {
//     document.write(random+"<br>"+"Random coin value is : Head");
// } else {
//     document.write(random+"<br>"+"Random coin value is : Tails");
// }


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var value = Math.random()*100;
// var round = Math.round(value);

// document.write("Random number between 1 and 100 : "+round);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var weight = prompt("Enter your weight");
// var a = parseInt(weight);
// document.write("Your weight is : "+a+" kilograms");


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretNumber = 8 ;
// var userInput = +prompt("Enter number between 1 to 10");

// if (secretNumber === userInput) {
//     alert("Congratulations ! Jackpot");
// } else {
//     alert("Sorry Try Again");
// }



                        // Chapter 31 To 34


// 1. Write a program that displays current date and time in
// your browser.

// var date = new Date();
// document.write(date);


// 2. Write a program that alerts the current month in words.
// For example December.

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var date = new Date();

// var currentMonth = date.getMonth();

// document.write("Current Month : "+monthNames[currentMonth]);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var d = new Date();
// var b = d.toString();
// var toDay = b.slice(0,3);

// alert("Today is : "+toDay);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var date = new Date();

// var toDay = date.getDay();

// if (toDay == 6 || toDay == 0) {
//     alert("Today It's Funday");
// } else {
//     alert("Today is "+dayNames[toDay]);
// }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var d = new Date() ;
// var date = d.getDate() ;

// if (date <= 15) {
//     document.write("First fifteen days of the month");
// } else {
//     document.write("<h1>Last days of the month</h1>");
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var d = new Date() ;

// document.write("Current Date : "+d+"<br>"+"Elapsed miliseconds since January 1, 1970 : "+d.getTime()+"<br>"+"Elapsed minutes since January 1, 1970 : "+(d.getTime()/1000*60));


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var d = new Date() ;
// var hour = d.getHours() ;

// if (hour <= 11) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }