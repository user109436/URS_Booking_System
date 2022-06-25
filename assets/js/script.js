import { Modal } from "./modal.class.js";

//REGISTER MODAL
const registerModal = document.getElementById("modalRegistration");
const registerOpenBtn = document.getElementById("btnRegister");
const registerCloseBtn = document.getElementById("cancelButton");
const registrationModalExist =
  registerModal && registerOpenBtn && registerCloseBtn;
if (registrationModalExist) {
  new Modal(registerModal, registerOpenBtn, registerCloseBtn);
}

// TRACKING MODAL
const trackModal = document.getElementById("openTrackModal");
const trackOpenBtn = document.getElementById("modalTrack-btn");
const trackCloseBtn = document.getElementById("closeTrackModal");
const trackingModalExist = trackModal && trackOpenBtn && trackCloseBtn;
if (trackingModalExist) {
  new Modal(trackModal, trackOpenBtn, trackCloseBtn);
}

//REQUEST MODAL

const requestModal = document.getElementById("openUpdateModal");
const requestOpenBtn = document.getElementById("modalUpdate-btn");
const requestCloseBtn = document.getElementById("closeUpdateModal");
const requestModalExist = requestModal && requestOpenBtn && requestCloseBtn;
if (requestModalExist) {
  new Modal(requestModal, requestOpenBtn, requestCloseBtn);
}
