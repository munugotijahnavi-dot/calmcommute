// On page load, retrieve user details from localStorage
window.onload = function() {
    var user = localStorage.getItem("currentUser");
    if(user) {
        document.getElementById("user-details").innerText = "👤 Logged in as: " + user;
    } else {
        // Redirect if not logged in
        window.location = "login.html";
    }
};

function showSection(section){
    document.querySelectorAll("section").forEach(s=>{
        s.classList.add("hide")
    });
    document.getElementById(section).classList.remove("hide");
}

function toggleMenu() {
    document.getElementById("profile-menu").classList.toggle("hide");
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location = "login.html";
}

/* MAP */
window.onload = function(){
var map = L.map('map').setView([16.3067,80.4365],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
}).addTo(map);

navigator.geolocation.getCurrentPosition(
function(pos){

var lat = pos.coords.latitude;
var lon = pos.coords.longitude;

L.marker([lat,lon]).addTo(map)
.bindPopup("You are here")
.openPopup();

map.setView([lat,lon],15)

},

function(){
alert("Location access denied");
}

);
/* ROUTE SEARCH */

function searchRoute(){

var place=document.getElementById("place").value;

document.getElementById("routeResult").innerHTML=

"Destination: "+place+"<br>"+
"Next Bus: 10 mins<br>"+
"Travel Mode: Bus / Train / Auto<br>"+
"Crowd Level: Medium";

}

/* FEEDBACK */

function sendFeedback(){

document.getElementById("fbmsg").innerText =
"✅ Feedback submitted successfully!";

}
