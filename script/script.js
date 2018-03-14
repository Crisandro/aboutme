var aboutme = JSON.parse(aboutme);
var other = JSON.parse(other);

function initcrisandro() {
    document.getElementById("profilepicture").src = other.profilepicture;
    document.getElementById("myname").innerHTML = aboutme.name;
    document.getElementById("qoute").innerHTML = aboutme.qoute;
}

window.addEventListener("load", initcrisandro);