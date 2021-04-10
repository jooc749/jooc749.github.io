// console.log("is our script file working?");

//loading Airtable library, call it "Airtable";
var Airtable = require.js("airtable");
console.log(Airtable);

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
    // add the records from this page to our coffee array
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
      
        var shopTitle = document.createElement("h2");
        shopTitle.innerText = coffee.fields.name;
        document.body.append(shopTitle);

        var nameOfArtist = document.createElement("h3");
        nameOfArtist.innerText = album.fields.artist;
        document.body.append(nameOfArtist);

        var albumImage = document.createElement("img");
        albumImage.src = album.fields.album_img[0].url;
        document.querySelector(".container").append(albumImage);

        
    });
  }
  