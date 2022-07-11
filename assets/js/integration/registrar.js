import { getToken } from "../auth/auth_manager.js"
import { API_BASE_URL } from "../constants/ApiConstant.js";
import { ajax_query } from "../ajax_crud.js";
import { multipleModalInit } from "../utilities.js";
import { tableSearchInit } from "../table-features.js";


var officeNote = document.getElementById('office_note');
var btnUpdate = document.getElementById('btnUpdate');
var id = document.getElementById('id');
var status = document.getElementById('status');
var token = getToken()
//delete later
console.log(token);

const config = {
  method: "GET",
  url: `${API_BASE_URL}/api/all-request-aggregated/office/1`,
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
    <td class="table-TrackingId">${data[i].TrackingId}</td>
    <td class="table-service">${data[i].Service}</td>
    <td class="table-fileName">${data[i].FileName}</td>
    <td class="table-userNote">${data[i].UserNote}</td>
    <td class="table-officeNote">${data[i].OfficeNote}</td>
    <td class="table-status">${data[i].Status}</td>
    <td class="table-createdAt">${data[i].CreatedAt}</td>
    <td class="table-updatedAt">${data[i].UpdatedAt}</td>
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
    config.url = `${API_BASE_URL}/api/all-request-aggregated/office/1`;
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
      StatusId:status.value
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