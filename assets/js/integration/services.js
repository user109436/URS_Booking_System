//Global Var

var proxy = "https://localhost:44310"



  function getAllServices() {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/service/{Id}`
    xhr.open("GET", url, true);
    xhr.onload = function () {
      
      if (this.status == 200) {
        // const loadingScreen =
        //   document.getElementsByClassName("loading-screen")[0];
        // loadingScreen.style.display = "none";
        var data = JSON.parse(this.responseText);
        for (let i = 0; i < data.length; i++) {
          table.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-id">${data[i].Id}</td>
            <td class="table-user-number">${data[i].Name}</td>
			<td class="table-user-number">${data[i].Fee}</td>
            <td class="table-first-name">${data[i].CreatedAt}</td>
            <td class="table-first-name">${data[i].UpdatedAt}</td>
            </tr>`;
          // console.log(i);
        }
        console.log(data);

      
      }
    };
    xhr.send();
  }