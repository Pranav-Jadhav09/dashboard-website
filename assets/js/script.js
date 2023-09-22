"use strict";

//////////////////////////////
/// Header Navigation Icon
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

//////////////////////////////
/// CTX Menu Icon On Card
const menuBtn = document.querySelectorAll("[data-menu-btn]");

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("active");
  });
}

//////////////////////////////
/// Load More Btn
const loadMoreBtn = document.querySelector("[data-load-more]");

loadMoreBtn.addEventListener("click", function () {
  this.classList.toggle("active");
});

//////////////////////////////
/// Footer - Year
const yearEl = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
