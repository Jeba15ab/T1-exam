

/* Instead of searching in the HTML for our objects (lamps), 
we can make a class of them in the JS file.*/
class Lamp {

    constructor(type, color, price, imagePath, movie, character) { // TESTING movie & character      
      this.type = type;
      this.color = color;
      this.price = price;
      this.imagePath = imagePath; 
      if (!movie) {
        this.movie = ""; 
      } else {
        this.movie = movie; // TESTING
      }
      if (!character) {
        this.character = ""; 
      } else {
        this.character = character; // TESTING
      }
    }

    createHTML(){
        return "<li class='collection-item'><div class='image'><img src='" + 
        this.imagePath + "' width='200px' height='200px' /></div><a href='#'>" + 
        this.type + " </a><div class='color'>" + 
        this.color + "</div><div class='price'>" + 
        this.movie + "</div><div class='movie'>" +  // TESTING
        this.character + "</div><div class='character'>" + // TESTING     
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



lamps.push(new Lamp(
    "Floor Lamp",
    "Red",
    "399",
    "https://www.eurway.com/Shared/Images/Product/Alp-Ceiling-Lamp/alp-ceiling-lamp.png?bw=75&bh=75")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Blue",
    "199",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Green",
    "599",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "White",
    "299",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Steel",
    "899",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Rainbow",
    "1399",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Orange",
    "399",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Black",
    "399",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Yellow",
    "99",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Grey",
    "499",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Glass",
    "599",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Blue",
    "299",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Black",
    "699",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Red",
    "699",
    "LINK")
);
lamps.push(new Lamp(
    "Floor Lamp",
    "Steel",
    "499",
    "LINK")
);}

 // THis is to display the Lamp array as soon as we reach the page
var content = ""

for (var i = 0; i < lamps.length; i++) {
    content += lamps[i].createHTML()
}

document.getElementById("lamps").innerHTML = content;
addEvents();

    // First we will grab the element by its ID! 
var filterInput = document.getElementById('filterInput');

// Now we add the event listener (keyUp), and then call the function that searches/filters through our lamp selection:
filterInput.addEventListener('keyup', function(){
    // We now need the value of the search. We do not just want the element, so we add Value in the end
    var filterValue = document.getElementById('filterInput').value
    console.log(filterValue);
    
    var html = "";

    for (var i = 0; i < lamps.length; i++) {
        if (lamps[i].type.indexOf(filterValue) > -1 || lamps[i].color.indexOf(filterValue) > -1 || lamps[i].price.indexOf(filterValue) > -1
            || lamps[i].movie.indexOf(filterValue) > -1 || lamps[i].character.indexOf(filterValue) > -1 
        ) {
            html += lamps[i].createHTML();
        } else {
            continue;
        }
    }
    document.getElementById("lamps").innerHTML = html;
    addEvents();
});



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
                console.log(item)
            });
        }
    }
}




/* Frederiks's shopping cart

        function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }

    loadCart();



    // Public methods and properties
    var obj = {};

    // for (var i in cart) = indicates that we loop through every item in the cart 
    // were going to look at each item individually --> look at the name property and match it with name (name === name)
    // if they match = we will increase the count of that item. 
    // cart[i].count; lets us increase the count of the item after the loop
    
    obj.addItemToCart = function (name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count; //add count to whatever value of count property here is. 
                saveCart();
                return; //return; this will end our function and break the loop
            }
        }

        console.log("addItemToCart:", name, price, count);

        var item = new Item(name, price, count); //we only want this code, if we dont find the item in the cart (above loop). this creates a new item.
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCart = function (name) { // Removes one item
        for (var i in cart) {
            if (cart[i].name === name) {       // "3" === 3 false, (triple equal checks whether the value to the left and right is the same value and type.)
                cart[i].count--;               // cart[i].count -- (subtracting 1)
                if (cart[i].count === 0) {     // we dont want the name of to appear in the cart, if there is zero items. 
                    cart.splice(i, 1);         // The splice() method adds/removes items to/from an array, and returns the removed item(s).
                                               // in this case our position is item [i] and the number we want to remove 1. 


                }
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCartAll = function (name) { // removes all item name
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);                // in this case, we just need to find the item, and splice it out of the array. 
                break;
            }
        }
        saveCart();
    };


    obj.clearCart = function () {
        cart = [];
        saveCart();
    }


    obj.countCart = function () { // -> return total count
        var totalCount = 0;        
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    // .toFixed() function is going to round the numeric values to a fixed number of decimal places.
    // the (2) after toFixed, indicates that we want two decimal places, which we want when showing the price. 

    obj.totalCart = function () { // -> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;  // the "+=" adds the price for each item in the cart.
        }
        return totalCost.toFixed(2);                     // to.Fixed(2) = Convert a number into a string, keeping only two decimals.

    };

    //the property ".total" = adds the total of the name and the price. 

    obj.listCart = function () { // -> array of Items
        var cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (var i in cart) {
            console.log(i);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {              // looping through every property in item
                itemCopy[p] = item[p];         // make that a property in Copy and give it the same value
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    // ----------------------------
    return obj;
})();



__________________________________________________________________________________________


    // we now need all the collection items (class) within the ul: 
    // get li´s from ul
    // We will get the li´s with the class of collection items! we can select things based on classes (or anything else), not just by ID! 
    var li = ul.querySelectorAll('li.collection-item');  // THIS SHOULD BE CHANGED OR DELETED SINCE WE HAVE THE ARRAY

    // the collection-items is now being put into a sort of array, 
    // and we want to loop through that array og selection-item li´s:
    for (var i = 0; i < lamps.length; i++){   // LI.LENGTH SHOULD BE CHANGED TO THE ARRAY WE WILL LOOP THROUGH 
    console.log('check 1');
    // Remember, they have been wrapped in an a tag, so we can use getElementByTagName:
          var a = lamps[i].getElementsByTagName('a')[0]; //we add the 0 to only get the current link 

    // we now want to check if the input matches our index 
    // innerHTML will check the name inside the a tag. If < than -1 means there is a match
          if(a.innerHTML.indexOf(filterValue) > - 1) {
    //we dont want it do anything if there is a match, so we set the css styling to nothing, and if else we want it to disappear.
              li[i].style.display = ''; //(i meaning the current ideration) this is how set it to not do anything
              console.log('check 2');
          } else {
            li[i].style.display = 'none'; // notice the difference between nothing and none! 
            console.log('check 3');
          }

    }

}

*/
