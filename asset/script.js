$(document).ready(function(){  
    //_____________________________________________________________________________________________
    //GLOBAL VARIABLES

    var questionsArray = [ //object to store our questionsArray and choices
        { 
        question: "Please select a color:",
        image: "/questionPics/question1.png" ,
        },
            
        {
        question: "Please select a food item:",
        image: "/questionPics/questio2.png",
        },
                
        {
        question: "Please select your favorite time of year:",
        image:"/questionPics/question3.png",
        },
                
        {
        question: "Please select a type of music:",
        image:"/questionPics/question4.png",
        },

        {

        question: "Please select a type of flower:",
        image:"/questionPics/question5.png",
        },
        {
        question: "Please select a sunset", 
        image: "/questionPics/question6.png",

        question: ["Choose a sunset picture?"],
        choices: ["1", "2", "3", "4"],
        }, 
        
        {
        question: "Which flower do you like?",
        choices: ["1", "2", "3", "4"],

        }, 
    ];

    var explanationsArray = [
        "You are SUPER loyal, extra furry, and very snuggly! You're the one anyone can turn to for advice and comfort. Keep being a good friend!",

        "You are the PERFECT pet! You are a people pleaser that listens well and loves to make (or eat) treats. We like to call you 'The Hostess with the Mostess.",

        "Yikes!! Watch out for the licks! You're the type that doesn't know your boundaries. Are you a stage 5 clinger?? Check yo-self, before you wreck yo-self (and your relationships).",

        "Wow, you LOVE to sleep! Do you have a plush mattress, sleep mask, lavender pillow spray, and a full closet of sweats? Put a TV and a refrigerator in your bedroom because you are never leaving!",

        "'I'm readyyyyyy to partyyyyyyyyyyy' is what you say on a regular basis. You're the life of the party and always down for an adventure. Hashtag FOMO? You're the president of that club.",

        "Well, you're a sassy one, aren't you? Fickle...is that a better word? You change your mind so often, you give your friends whiplash! Let's keep it calm and 'be cool Honey Bunny'!"
    ]

    var index = 0;

    var catDogQuestion = $(".card-group").addClass("hidden");

    //_____________________________________________________________________________________________
    //DYNAMIC ELEMENTS

    //h1 tag dynamically added 
    var mainTitle = $("<h1>").text("Welcome to Dog Friendly Denver!");

    $(".empty-div").append(mainTitle);

    //introductios tag dynamically added
    var introduction = "Dog Friendly Denver is all about dogs, and cats too! Our goal is to help link people in the Denver area to local animal shelters. Take our fun and interactive quiz to find out what type of animal you are! Visit the all-about cats or all-about dogs pages to see endless cute animal photos! We hope you have fun, and remember adoption saves lives!";
    var h2Tag = $("<h2>").text(introduction);

    $(".empty-div").append(h2Tag);


    //quiz title tag dynaically added
    var quizTitle = $("<h2>").text("Quiz: What Type of Animal Are You?");
    $(".empty-div").append(quizTitle);

    var startScreenDiv = $("<h1>").addClass("start-screen");
    $(".empty-div").append(startScreenDiv);

    //quiz directions dynamically added
    var quizDirections = "Take our exciting quiz to find out what kind of cat or dog you are! Just simply start by selecting an animal below. Don't forget to visit our link to animal adoption shelters near you when you are finished!"
    var quizDirections = $("<p>").text(quizDirections);
    $(".empty-div").append(quizDirections);

  
    //_____________________________________________________________________________________________
    //FUNCTIONS
    
    var startBtn = $("<button>");
    $(".empty-div").append(startBtn);
    startBtn.text("Start Quiz").addClass("start-button").on("click", function(){
        console.log("click");
        getQuestion();
    })
    

    function getQuestion(){
        $(".empty-div").addClass("hidden");
        $(".card-group").addClass("hidden");
        $(".main-card").removeAttr("class", "hidden");
        $(startBtn).addClass("hidden");
        var cardImgBlock = $(".card-img-top").on("click", function(){
                console.log("we are in the fxn");
            $(".card-body").append(cardImgBlock);
            var currentQuestion = questionsArray[index];

            $("#question").text(currentQuestion.question);
            // cardImgBlock.forEach()
            $(".card-text").append(currentQuestion); //will replace ("body") with HTML tag

            
            index++;
            if(index === questionsArray.length){
                console.log("end quiz");
                catOrDog();
            }}
    )};
        
    function catOrDog(){
        $(".card-img-top").addClass("hidden");
        $(".card-body").addClass("hidden");
        $(startBtn).addClass("hidden");
        $(".card-group").removeAttr("class", "hidden");


        $("#kitten").on("click", function(){
            console.log("kitten")
            endQuizCat();
        });
        $("#puppy").on("click", function(){
            console.log("puppy")
            endQuizDog();
        })

    }


    function endQuizDog() {

        //AJAX DOG
        // Dog API Website : https://dog.ceo/dog-api/

        var queryDogBreed = "https://dog.ceo/api/breed/hound/images"; // link to dog breed API

        $.ajax({
            url: queryDogBreed, 
            method: "GET"
        })
        .then(function(response){ 
        
            console.log(response) //store object to access information in console

            var random = Math.floor(Math.random() * 6) + 1;
            var quizExplanation = explanationsArray[random-1];
            console.log(quizExplanation);
            var showQuizExplination = $("<h2>").text(quizExplanation);
            $("body").append(showQuizExplination);

            $(".card-cat").addClass("hidden");
            $(".card-dog").addClass("hidden");
            catDogQuestion.addClass("hidden");
            $(".quiz-end").removeAttr("class","hidden");

            var randomNum = Math.floor(Math.random() * 100) + 1;
            var imgDog = response.message[randomNum]; //grab image url at random number index
            console.log(imgDog)

            var img = $("<img>").attr("src", imgDog).append("#imgDog");
            $("#imgDog").append(img);
        
        });

    }   
    

    function endQuizCat (){

        //AJAX CAT
        // Cat API Website : https://thecatapi.com/

        var queryCat =  'https://api.thecatapi.com/v1/images/search?limit=100' // link to cat API

        $.ajax({
            url: queryCat, 
            method: "GET",
            header: "x-api-key: 7f95dde4-58f5-4c1e-98bc-232e911bfe50"   
        })
        .then(function (response){ 
    
            //console.log(response) //store object to access information in console

            var random = Math.floor(Math.random() * 6) + 1;
            var quizExplanation = explanationsArray[random-1];
            console.log(quizExplanation);
            var showQuizExplination = $("<h2>").text(quizExplanation);
            $("body").append(showQuizExplination);

            $(".card-cat").addClass("hidden");
            $(".card-dog").addClass("hidden");
            catDogQuestion.addClass("hidden");
            $(".quiz-end").removeAttr("class","hidden");

            var randomNum = Math.floor(Math.random() * 100) + 1;
            var imgCat = response[randomNum].url; //grab image url at random number index
            console.log(imgCat)
        
            //create image tag with attributes
            var newImg1 = $("<img>").addClass(".img-responsive").attr("src", imgCat).width(500).height(500); 

            $("#imgCat").empty()
            $("#imgCat").append(newImg1); //append random image 1
    
            
        });

    }
    
});
