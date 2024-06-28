// cart.js
const orderInfoContainer = document.querySelector('.order__info');
const cartItemTemplate = document.getElementById('cartItemTemplate');
const formButton = document.querySelector('.form__button');
const form = document.querySelector('.form');

function getCartItems() {
    const cartStr = localStorage.getItem('cart');
    return cartStr ? JSON.parse(cartStr) : {};
}

function saveCartItems(cartItems) {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

function addItemToCart(itemName) {
    const cartItems = getCartItems();
    if (cartItems[itemName] && cartItems[itemName] < 6) {
        cartItems[itemName]++;
    } else if (!cartItems[itemName]) {
        cartItems[itemName] = 1;
    }
    saveCartItems(cartItems);
    renderCartItems();
}

function deleteItemFromCart(itemName) {
    const cartItems = getCartItems();
    if (cartItems[itemName] > 1) {
        cartItems[itemName]--;
    } else if (cartItems[itemName] === 1) {
        delete cartItems[itemName];
    }
    saveCartItems(cartItems);
    renderCartItems();
}

function renderCartItems() {
    if (orderInfoContainer && cartItemTemplate && formButton)
    orderInfoContainer.innerHTML = ''; // Clear previous items
    const cartItems = getCartItems();

    formButton.addEventListener('click', (e) => {  
        localStorage.clear();  
    });

    for (const itemName in cartItems) {
        const itemCount = cartItems[itemName];
        const itemElement = document.importNode(cartItemTemplate.content, true);
        itemElement.querySelector('.title').textContent = "МОДЕЛЬ " + itemName;
        itemElement.querySelector('.quantity').textContent = `(${itemCount}X)`;

        // Add delete button functionality
        // const deleteButton = itemElement.querySelector('.delete-item');
        // deleteButton.addEventListener('click', () => {
        //     deleteItemFromCart(itemName);
        // });

        orderInfoContainer.appendChild(itemElement);
    }
}
 

if (formButton) {
    formButton.classList.add('invalid'); 
    formButton.disabled = true;

    form.addEventListener('input', () => {
        console.log("input")
        if (form.checkValidity()) {
            formButton.classList.add('valid'); 
            formButton.classList.remove('invalid'); 
            formButton.disabled = false;
        } else {
            formButton.classList.remove('valid'); 
            formButton.classList.add('invalid'); 
            formButton.disabled = true;
        }
    });
}
 

    // Example usage (you'd call this when an item is added to the cart)
    addItemToCart('П-123');
    addItemToCart('П-123');
    addItemToCart('П-456');
    addItemToCart('П-456');
    addItemToCart('П-456');
    addItemToCart('П-456');
    addItemToCart('П-456');
    addItemToCart('П-456');
    addItemToCart('П-456');
    addItemToCart('П-789');

    renderCartItems(); 