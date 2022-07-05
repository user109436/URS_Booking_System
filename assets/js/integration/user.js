//global var


//user fields
var role = document.getElementById("inputRole");
var firstName = document.getElementById("inputFirstName");
var lastName = document.getElementById("inputLastName");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var btnSubmit = document.getElementById("btnSubmit");
var btnDelete = document.getElementById("btnDelete");
var id = document.getElementById("inputId");

var proxy = "https://localhost:44310"

//Get "not yet tested - no data"
function getAllUsers() {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/user`
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
                      <td class="table-first-name">${data[i].FirstName}</td>
                      <td class="table-last-name">${data[i].LastName}</td>
                      <td class="table-email">${data[i].Email}</td>
                      <td class="password">${data[i].Password}</td>
                      <td class="table-role">${data[i].RoleId}</td>
                      <td class="table-date-created">${data[i].CreatedAt}</td>
                      <td class="table-date-updated">${data[i].UpdatedAt}</td>
                      
                      </tr>`;
                     
                    // console.log(i);
                  }
                  console.log(table);
        // console.log(data);

      
      }
    };
    xhr.send();
  }



  async function createUsers(values) {

    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/user`
    var httpMethod = 'POST'
  
    xhr.open(httpMethod, url, true);
  
    //Send the proper header information along with the request
    xhr.setRequestHeader('Content-type', 'application/json');
  
    xhr.onload = function () {
      if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        if(data == 'Success'){
          alert('User Created');
          table.innerHTML ="" ;
          getAllUsers();
          document.getElementById('multipleModal').style.display = "none";
          
        }
        console.log(data)
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
				FirstName: firstName.value,
				LastName: lastName.value,
				Email: email.value,
        Password: password.value,
        RoleID:role.value
			}
        console.log(values);

			

			return createUsers(values)
		
        console.log(values)

	} catch (error) {
		console.log("error", error)
		console.log("Error")
		return
	}

})


async function deleteUser(Id) {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/user/${Id}`
	var httpMethod = 'DELETE'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data)
      if(data == 'Deleted'){
        alert('User Deleted');
        table.innerHTML = "" ;
        getAllUsers();
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
	
    console.log(id.value);
			
   
			
		return deleteUser(id.value);
      

	} catch (error) {
		console.log("error", error)
		console.log("Error")
		return
	}

})