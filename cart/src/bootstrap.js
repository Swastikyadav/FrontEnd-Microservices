import faker from "faker";

function mountCart(el) {
    const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;

    el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#mfe-cart-isolated");
    if (el) {
        mountCart(el);
    }
}

export { mountCart };