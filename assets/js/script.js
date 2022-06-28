import "./requests/index"
import { Modal } from "./modal.class.js";


// // TRACKING MODAL
const trackModal = document.getElementById("openTrackModal");
const trackOpenBtn = document.getElementsByClassName("modalTrack-btn");
const trackCloseBtn = document.getElementById("closeTrackModal");
const trackingModalExist = trackModal && trackOpenBtn && trackCloseBtn;
if (trackingModalExist) {
  const tableModal = new Modal(trackModal, trackOpenBtn, trackCloseBtn);
  tableModal.modalMultipleOpenBtn();
}


// // UPDATE MODAL

// // Registrar MODAL
const updateModal = document.getElementById("openUpdateModal");
const updateOpenBtn = document.getElementsByClassName("modalUpdate-btn");
const updateCloseBtn = document.getElementById("closeUpdateModal");
const updateModalExist = updateModal && updateOpenBtn && updateCloseBtn;
if (updateModalExist) {
  const tableModal = new Modal(updateModal, updateOpenBtn, updateCloseBtn);
  tableModal.modalMultipleOpenBtn();
}

// delete when the table have thier own FILE
// // OFFICE Update MODAL 
const officeModal = document.getElementById("openOfficeModal");
const officeOpenBtn = document.getElementsByClassName("modalOffice-btn");
const officeCloseBtn = document.getElementById("closeOfficeModal");
const officeModalExist = officeModal && officeOpenBtn && officeCloseBtn;
if (officeModalExist) {
  const tableModal = new Modal(officeModal, officeOpenBtn, officeCloseBtn);
  tableModal.modalMultipleOpenBtn();
}

// // SERVICES update MODAL 
const servicesModal = document.getElementById("openServicesModal");
const servicesOpenBtn = document.getElementsByClassName("modalServices-btn");
const servicesCloseBtn = document.getElementById("closeServicesModal");
const servicesModalExist = servicesModal && servicesOpenBtn && servicesCloseBtn;
if (servicesModalExist) {
  const tableModal = new Modal(servicesModal, servicesOpenBtn, servicesCloseBtn);
  tableModal.modalMultipleOpenBtn();
}

// // ROLE update MODAL 
const roleModal = document.getElementById("openRoleModal");
const roleOpenBtn = document.getElementsByClassName("modalRole-btn");
const roleCloseBtn = document.getElementById("closeRoleModal");
const roleModalExist = roleModal && roleOpenBtn && roleCloseBtn;
if (roleModalExist) {
  const tableModal = new Modal(roleModal, roleOpenBtn, roleCloseBtn);
  tableModal.modalMultipleOpenBtn(); 
}

//user's table update Modal
const userUpdateModal = document.getElementById("userUpdateModal");
const userUpdateOpenBtn = document.getElementsByClassName("userUpdateModal-btn");
const userCloseUpdateModal = document.getElementById("userCloseUpdateModal");
const userUpdateModalExist = userUpdateOpenBtn && userUpdateOpenBtn && userCloseUpdateModal;
if (userUpdateModalExist) {
  const tableModal = new Modal(userUpdateModal, userUpdateOpenBtn, userCloseUpdateModal);
  tableModal.modalMultipleOpenBtn();
}

// // Create MODAL -------------------------------------------------------

// Office create new Modal
const createOfficeModal = document.getElementById("openCreateOfficeModal");
const createOfficeOpenBtn = document.getElementsByClassName("createOffice-btn");
const createOfficeCloseBtn = document.getElementById("closeCreateOfficeModal");
const createOfficeModalExist = createOfficeModal && createOfficeOpenBtn && createOfficeCloseBtn;
if (createOfficeModalExist) {
  const tableModal = new Modal(createOfficeModal, createOfficeOpenBtn, createOfficeCloseBtn);
  tableModal.modalMultipleOpenBtn();
}

// // SERVICES create new Modal 
const createServicesModal = document.getElementById("openCreateServicesModal");
const createServicesOpenBtn = document.getElementsByClassName("createServices-btn");
const createServicesCloseBtn = document.getElementById("closeCreateServicesModal");
const createServicesModalExist = createServicesModal && createServicesOpenBtn && createServicesCloseBtn;
if (createServicesModalExist) {
  const tableModal = new Modal(createServicesModal, createServicesOpenBtn, createServicesCloseBtn);
  tableModal.modalMultipleOpenBtn();
}

// // ROLE create new Modal 
const createRoleModal = document.getElementById("openCreateRoleModal");
const createRoleOpenBtn = document.getElementsByClassName("createRole-btn");
const createRoleCloseBtn = document.getElementById("closeCreateRoleModal");
const createRoleModalExist = createRoleModal && createRoleOpenBtn && createRoleCloseBtn;
if (createRoleModalExist) {
  const tableModal = new Modal(createRoleModal, createRoleOpenBtn, createRoleCloseBtn);
  tableModal.modalMultipleOpenBtn(); 
}

// // REQUEST create new Modal 
const createRequestModal = document.getElementById("openCreateTrackModal");
const createRequestOpenBtn = document.getElementsByClassName("createRequest-btn");
const createRequestCloseBtn = document.getElementById("closeCreateTrackModal");
const createRequestModalExist = createRequestModal && createRequestOpenBtn && createRequestCloseBtn;
if (createRequestModalExist) {
  const tableModal = new Modal(createRequestModal, createRequestOpenBtn, createRequestCloseBtn);
  tableModal.modalMultipleOpenBtn(); 
}

// User's table Create new MODAL
const newUserModal = document.getElementById("newUserModal");
const newUserBtn = document.getElementById("newUserBtn");
const cancelCreateBtn = document.getElementById("cancelCreateBtn");
const userModalExist = newUserModal && newUserBtn && cancelCreateBtn
if (userModalExist) {
  const userModalObj = new Modal(newUserModal , newUserBtn , cancelCreateBtn);
  userModalObj.modalSingleOpenBtn();
}

// DOM ----------------------------------------------------------

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


// DOM for Table Update

// // Registrar DOM 
// const inputUserNote = document.querySelector('#user_note');
// const inputStatus = document.querySelector('#status');


// FormData.addEventListener('submit' onsubmit);
// // // OOFICE DOM 
// const inputOffice= document.querySelector('#office');


// // // SERVICES DOM 
// const inputServices= document.querySelector('#services');
// const inputFee= document.querySelector('#fee');


// // // ROLES DOM 
// const inputRole= document.querySelector('#role');


// // // REQUEST DOM 
// const inputOffice= document.querySelector('#office');
// const inputServices= document.querySelector('#services');
// const inputUserNote= document.querySelector('#user_note');
// const inputOfficeNote= document.querySelector('#office_note');




// MAKE REQUEST Scroll on Trigger "a" -----------------------------------------

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
