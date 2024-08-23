var timer = 60;
var score= 0;
var hitrn= 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewhit(){
    hitrn = Math.floor(Math.random() * 10 );
    document.querySelector("#hitval").textContent  = hitrn ;
}

function makeBubble(){
    var clutter = "";

    for (var i = 0; i<=64; i++){
        var count= Math.floor(Math.random()*10);
      clutter +=`<div class="bubble">${count}</div>`;
    }
    
    document.querySelector(".panal-bottom").innerHTML = clutter;
}

function runTime(){
  var timeinterval =  setInterval(function() {
        if(timer>0){
            timer--;
            document.querySelector("#Timerevel").textContent = timer;
        }
       else{
        clearInterval(timeinterval);
        document.querySelector(".panal-bottom").innerHTML =`<h1>Game Over! <br> Your Score is ${score}</h1>`;
       
       }
    }, 1000);
   
}

document.querySelector(".panal-bottom")
.addEventListener("click",function(details){
    var clicktheNum= Number(details.target.textContent);
    if(clicktheNum === hitrn){
        increaseScore();
        makeBubble();
        getNewhit();
    }

})

getNewhit();
runTime();
makeBubble();
increaseScore()


