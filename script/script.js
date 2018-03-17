var aboutme = JSON.parse(aboutme);
var other = JSON.parse(other);
var elementary = JSON.parse(elementary);
var highschool = JSON.parse(highschool);
var college = JSON.parse(college);
var workexpe = JSON.parse(workexpe);
var skills = JSON.parse(skills);
var pen = JSON.parse(pen);
var mycontact = JSON.parse(mycontact);

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
    port();
    document.getElementById("facebooklink").href = mycontact.facebook;
    document.getElementById("codepenlink").href = mycontact.codepen;
    document.getElementById("githublink").href = mycontact.github;
    
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
    document.getElementById("myprogressbarps").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarps").style.width = skills.photoshop;
    document.getElementById("myprogressbarai").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarai").style.width = skills.illustrator;
    document.getElementById("myprogressbarid").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarid").style.width = skills.indesign;
    document.getElementById("myprogressbarmo").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarmo").style.width = skills.Microsoft;
    document.getElementById("myprogressbarus").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarus").style.width = skills.User;
    document.getElementById("myprogressbarty").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarty").style.width = skills.typo;
    document.getElementById("myprogressbarwa").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarwa").style.width = skills.webapp;
    document.getElementById("myprogressbarht").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarht").style.width = skills.HTML;
    document.getElementById("myprogressbarcs").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarcs").style.width = skills.CSS;
    document.getElementById("myprogressbarpm").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarpm").style.width = skills.PHP;
    document.getElementById("myprogressbarjq").style.animation = "zero 3s ease";
    document.getElementById("myprogressbarjq").style.width = skills.Javascript;
}

function port(){
	for(var i=0;i<pen.length;i++)
    {
        var penstart="<div class='pens' id='mypen'>";
        var head="<div class='penhead'>"+pen[i]["penname"]+"</div>";
        var body="<div class='penbody'>";
        var frame = "<iframe height='100%' scrolling='no' title='Dark Room' src='"+pen[i]["iframe"]+"' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>";
        var framebody = "See the Pen <a href='"+pen[i]["pen"]+"'>Dark Room</a> by Crisandro Basoy (<a href='https://codepen.io/crisandrobasoy'>@crisandrobasoy</a>) on <a href='https://codepen.io'>CodePen</a>.";
        var frameend= "</iframe>";
        var bodyend = "</div>";
        var penclose="</div>";

        /*console.log(penstart+head+body+frame+framebody+frameend+bodyend+penclose);*/
       $("#penlist").append(penstart+head+body+frame+framebody+frameend+bodyend+penclose); 

    }  
}

window.addEventListener("load", initialize);