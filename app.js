let gamePattern=[];
let playerPattern=[];
let color=["green", "yellow", "red", "blue"];
var start=false;
let level=0;

$(document).keypress(function(){
    if(!start){
        newSequence();
        start=true;
    }
})

    

$(".btn").click(function(e){
    playerPattern.push($(e.target).attr("id"));
    playSound($(e.target).attr("id"));
    animate($(e.target).attr("id"));
    check(playerPattern.length-1);
})

function check(index){
    if(playerPattern[index]===gamePattern[index]){
        if(playerPattern.length===gamePattern.length){
           setTimeout(function(){
               newSequence();
           }, 1000);

        }
    }else{
        playSound("wrong");
        gameOver();
        replay();
        
    }
}

    

function newSequence(){
    playerPattern=[];
    let newNum=Math.floor(Math.random()*4);
    let newColor=color[newNum];
    gamePattern.push(newColor);
    $("h1").text("LEVEL"+ ++level);
    $("#"+newColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(newColor);

}

function gameOver(){
    $("h1").text("GAME OVER. Press any key to REPLAY");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 1000);
}

function replay(){
    gamePattern=[];
    start=false;
    level=0;
}

function playSound(colorName){
    let audio=new Audio("sounds/"+colorName+".mp3");
    audio.play();
}

function animate(colorName){
    $("#"+colorName).addClass("pressed");
    setTimeout(function(){
        $("#"+colorName).removeClass("pressed")
    }, 100);
}



