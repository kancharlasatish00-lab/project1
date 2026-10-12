// Tasty Bites front-end interactions. No backend or database is connected.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const status = document.getElementById("contactMessageStatus");
      status.textContent = `Thank you, ${name}! This demo has validated your message, but it has not been sent to a server.`;
      contactForm.reset();
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", event => {
      event.preventDefault();
      const status = document.getElementById("loginStatus");
      if (!loginForm.reportValidity()) return;
      status.textContent = "Form validation passed. Real login requires a secure backend.";
    });
    const forgotPassword = document.getElementById("forgotPassword");
    if (forgotPassword) {
      forgotPassword.addEventListener("click", event => {
        event.preventDefault();
        document.getElementById("loginStatus").textContent = "Password recovery is not available in this front-end demo.";
      });
    }
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", event => {
      event.preventDefault();
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const status = document.getElementById("registerStatus");
      if (password.length < 6) {
        status.textContent = "Password must contain at least 6 characters.";
        return;
      }
      if (password !== confirmPassword) {
        status.textContent = "Passwords do not match. Please try again.";
        return;
      }
      status.textContent = "Form validation passed. This demo does not save your account details.";
      registerForm.reset();
    });
  }
});
