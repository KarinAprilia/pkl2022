//ambil element
const cart_items = document.getElementById('cart');

// ES5


//ES6

function addProduct(name, category) {
    return {
        name,
        category
    }
}
var getProduct = addProduct("iphone 11", "Gadget");
cart_items.innerHTML = `product : ${getProduct.name} Category: ${getProduct.category}`