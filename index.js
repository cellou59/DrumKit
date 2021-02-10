function songIntruments(musicalIntrument) {
    switch (musicalIntrument) {
        case buttonsDiv[0] :
            var crash = new Audio("sounds/"+musicalIntruments[0]+".mp3");
            crash.play();
            break;

        case "a" :
            var kick= new Audio("sounds/"+musicalIntruments[1]+".mp3");
            kick.play();
            break;

        case "s" :
            var snare= new Audio("sounds/"+musicalIntruments[2]+".mp3");
            snare.play();
            break;

        case "d" :
            var tom1= new Audio("sounds/"+musicalIntruments[3]+".mp3");
            tom1.play();
            break;

        case "j" :
            var tom2= new Audio("sounds/"+musicalIntruments[4]+".mp3");
            tom2.play();
            break;

        case "k" :
            var tom3= new Audio("sounds/"+musicalIntruments[5]+".mp3");
            tom3.play();
            break;

        case "l" :
            var tom4= new Audio("sounds/"+musicalIntruments[6]+".mp3");
            tom4.play();
            break;

        default:
            break;
    }
}

var musicalIntruments = ["crash","kick","snare","tom1","tom2","tom3","tom4"]
var buttonsDiv = ["w","a","s","d","j","k","l",]

for(i=0; i <(buttonsDiv.length); i++){
    document.querySelector("."+buttonsDiv[i]).style.backgroundImage = "url(images/"+musicalIntruments[i]+".png)";
}

var numberOfDrumButtons = document.querySelectorAll("button");
for(i=0; i <(numberOfDrumButtons.length); i++){
    numberOfDrumButtons[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        songIntruments(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)    
    });  
}

document.addEventListener("keydown", function(event) {
    songIntruments(event.key);
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");    
    }, 100);
}