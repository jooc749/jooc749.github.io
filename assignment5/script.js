console.log("hi");

//adding text for dalgona coffee ingredients
document.querySelector(".dalgonaing").innerHTML = "2 tablespoons of boiling water, 2 tablespoons of granulated sugar, 2 tablespoons of instant coffee, glass of milk, whisk, bowl";

//function to make recipe for dalgona coffee
function makeCoffee(water, sugar, coffee, milk){
    var t = document.querySelector(".dalgona")
    var a = document.createTextNode( "Whip " + water + " tablespoons of boiling water," + sugar + " tablespoons of granulated sugar, and " + coffee + " tablespoons of instant coffee together in a bowl for a few minutes.");
    var b = document.createTextNode("Pour a glass of" + milk + " and add the whipped coffee on top.");
    var c = document.createTextNode("Using a straw, stir whipped coffee into milk.");
    var d = document.createTextNode("Enjoy!");
    t.prepend(a, b, c, d);
  
}

//adding in values for each ingredient
makeCoffee ( 2,  2,  2, " your choice of milk ") ;

//adding text for pancake cereal ingredients
document.querySelector(".cerealing").innerHTML = "1/2 cup whole milk, 1 large egg, 4 tablespoons melted unsalted butter, 1/2 cup all-purpose flour, 2 teaspoons granulated sugar, 2 teaspoons baking powder, 1/2 teaspoon kosher salt, pan, piping bag, bowls";

//function to make recipe for pancake cereal 
function makeCereal(milk, egg, butter, flour, sugar, powder, salt){
    var x = document.querySelector(".cereal")
    var e = document.createTextNode("Mix" + flour + sugar + powder + salt + "in a bowl. ");
    var f = document.createTextNode("Mix" + milk + egg + butter + "in a separate bowl. ");
    var g = document.createTextNode("Combine mixed dry ingredients with mixed wet ingredients into same bowl and mix. ");
    var h = document.createTextNode("Pour ths batter into piping bag. ");
    var i = document.createTextNode("Heat up pan and cover pan with butter. Pipe small dots of batter from the piping bag onto the pan to cover the pan. Flip mini pancakes when edges look dry. Cook until sides are golden brown. When all cooked, place mini pancakes into bowl and enjoy with milk!")
    x.prepend(e, f, g,h,i,);
}

//adding in values for each ingredient
makeCereal( " 1/2 cup of whole milk,", " 1 large egg,", " 4 tablespoons of melted unsalted butter, ", " 1/2 cup of all-purpose flour,", " 2 teaspoons granulated sugar,", " 2 teaspoons baking powder,", " 1/2 teaspoon salt, ");


//adding text for pasta ingredients 
document.querySelector(".pastaing").innerHTML = "2 pints cherry tomatoes, 4 cloves garlic, 1/2 cup olive oil, kosher salt, 1 block feta cheese, ground black pepper, 12 ounces of pasta, basil ";

//function to make recipe for pasta 
function makePasta(tomatoes, garlic, oil, salt, cheese, pepper, pasta, basil){
    var y = document.querySelector(".pasta");
    var j = document.createTextNode("Preheat oven to 400 degrees. ");
    var k = document.createTextNode("In a baking dish, combine " + tomatoes + garlic + "and 1/4 cup of olive oil. ");
    var l = document.createTextNode("Sprinkle some salt and black pepper. Toss. Place" + cheese + "in the middle of the dish. Top with left over olive oil and black pepper. Bake for 40 minutes. ");
    var m = document.createTextNode("Bring a large pot of salted water to boil. Cook pasta according to package instructions. Save 1 cup of pasta water and drain pasta. ")
    var n = document.createTextNode("Mash feta and tomatoes with a fork and mix thoroughly. Add in the pasta, toss, and add pasta water if it seems to dry. Serve with basil leaves.")
    y.prepend(j, k, l, m, n);
}

//adding in values for each ingredient
makePasta("2 pints of cherry tomatoes, ", "4 cloves of garlic, ", "", "", " a block of feta cheese ");


//add function to add widget button for dark/light mode toggle from darkmode.js
function addDarkmode(){
    new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmode);

console.log("js library: darkmode.js");