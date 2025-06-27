# Amazon Clone : SOC_2025 Assignment


This project is a functional clone of Amazon.in built using **HTML**, **CSS**, and **JavaScript**. It represents the culmination of **Weeks 1–4** of my web development training, showing real growth in design, interactivity, and coding structure.

---

🚀 Features Implemented

🖼️ UI Components

* Responsive navbar with search and dropdowns
* Sub-navigation with hover effects
* Hero banner
* Product cards with:

  * Promo badges (Prime, 30% Off, etc.)
  * Ratings and reviews
  * Pricing (with discounts and original price)

🧠 JavaScript Interactivity

* **Cart System**:

  * Add to cart with quantity tracking
  * Persistent using localStorage
  * Cart item counter with animation
* **Search Filter**:

  * Real-time product filtering
* **Account Dropdown**:

  * Toggle on click for potential user login expansion
* **Notifications**:

  * Toast-like cart confirmation popup

 🛠️ Tech Used

* **HTML5** with semantic structure
* **CSS3**: Flexbox, Grid, media queries, transitions
* **JavaScript (Vanilla)**: DOM manipulation, event handling, animations

---

## 📂 Folder Structure

```
amazon-clone-midterm/
├── index.html          # Main structure
├── style.css           # UI and responsive design
├── script.js           # Cart, search, and dropdown logic
├── README.md           # This file
└── learning-journal.md # Progress journal
```

---

## 🧠 Learning Timeline

### Week 1–2: HTML + CSS

* Learned through:

  * [CodeWithHarry (Hindi)](https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w) — watched 84 videos
  * [HTML/CSS English Crash Course](https://youtu.be/G3e-cpL7ofc)
* Built the Amazon UI using Flexbox & Grid
* Mastered mobile-first responsive layout

### Week 3: JavaScript Basics

* Resources:

  * [CodeWithHarry JS (Hindi)](https://youtu.be/lfmg-EJ8gm4)
  * [BroCode JavaScript (English)](https://youtu.be/EerdGm-ehJQ)
* Implemented:

  * Event listeners
  * Local storage
  * UI state management (cart, dropdown)

### Week 4 (In Progress): Integration

* Project consolidated
* Cart system fully integrated
* Product search works across all sections
* Mobile experience polished

---

## 🔍 Code Highlights

### HTML

```html
<section class="product-section">
  <div class="product-card">
    <div class="product-badge">30% off</div>
    <img src="...">
    <h3>Product Name</h3>
    <div class="product-rating">⭐⭐⭐⭐☆</div>
    <p class="product-price">₹1,399</p>
    <button>Add to Cart</button>
  </div>
</section>
```

### CSS

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.cart-count.bounce {
  animation: bounce 0.5s;
}
```

### JavaScript

```javascript
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
```

---

## 💡 What I Knew vs What I Learned

### ✅ I Already Knew (from high school):

* HTML basics: tags, structure
* JavaScript syntax: variables, loops, if-else

### ✅ I Learned (SoC Weeks 1–4):

* Semantic HTML5 (`<section>`, `<main>`, `<nav>`)
* CSS Layouts (Flexbox, Grid, responsive UI)
* CSS Animations (`@keyframes`, transitions)
* DOM interaction and localStorage
* JS events: `click`, `keypress`, bubbling
* Version control using Git

---

## 📌 Mentor Assignment Status

 Clone of Amazon website
 JavaScript integration: cart + search
 Three.js product view (coming Week 5)
 Calculator / Portfolio site (planned for Week 5)

---

## 🔗 Resources & References

* 📺 [CodeWithHarry HTML + JS (Hindi)](https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w)
* 📺 [HTML CSS Crash Course (English)](https://youtu.be/G3e-cpL7ofc)
* 📺 [BroCode JavaScript](https://youtu.be/EerdGm-ehJQ)
* 📦 [Font Awesome Icons](https://fontawesome.com/)

---

## 🧪 How to Run

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/amazon-clone-midterm.git
   ```
2. Open `index.html` in your browser
3. Try:

   * Adding products to cart
   * Searching items
   * Resizing screen (responsive design)

---

## 📈 Next Steps

* [ ] Add Three.js integration (3D product view)
* [ ] Build a JS calculator or portfolio site
* [ ] Host live version via GitHub Pages

---

**Submitted for: Summer of Code 2025 – Midterm Evaluation**

