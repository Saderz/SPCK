const whyUs = document.getElementById("why-us");
const whyUsBTN = document.getElementById("why-us-btn");

const reviews = document.getElementById("reviews");
const reviewsBTN = document.getElementById("reviews-btn");

const contactUs = document.getElementById("contact-us");
const contactBTN = document.getElementById("contact-btn");
const contactBTN2 = document.getElementById("contact-btn-2");

whyUsBTN.addEventListener('click', () => {
    whyUs.scrollIntoView();
    whyUs.style.scrollBehavior = "smooth";
});

reviewsBTN.addEventListener("click", () => {
  reviews.scrollIntoView();
  reviews.style.scrollBehavior = "smooth";
});

contactBTN.addEventListener("click", () => {
  contactUs.scrollIntoView();
  contactUs.style.scrollBehavior = "smooth";
});

contactBTN2.addEventListener("click", () => {
  contactUs.scrollIntoView();
  contactUs.style.scrollBehavior = "smooth";
});