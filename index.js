var h1Text = document.getElementById("text1");
var aText = document.getElementById("text2");
var pText = document.getElementById("text3");
var h3Text = document.getElementById("text4");
var codeColor = document.getElementById("code");
document.querySelector("html");

function changeTextBigger(){
    console.log("text getting bigger!")
    // MainStyle 
    // Phone 
    if(codeColor.style.color = "red"){
        console.log("red!");
    pText.style.fontSize = "2rem";
    h3Text.style.fontSize = "3rem";

    }else{
        return
    }
    // Tablet
    // Widescreen
}
function changeTextSmaller(){
        // Phone 
    console.log("text getting smaller!")
    if(codeColor.style.color = "red"){
        console.log("red!");
    pText.style.fontSize = "1rem";
    h3Text.style.fontSize = "1.5rem";
    }else{
        return
    }
}
function grayscaleOn(){
document.querySelector("html").style.background = "gray";
document.querySelector("body").style.background = "gray";
}
function grayscaleOff(){
    document.querySelector("html").style.background = "rgb(239, 239, 239)";
    document.querySelector("body").style.background = "rgb(239, 239, 239)";
    }