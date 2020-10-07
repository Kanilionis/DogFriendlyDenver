
//_____________________________________________________________________________________________
//GLOBAL VARIABLES

var questionsArray = [ //object to store our questionsArray and choices

    { 
    question: "Please select a color:",
    choices: ["Pink", "Red", "Green", "Blue"],
    },
        
    {
    question: "Please select a food item:",
    choices: ["Pizza", "French Fries","Pasta", "Cheeseburger"],
    },
            
    {
    question: "Please select your favorite time of year:",
    choices: ["Summer", "Fall", "Winter", "Spring"],
    },
            
    {
    question: "Please select a type of music:",
    choices: ["Country", "Rock & Roll", "Classical", "Hip Hop"],
    },

    {
    question: "Another Question 5:",
    choices: ["1", "2", "3", "4"],
    }, 
    
    {
    question: "Another Question 6:",
    choices: ["1", "2", "3", "4"],
    }, 
];

var explinationsArray = [
    "Explination One Here",
    "Explination Two Here",
    "Explination Three Here",
    "Explination Four Here",
    "Explination Five Here",
    "Explination Six Here"
]

var Index = 0;


//_____________________________________________________________________________________________
//DYNAMIC ELEMENTS

//h1 tag dynamically added 
var mainTitle = $("<h1>").text("Welcome to Dog Friendly Denver!");
$("body").append(mainTitle);

//introductios tag dynamically added
var introduction = "Dog Friendly Denver is all about dogs, and cats too! Our goal is to help link people in the Denver area to local animal shelters. Take our fun and interactive quiz to find out what type of animal you are! Visit the all-about cats or all-about dogs pages to see endless cute animal photos! We hope you have fun, and remember adoption saves lives!";
var h2Tag = $("<h2>").text(introduction);
$("body").append(h2Tag);

//quiz title tag dynaically added
var quizTitle = $("<h2>").text("Quiz: What Type of Animal Are You?");
$("body").append(quizTitle);

var startScreenDiv = $("<h1>").addClass("start-screen");
$("body").append(startScreenDiv);

//quiz directions dynamically added
var quizDirections = "Take our exciting quiz to find out what kind of cat or dog you are! Just simply start by selecting an animal below. Don't forget to visit our link to animal adoption shelters near you when you are finished!"
var quizDirections = $("<p>").text(quizDirections);
$("body").append(quizDirections);

//buttons for start of quiz (cat or dog) will need event listeners on each of these?
// var catBtn = $("<button>").text("Cats!");
// var dogBtn = $("<button>").text("Dogs!");
// $("body").append(catBtn).append(dogBtn);


//have a navbar  
       //quiz page
       //cat page
           //button for user to generate stuff below
           //random cat photos
           //random fun cat facts   
       //dog page
           //button for user to generate stuff below
           //random dog photos
           //random fun dog facts   
       //how you can help page
           //links to local shelters in Denver  


//_____________________________________________________________________________________________
//AJAX DOG
// Dog API Website : https://dog.ceo/dog-api/

 var queryDogBreed = "https://dog.ceo/api/breed/hound/images"; // link to dog breed API

 $.ajax({
     url: queryDogBreed, 
     method: "GET"
 })
 .then(function(response) { 
 
    console.log(response) //store object to access information in console

    // var img = $("<img>").attr("src", response.message[0.0]).append("#picture");
    // $("#picture").append(img);

});


//_____________________________________________________________________________________________
//AJAX CAT
// Cat API Website : https://thecatapi.com/

var apiKey = "7f95dde4-58f5-4c1e-98bc-232e911bfe50"

var queryCat =  'https://api.thecatapi.com/v1/images/search?limit=100' // link to cat API

$.ajax({
    url: queryCat, 
    method: "GET",
    header: "x-api-key: 7f95dde4-58f5-4c1e-98bc-232e911bfe50"   
})
.then(function(response) { 

    console.log(response) //store object to access information in console

    // var img = $("<img>").attr("src", response[0].url).append("#picture");
    // $("#picture").append(img);

});

//_____________________________________________________________________________________________
//FUNCTIONS
startScreen();

function startScreen(){
    // h2Tag.addClass("hidden")
    // quizTitle.addClass("hidden")
    // quizDirections.addClass("hidden")
    // catBtn.addClass("hidden")
    // dogBtn.addClass("hidden")
    var startBtn = $("<button>");
    $("body").append(startBtn);
    startBtn.text("Start Quiz").addClass("start-button").on("click", function(){
        console.log("click");
        startQuiz();
    })
        
}


var currentQuestion = questionsArray[Index];


function startQuiz() { 
    h2Tag.addClass("hidden")
    quizTitle.addClass("hidden")
    quizDirections.addClass("hidden")
    // catBtn.addClass("hidden")
    // dogBtn.addClass("hidden")
    var startScreen = $("<h1>").addClass("start-screen hidden");
    var questions = $("<p>").addClass("card hidden");
    $(mainTitle).append(startScreen, questions);

    $("#start-quiz").on("click", function() {

    

        if (currentQuestion === questionsArray.length) { 
            endQuiz();
        }
    
        var displayQuestion = $("#question").text(currentQuestion.question);
        $(".card").append(displayQuestion); //will replace ("body") with HTML tag
         
        $("#dynamicBtns").empty()
        currentQuestion.choices.forEach(function(btns) {    
            var quizBtns = $("<button>").text(btns);
            console.log(btns)
       
            $("#dynamicBtns").append(quizBtns)
        });  
            
        Index++
         
    }); 

// function startQuiz() { 
//     //quiz page will have pictue of cats/dogs
//         //prompt user to select which image they like more
//         //we will track this answer to decide the outcome of the quiz
//     // button to prompt user to start quiz 

// };


// //will replace the $(#testBtn) with a parent element of wher we generate the dynamic buttons
//  $("#testBtn").on("click", function() {

//     var currentQuestion = questionsArray[Index];

//     if (currentQuestion === questionsArray.length) { 
//         endQuiz();
//     }

//     var displayQuestion = $("#question").text(currentQuestion.question);
//     $("#question").append(displayQuestion); //will replace ("body") with HTML tag
     
//     $("#dynamicBtns").empty()
//     currentQuestion.choices.forEach(function(btns) {    
//         var quizBtns = $("<button>").text(btns);
//         console.log(btns)
   
//         $("#dynamicBtns").append(quizBtns)
//     });  
        
//     Index++
     
// }); 


function endQuiz() {

    // quiz is hidden from user and the results are presented on the screen
        //link to API will provide variable information that the user provided if they like cats or dogs more
        //reference the response object to ge the random photo 
        //user will see pictutre and explination of why they are that cat/dog
        //create small set (random array) of funny explinations that the user will see
        //to explain why they are they dog/cat based off of thier choices 

}};

          
   