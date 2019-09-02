$(document).ready(function(){


    var wins = "";
    var loss = "";
    var user = 0;
    
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    console.log('this is the guessing number ' + randomNumber);
    
    var num1 = Math.floor(Math.random() * 12) + 1;
    console.log(num1);
    var crystal1 = $("#num-1");
    crystal1.attr({
        "data-number": num1
    });
    $("#num-1").append(crystal1);
    
    var num2 = Math.floor(Math.random() * 12) + 1;
    console.log(num2);
    var crystal2 = $("#num-2");
    crystal2.attr({
        "data-number": num2
    });
    $("#num-2").append(crystal2);
    
    var num3 = Math.floor(Math.random() * 12) + 1;
    console.log(num3);
    var crystal3 = $("#num-3");
    crystal3.attr({
        "data-number": num3
    });
    $("#num-3").append(crystal3);
    
    var num4 = Math.floor(Math.random() * 12) + 1;
    console.log(num4);
    var crystal4 = $("#num-4");
    crystal4.attr({
        "data-number": num4
    });
    $("#num-4").append(crystal4);
    
    $("#random-number").text(randomNumber);
    
    //random number for crystal 1
    // var crystal1 = $("#num-1");
    // crystal1.attr({
    //     "data-number": num1
    // });
    // $("#num-1").append(crystal1);
    
    //random number for crystal 2
    // var crystal2 = $("#num-2");
    // crystal2.attr({
    //     "data-number": num2
    // });
    // $("#num-2").append(crystal2);
    
    //random number for crystal 3
    // var crystal3 = $("#num-3");
    // crystal3.attr({
    //     "data-number": num3
    // });
    // $("#num-3").append(crystal3);
    
    //random number for crystal 4
    // var crystal4 = $("#num-4");
    // crystal4.attr({
    //     "data-number": num4
    // });
    // $("#num-4").append(crystal4);
    
    
    function start() {
        randomNumber
        crystal1
        crystal2
        crystal3
        crystal4
        user
        
    }
    
    start();
    
    $(document).on("click", ".crystals", function () {
        var userCount = parseInt($(this).attr('data-number'));
        // userCount = parseInt(userCount);
        user += userCount; 
        $("#user-total").text(user);
    
        if (user === randomNumber){
            wins++
            $("#win").text(wins);
            start()
        }
    
        else if (user > randomNumber){
            loss++
            $("#loss").text(loss)
            start()
        };
    
        // $()
        console.log(user);
    
    })
    
    
    
    
    
    
    
    
    });
    