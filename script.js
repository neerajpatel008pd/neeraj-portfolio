// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    //e.preventDefault(); // Prevent actual form submission

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name && email && message) {
      alert("Thank you for reaching out, " + name + "! I will get back to you soon.");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
});