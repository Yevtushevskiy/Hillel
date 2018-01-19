var clock = document.createElement ('div');
clock.id="clock";
time.appendChild(clock);

setInterval(function(){

var data=new Date ();
var hour=data.getHours();

clock.innerHTML=data;
},1000);

if (hour >=0 &&  hour <=5) {
	clock.className = "partyTime";
}
else if (hour > 5 &&  hour <=11) {
		clock.className = "afterPartyTime";}
else if (hour > 11 &&  hour <=17) {
		clock.className = "dayTime";}
else if (hour > 17 &&  hour <=23) {
		clock.className = "prePartyTime";
}
