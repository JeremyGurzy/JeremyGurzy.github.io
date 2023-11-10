/*Jeremy Gurzynski 
    jgurzynski85952@uat.edu
    23OCT23
   This is for week 3 of CSC102*/

function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() started")
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variable we need for input validation
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;



    //fill in the variables
    //working on inputting first name

    firstName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + firstName);

    //working on inputting last name
    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as " + lastName);

    //Working on inputting zip code
    zipCode = document.getElementById("zCode").value;
    console.log("The zip code was inputted as " + zipCode);

    //fullname section set up for user input
    fullName = firstName + " " + lastName;
    console.log("The full name was inputted as " + fullName);

    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");

    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);







    //things to check for... fullNameLength is less than 20 characters, zipcode has only 5 digits 
    // Added alerts for invalid full name and zip code
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name";
    } else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid Zip Code";
    } else {
        document.getElementById("loginStatus").innerHTML = "You're in.";
        alert("User credentials passed, welcome to the site, " + fullName);
    }

}
//saved for wednesday
function checkPalin() {
    console.log("checkPalin() started");
    //record the string into a variable
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is " + entStr);

    //take away any spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is " + entStrNoSpace);

    //create rev array variableand reverse string
    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length - 1;
    console.log("String length is " + length);
    //input into array and reverse it
    for (var i = length; i >= 0; i--) {
        revArray.push(entStrNoSpace[i]);

    }

    //convert to a string from an array
    revStr = revArray.join("");
    console.log("Reverse is " + revStr)

    //compare rev to string and write to status
    var equal = 0;
    equal = (entStrNoSpace === revStr);
    console.log("The ent and reverse being equal is: " + equal);

    //Write to palindrome status
    if (equal == true) {
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome."
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome."
    }
}





function playStation() {
    //write to the log for debugging
    console.log("playStation() started");
    mySound = new sound("Heavy-Rain.mp3");
    console.log("playing Heavy-Rain using the sound() function");
    mySound.play();
}

function sound(srcFile) {
    //create a instance of the audio class 
    this.sound = document.createElement("audio");
    //sets the source for srcFile
    this.sound.src = srcFile;
    //loads everything needed for audio
    this.sound.setAttribute("preload", "audio");
    //load controls none
    this.sound.setAttribute("controls", "none");

    document.body.appendChild(this.sound);
    //this will play sound object
    this.play = function(){
        this.sound.play();
    }
    //this will pause sound
    this.stop = function(){
        this.sound.pause();
    }
}

