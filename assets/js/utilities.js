import { Modal } from "./modal.class.js";

export const getAsHtmlCollection = (parentElement, elementToSelect) => {
  const nodeList = parentElement.querySelectorAll(elementToSelect);
  return Array.from(nodeList);
};

// TODO:make the fill table form more re-usable and compatible in different fields
// inputFields.forEach(element => {
//   let {tagName} = element;
//   console.log(element);
//   if(tagName==='SELECT'){
//     console.log('create dom option and set it selected:', element.classList.value);
//     //check if option exist
//   }
//   if(tagName==='INPUT' || tagName==='TEXTAREA'){
//     console.log('assign value to:', element.classList.value);

//   }

// });

export const multipleModalInit = () => {
  // MULTIPLE Open MODEL-table
  const multipleModal = document.getElementById("multipleModal");
  const multipleOpenBtn = document.getElementsByClassName("multipleOpenBtn");
  const multipleCloseBtn = document.getElementById("multipleCloseBtn");
  const multipleModalExist =
    multipleModal && multipleOpenBtn && multipleCloseBtn;
  if (multipleModalExist) {
    const tableModal = new Modal(
      multipleModal,
      multipleOpenBtn,
      multipleCloseBtn
    );
    tableModal.modalMultipleOpenBtn();
  }

  for (let selectedTableRow of multipleOpenBtn) {
    selectedTableRow.addEventListener("click", function () {
      const tableData = getAsHtmlCollection(selectedTableRow, "td");
      let inputFields = document.getElementsByClassName("form-input");
      inputFields = Array.from(inputFields);
      // 1. get all table data with classname including their classname
      tableData.forEach((td) => {
        const hasClassName = td.classList.value;
        if (hasClassName) {
          // 2. select all input fields with this classname and assigned the value
          inputFields.forEach((element) => {
            let classNameExist = element.classList.value.indexOf(hasClassName);
            if (classNameExist >= 0) {
              element.value = td.innerText;
            }
          });
        }
      });
    });
  }
};

/* 
@tableData must be a an array of NodeList
will transform rows to array of text
*/

export const extractRowsToTextArray = (tableData, textArray) => {
  let text = "";

  tableData.forEach((tableData) => {
    text += tableData.innerText;
  });
  textArray.push(text);
  return textArray;
};
