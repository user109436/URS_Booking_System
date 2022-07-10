export class Modal {
  constructor(modal, openBtn, closeBtn) {
    //1. variable initialization
    this.modal = modal;
    this.openBtn = openBtn;
    this.closeBtn = closeBtn;
  }
  openModal = (e) => {
    this.modal.style.display = "block";
  };
  closeModal = (e) => {
    this.modal.style.display = "none";
  };
  closeOnOutsideClick = (e) => {
    if (e.target == this.modal) {
      this.modal.style.display = "none";
    }
  };

  modalSingleOpenBtn = () => {
    //2. event listener
    this.openBtn.addEventListener("click", this.openModal);
    this.closeBtn.addEventListener("click", this.closeModal);
    window.addEventListener("click", this.closeOnOutsideClick);
  };
  modalMultipleOpenBtn = () => {
    const array = Array.from(this.openBtn);
    array.forEach((element) => {
      element.addEventListener("click", this.openModal);
    });
    this.closeBtn.addEventListener("click", this.closeModal);
    window.addEventListener("click", this.closeOnOutsideClick);
  };
}
