const startButton = document.getElementById("start-button");

if (startButton) {
    startButton.addEventListener("click", function() {
        window.location.href = "styling.html";
    });
}

const ringsButton = document.getElementById("rings");
const necklacesButton = document.getElementById("necklaces");
const braceletsButton = document.getElementById("bracelets");
const pieces = document.getElementById("pieces");

if (ringsButton && pieces) {
    ringsButton.addEventListener("click", function() {
        pieces.innerHTML = "<h2>Choose Your Rings</h2>";
    });
}

if (necklacesButton && pieces) {
    necklacesButton.addEventListener("click", function() {
        pieces.innerHTML = "<h2>Choose Your Necklaces</h2>";
    });
}

if (braceletsButton && pieces) {
    braceletsButton.addEventListener("click", function() {
        pieces.innerHTML = "<h2>Choose Your Bracelets</h2>";
    });
}



const wishlistButtons = document.querySelectorAll(".wishlist-button");
const wishlist = document.getElementById("wishlist");

wishlistButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const emptyMessage = document.getElementById("empty-message");

        if (emptyMessage) {
            emptyMessage.remove();
        }

        const item = document.createElement("div");

        const itemName = document.createElement("span");
        itemName.textContent = button.dataset.name;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", function() {
            item.remove();

            if (wishlist.children.length === 0) {
                const message = document.createElement("p");
                message.textContent = "Your wishlist is empty.";
                message.id = "empty-message";
                wishlist.appendChild(message);
            }
        });

        item.appendChild(itemName);
        item.appendChild(removeButton);
        wishlist.appendChild(item);
    });
});

