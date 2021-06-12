//4-2 Data Row function
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function getData() {
    var loadedData = loadData();
    return loadedData;
}




//wk4-1 Start button
function start() {
    console.log("Start Button Pushed");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

}

//wk4-1 Stop button
function stop() {
    clearInterval(timer);
    console.log("Stop Button Pushed");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;

}
//wk4-2 Play sound function
function playStation() {
    console.log("playStation started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound)

    this.play = function () {
        this.sound.play();
    }
    this.play = function () {
        this.sound.pause();
    }
}


// wk1-2 countdown timer.
// 10 to 1 then BLASTOFF
function startCountdown() {
    var count = 10; // sets count to 10
    // improved countdown timer using loop
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = count; // sets countdownTimer to 10
            count--; // counting down since count is set to 10
        }, 1000 * i); // waits i seconds

        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "Blastoff!"; // will output blastoff

        }, 10000) // waits 10 seconds
    }


}
// countdown timer that will produce warning message at 5 seconds left
function betterStartCountdown() {
    var count = 10; // sets count to 10
    // improved countdown timer using loop
    for (var i = 0; i < 11; i++) { // intiaites timer


        if (i == 10) { // if statement 
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!"; // will output blastoff after 10 seconds

            }, i * 1000); // timer

        } else if (i > 4) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Warning we are halfway to launch: time left- " + count; // will output the warning from 5 to end
                count--;
            }, i * 1000);

        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = count; // continues timer
                count--;
            }, i * 1000);

        }



        /*   setTimeout(function () {
               document.getElementById("countdownTimer").innerHTML = "Blastoff!"; // will output blastoff
   
           }, 10000) // waits 10 seconds */
    }


}


// Play Craps function wk2-1
function playCraps() {
    console.log("playCraps has started"); // lets console know the game has began
    var die1; // creating a variable for the first die
    die1 = Math.ceil(Math.random() * 6); // random die roll 1-6 rounded up using ceil
    console.log("The value of die1 is :" + die1); // tells the console the value of the die
    document.getElementById("die1Results").innerHTML = "The value of die1 is: " + die1; // prints the value of the die to the user
    var die2; // variable for the second die
    die2 = Math.ceil(Math.random() * 6); // random die roll 1-6 rounded up using ceil
    console.log("The value of die2 is" + die2); // console getting die value
    document.getElementById("die2Results").innerHTML = "The value of die2 is: " + die2; // die value output to user
    var dieSum = die1 + die2; // sum of die 
    document.getElementById("sumResults").innerHTML = "The sum of the die is: " + dieSum; // output of sum of die
    if (dieSum == 7 || dieSum == 11) { // tests for a 7 or 11 roll
        document.getElementById("crapsResults").innerHTML = " Sorry, You crapped out!!!"; // will output if 7 or 11 is rolled

    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Doubles you win!!!"; // tests for even doubles
    }
    else {
        document.getElementById("crapsResults").innerHTML = "Please try again!"; // will output for all other outcomes.

    }
}

/* Sandbox Area Function wk2-2
function sandboxArea() {
    console.log("Sandbox Test Started");
    var i = 0;
    while (i < 10) {
        setTimeout(function () {
            document.getElementById("sandRes").innerHTML = i;
            i++;
        }, 1000 * i);

    }
} */

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}
function indexTrans() {
    location.replace("index.html");
}
function objectivesTrans() {
    location.replace("objectives.html");
}