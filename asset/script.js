
//_____________________________________________________________________________________________
//GLOBAL VARIABLES

var questionArray = [ //object to store our questions and choices

    { 
    question: "Please select your favorite color:",
    btnChoices: ["Pink", "Red", "Green", "Blue"],
    },
        
    {
    question: "Please select a favorite food:",
    btnChoices: ["Pizza", "French Fries","Pasta", "Cheeseburger"],
    },
            
    {
    question: "Please select your favorite time of year:",
    btnChoices: ["Summer", "Fall", "Winter", "Spring"],
    },
            
    {
    question: "Please select your favorite type of music:",
    btnChoices: ["Country", "Rock & Roll", "Classical", "Hip Hop"],
    },
        
];


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

 $("#picture").append(img)

});

//_____________________________________________________________________________________________
//AJAX CAT
// Cat API Website : https://thecatapi.com/

var apiKey = "7f95dde4-58f5-4c1e-98bc-232e911bfe50"
var queryCat = "https://api.thecatapi.com/v1/images/search'api_key=7f95dde4-58f5-4c1e-98bc-232e911bfe50" ; // link to cat API

$.ajax({
    url: queryCat, 
    method: "GET"
})
.then(function(response) { 

 console.log(response) //store object to access information in console

 console.log(response[0].url) 

var img = $("<img>").attr("src", response.message[0.0]).append("#picture");

$("#picture").append(img)

});







//MVP 


// present user with main page 
    // webpage will have pictue of cats/dogs
        //prompt user to select if they like cats or dogs more
        //we will track this anwer to decide the outcome of the quiz
    // will have name of quiz with directions on page
    // button to prompt user to start quiz 


// once start button is pressed the start screen will disappear and the user will see first quesiton
    // question 1: choose your favorite color
        // present user with different buttons with color options
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
        
    // quiz is hidden from user and the results are presented on the screen
        //Link to API will provide variable information that the user provided if they like cats or dogs more
        //reference the response object to ge the random photo 
        //user will see pictutre and explination of why they are that cat/dog
        //create small set (random array) of funny explinations that the user will see
            //to explain why they are they dog/cat based off of thier choices 
            
    //have a navbar 
        //quiz button page
        //cat page
            //button for user to generate stuff below
            //random cat photos
            //random fun cat facts   
        //dog page
            //button for user to generate stuff below
            //random dog photos
            //random fun dog facts   
        //how you can help
            //links to local shelters in Denver?            