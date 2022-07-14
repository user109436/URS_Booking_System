import { getToken } from "../auth/auth_manager.js";
import { API_BASE_URL } from "../constants/ApiConstant.js";
import { ajax_query } from "../ajax_crud.js";
import { multipleModalInit } from "../utilities.js";
import { tableSearchInit } from "../table-features.js";
import { appendOfficeOption } from "./request/offices.js";

//global var
var role = document.getElementById("inputRole");
var firstName = document.getElementById("inputFirstName");
var lastName = document.getElementById("inputLastName");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var btnSubmit = document.getElementById("btnSubmit");
var btnDelete = document.getElementById("btnDelete");
var id = document.getElementById("inputId");
var btnUpdate = document.getElementById("btnUpdate");
var office = document.getElementById("inputOffice");
var reset = document.getElementById('btnReset');
var token = getToken();
var proxy = "https://localhost:44310";
console.log(token);
const config = {
  method: "GET",
  url: `${API_BASE_URL}/api/user-aggregated`,
  async: true,
  headerNames: ["Content-type", "Authorization"],
  headerValues: ["application/json", token],
};

const initTable = (data) => {
  const loadingScreen = document.getElementsByClassName("loading-screen")[0];
  loadingScreen.style.display = "none";
  for (let i = 0; i < data.length; i++) {
    table.innerHTML += ` <tr class="multipleOpenBtn">
      <td class="table-id" hidden>${data[i].Id}</td>
      <td class="table-first-name">${data[i].FirstName}</td>
      <td class="table-last-name">${data[i].LastName}</td>
      <td class="table-email">${data[i].Email}</td>
      <td class="password" hidden>${data[i].Password}</td>
      <td class="table-role">${data[i].Role}</td>
      <td class="table-office">${data[i].Office}</td>
      <td class="table-date-created">${new Date(data[i].CreatedAt).toUTCString().split(' ').slice(0, 4).join(' ')}</td>
      <td class="table-date-updated">${new Date(data[i].UpdatedAt).toUTCString().split(' ').slice(0, 4).join(' ')}</td>
      </tr>`;
  }
  console.log(data);
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
    config.url = `${API_BASE_URL}/api/user-aggregated`;
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
      FirstName: firstName.value,
      LastName: lastName.value,
      Email: email.value,
      Password: password.value,
      RoleId: role.value,
      OfficeId: office.value
    };
    config.method = "POST";
    config.url = `${API_BASE_URL}/api/user`;
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
    config.url = `${API_BASE_URL}/api/user/${id.value}`;
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
      FirstName: firstName.value,
      LastName: lastName.value,
      Email: email.value,
      Password: password.value,
      RoleID: parseInt(role.value),
      Id: parseInt(id.value),
      OfficeId: office.value
    };
    console.log(values);
    config.method = "PATCH";
    config.url = `${API_BASE_URL}/api/user`;
    return ajax_query(config, reloadTable, values);
  } catch (error) {
    console.log("error", error);
    console.log("Error");
    return;
  }
});

getOffice();

async function getOffice() {
  var xhr = new XMLHttpRequest();
  var url = `${proxy}/api/office`;
  var httpMethod = "GET";

  xhr.open(httpMethod, url, true);
  xhr.setRequestHeader("Authorization", token);
  xhr.onload = function () {
    if (this.status == 200) {
      var data = JSON.parse(this.responseText);
      appendOfficeOption(office, data);
    } else if (this.status == 404) {
      console.log("error");
    } else if (this.status == 401) {
      console.log("unauthorized");
    }
  };

  xhr.send();
}

btnSubmit.disabled =true;
reset.addEventListener('click',function(){
  btnSubmit.disabled = false;

})
