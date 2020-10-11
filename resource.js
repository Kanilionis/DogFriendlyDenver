"use strict";

//retrieves token for authorization and sends fetch request with user input//

function fetchAnimals(animal, zip, breed) {
  console.log(token);
  fetch(
    `https://api.petfinder.com/v2/animals?type=${animal}&breed=${breed}&location=${zip}&status=adoptable&distance=25&limit=20`,
    {
      headers: {
        Authorization: `Bearer ${token.access_token}`
      }
    }
  )
    .then(response => response.json())
    .then(responseJson => showAnimals(responseJson))
  //  .catch(error => showError(error.message));
}

//displays data retrieved from the API as JSON and then renders it into the HTML//
function submitForm() {
  $("form").submit(event => {
    event.preventDefault();
    var animal = $("#petSearch").val();
    var zip = $("#zip").val();
    var breed = $("#breed").val();
    fetchAnimals(animal, zip, breed);
  });
}

$(function() {
  console.log("It worked!");
  submitForm();
});


function showAnimals(responseJson) {
  console.log(responseJson);
  if (responseJson.animals.length == 0) {
    showError( "No results - please try again.");     
    return;
  }

  //displays data in the HTML//
// $.ajax({
//   method: "GET",
//   url:`https://api.petfinder.com/v2/animals?type=${animal}&breed=${breed}&location=${zip}&status=adoptable&distance=25&limit=`

// }).then(function(response) {
//   console.log(response);
// fetchAnimals(animal, zip, breed);


$("#results ul").html("");
for (let i = 0; i < responseJson.animals.length; i++) {
  for(let p=0; p<responseJson.animals[i].photos.length; p++) {
  $("#results ul").append(`<li id="dogCard">
   <h3>${responseJson.animals[i].name}</h3>   
   <img src="${responseJson.animals[i].photos[p].medium}" alt="adopt me" class="petImg" max-width: 90%>
   <p>${responseJson.animals[i].breeds.primary}<p>
   <p>${responseJson.animals[i].age} ${responseJson.animals[i].gender}<p>
   <a href="${responseJson.animals[i].url}" class="petLink" target="_blank">Visit me on Petfinder!</a>
   </li>`)
}
}


//displays API errors in app
 function showError(message) {
  $("#results ul").html("");
   $("#results ul").append(`<li>${message}</li>`);
   console.log(message);
}

}