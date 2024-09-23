// sidebar
let menuO = document.getElementById("open");
let menuC = document.getElementById("close");
let sidebar = document.querySelector(".sidebar");

menuO.addEventListener("click", function () {
  sidebar.style.display = "block";
});
menuC.addEventListener("click", function () {
  sidebar.style.display = "none";
});
// contact form
let modal = document.querySelector(".modal ");
let close = document.getElementById("closeModal");

// Initialize EmailJS with your user ID
emailjs.init("oC6gwPMuflwUPFdex");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_zq0g3gs", "template_d0crw9v", this).then(
      function (response) {
        modal.style.display = "flex";
      },
      function (error) {
        document.getElementById("successMessage").textContent =
          "Failed to send message. Please try again later.";
      }
    );
  });
close.addEventListener("click", function () {
  modal.style.display = "none";
});
