document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents the page from refreshing
            alert("Thank you for reaching out to Sally's Pancake Shop! We'll get back to you soon.");
            contactForm.reset(); // Clears the form inputs
        });
    }
});