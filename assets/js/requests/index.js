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
		//Validate FileType and FileSize
		if (!Validate.fileType(file.files[0].type)) {
			alert(`${file.files[0].name} is not pdf.`)
			return
		}

		// 2097152 = 2MB
		if (!Validate.fileSize(file.files[0].size, 2097152)) {
			alert(`${Convert.toFileSize(file.files[0].size)} is too large.`)
			return
		}

		// Send request
		var reader = new FileReader();
		reader.readAsDataURL(file.files[0]);

		reader.onload = function () {
			var values = {
				OfficeId: office.value,
				ServiceId: service.value,
				UserNote: userNote.value,
				FileData: reader.result.split(",")[1]
			}

			// testBtn.href = reader.result
			// testBtn.download = "test.pdf"

			console.log(values)
			return sendRequest(values)
		};

	} catch (error) {
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

async function sendRequest(values) {
	var url = `${proxy}/api/request/create-request`

	const response = await fetch(url, {
		method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(values)
	});

	console.log(response)
}
