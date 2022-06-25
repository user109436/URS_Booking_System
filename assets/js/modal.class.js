export class Modal {
  constructor(modal, openBtn, closeBtn) {
    //1. variable initialization
    this.modal = modal;
    this.openBtn = openBtn;
    this.closeBtn = closeBtn;

    //2. event listener
    this.openBtn.addEventListener("click", this.openModal);
    this.closeBtn.addEventListener("click", this.closeModal);
    window.addEventListener("click", this.closeOnOutsideClick);
  }
  openModal = (e) => {
    e.preventDefault();
    this.modal.style.display = "block";
  };
  closeModal = (e) => {
    e.preventDefault();
    this.modal.style.display = "none";
  };
  closeOnOutsideClick = (e) => {
    e.preventDefault();
    if (e.target == this.modal) {
      this.modal.style.display = "none";
    }
  };
}
