import { Modal } from "./modal.class.js";

// //REGISTER MODAL
const registerModal = document.getElementById("modalRegistration");
const registerOpenBtn = document.getElementById("btnRegister");
const registerCloseBtn = document.getElementById("cancelButton");
const registrationModalExist =
  registerModal && registerOpenBtn && registerCloseBtn;
if (registrationModalExist) {
  const registerModalObj = new Modal(
    registerModal,
    registerOpenBtn,
    registerCloseBtn
  );
  registerModalObj.modalSingleOpenBtn();
}

// // TRACKING MODAL
const trackModal = document.getElementById("openTrackModal");
const trackOpenBtn = document.getElementById("modalTrack-btn");
const trackCloseBtn = document.getElementById("closeTrackModal");
const trackingModalExist = trackModal && trackOpenBtn && trackCloseBtn;
if (trackingModalExist) {
  const trackingModalObj = new Modal(trackModal, trackOpenBtn, trackCloseBtn);
  trackingModalObj.modalSingleOpenBtn();
}

//REQUEST MODAL

const requestModal = document.getElementById("openUpdateModal");
const requestOpenBtn = document.getElementsByClassName("modalUpdate-btn");
const requestCloseBtn = document.getElementById("closeUpdateModal");
const requestModalExist = requestModal && requestOpenBtn && requestCloseBtn;
if (requestModalExist) {
  const tableModal = new Modal(requestModal, requestOpenBtn, requestCloseBtn);
  tableModal.modalMultipleOpenBtn();
}

// MAKE REQUEST Scroll on Trigger "a"

const removeString = (originalString, stringToRemove, startLocation = 0) => {
  let stringLocation = originalString.indexOf(stringToRemove);
  if (stringLocation >= 0) {
    return originalString.slice(startLocation, stringLocation);
  }
  return false;
};
const makeRequest = document.getElementById("make-request");
makeRequest.addEventListener("click", function () {
  let url = window.location.href;
  url = removeString(url, "#form-account-request");
  if (!url) {
    return false;
  }
  window.location.assign(`${url}#form-account-request`);
});
