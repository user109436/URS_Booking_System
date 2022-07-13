
import { getToken } from "../auth/auth_manager.js"
import { API_BASE_URL } from "../constants/ApiConstant.js";
import { ajax_query } from "../ajax_crud.js";
import { multipleModalInit } from "../utilities.js";
import { tableSearchInit } from "../table-features.js";

//Global Var
var officeNote = document.getElementById("office_note");
var btnUpdate = document.getElementById("btnUpdate");
var id = document.getElementById("id");
var status = document.getElementById("status");
var token = getToken();
console.log(token);
const config = {
  method: "GET",
  url: `${API_BASE_URL}/api/request-aggregated`,
  async: true,
  headerNames: ["Content-type", "Authorization"],
  headerValues: ["application/json", token],
};

const initTable = (data) => {
  const loadingScreen = document.getElementsByClassName("loading-screen")[0];
  loadingScreen.style.display = "none";
 
  for (let i = 0; i < data.length; i++) {
    table.innerHTML += `<tr class="multipleOpenBtn">
      <td class="table-id" hidden>${data[i].Id}</td>
      <td class="table-tracking-id">${data[i].TrackingId}</td>
      <td class="table-office">${data[i].Office}</td>
      <td class="table-service">${data[i].Service}</td>
      <td class="table-fileName">${data[i].FileName}</td>
      <td class="table-user-note">${data[i].UserNote}</td>
      <td class="table-office-note">${data[i].OfficeNote}</td>
      <td class="table-status">${data[i].Status}</td>
      <td class="table-date-created">${new Date(data[i].CreatedAt).toUTCString().split(' ').slice(0, 4).join(' ')}</td>
      <td class="table-date-updated">${new Date(data[i].UpdatedAt).toUTCString().split(' ').slice(0, 4).join(' ')}</td>
    </tr>`;
  }
  
  multipleModalInit();
  tableSearchInit();
};

const reloadTable = (data) => {
  const success = data === "Success" || data === "Deleted" || data == "Updated";
  if (success) {
    alert(`Query:${data}`);
    var myTable = document.getElementById("table");
    var rowCount = myTable.rows.length;
    for (var x = rowCount - 1; x > 0; x--) {
      myTable.deleteRow(x);
    }
    config.method = "GET";
    config.url = `${API_BASE_URL}/api/request-aggregated`;
    ajax_query(config, initTable);
    document.getElementById("multipleModal").style.display = "none";
  }
};

document.body.onload = ajax_query(config, initTable);
//Update
btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();

  try {
    // Send request

    var values = {
      Id : id.value,
      OfficeNote: officeNote.value,
      StatusId:convert(status.value)
    };
    config.method = "PATCH";
    config.url =`${API_BASE_URL}/api/request`
    return ajax_query(config, reloadTable, values);
  } catch (error) {
    console.log("error", error);
    console.log("Error");
    return;
  }
});

function convert(value){
  if(value=="Paid"){
  return 1;
  }else if(value=="Processing"){
  return 2;
  }else if(value=="Pending"){
  return 3;
  }else if(value=="Payment Required"){
  return 4;
  }else if(value=="Finished"){
  return 5;
  }
}