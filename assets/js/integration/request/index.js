import { appendOfficeOption } from "./offices"
import { appendServiceOption } from "./services"
import { API_BASE_URL } from "../../constants/ApiConstant"
import { getToken } from "../../auth/auth_manager"
import { Validate } from "../../helpers/validate"
import { Convert } from "../../helpers/convert"

//Request Form
var requestForm = document.getElementById("form-account-request")
var office = document.getElementById("office")
var service = document.getElementById("service")
var userNote = document.getElementById("user_note")
var file = document.getElementById("obj_file")

//Tracking Form
var trackingForm = document.getElementById("tracking_form");
var trackingId = document.getElementById("tracking_id");
var trackingModalId = document.getElementById("trackingId");
var officeNote = document.getElementById('office_note');
var status = document.getElementById('status');
var trackingModal = document.getElementById('trackingModal');
var userNoteModal = document.getElementById('user_note_modal');
var outputOffice = document.getElementById('outputOffice');
var outputService = document.getElementById('outputService');



//Global
var token = getToken()
var proxy = API_BASE_URL;

//OnStart
getOffice()
getService()
getRequest()

// Form Submit
requestForm.addEventListener("submit", (e) => {
	e.preventDefault()

	try {
		var fileNameRaw = file.files[0].name
		var splitter = fileNameRaw.lastIndexOf(".")
		var fileName = fileNameRaw.slice(0, splitter)
		var fileExtension = fileNameRaw.slice(splitter)

		var fileType = file.files[0].type
		var fileSize = file.files[0].size
		// 1,048,576 = 1MB
		var fileSizeLimit = 1048576 * 5

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

		console.log(userNote)
		reader.onload = function () {
			var values = {
				OfficeId: office.value,
				ServiceId: service.value,
				UserNote: userNote.value,
				FileData: reader.result.split(",")[1],
				FileName: fileName,
				FileSize: fileSize,
				FileExtension: fileExtension,
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

trackingForm.addEventListener("submit", (e) => {
	e.preventDefault()

	try {
		// Send request
		return findOneRequest(trackingId.value)


	} catch (error) {
		console.log("error", error)
		return
	}

})

// API Request
async function getOffice() {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/office`
	var httpMethod = 'GET'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			appendOfficeOption(office, data)
		}
		else if (this.status == 404) {
			console.log("error")
		}
		else if (this.status == 401) {
			console.log("unauthorized")
		}
	}

	xhr.send();
}

async function getService() {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/service`
	var httpMethod = 'GET'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			appendServiceOption(service, data)
		}
		else if (this.status == 404) {
			console.log("error")
		}
		else if (this.status == 401) {
			console.log("unauthorized")
		}
	}

	xhr.send();
}

async function getRequest() {
	var xhr = new XMLHttpRequest();
	//You can also try the url below if u want to get the foreign key values
	//url = `${proxy}/api/request/aggregated`
	var url = `${proxy}/api/request-aggregated`
	var httpMethod = 'GET'

	xhr.open(httpMethod, url, true);

	xhr.setRequestHeader('Authorization', token);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data)
		}
		else if (this.status == 404) {
			console.log("error")
		}
		else if (this.status == 401) {
			console.log("unauthorized")
		}
	}

	xhr.send();
}

async function findOneRequest(trackingId) {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/request-aggregated/${trackingId}`
	var httpMethod = 'GET'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data)
			
				trackingModalId.value = data.TrackingId;
				outputOffice.value = data.Office;
				outputService.value = data.Service;
				userNoteModal.value = data.UserNote;
				officeNote.value = data.OfficeNote;
				status.value = data.Status;
				trackingModal.style.display="block";

		}
		else if (this.status == 404) {
			console.log("error")
		}
		else if (this.status == 401) {
			console.log("unauthorized")
		}
	}

	xhr.send();
}

async function deleteRequest(trackingId) {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/request/${trackingId}`
	var httpMethod = 'DELETE'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data)
		}
		else if (this.status == 404) {
			console.log("error")
		}
		else if (this.status == 401) {
			console.log("unauthorized")
		}
	}

	xhr.send();
}

async function updateRequest(values) {
	//values should have id
	//suggestion: can you add a boolean isFileNew if user put a new file

	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/request`
	var httpMethod = 'PATCH'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data)
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
