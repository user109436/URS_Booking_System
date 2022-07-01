import { Modal } from "./modal.class.js";
import { getAsHtmlCollection } from "./utilities.js";

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

for(let selectedTableRow of multipleOpenBtn){
  selectedTableRow.addEventListener("click", function () {
    const tableData =getAsHtmlCollection(selectedTableRow, 'td');
    let inputFields =document.getElementsByClassName('form-input');
    inputFields=Array.from(inputFields);
    // 1. get all table data with classname including their classname 
    tableData.forEach(td=>{
      const hasClassName = td.classList.value;
      if(hasClassName){
        // 2. select all input fields with this classname and assigned the value
        inputFields.forEach(element=>{
          let classNameExist = element.classList.value.indexOf(hasClassName);
          if(classNameExist>=0){
              element.value=td.innerText;
          }
        })
      };
    });

    });;
}

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
