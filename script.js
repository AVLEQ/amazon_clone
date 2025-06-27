// script.js
document.addEventListener('DOMContentLoaded', function() {
  // 1. CART FUNCTIONALITY
  let cartItems = [];
  const cartCountElement = document.querySelector('.cart-count');
  
  // Initialize cart count from localStorage
  if (localStorage.getItem('cartItems')) {
    cartItems = JSON.parse(localStorage.getItem('cartItems'));
    updateCartCount();
  }

  // 2. ADD TO CART FUNCTION
  document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const product = {
        id: generateProductId(productCard),
        name: productCard.querySelector('h3').textContent,
        price: parsePrice(productCard.querySelector('.product-price').textContent),
        image: productCard.querySelector('img').src,
        quantity: 1
      };
      
      addToCart(product);
      showCartNotification(product.name);
    });
  });

  // 3. HELPER FUNCTIONS
  function generateProductId(card) {
    // Create ID from product name + first 3 letters of price
    const name = card.querySelector('h3').textContent.replace(/\s+/g, '-').toLowerCase();
    const price = card.querySelector('.product-price').textContent.match(/\d+/)[0];
    return `${name}-${price.substring(0, 3)}`;
  }

  function parsePrice(priceText) {
    return parseInt(priceText.replace(/[^\d]/g, ''));
  }

  function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push(product);
    }
    
    updateCartCount();
    saveCartToLocalStorage();
  }

  function updateCartCount() {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    // Add animation
    cartCountElement.classList.add('bounce');
    setTimeout(() => cartCountElement.classList.remove('bounce'), 500);
  }

  function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  function showCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
      <p>Added ${productName} to your cart</p>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 500);
    }, 2000);
  }

  // 4. SEARCH FUNCTIONALITY
  const searchInput = document.querySelector('.nav-search input');
  const searchButton = document.querySelector('.nav-search button');
  
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') performSearch();
  });

  function performSearch() {
    const query = searchInput.value.toLowerCase();
    if (!query) return;
    
    const allProducts = document.querySelectorAll('.product-card');
    let foundResults = false;
    
    allProducts.forEach(product => {
      const name = product.querySelector('h3').textContent.toLowerCase();
      if (name.includes(query)) {
        product.style.display = 'block';
        foundResults = true;
      } else {
        product.style.display = 'none';
      }
    });
    
    if (!foundResults) {
      alert('No products found matching your search.');
    }
  }

  // 5. ACCOUNT DROPDOWN
  const accountDropdown = document.querySelector('.nav-account');
  accountDropdown.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});