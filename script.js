// ======================
// Part 1: Variables & Conditionals
// ======================
let restaurantOpen = true;
let today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.

if (today === 0) {
  restaurantOpen = false;
  console.log("Sorry, we are closed on Sundays.");
} else {
  console.log("Welcome! We are open today.");
}

// ======================
// Part 2: Custom Functions
// ======================
function calculateBill(total, tipPercent) {
  // Simple math function
  let tip = total * (tipPercent / 100);
  return total + tip;
}

function greetCustomer(name) {
  return `Hello, ${name}! Welcome to Delish Restaurant.`;
}

// ======================
// Part 3: Loops Examples
// ======================

// Example 1: For loop
let menuItems = ["Pizza", "Salad", "Burger", "Pasta"];
for (let i = 0; i < menuItems.length; i++) {
  console.log("Menu Item:", menuItems[i]);
}

// Example 2: While loop
let guests = 0;
while (guests < 3) {
  console.log("Guest number:", guests + 1);
  guests++;
}

// ======================
// Part 4: DOM Interactions
// ======================

// 1. Add event listener to reservation form
document.getElementById("reservation-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  document.getElementById("form-message").textContent = greetCustomer(name) + " Your reservation is confirmed!";
});

// 2. Change background color of sidebar on button click
document.getElementById("add-offer-btn").addEventListener("click", function () {
  let offersList = document.getElementById("offers-list");
  let newOffer = document.createElement("li");
  newOffer.textContent = "🎉 Chef's Surprise Dish - Limited Time!";
  offersList.appendChild(newOffer);
});

// 3. Dynamically update footer year
let footer = document.querySelector(".site-footer p");
footer.textContent = `© ${new Date().getFullYear()} Delish Restaurant. All rights reserved.`;
