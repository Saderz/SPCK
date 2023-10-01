const whyUs = document.getElementById("why-us");
const whyUsBTN = document.getElementById("why-us-btn");

whyUsBTN.addEventListener('click', () => {
    whyUs.scrollIntoView({
        behavior: "smooth"
    })
})