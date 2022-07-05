//global var

var requestForm = document.getElementById("formUserUpdate")
var btnSubmit = document.getElementById("btnSubmit");
var office = document.getElementById("office")
var service = document.getElementById("service")
var userNote = document.getElementById("user_note")
var file = document.getElementById("obj_file")

//user fields
var userNumber = document.getElementById("inputUserNumber");
var firstName = document.getElementById("inputFirstName");
var lastName = document.getElementById("inputLastName");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var proxy = "https://localhost:44310"

//Get "not yet tested - no data"
function getAllUsers() {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/register/get/{Id}`
    xhr.open("GET", url, true);
    xhr.onload = function () {
      
      if (this.status == 200) {
        // const loadingScreen =
        //   document.getElementsByClassName("loading-screen")[0];
        // loadingScreen.style.display = "none";
        var data = JSON.parse(this.responseText);
        for (let i = 0; i < data.length; i++) {
                    table.innerHTML += ` <tr class="multipleOpenBtn">
                      <td class="table-id">${data[i].id}</td>
                      <td class="table-user-number">${data[i].userNumber}</td>
                      <td class="table-first-name">${data[i].first_name}</td>
                      <td class="table-last-name">${data[i].last_name}</td>
                      <td class="table-position">${data[i].position}</td>
                      <td class="table-email">${data[i].email}</td>
                      <td class="password">${data[i].password}</td>
                      <td class="table-role">${data[i].role}</td>
                      <td class="table-verification">${data[i].verified}</td>
                      <td  class="table-status" >${data[i].active}</td>
                      <td class="table-date-created">${data[i].createdAt}</td>
                      <td class="table-date-updated">${data[i].updatedAt}</td>
                      </tr>`;
                    // console.log(i);
                  }
        console.log(data);

      
      }
    };
    xhr.send();
  }


//   function getAllOffice() {
    
//     var xhr = new XMLHttpRequest();
//     var url = `${proxy}/api/office`
//     xhr.open("GET", url, true);
//     xhr.onload = function () {
      
//       if (this.status == 200) {
//         // const loadingScreen =
//         //   document.getElementsByClassName("loading-screen")[0];
//         // loadingScreen.style.display = "none";
//         var data = JSON.parse(this.responseText);
//         for (let i = 0; i < data.length; i++) {
//           table.innerHTML += ` <tr class="multipleOpenBtn">
//             <td class="table-id">${data[i].id}</td>
//             <td class="table-user-number">${data[i].userNumber}</td>
//             <td class="table-first-name">${data[i].first_name}</td>
//             <td class="table-last-name">${data[i].last_name}</td>
//              <td class="table-position">${data[i].position}</td>
//             <td class="table-email">${data[i].email}</td>
//             <td class="password">${data[i].password}</td>
//             <td class="table-role">${data[i].role}</td>
//             <td class="table-verification">${data[i].verified}</td>
//             <td  class="table-status" >${data[i].active}</td>
//             <td class="table-date-created">${data[i].createdAt}</td>
//             <td class="table-date-updated">${data[i].updatedAt}</td>
//             </tr>`;
//           // console.log(i);
//         }
//         console.log(data);

      
//       }
//     };
//     xhr.send();
//   }
//Post "Not yet working"
  async function createUsers(values) {

    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/register/create`
    var httpMethod = 'POST'
  
    xhr.open(httpMethod, url, true);
  
    //Send the proper header information along with the request
    xhr.setRequestHeader('Content-type', 'application/json');
  
    xhr.onload = function () {
      if (this.status == 200) {
        var data = JSON.parse(this.responseText);
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
  // console.log('request form');
	try {
		// var fileName = file.files[0].name
		// var fileType = file.files[0].type
		// var fileSize = file.files[0].size
		// // 1,048,576 = 1MB
		// var fileSizeLimit = 1048576 * 5
      
		
	
// Send request
		// var reader = new FileReader();
		// console.log("filename", fileName);

		// reader.readAsDataURL(file.files[0]);

		
			var values = {
				UserNumber: userNumber.value,
				FirstName: firstName.value,
				LastName: lastName.value,
				Position: position,
				Email: email,
                Password: password
			}
            console.log(values);

			// testBtn.href = reader.result
			// testBtn.download = "test.pdf"

			
			return createUsers(values)
		
        console.log(values)

	} catch (error) {
		console.log("error", error)
		console.log("Error")
		return
	}

})
// console.log(requestForm);