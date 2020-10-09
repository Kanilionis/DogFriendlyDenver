
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
// startScreen();



// function startScreen(){
    // h2Tag.addClass("hidden")
    // quizTitle.addClass("hidden")
    // quizDirections.addClass("hidden")
    // catBtn.addClass("hidden")
    // dogBtn.addClass("hidden")
    var startBtn = $("<button>");
    $(".empty-div").append(startBtn);
    startBtn.text("Start Quiz").addClass("start-button").on("click", function(){
        console.log("click");
        getQuestion();
    })
        



// function startQuiz() { 
//     $(".card-img-top").addClass("hidden");
//     getQuestion();
// }
//     function startQuiz() { 
//         // catDogQuestion.removeAttr("class", "hidden");
//         //$(".empty-div").addClass("hidden");
//         $(".card-img-top").remove();
//         // catBtn.addClass("hidden")
//         // dogBtn.addClass("hidden")
//         // var startScreen = $("<h1>").addClass("start-screen hidden");
//         // var questions = $("<p>").addClass("card hidden");
//         // $(mainTitle).append(startScreen);
//         getQuestion();

//     // catDogQuestion.removeAttr("class", "hidden");
//     $(".empty-div").addClass("hidden");
//     // catBtn.addClass("hidden")
//     // dogBtn.addClass("hidden")
//     // var startScreen = $("<h1>").addClass("start-screen hidden");
//     // var questions = $("<p>").addClass("card hidden");
//     // $(mainTitle).append(startScreen);
    
//     getQuestion();



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
    } }
    )
    
function catOrDog(){
    $(".card-img-top").addClass("hidden");
    $(".card-body").addClass("hidden");
    $(startBtn).addClass("hidden");
    $(".card-group").removeAttr("class", "hidden");


    $("#kitten").on("click", function(){
        console.log("kitten")
        endQuiz();
    });
    $("#puppy").on("click", function(){
        console.log("puppy")
        endQuiz();
    })

}
    

    // catImg.on("click", getQuestion())
    // $(".cat-image").append(catImg);
    // console.log("cat");
    // var dogImg = $(".dog-image").on("click", getQuestion());
    // console.log("dog");
    // $("card-group").text("Are you a cat person or a dog person?");
    // $(".cat-image").on("click", getQuestion());
    // // $(".cat-image").append(catImg);
    
    // $(".dog-image").on("click", getQuestion());
    // $(".card-dog").append(dogImg);
    // var chooseCat = $(".card-img-top").on("click", function());
    //     console.log("cat");
    // var chooseDog = $(".card-img-top").on("click", function());
    //     console.log("dog");
    // // catOrDog.on("click", getQuestion());
    // $(".card-body").append(chooseCat, chooseDog);
    // if(chooseCat){
    //     endQuizCat()
    // } else {
    //     enQuizDog()
    // }


    
    


   function endQuiz() {
       // generate random number between 1 and 6
       // apply that number to choose from the array of explanations (index position will be random# -1)
       // post explanation and random image from dog/cat API on final page
       // add links to other pages on site
       $(".quiz-end").removeAttr("class", "hidden");
        var random = Math.floor(Math.random() * 6) + 1;
        var quizExplanation = explanationsArray[random-1];
        console.log(quizExplanation);
        $(".quiz-end-text").append(quizExplanation);
        $(".card-group").remove();

        // ... and then dump the random number into our random-number div.
        // $("#random-number").text(random);
   }}

    // quiz is hidden from user and the results are presented on the screen
        //link to API will provide variable information that the user provided if they like cats or dogs more
        //reference the response object to ge the random photo 
        //user will see pictutre and explination of why they are that cat/dog
        //create small set (random array) of funny explinations that the user will see
        //to explain why they are they dog/cat based off of thier choices 






    // $("#dynamicBtns").empty()
    // currentQuestion.choices.forEach(function(btns) {    
    //     var quizBtns = $("<button>").text(btns);
    //     console.log(btns)
   
    //     $("#dynamicBtns").append(quizBtns)
   
        

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




          
   