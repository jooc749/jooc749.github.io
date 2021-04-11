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
        // var storeImage = document.createElement("img");
        // storeImage.classList.add("store-image");
        // storeImage.src = coffee.fields.store_image[0].url;
        // coffeeDescription.append(storeImage);
        


    //     //add event listener for when click on coffee container, image and address will display and disappear 
    //     coffeeContainer.addEventListener("mouseover", function(){
    //       addressLocation.classList.toggle("active");
    //       storeImage.classList.toggle("active");
    //       shopTitle.classList.toggle("active");
    //     })

    //     coffeeContainer.addEventListener("mouseout", function(){
    //       addressLocation.classList.toggle("hide");
    //       storeImage.classList.toggle("hide");
    //       shopTitle.classList.toggle("hide");
    //     })

    //     // coffeeContainer.addEventListener("click", function pageRedirect(){
    //     //   window.location.replace("secondary_oxalis.html");
    //     //   setTimeout("pageRedirect()", 1000);
    //     // })

    //     coffeeContainer.addEventListener("click",function(){
    //       coffeeContainer.style.background = "bisque";
    //     })
      
    //     coffeeContainer.addEventListener("mouseover", function(){
    //       coffeeContainer.style.background = "#A8947C";
    //     })

    //     coffeeContainer.addEventListener("mouseout", function(){
    //       coffeeContainer.style.background = "transparent";
          
    //     })

    //     //detail page for SALENTO (uptown)

    //     coffeeContainer.addEventListener("click", function createPage(){
    //       if (coffeeContainer.classList.contains("salento")){
    //       window.location.replace("salento.html");
    //       } 
    //   })
        

    //   //detail page for OXALIS (brooklyn)
    //   coffeeContainer.addEventListener("click", function createPage(){
    //     if(coffeeContainer.classList.contains("oxalis")){
    //         window.location.replace("secondary_oxalis.html");
    //     }
    // })


      

        
    //       // coffeeContainer.addEventListener("click",function(){
          
          
    //       //   coffeeDescription.style.position = "fixed";
    //       //   coffeeDescription.style.top="0";
          
    //       //   coffeeDescription.style.left="-100px";
    //       //   coffeeDescription.style.zIndex="500";
    //       //   coffeeDescription.style.height = "100%";
    //       //   coffeeDescription.style.width = "100%";
  
    //       //   shopTitle.style.display = "none";
    //       //   addressLocation.style.display = "none";
    //       //   storeImage.style.display = "none";
  
    //       //   var detailTitle = document.createElement("div");
    //       //   detailTitle.classList.add("detail-title");
    //       //   detailTitle.append('Hello');
    //       //   detailTitle.style.zIndex= "501";
    //       //   detailTitle.style.color = "black";
           
    //       //   var detailHeader = document.getElementsByClassName("detailheader");
    //       //   document.querySelector(".detailheader").style.display = "flex";
    //       //   document.querySelector(".detailheader").style.zIndex = "501";
         
    //       //   document.querySelector(".detailheader").append(detailTitle);
  
          
        
    //       //   console.log("new content");
            
            
    //       // })







       

    
    //       // const detailPage = document.createElement("div");
    //       //   detailPage.classList.add("detail-page");

    //       //   const projectName = document.createElement("h2");
    //       //   projectName.classList.add("project-name");
    //       //   projectName.append('text');

    //       //   detailPage.append(projectName);

    //       //   container.append(detailPage);
    //       // shopTitle.replaceWith("<h2>New heading</h2>");
    
          
      
        



      
       
      
       
    //     //create new div under .popupinfo
    //     // var popup = document.createElement("div");
    //     // popup.classList.add("popup");
    //     // document.querySelector(".popupinfo").append(popup);

    //     // //style pop up hover window 
    //     // document.getElementsByClassName('.popup').style.height = "500px";
    //     // document.getElementsByClassName('.popup').style.width = "500px";
    //     // document.getElementsByClassName('.popup').style.background = "white";

    //     //get filter field from airtable 
    //     //loop through array and add each genre as a class to container 
    //     var categoryFilter = coffee.fields.filter;
    //     categoryFilter.forEach(function(categoryGroup){
    //       coffeeContainer.classList.add(categoryGroup)
    //     })

    //     //add event Listener to filter and add active class to coffee
    //     var categoryGroupAesthetic = document.querySelector('.js-aesthetic');
    //     categoryGroupAesthetic.addEventListener("click", function(){

    //       if (coffeeContainer.classList.contains("aesthetic")){
    //         coffeeContainer.style.background = "#f598b2";
    //       } else {
    //         coffeeContainer.style.background = "transparent";
    //       }
    //     })

    //     //add event Listener to filter for midtown 
    //     var categoryGroupVegan= document.querySelector('.js-vegan');
    //     categoryGroupVegan.addEventListener("click", function(){

    //       if (coffeeContainer.classList.contains("vegan")){
    //         coffeeContainer.style.background = "#58bf66";
    //       } else {
    //         coffeeContainer.style.background = "transparent";
    //       }
    //     })

    //     //add event Listener to filter for downtown
    //     var categoryGroupDog = document.querySelector('.js-dog');
    //     categoryGroupDog.addEventListener("click", function(){

    //       if (coffeeContainer.classList.contains("dog_friendly")){
    //         coffeeContainer.style.background = "blue";
    //       } else {
    //         coffeeContainer.style.background = "transparent";
    //       }
    //     })

    //     //add event Listener to filter for brooklyn 
    //     var categoryGroupEthical= document.querySelector('.js-ethical');
    //     categoryGroupEthical.addEventListener("click", function(){

    //       if (coffeeContainer.classList.contains("ethical")){
    //         coffeeContainer.style.background = "#f5d473";
    //       } else {
    //         coffeeContainer.style.background = "transparent";
    //       }
    //     })

    //     //add event Listener to filter for not coffee category 
    //     var categoryGroupMoreThanCoffee= document.querySelector('.js-morethancoffee');
    //     categoryGroupMoreThanCoffee.addEventListener("click", function(){

    //       if (coffeeContainer.classList.contains("more_than_coffee")){
    //         coffeeContainer.style.background = "red";
    //       } else {
    //         coffeeContainer.style.background = "transparent";
    //       }
    //     })

    //     //add event Listener to filter for poc owned category 
    //     var categoryGroupPoc= document.querySelector('.js-poc');
    //     categoryGroupPoc.addEventListener("click", function(){

    //       if (coffeeContainer.classList.contains("poc_owned")){
    //         coffeeContainer.style.background = "#d7bcf5";
    //       } else {
    //         coffeeContainer.style.background = "transparent";
    //       }
    //     })

    //      //add event Listener to filter for woman owned category 
    //      var categoryGroupWoman= document.querySelector('.js-woman');
    //      categoryGroupWoman.addEventListener("click", function(){
 
    //        if (coffeeContainer.classList.contains("woman_owned")){
    //          coffeeContainer.style.background = "yellow";
    //        } else {
    //          coffeeContainer.style.background = "transparent";
    //        }
    //      })

        // //add event Listener for resetting filter 
        // var filterReset = document.querySelector('.js-reset')
        // filterReset.addEventListener("click", function(){
        //   coffeeContainer.style.background = "transparent";
        
        // })

        

 

    // coffeeContainer.addEventListener("click", ()=>{
    //   const container = document.querySelector(".container");
    //   (container.childNodes.length>0)
    //     container.removeChild(container.firstChild);
            
    // })

        
         
      //   coffeeContainer.addEventListener("load", function replaceContent(){
      //     if (coffeeContainer.classList.contains("salento")){
      //       coffeeContainer.style.display ="block";
      //     } else{
      //       coffeeContainer.style.display = "hidden";
      //     }
      // })

      // var replaceContent = document.querySelector(".name");
      // replaceContent.addEventListener("load", function(){
      //   if (coffeeContainer.classList.contains("salento")){
      //     coffeeContainer.style.display = "block";
      //   }else {
      //     coffeeContainer.style.display = "none";
      //   }
      // })

   
   
     console.log("yes it worked");

    });
  }


  