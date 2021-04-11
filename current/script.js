// console.log("is our script file working?");

//loading Airtable library, call it "Airtable";
var Airtable = require("airtable");
//console.log(Airtable);

//use airtable library, connect to base using API key 
var base = new Airtable({ apiKey: "keyWPHNJNanT4412M" }).base(
    "appskgkVVYqiVGUis"
  );


  //get collection base, select all records 
  //specify functions that will receive data 
  base("coffee").select({}).eachPage(gotPageOfCoffee, gotAllCoffee);


//empty array to hold data
  var coffee = [];

  //callback function that receives data 
  function gotPageOfCoffee(records, fetchNextPage) {
    console.log("gotPageOfCoffee()");
    // add the records from this page to our albums array
    coffee.push(...records);
    // request more pages
    fetchNextPage();
  }

// call back function that is called when all pages are loaded
function gotAllCoffee(err) {
    console.log("gotAllCoffee()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading coffee");
      console.error(err);
      return;
    }
  
    // call functions to log and show the albums
    consoleLogCoffee();
    showCoffee();
  }

// just loop through the albums and console.log them
function consoleLogCoffee() {
    console.log("consoleLogCoffee()");
    coffee.forEach((coffee) => {
      console.log("Coffee:", coffee);
    });
  }
  
// loop through Airtable data, and create elements 
function showCoffee() {
    console.log("showCoffee()");
    coffee.forEach((coffee) => {
      
        // var shopTitle = document.createElement("h2");
        // shopTitle.innerText = coffee.fields.name;
        // document.body.append(shopTitle);

      
        // var address = document.createElement("h2");
        // address.innerText = coffee.fields.location;
        // document.body.append(address);

        // var hours = document.createElement("h2");
        // hours.innerText = coffee.fields.time;
        // document.body.append(hours);

        // var storeImage = document.createElement("img");
        // storeImage.src = coffee.fields.store_image[0].url;
        // document.body.append(storeImage);

        //create a new div container for coffee 
        var coffeeContainer = document.createElement("div");
        coffeeContainer.classList.add("coffee-container");
        document.querySelector(".container").append(coffeeContainer);
      
        //create a new div for coffee description box on hover
        var coffeeDescription = document.createElement("div");
        coffeeDescription.classList.add("coffee-description");
        document.querySelector(".coffee-container").append(coffeeDescription);

        //add coffee shop names to container 
        var shopTitle = document.createElement("h3");
        shopTitle.classList.add("shop-title");
        shopTitle.innerText = coffee.fields.name;
        coffeeDescription.append(shopTitle);

        //add address to container
        var addressLocation = document.createElement("h2");
        addressLocation.classList.add("address-location");
        addressLocation.innerText = coffee.fields.location;
        coffeeDescription.append(addressLocation);

        //add store image to container
        var storeImage = document.createElement("img");
        storeImage.classList.add("store-image");
        storeImage.src = coffee.fields.store_image[0].url;
        coffeeDescription.append(storeImage);
        


        //add event listener for when click on coffee container, image and address will display and disappear 
        coffeeContainer.addEventListener("mouseenter", function(){
          addressLocation.classList.toggle("active");
          storeImage.classList.toggle("active");
          shopTitle.classList.toggle("active");
        })

        coffeeContainer.addEventListener("mouseleave", function(){
          addressLocation.classList.toggle("hide");
          storeImage.classList.toggle("hide");
          shopTitle.classList.toggle("hide");
        })

        coffeeContainer.addEventListener("click", function pageRedirect(){
          window.location.replace("secondary_oxalis.html");
          setTimeout("pageRedirect()", 1000);
        })

        coffeeContainer.addEventListener("click",function(){
          coffeeContainer.style.background = "bisque";
        })
    

  
        //create new div under .popupinfo
        // var popup = document.createElement("div");
        // popup.classList.add("popup");
        // document.querySelector(".popupinfo").append(popup);

        // //style pop up hover window 
        // document.getElementsByClassName('.popup').style.height = "500px";
        // document.getElementsByClassName('.popup').style.width = "500px";
        // document.getElementsByClassName('.popup').style.background = "white";

        //get filter field from airtable 
        //loop through array and add each genre as a class to container 
        var categoryFilter = coffee.fields.filter;
        categoryFilter.forEach(function(categoryGroup){
          coffeeContainer.classList.add(categoryGroup)
        })

        //add event Listener to filter and add active class to coffee
        var categoryGroupAesthetic = document.querySelector('.js-aesthetic');
        categoryGroupAesthetic.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("aesthetic")){
            coffeeContainer.style.background = "purple";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

        //add event Listener to filter for midtown 
        var categoryGroupVegan= document.querySelector('.js-vegan');
        categoryGroupVegan.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("vegan")){
            coffeeContainer.style.background = "orange";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

        //add event Listener to filter for downtown
        var categoryGroupDog = document.querySelector('.js-dog');
        categoryGroupDog.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("dog_friendly")){
            coffeeContainer.style.background = "blue";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

        //add event Listener to filter for brooklyn 
        var categoryGroupEthical= document.querySelector('.js-ethical');
        categoryGroupEthical.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("ethical")){
            coffeeContainer.style.background = "pink";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

        //add event Listener to filter for not coffee category 
        var categoryGroupMoreThanCoffee= document.querySelector('.js-morethancoffee');
        categoryGroupMoreThanCoffee.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("more_than_coffee")){
            coffeeContainer.style.background = "red";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

        //add event Listener to filter for poc owned category 
        var categoryGroupPoc= document.querySelector('.js-poc');
        categoryGroupPoc.addEventListener("click", function(){

          if (coffeeContainer.classList.contains("poc_owned")){
            coffeeContainer.style.background = "blue";
          } else {
            coffeeContainer.style.background = "transparent";
          }
        })

         //add event Listener to filter for woman owned category 
         var categoryGroupWoman= document.querySelector('.js-woman');
         categoryGroupWoman.addEventListener("click", function(){
 
           if (coffeeContainer.classList.contains("woman_owned")){
             coffeeContainer.style.background = "yellow";
           } else {
             coffeeContainer.style.background = "transparent";
           }
         })

        // //add event Listener for resetting filter 
        // var filterReset = document.querySelector('.js-reset')
        // filterReset.addEventListener("click", function(){
        //   coffeeContainer.style.background = "transparent";
        
        // })

        
    });
  }


  