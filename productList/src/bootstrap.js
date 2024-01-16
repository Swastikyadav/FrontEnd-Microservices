import faker from "faker";

function mount(el) {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}

// Running in isolation assuming container have no el with id "mfe-products-isolated".
if (process.env.NODE_ENV === "development") {
    // Check if there is an element with id "mfe-products-isolated"
    const el = document.querySelector("#mfe-products-isolated");
    if (el) {
        mount(el);
    }
}

// Export mount for container to import and use.
export { mount };