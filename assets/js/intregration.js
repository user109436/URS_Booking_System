
  // CRUD = READ

  //Using local json data file
  function readData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "testData.json", true);
    xhr.onload = function () {
      if (this.status == 200) {
        const loadingScreen =
          document.getElementsByClassName("loading-screen")[0];
        loadingScreen.style.display = "none";
        var users = JSON.parse(this.responseText);
        // console.log(users.length);

        for (let i = 0; i < users.length; i++) {
          table.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-id">${users[i].id}</td>
            <td class="table-user-number">${users[i].userNumber}</td>
            <td class="table-first-name">${users[i].first_name}</td>
            <td class="table-last-name">${users[i].last_name}</td>
             <td class="table-position">${users[i].position}</td>
            <td class="table-email">${users[i].email}</td>
            <td class="password">${users[i].password}</td>
            <td class="table-role">${users[i].role}</td>
            <td class="table-verification">${users[i].verified}</td>
            <td  class="table-status" >${users[i].active}</td>
            <td class="table-date-created">${users[i].createdAt}</td>
            <td class="table-date-updated">${users[i].updatedAt}</td>
            </tr>`;
          // console.log(i);
        }
      }
    };
    xhr.send();
  }




  
