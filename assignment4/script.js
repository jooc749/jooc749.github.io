// console.log("is our script file working?");

//loading Airtable library, call it "Airtable";
var Airtable = require("airtable");
//console.log(Airtable);

//use airtable library, connect to base using API key 
var base = new Airtable({ apiKey: "keyWPHNJNanT4412M" }).base(
    "apppSOEHrWttzzW8v"
  );

//console log album_title from base 
  base('playlist').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('album_title'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

//console log album_artwork from base 
base('playlist').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 3,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
      console.log('Retrieved', record.get('album_artwork'));
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});

//console log artist from base 
base('playlist').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 3,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
      console.log('Retrieved', record.get('artist'));
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});




  //get collection base, select all records 
  //specify functions that will receive data 
  base("playlist").select({}).eachPage(gotPageOfAlbums, gotAllAlbums);

//empty array to hold data
  var albums = [];

  //callback function that receives data 
  function gotPageOfAlbums(records, fetchNextPage) {
    console.log("gotPageOfAlbums()");
    // add the records from this page to our albums array
    albums.push(...records);
    // request more pages
    fetchNextPage();
  }

// call back function that is called when all pages are loaded
function gotAllAlbums(err) {
    console.log("gotAllAlbums()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading albums");
      console.error(err);
      return;
    }
  
    // call functions to log and show the albums
    consoleLogAlbums();
    showAlbums();
  }

// just loop through the albums and console.log them
function consoleLogAlbums() {
    console.log("consoleLogAlbums()");
    albums.forEach((album) => {
      console.log("Album:", album);
    });
  }
  
// loop through Airtable data, and create elements 
function showAlbums() {
    console.log("showAlbums()");
    albums.forEach((album) => {
      
        var albumTitle = document.createElement("h2");
        albumTitle.innerText = album.fields.album_title;
        document.body.append(albumTitle);

        var nameOfArtist = document.createElement("h3");
        nameOfArtist.innerText = album.fields.artist;
        document.body.append(nameOfArtist);

        var albumImage = document.createElement("img");
        albumImage.src = album.fields.album_img[0].url;
        document.querySelector(".container").append(albumImage);

        
    });
  }
  