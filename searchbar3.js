var showCart = document.getElementById('show-cart');
var countCart = document.getElementById('count-cart');
var totalCart = document.getElementById('total-cart');

function displayCart() {
    var cartArray = shoppingCart.listCart();
    console.log(cartArray);
    var output = "";
    for (var i in cartArray) {
        output += "<li>"
            + cartArray[i].name
            + " <input class='item-count' type='number' data-name='"
            + cartArray[i].name
            + "' value='" + cartArray[i].count + "' >"
            + " x " + cartArray[i].price
            + " = " + cartArray[i].total
            + " <button class='plus-item' data-name='"
            + cartArray[i].name + "'>+</button>"
            + " <button class='subtract-item' data-name='"
            + cartArray[i].name + "'>-</button>"
            + " <button class='delete-item' data-name='"
            + cartArray[i].name + "'>X</button>"
            + "</li>";
    }

    showCart.innerHTML = output;
    countCart.innerHTML = shoppingCart.countCart();
    totalCart.innerHTML = shoppingCart.totalCart();

    var deleteItemButtons = document.getElementsByClassName('delete-item');
/* Instead of searching in the HTML for our objects (lamps), 
we can make a class of them in the JS file.*/
class Lamp {

    constructor(type, color, price, imagePath, movie, universe) { // TESTING movie & universe      
      this.type = type;
      this.color = color;
      this.price = price;
      this.imagePath = imagePath; 
      if (!movie) {
        this.movie = ""; 
      } else {
        this.movie = movie; // TESTING
      }
      if (!universe) {
        this.universe = ""; 
      } else {
        this.universe = universe; // TESTING
      }
    }

    createHTML(){
        return "<li class='collection-item'><div class='image'><img src='" + 
        this.imagePath + "' width='200px' height='200px' /></div><div>" + 
        this.type + " </div><div class='color'>" + 
        this.color + "</div><div class='price'>" + 
        this.movie + "</div><div class='movie'>" +  // TESTING
        this.universe + "</div><div class='universe'>" + // TESTING     
        this.price + "</div><div class='button'><button class='addToCart' data-object='" + JSON.stringify(this) + "'>Add to Cart</button></li>";
    }
 }

// Here we add some New lamps to the empty lamps array 
var lamps = []; {

lamps.push(new Lamp(
    "Ceiling Lamp",
    "Blue",
    "199",
    "Spiderman Ceiling.jpeg",
    "Spiderman",
    "Marvel")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Yellow",
    "599",
    "beauty and beast 3 desk.jpg",
    "Beauty and the beast",
    "Disney")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Blue",
    "299",
    "Captain America Ceiling.jpg",
    "Captain America",
    "Marvel")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Blue",
    "299",
    "Find Nemo Ceiling.jpeg",
    "Finding Nemo",
    "Disney")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Red",
    "1399",
    "Cars ceiling.jpg",
    "Cars",
    "Pixar")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Blue",
    "399",
    "Frozen Ceiling.jpg",
    "Frozen",
    "Disney")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Green",
    "499",
    "Hulk and Ironman Ceiling.jpeg",
    "Hulk",
    "Avengers")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Pink",
    "399",
    "Minnie Mouse Ceiling.jpg",
    "Minnie Mouse",
    "Disney")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Pink",
    "599",
    "Minnie Mouse Ceiling.jpeg",
    "Minnie Mouse",
    "Disney")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Blue",
    "499",
    "Mickey Mouse Ceiling.jpg",
    "Mickey Mouse",
    "Disney")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Yellow",
    "299",
    "Pluto Ceiling.jpg",
    "Pluto",
    "Disney")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Green",
    "699",
    "Simba Ceiling.jpg",
    "Simba",
    "Disney")
);
lamps.push(new Lamp(
    "Ceiling Lamp",
    "Yellow",
    "699",
    "Batman Ceiling.jpg",
    "Batman",
    "DC Comics")
);

// DESK LAMPS! 
lamps.push(new Lamp(
    "Desk Lamp",
    "Red",
    "499",
    "Wonderwoman desk.jpg",
    "Wonder Woman",
    "DC Comics")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Green",
    "399",
    "Batman Bottle.jpg",
    "Batman",
    "DC Comics")
);

lamps.push(new Lamp(
    "Desk Lamp",
    "Black",
    "999",
    "Batman Signal.jpg",
    "Batman",
    "DC Comics")
);

lamps.push(new Lamp(
    "Desk Lamp",
    "Grey",
    "699",
    "Batman Statue.jpg",
    "Batman",
    "DC Comics")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Red",
    "599",
    "Beauty and beast rose desk.jpeg",
    "Beauty and Beast",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Gold",
    "399",
    "Beauty and the beast - Lumiere .jpg",
    "Beauty and Beast",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Red",
    "899",
    "Deadpool 2 desk.jpeg",
    "Deadpool",
    "Marvel")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Red",
    "599",
    "Deadpool desk.jpeg",
    "Deadpool",
    "Marvel")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Orange",
    "999",
    "Dragon Ball Son Goku.jpeg",
    "Dragon Ball",
    "Anime")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Green",
    "499",
    "Dumbo.jpg",
    "Dumbo",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Purple",
    "199",
    "Frozen.jpg",
    "Frozen",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Blue",
    "499",
    "Goofy.jpg",
    "Goofy",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Green",
    "599",
    "Hulk Desk .jpg",
    "Hulk",
    "Marvel")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Red",
    "799",
    "Iron Man Desk.jpg",
    "Ironman",
    "Marvel")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Yellow",
    "699",
    "Lion King - Simba Cub.jpg",
    "The Lion King",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Red",
    "699",
    "Mickey Mouse.jpg",
    "Mickey Mouse",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Yellow",
    "499",
    "Minions.jpg",
    "Minions",
    "Pixar")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Pink",
    "399",
    "Minnie Mouse.jpg",
    "Minnie Mouse",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Pink",
    "459",
    "Sleeping beauty desk.jpg",
    "Sleeping Beauty",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Black",
    "799",
    "Sleeping beauty 2 desk.jpg",
    "Sleeping Beauty",
    "Disney")
);

lamps.push(new Lamp(
    "Desk Lamp",
    "Pink",
    "459",
    "Sleeping beauty desk.jpg",
    "Sleeping Beauty",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Yellow",
    "479",
    "Snow white 2 desk.jpg",
    "Snow White",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Pink",
    "459",
    "Snow White desk.jpg",
    "Snow White",
    "Disney")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Blue",
    "259",
    "Superman .jpg",
    "Superman",
    "DC Comics")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Yellow",
    "559",
    "Superman.jpg",
    "Superman",
    "DC Comics")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Red",
    "359",
    "Thor.jpg",
    "Thor",
    "Marvel")
);
lamps.push(new Lamp(
    "Desk Lamp",
    "Yellow",
    "359",
    "Winnie the Pooh.jpg",
    "Winnie the Pooh",
    "Disney")
);



// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Red",
//     "399",
//     "https://www.eurway.com/Shared/Images/Product/Alp-Ceiling-Lamp/alp-ceiling-lamp.png?bw=75&bh=75")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Blue",
//     "199",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Green",
//     "599",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "White",
//     "299",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Steel",
//     "899",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Rainbow",
//     "1399",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Orange",
//     "399",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Black",
//     "399",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Yellow",
//     "99",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Grey",
//     "499",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Glass",
//     "599",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Blue",
//     "299",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Black",
//     "699",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Red",
//     "699",
//     "LINK")
// );
// lamps.push(new Lamp(
//     "Floor Lamp",
//     "Steel",
//     "499",
//     "LINK")
// );
}

 // This is to display the Lamp array as soon as we reach the page
var content = ""

for (var i = 0; i < lamps.length; i++) {
    content += lamps[i].createHTML()
}

document.getElementById("lamps").innerHTML = content;
addEvents();

// First we will grab the element by its ID! 
var searchInput = document.getElementById('searchInput');
var typeFilter = document.getElementById('type');
var colorFilter = document.getElementById('color');
var universeFilter = document.getElementById('universe');
var clearFiltersButton = document.getElementById('clearFilters')

// Now we add the event listeners (keyUp), and then call the function that searches/filters through our lamp selection:
searchInput.addEventListener('keyup', function(){
    findItemsBySearchTermsAndOrFilters();
});

typeFilter.addEventListener('change', function() {
    findItemsBySearchTermsAndOrFilters();
});

colorFilter.addEventListener('change', function() {
    findItemsBySearchTermsAndOrFilters();
});

universeFilter.addEventListener('change', function() {
    findItemsBySearchTermsAndOrFilters();
});

clearFiltersButton.addEventListener('click', function() {
    typeFilter.value = '';
    colorFilter.value = '';
    universeFilter.value = '';
    findItemsBySearchTermsAndOrFilters();
});

function findItemsBySearchTermsAndOrFilters() {
    var html = "";
    //search bar element value(s). Each word is split by space and added to an array
    var searchTermArray = searchInput.value.toLowerCase().split(' ');

    //add filter values to the search term array
    searchTermArray.push(typeFilter.value.toLowerCase(), colorFilter.value.toLowerCase(), universeFilter.value.toLowerCase());
        
    //remove empty values
    searchTermArray = searchTermArray.filter(Boolean);
    for (var i = 0; i < lamps.length; i++) {
        var lampObj = lamps[i];
        //create an array of search term matches for each object iteration
        var matches = [];
        for(var property in lampObj) {
            //ignore this property as it contains ambiguous values
            if(property === 'imagePath') {
                continue;
            }

            for (var j = 0; j < searchTermArray.length; j++) {
                var searchTerm = searchTermArray[j];
                //if the current property value contains a part of the search term, it gets added to the match array if it does not exist already.
                if(lampObj[property].toLowerCase().indexOf(searchTerm) >= 0) {
                    //only include matches once
                    if(matches.indexOf(searchTerm) === -1) {
                        matches.push(searchTerm);
                    }
                }
            }
        }

        //if these two match, all the search terms are part of the object
        if(matches.length === searchTermArray.length) {
            html += lampObj.createHTML();
        }
    }
    document.getElementById("lamps").innerHTML = html;
    addEvents();
}

function addEvents(){
    var buttons = document.getElementsByClassName("addToCart");

    var order = new Order(1, "cart", []);

    for(i=0; i < buttons.length; i++){
        var button = buttons[i];
        if(button !== undefined){
            button.addEventListener("click", function(){

                // Add item to items and update order
                var product = JSON.parse(this.dataset.object);

                var item = new LineItem(product, 1, product.price);

                // Update number
                order.items.push(item)
                
                order.saveOrderToStorage();
                var name = product.type + ", " + product.universe + " from " + product.movie; 
                shoppingCart.addItemToCart(name, product.price, 1);
                displayCart();
                console.log(item)
            });
        }
    }
}

for (let deleteItem of deleteItemButtons) {
    deleteItem.addEventListener('click', function (event) {
        var name = this.getAttribute("data-name");
        shoppingCart.removeItemFromCartAll(name);
        displayCart();
    });
}

var subtractItemButtons = document.getElementsByClassName('subtract-item');    
for (let subtractItem of subtractItemButtons) {
    subtractItem.addEventListener('click', function (event) {
        var name = this.getAttribute("data-name");
        shoppingCart.removeItemFromCart(name);
        displayCart();
    });
}

var plusItemButtons = document.getElementsByClassName('plus-item');
for (let plusItemButton of plusItemButtons) {
    plusItemButton.addEventListener('click', function (event) {
        var name = this.getAttribute("data-name");
        shoppingCart.addItemToCart(name, 0, 1);
        displayCart();
    });
}

var itemCountItems = document.getElementsByClassName('item-count');
for (let itemCountItem of itemCountItems) {
    itemCountItem.addEventListener('change', function (event) {
        var name = this.getAttribute("data-name");
        var count = Number($(this).val());
        shoppingCart.setCountForItem(name, count);
        displayCart();
    });
}
}

displayCart();

