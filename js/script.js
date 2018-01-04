setInterval(Clock, 500);

var idSec = document.getElementById("sec");
var idMin = document.getElementById("min");
var idHour = document.getElementById("hour");
var date = new Date();

function Clock() {
    idSec.style.transform = "rotate(" + 6 * date.getSeconds() + "deg)";
    idMin.style.transform = "rotate(" + 6 * date.getMinutes() + "deg)";
    idHour.style.transform = "rotate(" + 30 * date.getHours() + "deg)";
    date = new Date();
}

var close = document.getElementById("clock-close");
var show = document.getElementById("clock-show");

close.onclick = function(event) {
    clock.style.visibility = "hidden";
    show.style.visibility = "visible";

    show.classList.add("animated", "bounceIn");
    clock.classList.remove("animated", "bounceIn");
}

show.onclick = function(event) {
    clock.style.visibility = "visible";
    show.style.visibility = "hidden";

    clock.classList.add("animated", "bounceIn");
    show.classList.remove("animated", "bounceIn")
}