import { Modal } from "./modal.class.js";

//Single Open Modal-button
const singleModal = document.getElementById("singleModal");
const singleOpenBtn = document.getElementById("singleOpenBtn");
const singleCloseBtn = document.getElementById("singleCloseBtn");
const singleModalExist = singleModal && singleOpenBtn && singleCloseBtn
if (singleModalExist) {
  const singleModalObj = new Modal(singleModal , singleOpenBtn , singleCloseBtn);
  singleModalObj.modalSingleOpenBtn();
}

// MULTIPLE Open MODEL-table

const multipleModal = document.getElementById("multipleModal");
const multipleOpenBtn = document.getElementsByClassName("multipleOpenBtn");
const multipleCloseBtn = document.getElementById("multipleCloseBtn");
const multipleModalExist = multipleModal && multipleOpenBtn && multipleCloseBtn;
if (multipleModalExist) {
  const tableModal = new Modal(multipleModal, multipleOpenBtn, multipleCloseBtn);
  tableModal.modalMultipleOpenBtn();
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

// const submitBtn = document.getElementById('createBtn').addEventListener('click', function(){


// });


// DOM for Table Update

// // Registrar DOM 
// const inputUserNote = document.querySelector('#user_note');
// const inputStatus = document.querySelector('#status');


// FormData.addEventListener('submit' onsubmit);
// // // OFFICE DOM 
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