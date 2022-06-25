const modal = document.querySelector("#modalRegistration");
const modalBtn = document.getElementById("btnRegister");
const closeBtn = document.querySelector("#cancelButton");

// Events
if (modalBtn) {
  modalBtn.addEventListener("click", openModal);
}
if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}
window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modal.style.display = "block";
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
