// current date
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; 
//Months are zero-based, so adding 1
let day = currentDate.getDate();

let formattedDate = `${day}/${month}/${year}`;

let todayDate = document.getElementById("date");
todayDate.innerHTML = formattedDate;

// today's day
let toDaySpan = document.getElementById("today")
let todayObj = new Date()
let dayNumber = todayObj.getDay()
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
let today = daylist[dayNumber]
toDaySpan.innerHTML = today

// current time
function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = hours >= 12 ? 'PM' : 'AM';

    //Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; //Handle midnight (12 AM)

    //Add leading zero to minutes and seconds if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + period;

    document.getElementById('time').innerHTML = timeString;
}

//Update the clock every second
setInterval(updateClock, 1000);

//Initial update
updateClock();