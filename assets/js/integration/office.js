import { getToken } from "../auth/auth_manager.js";
import { API_BASE_URL } from "../constants/ApiConstant.js";
import { ajax_query } from "../ajax_crud.js";
import { multipleModalInit } from "../utilities.js";
import { tableSearchInit } from "../table-features.js";
//Global Var
var office = document.getElementById("office");
var btnDelete = document.getElementById("btnDelete");
var id = document.getElementById("id");
var btnSubmit = document.getElementById("btnSubmit");
var btnUpdate = document.getElementById("btnUpdate");
var reset = document.getElementById('btnReset');
var token = getToken();

const config = {
  method: "GET",
  url: `${API_BASE_URL}/api/office`,
  async: true,
  headerNames: ["Content-type", "Authorization"],
  headerValues: ["application/json", token],
};

const initTable = (data) => {
  const loadingScreen = document.getElementsByClassName("loading-screen")[0];
  loadingScreen.style.display = "none";
  for(let i = 0; i < data.length; i++){table.innerHTML += ` <tr class="multipleOpenBtn">
  <td class="table-id" hidden>${data[i].Id}</td>
  <td class="table-office">${data[i].Name}</td>
  <td class="table-date-created">${new Date(data[i].CreatedAt).toUTCString().split(' ').slice(0, 4).join(' ')}</td>
  <td class="table-date-updated">${new Date(data[i].UpdatedAt).toUTCString().split(' ').slice(0, 4).join(' ')}</td>
  </tr>`;}
    
  
  console.log(data)
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
    config.url = `${API_BASE_URL}/api/office`;
    ajax_query(config, initTable);
    document.getElementById("multipleModal").style.display = "none";
  }
};

document.body.onload = ajax_query(config, initTable);

// Form Submit
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  try {
    // Send request

    var values = {
      Name: office.value,
    };
    config.method = "POST";
    return ajax_query(config, reloadTable, values);
  } catch (error) {
    console.log("error", error);
    console.log("Error");
    return;
  }
});

//Delete
btnDelete.addEventListener("click", (e) => {
  e.preventDefault();

  try {
    // Send request
    config.method = "DELETE";
    config.url = `${config.url}/${id.value}`;
    console.log(id.value);
    return ajax_query(config, reloadTable, id.value);
  } catch (error) {
    console.log("error", error);
    console.log("Error");
    return;
  }
});

//Update
btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();

  try {
    // Send request

    var values = {
      Name: office.value,
      Id: id.value,
    };
    config.method = "PATCH";
    return ajax_query(config, reloadTable, values);
  } catch (error) {
    console.log("error", error);
    console.log("Error");
    return;
  }
});

btnSubmit.disabled =true;

reset.addEventListener('click',function(){
  btnSubmit.disabled = false;

})