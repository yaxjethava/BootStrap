// Get all cards
document.querySelectorAll('.card').forEach((card) => {
    const addToCartButton = card.querySelector('.add-to-cart');
    const priceDropdown = card.querySelector('.price-dropdown');
  
    // Handle Add to Cart button click
    addToCartButton.addEventListener('click', () => {
      const selectedPrice = priceDropdown.options[priceDropdown.selectedIndex].text;
      const productName = card.querySelector('.card-title').textContent;
  
      // Create product object
      const product = {
        name: productName,
        price: selectedPrice,
      };
  
      // Store in localStorage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
  
      alert(`${productName} added to cart at ${selectedPrice}`);
    });
  });
  