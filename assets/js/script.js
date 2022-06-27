import { Modal } from "./modal.class.js";



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
  new Modal(requestModal, requestOpenBtn, requestCloseBtn);
  const tableModal = new Modal(requestModal, requestOpenBtn, requestCloseBtn);
  tableModal.modalMultipleOpenBtn();
 
  
}


// User's table Create new
const userForm = document.querySelector('#formAddUser');
const inputId = document.querySelector('#newInputId');
const inputUserNumber = document.querySelector('#newInputUserNumber');
const inputFirstName = document.querySelector('#newInputFirstName');
const inputLastName = document.querySelector('#newInputLastName');
const inputPosition = document.querySelector('#newInputPosition');
const inputEmail = document.querySelector('#newInputEmail');
const inputPassword = document.querySelector('#newInputPassword');
const inputRole = document.querySelector('#newInputRole');
const inputVerified = document.querySelector('#newInputVerified');
const inputStatus = document.querySelector('#newInputStatus');
const inputCreated = document.querySelector('#newInputCreated');
const inputUpdated = document.querySelector('#newInputUpdated');
const submitBtn = document.getElementById('createBtn').addEventListener('click', function(){
  
});




const userModal = document.getElementById("userModal");
const newUserBtn = document.getElementById("newUserBtn");
const cancelCreateBtn = document.getElementById("cancelCreateBtn");
const userModalExist = userModal && createBtn && cancelCreateBtn;
if (userModalExist) {
  const userModalObj = new Modal(userModal, createBtn, cancelCreateBtn);
  userModalObj.modalSingleOpenBtn();


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
