//Global Var

var proxy = "https://localhost:44310"
var office = document.getElementById('office');
var btnDelete = document.getElementById('btnDelete');
var id = document.getElementById('id');
var btnSubmit = document.getElementById('btnSubmit');
var btnUpdate = document.getElementById('btnUpdate');

  function getAllOffice() {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/office`
    xhr.open("GET", url, true);
    xhr.onload = function () {
      
      if (this.status == 200) {
        const loadingScreen =
          document.getElementsByClassName("loading-screen")[0];
        loadingScreen.style.display = "none";
        var data = JSON.parse(this.responseText);
        for (let i = 0; i < data.length; i++) {
          table.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-id">${data[i].Id}</td>
            <td class="table-office">${data[i].Name}</td>
            <td class="table-date-created">${data[i].CreatedAt}</td>
            <td class="table-date-updated">${data[i].UpdatedAt}</td>
            </tr>`;
        }
        
      }
    };
    xhr.send();
  }

  async function createOffice(values) {

    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/office`
    var httpMethod = 'POST'
    xhr.open(httpMethod, url, true);
  
    //Send the proper header information along with the request
    xhr.setRequestHeader('Content-type', 'application/json');
  
    xhr.onload = function () {
      if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        if(data == 'Success'){
          alert('Office Created');
         //when deleted the multipleModal class is not working
        var myTable = document.getElementById("table");
        var rowCount = myTable.rows.length;
          for (var x=rowCount-1; x>0; x--) {
            myTable.deleteRow(x);
        }
          getAllOffice();
          document.getElementById('multipleModal').style.display = "none";
          
        }
        
      } else if (this.status = 404) {
        console.log("error")
      }
    }
    xhr.send(JSON.stringify(values));
  }

// Form Submit
btnSubmit.addEventListener("click", (e) => {
	e.preventDefault()
 
	try {	
// Send request
	
			var values = {
				Name: office.value
			}
        

			return createOffice(values)
		
        

	} catch (error) {
		console.log("error", error)
		console.log("Error")
		return
	}

})

//Delete
async function deleteOffice(Id) {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/office/${Id}`
	var httpMethod = 'DELETE'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data)
      if(data == 'Deleted'){
        alert('Office Deleted');
        //when deleted the multipleModal class is not working
        var myTable = document.getElementById("table");
          var rowCount = myTable.rows.length;
            for (var x=rowCount-1; x>0; x--) {
              myTable.deleteRow(x);
          }
        getAllOffice();
        document.getElementById('multipleModal').style.display = "none";
        
      }
		} else if (this.status = 404) {
			console.log("error")
		}
	}

	xhr.send();
}

btnDelete.addEventListener("click", (e) => {
	e.preventDefault()
 
	try {	
// Send request
	
		return deleteOffice(id.value);
    
	} catch (error) {
		console.log("error", error)
		console.log("Error")
		return
	}

})


//update
async function updateOffice(values) {
	//values should have id
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/office`
	var httpMethod = 'PATCH'

  xhr.open(httpMethod, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onload = function () {
		if (this.status == 200) {
      console.log(this.responseText);
      alert('Service Updated');
      //when reset the multipleModal class is not working
      var myTable = document.getElementById("table");
      var rowCount = myTable.rows.length;
        for (var x=rowCount-1; x>0; x--) {
          myTable.deleteRow(x);
      }
			getAllOffice();
      document.getElementById('multipleModal').style.display = "none";
		}
		else if (this.status == 404) {
			console.log("error")
		}
		else if (this.status == 401) {
			console.log("unauthorized")    
		}  
	}
	xhr.send(JSON.stringify(values));
}
btnUpdate.addEventListener("click", (e) => {
  e.preventDefault()
 
  try {	
// Send request
  
      var values = {
        Name: office.value,
        Id : id.value
      }
      
      return updateOffice(values)

  } catch (error) {
    console.log("error", error)
    console.log("Error")
    return
  }

})