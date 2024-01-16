import { mount } from "products/ProductIndex";
import { mountCart } from "cart/CartIndex";

console.log("container");

mount(document.querySelector("#mfe-products"));
mountCart(document.querySelector("#mfe-cart"));