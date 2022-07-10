import { getToken } from "../auth/auth_manager.js";
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
var token = getToken();
var proxy = "https://localhost:44310";
document.body.onload = getAllUsers();
getOffice();
async function getOffice() {
  var xhr = new XMLHttpRequest();
  var url = `${proxy}/api/office`;
  var httpMethod = "GET";

  xhr.open(httpMethod, url, true);

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

function getAllUsers() {
  var xhr = new XMLHttpRequest();
  var url = `${proxy}/api/user-aggregated`;
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("Authorization", token);
  xhr.onload = function () {
    if (this.status == 200) {
      const loadingScreen =
        document.getElementsByClassName("loading-screen")[0];
      loadingScreen.style.display = "none";
      var data = JSON.parse(this.responseText);
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        table.innerHTML += ` <tr class="multipleOpenBtn">
                      <td class="table-id">${data[i].Id}</td>
                      <td class="table-first-name">${data[i].FirstName}</td>
                      <td class="table-last-name">${data[i].LastName}</td>
                      <td class="table-email">${data[i].Email}</td>
                      <td class="password">${data[i].Password}</td>
                      <td class="table-role">${data[i].Role}</td>
                      <td class="table-office">${data[i].Office}</td>
                      <td class="table-date-created">${data[i].CreatedAt}</td>
                      <td class="table-date-updated">${data[i].UpdatedAt}</td>
                      </tr>`;
      }
    }
  };
  xhr.send();
}

async function createUsers(values) {
  var xhr = new XMLHttpRequest();
  var url = `${proxy}/api/user`;
  var httpMethod = "POST";

  xhr.open(httpMethod, url, true);

  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("Authorization", token);

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
      var data = JSON.parse(this.responseText);
      if (data == "Success") {
        alert("User Created");
        //when reset the multipleModal class is not working
        var myTable = document.getElementById("table");
        var rowCount = myTable.rows.length;
        for (var x = rowCount - 1; x > 0; x--) {
          myTable.deleteRow(x);
        }

        getAllUsers();
        document.getElementById("multipleModal").style.display = "none";
      }
      console.log(data);
    } else if ((this.status = 404)) {
      console.log("error");
    }
  };

  xhr.send(JSON.stringify(values));
}

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
      OfficeId: office.value,
    };
    console.log(values);

    return createUsers(values);

    console.log(values);
  } catch (error) {
    console.log("error", error);
    console.log("Error");
    return;
  }
});
//Delete
async function deleteUser(Id) {
  var xhr = new XMLHttpRequest();
  var url = `${proxy}/api/user/${Id}`;
  var httpMethod = "DELETE";

  xhr.open(httpMethod, url, true);
  xhr.setRequestHeader("Authorization", token);

  xhr.onload = function () {
    if (this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
      if (data == "Deleted") {
        alert("User Deleted");
        //when reset the multipleModal class is not working
        var myTable = document.getElementById("table");
        var rowCount = myTable.rows.length;
        for (var x = rowCount - 1; x > 0; x--) {
          myTable.deleteRow(x);
        }
        getAllUsers();
        document.getElementById("multipleModal").style.display = "none";
      }
    } else if ((this.status = 404)) {
      console.log("error");
    }
  };
  xhr.send();
}

btnDelete.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    // Send request
    console.log(id.value);
    return deleteUser(id.value);
  } catch (error) {
    console.log("error", error);
    console.log("Error");
    return;
  }
});

//update
async function updateUsers(values) {
  //values should have id
  var xhr = new XMLHttpRequest();
  var url = `${proxy}/api/user`;
  var httpMethod = "PATCH";

  xhr.open(httpMethod, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", token);
  xhr.onload = function () {
    if (this.status == 200) {
      // var data = JSON.parse(this.responseText);
      console.log(this.responseText);
      alert("User Updated");
      //when reset the multipleModal class is not working
      var myTable = document.getElementById("table");
      var rowCount = myTable.rows.length;
      for (var x = rowCount - 1; x > 0; x--) {
        myTable.deleteRow(x);
      }
      getAllUsers();
      document.getElementById("multipleModal").style.display = "none";
    } else if (this.status == 404) {
      console.log("error");
    } else if (this.status == 401) {
      console.log("unauthorized");
    }
  };

  xhr.send(JSON.stringify(values));
}
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
    };
    console.log(values);

    return updateUsers(values);
  } catch (error) {
    console.log("error", error);
    console.log("Error");
    return;
  }
});
