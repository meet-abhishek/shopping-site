document.addEventListener('DOMContentLoaded', () => {
    const products = {
        electronics: [
            {
                name: 'Smartphone',
                price: 299.99,
                image: 'https://via.placeholder.com/200',
                description: 'A high-quality smartphone with a great camera and fast performance.',
                rating: 4.5
            },
            {
                name: 'Laptop',
                price: 999.99,
                image: 'https://via.placeholder.com/200',
                description: 'A powerful laptop for all your computing needs.',
                rating: 4.7
            }
        ],
        clothing: [
            {
                name: 'T-shirt',
                price: 19.99,
                image: 'https://via.placeholder.com/200',
                description: 'A comfortable cotton t-shirt in various colors.',
                rating: 4.2
            },
            {
                name: 'Jeans',
                price: 49.99,
                image: 'https://via.placeholder.com/200',
                description: 'Stylish and durable jeans for everyday wear.',
                rating: 4.4
            }
        ],
        home: [
            {
                name: 'Blender',
                price: 39.99,
                image: 'https://via.placeholder.com/200',
                description: 'A powerful blender for smoothies and more.',
                rating: 4.3
            },
            {
                name: 'Coffee Maker',
                price: 59.99,
                image: 'https://via.placeholder.com/200',
                description: 'A reliable coffee maker for your daily brew.',
                rating: 4.5
            }
        ]
    };

    const productSections = {
        electronics: document.getElementById('electronics-list'),
        clothing: document.getElementById('clothing-list'),
        home: document.getElementById('home-list')
    };

    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');
    let cart = [];

    Object.keys(products).forEach(category => {
        products[category].forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price.toFixed(2)}`;

            const productRating = document.createElement('p');
            productRating.textContent = `Rating: ${product.rating}`;

            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            addButton.addEventListener('click', () => addToCart(product));

            productElement.appendChild(productImage);
            productElement.appendChild(productName);
            productElement.appendChild(productDescription);
            productElement.appendChild(productPrice);
            productElement.appendChild(productRating);
            productElement.appendChild(addButton);

            productSections[category].appendChild(productElement);
        });
    });

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(cartItem);
            total += item.price;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    checkoutButton.addEventListener('click', () => {
        alert('Checkout functionality to be implemented.');
    });
});
