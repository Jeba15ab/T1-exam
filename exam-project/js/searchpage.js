function addItemsToCartTable() {
    var cartTable = document.getElementById('cart-table');
    cartTable.innerHTML = "";
    var cartItems = shoppingCart.listCart();
    if (cartItems.length > 0) {
        var header = cartTable.createTHead();
        var row = header.insertRow(0);
        var deleteCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        nameCell.innerHTML = "Product Info";
        var subtractCell = row.insertCell(2);
        var quantityCell = row.insertCell(3);
        var plusCell = row.insertCell(4);
        var priceCell = row.insertCell(5);
        priceCell.innerHTML = "Price";
    }

    for (let index = 0; index < cartItems.length; index++) {
        const element = cartItems[index];
        var row = cartTable.insertRow(index + 1);
        row.className = "cart-line-item-" + index + 1;
        var deleteCell = row.insertCell(0);
        deleteCell.className = "delete"
        deleteCell.innerHTML = "<button class='delete-item' data-name='" + element.name + "'>X</button>";
        var nameCell = row.insertCell(1);
        nameCell.innerHTML = element.name;
        nameCell.className = "name"
        var subtractCell = row.insertCell(2);
        subtractCell.innerHTML = " <button class='subtract-item' data-name='" + element.name + "'>-</button>";
        subtractCell.className = "subtract"
        var quantityCell = row.insertCell(3);
        quantityCell.innerHTML = "<input class='item-count' type='text' data-name='" + element.name + "' value='" + element.count + "' >";
        quantityCell.className = "quantity"
        var plusCell = row.insertCell(4);
        plusCell.innerHTML = " <button class='plus-item' data-name='" + element.name + "'>+</button>";
        plusCell.className = "plus"
        var priceCell = row.insertCell(5);
        priceCell.innerHTML = element.total;
    }

    var countCart = document.getElementById('count-cart');
    countCart.innerHTML = shoppingCart.countCart();
    var totalCart = document.getElementById('total-cart');
    totalCart.innerHTML = shoppingCart.totalCart();

    var deleteItemButtons = document.getElementsByClassName('delete-item');
    for (let deleteItem of deleteItemButtons) {
        deleteItem.addEventListener('click', function (event) {
            console.log(deleteItem);
            var name = this.getAttribute("data-name");
            shoppingCart.removeItemFromCartAll(name);
            addItemsToCartTable();
        });
    }

    var subtractItemButtons = document.getElementsByClassName('subtract-item');
    for (let subtractItem of subtractItemButtons) {
        subtractItem.addEventListener('click', function (event) {
            var name = this.getAttribute("data-name");
            shoppingCart.removeItemFromCart(name);
            addItemsToCartTable();
        });
    }

    var plusItemButtons = document.getElementsByClassName('plus-item');
    for (let plusItemButton of plusItemButtons) {
        plusItemButton.addEventListener('click', function (event) {
            var name = this.getAttribute("data-name");
            shoppingCart.addItemToCart(name, 0, 1);
            addItemsToCartTable();
        });
    }

    var itemCountItems = document.getElementsByClassName('item-count');
    for (let itemCountItem of itemCountItems) {
        itemCountItem.addEventListener('change', function (event) {
            var name = this.getAttribute("data-name");
            var count = Number($(this).val());
            shoppingCart.setCountForItem(name, count);
            addItemsToCartTable();
        });
    }

    var emptyCart = document.getElementById('empty-cart');
    emptyCart.addEventListener('click', function () {
        shoppingCart.clearCart();
        addItemsToCartTable();
    });
}

function displayCart() {
    var showCart = document.getElementById('count-cart');
    var countCart = document.getElementById('count-cart');
    var totalCart = document.getElementById('total-cart');

    var cartArray = shoppingCart.listCart();
    console.log(cartArray);
    var output = "";
    for (var i in cartArray) {
        output += "<li>"
            + cartArray[i].name
            + " <input class='item-count' type='text' data-name='"
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
}

/* Instead of searching in the HTML for our objects (lamps), 
we have made a class of them in the JS file, and we can thereafter filter through that array*/
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

    createHTML() {
        return "<li class='item'>"
            + "<div class='image'><img src='../images/" + this.imagePath + "' width='200px' height='200px' /></div>"
            + "<div class='type'>" + this.type + "</div>"
            + "<div class='color'>" + this.color + "</div>"
            + "<div class='movie'>" + this.movie + "</div>"
            + "<div class='universe'>" + this.universe + "</div>"
            + "<div class='price'>" + this.price + "</div>"
            + "<div class='button'><button class='addToCart' data-object='" + JSON.stringify(this) + "'>Add to Cart</button></li>";
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

    lamps.push(new Lamp(
        "Desk Lamp",
        "Black",
        "359",
        "Black Ceiling Lamp.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Black",
        "399",
        "Black Ceiling Lamp 2.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Blue",
        "199",
        "Blue Ceiling Lamp.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Blue",
        "399",
        "Blue Ceiling lamp 2.jpeg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Green",
        "499",
        "Green Ceiling Lamp.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Grey",
        "299",
        "Grey Ceiling Lamp.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Orange",
        "599",
        "Orange Ceiling Lamp.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Pink",
        "799",
        "Pink Ceiling Lamp.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Purple",
        "399",
        "Purple Ceiling Lamp.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Rainbow",
        "1499",
        "Rainbow Ceiling Lamp.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Red",
        "549",
        "Red Ceiling Lamp.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "White",
        "665",
        "White Ceiling Lamp.jpg",
        "Regular")
    );

    lamps.push(new Lamp(
        "Ceiling Lamp",
        "Yellow",
        "769",
        "Yellow Ceiling Lamp.jpg",
        "Regular")
    );
}

// This is to display the Lamp array as soon as we reach the page
var content = ""

for (var i = 0; i < lamps.length; i++) {
    content += lamps[i].createHTML()
}

document.getElementById("items").innerHTML = content;
addEvents();

/* This is where the search function beings, we first have a textbox where people can write out 
 the search they want, and then add extra criteria with the drop down filter 
 First we create the variables we need, then we add funtions to them */
var searchInput = document.getElementById('search-input');
var typeFilter = document.getElementById('type');
var colorFilter = document.getElementById('color');
var universeFilter = document.getElementById('universe');
var clearFiltersButton = document.getElementById('clear-filter')

// Now we add the event listeners (keyUp, change and click), and then call the function that searches/filters through our lamp selection:
searchInput.addEventListener('keyup', function () {
    findItemsBySearchTermsAndOrFilters();
});

typeFilter.addEventListener('change', function () {
    findItemsBySearchTermsAndOrFilters();
});

colorFilter.addEventListener('change', function () {
    findItemsBySearchTermsAndOrFilters();
});

universeFilter.addEventListener('change', function () {
    findItemsBySearchTermsAndOrFilters();
});

clearFiltersButton.addEventListener('click', function () {
    typeFilter.value = '';
    colorFilter.value = '';
    universeFilter.value = '';
    findItemsBySearchTermsAndOrFilters();
});

// Now we have the actual search function, which searches through both the text box and filters.
function findItemsBySearchTermsAndOrFilters() {
    var html = "";
    //search bar element value(s). Each word is split by space and added to an array, this way we can write out all the criteria in the text box if preferred
    var searchTermArray = searchInput.value.toLowerCase().split(' ');

    //add filter values to the search term array, the Type, Color and Universe.
    searchTermArray.push(typeFilter.value.toLowerCase(), colorFilter.value.toLowerCase(), universeFilter.value.toLowerCase());

    //create a unique array with no empty values. The array must be unique for the checks in the loops to provide correct data.
    //new Set creates an unique array, filter(Boolean) removes empty values.
    searchTermArray = Array.from(new Set(searchTermArray)).filter(Boolean); //https://stackoverflow.com/a/9229821

    for (var i = 0; i < lamps.length; i++) {
        var lampObj = lamps[i];
        //create an array of search term matches for each object iteration
        var matches = [];
        for (var property in lampObj) {
            //we also want to ignore this property as it contains ambiguous values, like the name of image file e.g. "Black Ceiling Lamp 2.jpg"
            if (property === 'imagePath') {
                continue;
            }

            for (var j = 0; j < searchTermArray.length; j++) {
                var searchTerm = searchTermArray[j];
                //if the current property value contains a part of the search term, it gets added to the match array if it does not exist already.
                if (lampObj[property].toLowerCase().indexOf(searchTerm) >= 0) {
                    //only include matches once, before it showed all the object for each time there was a match, super annoying
                    if (matches.indexOf(searchTerm) === -1) {
                        matches.push(searchTerm);
                    }
                }
            }
        }

        //if these two match, all the search terms are part of the object
        if (matches.length === searchTermArray.length) {
            html += lampObj.createHTML();
        }
    }
    document.getElementById("items").innerHTML = html;
    addEvents();
}

// The shopping cart function, we could add a fixed shipping cost as soon as something is added? 
function addEvents() {
    var buttons = document.getElementsByClassName("addToCart");

    var order = new Order(1, "cart", []);

    for (i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        if (button !== undefined) {
            button.addEventListener("click", function () {

                // Add item to items and update order
                var product = JSON.parse(this.dataset.object);

                var item = new LineItem(product, 1, product.price);

                // Update number
                order.items.push(item)

                order.saveOrderToStorage();
                var name = product.type + ", " + product.movie + " from " + product.universe;
                shoppingCart.addItemToCart(name, product.price, 1);
                addItemsToCartTable();
                console.log(item)
            });
        }
    }    
}

addItemsToCartTable();
