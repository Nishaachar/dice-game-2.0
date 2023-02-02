
document.querySelector("button").addEventListener("click", function(){
    winnerDecider();
    victoryBanner();
    
});
    



document.addEventListener("keydown", function(event){
    keyId(event);
    victoryBanner();
});

function keyId (i){
    if (i.key === "Enter"){
        winnerDecider();
    } else if (i.key === "Shift"){
        winnerDecider();
    };

};

function victoryBanner (){
    let banner = document.querySelector(".victory-banner");
    banner.classList.add("visible")
    setTimeout(function(){
        banner.classList.remove("visible");
    }, 3000);

    let removeH2 = document.querySelector("h2");
    removeH2.style.visibility = "hidden";
    setTimeout(function(){
        removeH2.style.visibility = "visible";
    }, 3000);
}


function winnerDecider () {
    let randomNumber1 = ((Math.floor(Math.random()*6)) + 1);
    let dicePic1 = "dice" + randomNumber1 + ".png";
    let image1 = document.querySelectorAll(".dice-img")[0];
    image1.setAttribute("src", dicePic1);

    let randomNumber2 = ((Math.floor(Math.random()*6)) + 1);
    let dicePic2 = "dice" + randomNumber2 + ".png";
    let image2 = document.querySelectorAll(".dice-img")[1];
    image2.setAttribute("src", dicePic2);  

    if (randomNumber1 > randomNumber2) {
        document.querySelector(".victory-banner").innerHTML = "🚩 Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector(".victory-banner").innerHTML = "🚩 Player 2 wins!";
    } else {
        document.querySelector(".victory-banner").innerHTML = "Draw";
    };
    

};



