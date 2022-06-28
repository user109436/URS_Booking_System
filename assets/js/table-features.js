const searchTable = document.getElementById("search-table");
const table = document.getElementById("table");

/* 
@tableData must be a an array of NodeList
will transform rows to array of text
*/
const extractRowsToTextArray = (tableData, textArray) => {
  let text = "";

  tableData.forEach((tableData) => {
    text += tableData.innerText;
  });
  textArray.push(text);
  return textArray;
};

if (searchTable && table) {
  const tableRows = table.querySelectorAll("tr");
  const tableRowsArray = Array.from(tableRows).splice(1, tableRows.length); //exclude header of table

  searchTable.addEventListener("keyup", () => {
    const textArray = [];
    const key = searchTable.value.toLowerCase().trim();

    //1. Extract tableData to array of text
    tableRowsArray.forEach((tableRow) => {
      const tableData = tableRow.querySelectorAll("td");
      extractRowsToTextArray(tableData, textArray);
    });

    //2. search for the keyword and display if found
    for (const item in textArray) {
      const data = textArray[item].toLowerCase().trim();
      if (data.indexOf(key) !== -1) {
        tableRowsArray[item].style.display = "";
      } else {
        tableRowsArray[item].style.display = "none";
      }
    }
  });
}
