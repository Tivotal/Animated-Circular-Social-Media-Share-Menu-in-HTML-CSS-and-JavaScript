/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
