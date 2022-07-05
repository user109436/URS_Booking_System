var requestForm = document.getElementById("form-account-request")
var btnSubmit = document.getElementById("btnSubmit");
var office = document.getElementById("office")
var service = document.getElementById("service")
var userNote = document.getElementById("user_note")
var file = document.getElementById("obj_file")
var proxy = "https://localhost:44310"


//Get
function getAllRequest() {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/request/{trackingId}`
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
            <td class="table-id">${data[i].TrackingId}</td>
            <td class="table-id">${data[i].OfficeId}</td>
            <td class="table-user-number">${data[i].ServiceId}</td>
			      <td class="table-user-number">${data[i].StatusId}</td>
      	    <td class="table-user-number">${data[i].UserNote}</td>
            <td class="table-user-number">${data[i].OfficeNote}</td>
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

//Post
  async function createRequest(values) {

    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/request`
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
		var fileName = file.files[0].name
		var fileType = file.files[0].type
		var fileSize = file.files[0].size
		// 1,048,576 = 1MB
		var fileSizeLimit = 1048576 * 5

		
	
// Send request
		var reader = new FileReader();
		console.log("filename", fileName);

		reader.readAsDataURL(file.files[0]);

		reader.onload = function () {
			var values = {
				OfficeId: office.value,
				ServiceId: service.value,
				UserNote: userNote.value,
				FileData: reader.result.split(",")[1],
				FileName: fileName
			}

			// testBtn.href = reader.result
			// testBtn.download = "test.pdf"

			console.log(values)
			return createRequest(values)
		};

	} catch (error) {
		console.log("error", error)
		console.log("Error")
		return
	}

})
console.log(requestForm);