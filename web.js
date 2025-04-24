/*
  Project 4 Website Deployment
  Name: Constance Benson
  Date: 2025-04-22
  Description: This JavaScript file handles:
 - Form validation for the Contact page
 - Displaying error messages for invalid inputs
 - Hiding error messages on reset
 - Responsive menu toggle for mobile devices
*/

/* Load Function
   Called when the DOM is fully loaded.
   It attaches submit and reset event listeners to the contact form
   and sets up the mobile menu toggle.
*/
function load() {
  // Contact form handling
  let form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", validateForm);
    form.addEventListener("reset", hideErrors);
  }

  // Mobile menu toggle setup
  let menu = document.getElementById("menu");
  let nav = document.querySelector(".links");
  
  if (menu && nav) {
    menu.addEventListener("click", () => {
      menu.classList.toggle('bx-x');
      nav.classList.toggle('active');
    });
  } else {
    console.error("Menu toggle elements not found - check your HTML structure");
  }
}

/* validateForm Function
   Prevents form submission if any required field is invalid.
   Uses regex to validate email and phone number format.
   Displays error messages inline below invalid fields.
*/
function validateForm(e) {
  e.preventDefault();

  let name = document.getElementById("fullName");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  let nameValue = name.value.trim();
  let emailValue = email.value.trim();
  let phoneValue = phone.value.trim();

  let valid = true;

  // Hide all errors
  hideErrors();

  // Validate Name
  if (nameValue === "") {
    name.nextElementSibling.style.display = "block";
    name.focus();
    name.select();
    valid = false;
  }

  // Validate Email
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    email.nextElementSibling.style.display = "block";
    if (valid) {
      email.focus();
      email.select();
    }
    valid = false;
  }

  // Validate Phone Number
  let phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneValue)) {
    phone.nextElementSibling.style.display = "block";
    if (valid) {
      phone.focus();
      phone.select();
    }
    valid = false;
  }

  // Submit form if all inputs are valid
  if (valid) {
    alert("Form submitted successfully!");
    e.target.submit();
  }
}

/* hideErrors Function
   Hides all validation error messages by setting display to 'none'.
*/
function hideErrors() {
  let errors = document.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}

// Run when document is ready
document.addEventListener("DOMContentLoaded", load);