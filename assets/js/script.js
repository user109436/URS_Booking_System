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
const trackOpenBtn = document.getElementsByClassName("modalTrack-btn");
const trackCloseBtn = document.getElementById("closeTrackModal");
const trackingModalExist = trackModal && trackOpenBtn && trackCloseBtn;
if (trackingModalExist) {
  const tableModal = new Modal(trackModal, trackOpenBtn, trackCloseBtn);
  tableModal.modalMultipleOpenBtn();
}
// updated VARIABLE NAME - later
// // UPDATE MODAL
const updateModal = document.getElementById("openUpdateModal");
const updateOpenBtn = document.getElementsByClassName("modalUpdate-btn");
const updateCloseBtn = document.getElementById("closeUpdateModal");
const updateModalExist = updateModal && updateOpenBtn && updateCloseBtn;
if (updateModalExist) {
  const tableModal = new Modal(updateModal, updateOpenBtn, updateCloseBtn);
  tableModal.modalMultipleOpenBtn();
}

// delete when the table have thier own FILE
// // OFFICE MODAL 
const officeModal = document.getElementById("openOfficeModal");
const officeOpenBtn = document.getElementsByClassName("modalOffice-btn");
const officeCloseBtn = document.getElementById("closeOfficeModal");
const officeModalExist = officeModal && officeOpenBtn && officeCloseBtn;
if (officeModalExist) {
  const tableModal = new Modal(officeModal, officeOpenBtn, officeCloseBtn);
  tableModal.modalMultipleOpenBtn();
}

// // SERVICES MODAL 
const servicesModal = document.getElementById("openServicesModal");
const servicesOpenBtn = document.getElementsByClassName("modalServices-btn");
const servicesCloseBtn = document.getElementById("closeServicesModal");
const servicesModalExist = servicesModal && servicesOpenBtn && servicesCloseBtn;
if (servicesModalExist) {
  const tableModal = new Modal(servicesModal, servicesOpenBtn, servicesCloseBtn);
  tableModal.modalMultipleOpenBtn();
}

// // ROLE MODAL 
const roleModal = document.getElementById("openRoleModal");
const roleOpenBtn = document.getElementsByClassName("modalRole-btn");
const roleCloseBtn = document.getElementById("closeRoleModal");
const roleModalExist = roleModal && roleOpenBtn && roleCloseBtn;
if (roleModalExist) {
  const tableModal = new Modal(roleModal, roleOpenBtn, roleCloseBtn);
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
if (makeRequest) {
  makeRequest.addEventListener("click", function () {
    let url = window.location.href;
    url = removeString(url, "#form-account-request");
    if (!url) {
      return false;
    }
    window.location.assign(`${url}#form-account-request`);
  });
}





