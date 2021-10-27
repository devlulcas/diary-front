import { writable } from "svelte/store";

const localStorageLogin = localStorage.getItem("isLoggedIn");
export const isLoggedIn = writable(localStorageLogin);

isLoggedIn.subscribe((value) => {
  localStorage.setItem("isLoggedIn", value === "yes" ? "yes" : "no");
});
