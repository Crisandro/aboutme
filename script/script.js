var aboutme = JSON.parse(aboutme);
var other = JSON.parse(other);
var elementary = JSON.parse(elementary);
var highschool = JSON.parse(highschool);
var college = JSON.parse(college);
var workexpe = JSON.parse(workexpe);
var skills = JSON.parse(skills);

var loads = 0;
var id = setInterval(initialize,20);

function initialize(){
    
    if(loads == 10){
        clearInterval(id);
        initcrisandro();
    }
    else{
        loads = loads + 1; 
        document.getElementById("container1").style.animation = "getin 2s ease";
        console.log(loads);
    }
    
    
}

function initcrisandro() {
    
    document.getElementById("profilepicture").src = other.profilepicture;
    document.getElementById("myname").innerHTML = aboutme.name;
    document.getElementById("qoute").innerHTML = aboutme.qoute;
    
    document.getElementById("elem").innerHTML = elementary.School;
    document.getElementById("elemstart").innerHTML = elementary.start;
    document.getElementById("elemend").innerHTML = elementary.end;
    
    document.getElementById("high").innerHTML = highschool.School;
    document.getElementById("secstart").innerHTML = highschool.start;
    document.getElementById("secend").innerHTML = highschool.end;
    
    document.getElementById("college").innerHTML = college.School;
    document.getElementById("colstart").innerHTML = college.start;
    document.getElementById("colend").innerHTML = college.end;
    
    //skills
    document.getElementById("myprogressbarps").style.width = skills.photoshop;
    document.getElementById("myprogressbarai").style.width = skills.illustrator;
    document.getElementById("myprogressbarid").style.width = skills.indesign;
    document.getElementById("myprogressbarmo").style.width = skills.Microsoft;
    document.getElementById("myprogressbarus").style.width = skills.User;
    document.getElementById("myprogressbarty").style.width = skills.typo;
    document.getElementById("myprogressbarwa").style.width = skills.webapp;
    document.getElementById("myprogressbarht").style.width = skills.HTML;
    document.getElementById("myprogressbarcs").style.width = skills.CSS;
    document.getElementById("myprogressbarpm").style.width = skills.PHP;
    document.getElementById("myprogressbarjq").style.width = skills.Javascript;
}

function workexp(){
	for(var i=0;i<workexpe.length;i++)
    {

        var listing="<div id='list1'>";
        var firstdiv="<div class='inline'><h2>"+workexpe[i]["position"]+"</h2></div>";
        var pullright="<div class='inline pull-right'>";
        var dates="<div class='dates'>"+workexpe[i]["startm"]+" "+workexpe[i]["starty"]+" - "+workexpe[i]["endm"]+" "+workexpe[i]["endy"]+"</div>";
        var pullrightclose="</div>";
        var below="<div class='below1'>"+workexpe[i]["description"]+"</div>"
        var listingclose="</div>";

       $("#worklist").append(listing+firstdiv+pullright+dates+pullrightclose+below+listingclose); 

    }  
}

window.addEventListener("load", initialize);
