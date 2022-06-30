import { Modal } from "./modal.class.js";

//Single Open Modal-button
const singleModal = document.getElementById("singleModal");
const singleOpenBtn = document.getElementById("singleOpenBtn");
const singleCloseBtn = document.getElementById("singleCloseBtn");
const singleModalExist = singleModal && singleOpenBtn && singleCloseBtn;
if (singleModalExist) {
  const singleModalObj = new Modal(singleModal, singleOpenBtn, singleCloseBtn);
  singleModalObj.modalSingleOpenBtn();
}

// MULTIPLE Open MODEL-table

const multipleModal = document.getElementById("multipleModal");
const multipleOpenBtn = document.getElementsByClassName("multipleOpenBtn");
const multipleCloseBtn = document.getElementById("multipleCloseBtn");
const multipleModalExist = multipleModal && multipleOpenBtn && multipleCloseBtn;
if (multipleModalExist) {
  const tableModal = new Modal(
    multipleModal,
    multipleOpenBtn,
    multipleCloseBtn
  );
  tableModal.modalMultipleOpenBtn();
}

// DOM ----------------------------------------------------------

// const userForm = document.querySelector('#formAddUser');
// const inputId = document.querySelector('#newInputId');
// const inputUserNumber = document.querySelector('#newInputUserNumber');
// const inputFirstName = document.querySelector('#newInputFirstName');
// const inputLastName = document.querySelector('#newInputLastName');
// const inputPosition = document.querySelector('#newInputPosition');
// const inputEmail = document.querySelector('#newInputEmail');
// const inputPassword = document.querySelector('#newInputPassword');
// const inputRole = document.querySelector('#newInputRole');
// const inputVerified = document.querySelector('#newInputVerified');
// const inputStatus = document.querySelector('#newInputStatus');
// const inputCreated = document.querySelector('#newInputCreated');
// const inputUpdated = document.querySelector('#newInputUpdated');

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

// NOT YET WORKING
var selectedRow = null;

function onFormSubmit(e) {
  e.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

//Retrieve the data
function readFormData() {
  var formData = {};
  formData["newInputId"] = document.getElementById("newInputId").value;
  formData["newInputUserNumber"] =
    document.getElementById("newInputUserNumber").value;
  formData["newInputFirstName"] =
    document.getElementById("newInputFirstName").value;
  formData["newInputLastName"] =
    document.getElementById("newInputLastName").value;
  formData["newInputPosition"] =
    document.getElementById("newInputPosition").value;
  formData["newInputEmail"] = document.getElementById("newInputEmail").value;
  formData["newInputPassword"] =
    document.getElementById("newInputPassword").value;
  formData["newInputRole"] = document.getElementById("newInputRole").value;
  formData["newInputVerified"] =
    document.getElementById("newInputVerified").value;
  formData["newInputStatus"] = document.getElementById("newInputStatus").value;
  formData["newInputCreated"] =
    document.getElementById("newInputCreated").value;
  formData["newInputUpdated"] =
    document.getElementById("newInputUpdated").value;
  return formData;
}

//Insert the data
function insertNewRecord(data) {
  var table = document.getElementById("table").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.newInputId;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.newInputUserNumber;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.newInputFirstName;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.newInputLastName;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = data.newInputPosition;
  cell4 = newRow.insertCell(5);
  cell4.innerHTML = data.newInputEmail;
  cell4 = newRow.insertCell(6);
  cell4.innerHTML = data.newInputPassword;
  cell4 = newRow.insertCell(7);
  cell4.innerHTML = data.newInputRole;
  cell4 = newRow.insertCell(8);
  cell4.innerHTML = data.newInputVerified;
  cell4 = newRow.insertCell(9);
  cell4.innerHTML = data.newInputStatus;
  cell4 = newRow.insertCell(10);
  cell4.innerHTML = data.newInputCreated;
  cell4 = newRow.insertCell(11);
  cell4.innerHTML = data.newInputUpdated;
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("newInputId").value = selectedRow.cells[4].innerHTML;
  document.getElementById("newInputUserNumber").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("newInputFirstName").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("newInputLastName").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("newInputPosition").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("newInputEmail").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("newInputPassword").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("newInputRole").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("newInputVerified").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("newInputStatus").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("newInputCreated").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("newInputUpdated").value =
    selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.newInputId;
  selectedRow.cells[1].innerHTML = formData.newInputUserNumber;
  selectedRow.cells[2].innerHTML = formData.newInputFirstName;
  selectedRow.cells[3].innerHTML = formData.newInputLastName;
  selectedRow.cells[4].innerHTML = formData.newInputPosition;
  selectedRow.cells[5].innerHTML = formData.newInputEmail;
  selectedRow.cells[6].innerHTML = formData.newInputPassword;
  selectedRow.cells[7].innerHTML = formData.newInputRole;
  selectedRow.cells[8].innerHTML = formData.newInputVerified;
  selectedRow.cells[9].innerHTML = formData.newInputStatus;
  selectedRow.cells[10].innerHTML = formData.newInputCreated;
  selectedRow.cells[11].innerHTML = formData.newInputUpdated;
}

//Delete the data
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    resetForm();
  }
}

//Reset the data
function resetForm() {
  document.getElementById("newInputId").value = "";
  document.getElementById("newInputUserNumber").value = "";
  document.getElementById("newInputFirstName").value = "";
  document.getElementById("newInputLastName").value = "";
  document.getElementById("newInputPosition").value = "";
  document.getElementById("newInputEmail").value = "";
  document.getElementById("newInputPassword").value = "";
  document.getElementById("newInputRole").value = "";
  document.getElementById("newInputVerified").value = "";
  document.getElementById("newInputStatus").value = "";
  document.getElementById("newInputCreated").value = "";
  document.getElementById("newInputUpdated").value = "";
  selectedRow = null;
}

// NOT YET WORKING

// MAKE REQUEST Scroll on Trigger "a"

const removeString = (originalString, stringToRemove, startLocation = 0) => {
  let stringLocation = originalString.indexOf(stringToRemove);
  if (stringLocation >= 0) {
    return originalString.slice(startLocation, stringLocation);
  }
  return originalString;
};

const makeRequest = document.getElementById("make-request");
if (makeRequest) {
  makeRequest.addEventListener("click", function () {
    let url = window.location.href;
    const urlHasId = url.indexOf(`#form-account-request`);
    if (urlHasId >= 0) {
      url = removeString(url, "#form-account-request");
    }
    window.location.assign(`${url}#form-account-request`);
  });
}
