/*Jeremy Gurzynski
jgurzynski85952@uat.edu
30OCT23*/

function startFun(){
    //log for debugging
    console.log("startFun() started");
    //turns off start button
    document.getElementById("startButton").disabled = true;
    //turns on stop button
    document.getElementById("stopButton").disabled = false;
    //starts marquee movement
    document.getElementById("myMarquee").start();
}

function stopFun(){
    //log for debugging
    console.log("stopFun() started");
    //turns off stop button
    document.getElementById("stopButton").disabled = true;
    //turns on start button
    document.getElementById("startButton").disabled = false;
    //stops marquee movement
    document.getElementById("myMarquee").stop();
}