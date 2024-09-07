// Static.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.getAttribute('data-product');
            const price = parseFloat(event.target.getAttribute('data-price'));
            total += price;

            const listItem = document.createElement('li');
            listItem.textContent = `${product} - $${price.toFixed(2)}`;
            cartItems.appendChild(listItem);

            totalElement.textContent = `Total: $${total.toFixed(2)}`;
        });
    });
});
