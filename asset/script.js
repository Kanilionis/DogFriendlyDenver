
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
//AJAX DOG
// Dog API Website : https://dog.ceo/dog-api/

 var queryDogBreed = "https://dog.ceo/api/breed/hound/images"; // link to dog breed API

 $.ajax({
     url: queryDogBreed, 
     method: "GET"
 })
 .then(function(response) { 
 
    console.log(response) //store object to access information in console

    var img = $("<img>").attr("src", response.message[0.0]).append("#picture");
    $("#picture").append(img);

});

//_____________________________________________________________________________________________
//AJAX CAT
// Cat API Website : https://thecatapi.com/

var apiKey = "7f95dde4-58f5-4c1e-98bc-232e911bfe50"
var queryCat = "https://api.thecatapi.com/v1/images/search?" + apiKey; // link to cat API

$.ajax({
    url: queryCat, 
    method: "GET"   
})
.then(function(response) { 

    console.log(response) //store object to access information in console

    var img = $("<img>").attr("src", response[0].url).append("#picture");
    $("#picture").append(img);

});


//present user with main page
//name of quiz with directions on page with navbar

//_____________________________________________________________________________________________
//FUNCTIONS

function startQuiz() { 
    //quiz page will have pictue of cats/dogs
        //prompt user to select which image they like more
        //we will track this answer to decide the outcome of the quiz
    // button to prompt user to start quiz 

};


//will replace the $(#testBtn) with a parent element of wher we generate the dynamic buttons
 $("#testBtn").on("click", function() {

    var currentQuestion = questionsArray[Index];

    if (currentQuestion === questionsArray.length) { 
        endQuiz();
    }

    var displayQuestion = $("#question").text(currentQuestion.question);
    $("body").append(displayQuestion); //will replace ("body") with HTML tag
     
    $("#dynamicBtns").empty()
    currentQuestion.choices.forEach(function(btns) {    
        var quizBtns = $("<button>").text(btns);
        console.log(btns)
   
        $("#dynamicBtns").append(quizBtns)
    });  
        
    Index++
     
}); 
        
    // question 1: Please select your favorite color
        //present user with different buttons with color options
        //user clicks button and moves on to quesion 2
    
    // question 2: pick a favorite food
        //present user with different bottons with food options
        //user clicks button and moves on the quesiton 3

    // question 3: pick your favorite season
        //present user with different bottons with seasons
        //user clicks button and moves on the quesiton 4
        
    // question 4: pick your favorite type of music  
        //present user with different types of music 
        //user clicks button and moves on to the results



function endQuiz() {

    // quiz is hidden from user and the results are presented on the screen
        //link to API will provide variable information that the user provided if they like cats or dogs more
        //reference the response object to ge the random photo 
        //user will see pictutre and explination of why they are that cat/dog
        //create small set (random array) of funny explinations that the user will see
        //to explain why they are they dog/cat based off of thier choices 

};

          
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