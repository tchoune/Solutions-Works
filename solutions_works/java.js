// Initialize an empty cart array
let cart = [];

// Get the Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Get the cart count element
const cartCount = document.querySelector('#cart-count');

// Add event listeners to the Add to Cart buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to add an article to the cart
function addToCart(event) {
  // Get the article ID from the data-id attribute
  const articleId = event.target.dataset.id;
  
  // Find the article in the cart
  const articleInCart = cart.find(item => item.id === articleId);
  
  if (articleInCart) {
    // If the article is already in the cart, increment its quantity
    articleInCart.quantity++;
  } else {
    // If the article is not in the cart, add it with a quantity of 1
    const articleName = event.target.parentElement.querySelector('h3').textContent;
    const articlePrice = event.target.parentElement.querySelector('p').textContent;
    cart.push({ id: articleId, name: articleName, price: articlePrice, quantity: 1 });
  }
  
  // Update the cart count in the UI
  updateCartCount();
}

// Function to remove an article from the cart
function removeFromCart(articleId) {
  // Find the article in the cart
  const articleInCart = cart.find(item => item.id === articleId);}
  
  if (articleInCart) {
    // If the article is in the cart, decrement its quantity
    articleInCart.quantity--;}
    
    // If the quantity is now 0, remove the article from the cart
