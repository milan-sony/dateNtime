// current date
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; 
//months are zero-based, so adding 1
let day = currentDate.getDate();

let formattedDate = `${day}/${month}/${year}`;

let todayDate = document.getElementById("date");
todayDate.innerHTML = formattedDate;

// today's day
let toDaySpan = document.getElementById("today")
let todayObj = new Date()
let dayNumber = todayObj.getDay()
let daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let today = daylist[dayNumber]
toDaySpan.innerHTML = today

//setting the background image
let bgImg = document.getElementById("bg-img");

function setBackgroundImage() {
    //URL of the image
    let imageUrl = 'https://picsum.photos/1920/1080';
    //fetch the image using fetch()
    fetch(imageUrl)
    .then(response => {
        if (!response.ok) {
            console.error("Network Response Failed",response.statusText)
        }
        return response.blob();
    })
    .then(blob => {
        //convert the blob to a data URL
        let imageUrl = URL.createObjectURL(blob);
        //set the background image of the body
        bgImg.style.backgroundImage= `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`;
    })
    .catch(error => {
        console.error('Error Fetching Image:', error);
        bgImg.style.backgroundImage= `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/img.jpg')`;
    });
}

// call the function to set the background image
setBackgroundImage();
// call the function to set the background image in every 2 min
setInterval(setBackgroundImage, 120000);

//day wish
function getGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    var greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    return greeting;
}

document.getElementById('greeting').innerText = getGreeting();

// current time
function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = hours >= 12 ? 'PM' : 'AM';

    //convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; //Handle midnight (12 AM)

    //add leading zero to minutes and seconds if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + period;

    document.getElementById('time').innerHTML = timeString;
}

//update the clock every second
setInterval(updateClock, 1000);

//initial update
updateClock();