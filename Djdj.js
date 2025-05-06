document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');
    let cart = []; // Array to store cart items

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            //In a real store, you would get product details from a database
            const product = {
                id: productId,
                name: this.parentNode.querySelector('h3').textContent,
                price: parseFloat(this.parentNode.querySelector('.price').textContent),
                quantity: 1
            };

            let itemInCart = cart.find(item => item.id === product.id);

            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                cart.push(product);
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        let count = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} x ${item.quantity} - ${item.price * item.quantity} капи-рублей`;
            cartItemsList.appendChild(listItem);
            total += item.price * item.quantity;
            count += item.quantity;
        });

        cartTotalElement.textContent = `Общая сумма: ${total} капи-рублей`;
        cartCountElement.textContent = count;
    }
});
