var trafficSignal = prompt("Is the Traffic Signal Red/Yellow/Green ?");
var signalRed = "Red"
var signalsRed = "red"
var signalYellow = "Yellow"
var signalsYellow = "yellow"
var signalGreen = "Green"
var signalsGreen = "green"


if (trafficSignal == signalRed || trafficSignal == signalsRed){
     document.getElementById("demo").innerHTML = "Stop!! You should not cross the road!!";

}
else if (trafficSignal == signalYellow || trafficSignal == signalsYellow){
     document.getElementById("demo").innerHTML = "Get Ready to cross the road!!";

}
else if(trafficSignal == signalGreen || trafficSignal == signalsGreen){
     document.getElementById("demo").innerHTML = "Go Ahead! You can cross the road now!";

}
else {
    document.getElementById("demo").innerHTML = "You are Kana!! Get Some Help!!";
}