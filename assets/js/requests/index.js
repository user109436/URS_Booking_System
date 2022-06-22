import { appendOfficeOption } from "./offices"
import { appendServiceOption } from "./services"
import { Validate } from "../helpers/validate"
import { Convert } from "../helpers/convert"

var requestForm = document.getElementById("form-account-request")
var office = document.getElementById("office")
var service = document.getElementById("service")
var userNote = document.getElementById("user_note")
var file = document.getElementById("obj_file")
var proxy = "https://localhost:44310"

//OnStart
getOffice()
getService()
getRequest()


// Form Submit
requestForm.addEventListener("submit", (e) => {
	e.preventDefault()

	try {
		var fileName = file.files[0].name
		var fileType = file.files[0].type
		var fileSize = file.files[0].size
		// 2097152 = 2MB
		var fileSizeLimit = 2097152 * 10

		//Validate FileType and FileSize
		if (!Validate.fileType(fileType)) {
			alert(`${fileName} is not pdf.`)
			return
		}

		if (!Validate.fileSize(fileSize, fileSizeLimit)) {
			alert(`${Convert.toFileSize(fileSize)} is too large.`)
			return
		}

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
			return sendRequest(values)
		};

	} catch (error) {
		console.log("error", error)
		console.log("Error")
		return
	}

})

// API Request
async function getOffice() {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/request/get-all-offices`
	var httpMethod = 'GET'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			appendOfficeOption(office, data)
		} else if (this.status = 404) {
			console.log("error")
		}
	}

	xhr.send();
}

async function getService() {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/request/get-all-services`
	var httpMethod = 'GET'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			appendServiceOption(service, data)
		} else if (this.status = 404) {
			console.log("error")
		}
	}

	xhr.send();
}

async function getRequest() {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/request/get-all-requests`
	var httpMethod = 'GET'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data)
		} else if (this.status = 404) {
			console.log("error")
		}
	}

	xhr.send();
}

async function deleteRequest(trackingId) {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/request/delete-request/${trackingId}`
	var httpMethod = 'DELETE'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data)
		} else if (this.status = 404) {
			console.log("error")
		}
	}

	xhr.send();
}

async function sendRequest(values) {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/request/create-request`
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
