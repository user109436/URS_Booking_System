import { Modal } from "./modal.class.js";
import { multipleModalInit } from "./utilities.js";

//Single Open Modal-button
const singleModal = document.getElementById("singleModal");
const singleOpenBtn = document.getElementById("singleOpenBtn");
const singleCloseBtn = document.getElementById("singleCloseBtn");
const singleModalExist = singleModal && singleOpenBtn && singleCloseBtn;
if (singleModalExist) {
  const singleModalObj = new Modal(singleModal, singleOpenBtn, singleCloseBtn);
  singleModalObj.modalSingleOpenBtn();
}

setTimeout(multipleModalInit, 3000);

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
