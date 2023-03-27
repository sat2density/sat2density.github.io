let nameArray = new Array;
var currentDotNum1 = 0;

nameArray = [
    "3tNHEv4fpw42usXDBHekZg_satView_polish_add_cd.mp4",
    "CEXFCtJT540e2tWOdnu1mA_satView_polish_add_cd.mp4",
    "f6q6W2SJLn8oF62gT13MRw_satView_polish_add_cd.mp4",
    "Fmhz_UEnFT3PEMk0m0E7vA_satView_polish_add_cd.mp4",
    "hMqxsjDEA28qiRdoHnXCYw_satView_polish_add_cd.mp4",
    "lLjmEUKwbMIHJ10woWauXQ_satView_polish_add_cd.mp4",
    "qkzjbt54JBNgVDsJ6mKplw_satView_polish_add_cd.mp4",
    "u7T6NxARfHKkvFkwmV88hQ_satView_polish_add_cd.mp4",
];
let videoArray = new Array;

var container = document.getElementById("rotateVideoContainer");
for(var i = 0;i<nameArray.length;i++){
    var child = document.createElement("video");
    child.id = "rotationVideo"+i;
    child.className = "rotationVideo";
    child.src = "./src/"+nameArray[i];
    child.controls = "controls";
    child.loop = "loop";
    child.style.zIndex = 0;
    container.appendChild(child);
    videoArray.push(child);
    child.style.display = "none";//every video will not be hidden
}

var dotContainer1 = document.getElementById("dotContainer1");
for(var i = 0;i<nameArray.length;i++){
    var child = document.createElement("video");
    child.id = "dotContainer1Dot"+i;
    child.className = "dot";
    dotContainer1.appendChild(child);
}

videoArray[videoArray.length-2].style.left = "-40%";

videoArray[videoArray.length-1].style.left = "-40%";//left hidden video
videoArray[videoArray.length-1].style.display = "";

videoArray[0].style.left = "0%";//left waiting video
videoArray[0].style.zIndex = 10;
videoArray[0].style.display = "";

videoArray[1].style.left = "35%";//displaying video
videoArray[1].style.transform = "scale(1.3)";
videoArray[1].style.zIndex = 100;
videoArray[1].style.display = "";

videoArray[2].style.left = "70%"//right waiting video
videoArray[2].style.zIndex = 10;
videoArray[2].style.display = "";

videoArray[3].style.left = "110%";//right hidden video
videoArray[3].style.display = "";

videoArray[4].style.left = "110%";
videoArray[5].style.left = "110%";

document.getElementById("dotContainer1Dot"+currentDotNum1).style.backgroundColor = "rgb(150, 150, 150)";


function get_next(){
    videoArray[videoArray.length-1].style.display = "none";
    videoArray[videoArray.length-1].style.left = "110%";

    videoArray[0].style.zIndex = 0;
    videoArray[0].style.left = "-40%";

    videoArray[1].style.left = "0px";
    videoArray[1].style.transform = "";
    videoArray[1].style.zIndex = 10;

    videoArray[2].style.left = "35%";
    videoArray[2].style.transform = "scale(1.3)";
    videoArray[2].style.zIndex = 100;

    videoArray[3].style.zIndex = 10;
    videoArray[3].style.left = "70%";

    videoArray[4].style.left = "110%";
    videoArray[4].style.display = "";
    

    var firstVideo = videoArray.shift();
    videoArray.push(firstVideo);

    document.getElementById("dotContainer1Dot"+currentDotNum1).style.backgroundColor = "rgb(230, 230, 230)";
    currentDotNum1 = (currentDotNum1+1)%videoArray.length;
    document.getElementById("dotContainer1Dot"+currentDotNum1).style.backgroundColor = "rgb(150, 150, 150)";
}

function get_prev(){

    videoArray[videoArray.length-2].style.display = "";
    videoArray[videoArray.length-1].style.left = "-40%";
    videoArray[videoArray.length-1].style.zIndex = 0;

    videoArray[videoArray.length-1].style.left = "0%";
    videoArray[videoArray.length-1].style.zIndex = 10;

    videoArray[0].style.zIndex = 100;
    videoArray[0].style.left = "35%";
    videoArray[0].style.transform = "scale(1.3)";

    videoArray[1].style.left = "70%";
    videoArray[1].style.transform = "";
    videoArray[1].style.zIndex = 10;

    videoArray[2].style.left = "110%";
    videoArray[2].style.zIndex = 0;

    videoArray[3].style.display = "none";
    videoArray[3].style.left = "-40%";
    
    var firstVideo = videoArray.pop();
    videoArray.unshift(firstVideo);

    document.getElementById("dotContainer1Dot"+currentDotNum1).style.backgroundColor = "rgb(230, 230, 230)";
    currentDotNum1 = (currentDotNum1-1+videoArray.length)%videoArray.length;

    document.getElementById("dotContainer1Dot"+currentDotNum1).style.backgroundColor = "rgb(150, 150, 150)";
}

setInterval(get_next, 10000);

document.getElementById("leftButton1").onclick = function(){get_prev()};
document.getElementById("rightButton1").onclick = function(){get_next()};
