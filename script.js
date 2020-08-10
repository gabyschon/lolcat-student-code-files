var messageText;

var noon = 12;
var evening = 18; // 6PM

var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();

var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");

var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var updateClock=function()
{
var message = document.getElementById('timeEvent');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var lolcat = document.getElementById('lolcat');

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
} 
else if (time == napTime) {
    messageText = "IZ NAP TIME...";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} 
else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} 
else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} 
else if (time < noon) { messageText = "Good morning!"; } else if (time > evening) {
    messageText = "Good Evening!";
} 
else {
    messageText = "Good afternoon!";
}
message.innerText = messageText;
lolcat.src = image;

var showCurrentTime= function()
{
  var clock = document.getElementById('clock');
  var currentTime = new Date();
	
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian ="AM"; 
  
  if (hours>=12)
  {
    meridian = "PM";
  }
  if (hours>12){
    hours = hours - 12;
  }
  if (minutes > 10){
    minutes = "0"+minutes;
  }
  if (seconds > 10){
    seconds = "0"+seconds; 
    }
	 var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	  clock.innerText = clockTime;
  };  
  
	showCurrentTime();

};
updateClock();

var oneSecond =1000;
setInterval( updateClock, oneSecond);

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerHTML = "Party Time !";
partyTimeButton.style.background="#222";
     

   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
     partyTimeButton.innerHTML="Party Over";
partyTimeButton.style.background="#0A8DAB";       
   }
};
var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
	wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
	napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener("click",partyEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
