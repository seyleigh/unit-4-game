$(document).ready(function(){

var randomNumber = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var wins = "";
var loss = "";
var user = 0;
var userCount = 0;

function begin(){
    randomNumber = Math.floor(Math.random() * 102) + 19;
    console.log('this is the guessing number ' + randomNumber);

    num1 = Math.floor(Math.random() * 12) + 1;
    console.log(num1);
    var crystal1 = $("#num-1");
    crystal1.attr({
        "data-number": num1
    });
    $("#num-1").append(crystal1);

    num2 = Math.floor(Math.random() * 12) + 1;
    console.log(num2);
    var crystal2 = $("#num-2");
    crystal2.attr({
         "data-number": num2
    });
    $("#num-2").append(crystal2);

    num3 = Math.floor(Math.random() * 12) + 1;
    console.log(num3);
    var crystal3 = $("#num-3");
    crystal3.attr({
        "data-number": num3
    });
    $("#num-3").append(crystal3);

    num4 = Math.floor(Math.random() * 12) + 1;
    console.log(num4);
    var crystal4 = $("#num-4");
    crystal4.attr({
        "data-number": num4
    });
    $("#num-4").append(crystal4); 

    $("#random-number").text(randomNumber);   
}

function restart() {
    randomNumber = 0;
    num1 = 0;
    num2 = 0;
    num3 = 0;
    num4 = 0;
    userCount = 0;
    user = 0;
    $("#user-total").text(" " + user);
    begin()
}


begin()
$(document).on("click", ".crystals", function () {
    var userCount = parseInt($(this).attr('data-number'));
    // userCount = parseInt(userCount);
    user += userCount; 
    $("#user-total").text(" " + user);

    if (user === randomNumber){
        wins++
        $("#win").text(wins);
        restart()
    }

    else if (user > randomNumber){
        loss++
        $("#loss").text(loss)
        restart()
    };


    console.log(user);

})








});
