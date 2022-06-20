import { appendOfficeOption } from "./offices"
import { appendServiceOption } from "./services"

var requestForm = document.getElementById("form-account-request")
var office = document.getElementById("office")
var service = document.getElementById("service")
var userNote = document.getElementById("user_note")
var file = document.getElementById("obj_file")
var port = 44310

//OnStart
getOffice()
getService()
// getRequest()

// Form Submit
requestForm.addEventListener("submit", (e) => {
	e.preventDefault()

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
		sendRequest(values)
	};
})


// API Request
async function getOffice() {
	const response = await fetch(`https://localhost:${port}/api/request/get-all-offices`);
	var data = await response.json();
	appendOfficeOption(office, data)
}

async function getService() {
	const response = await fetch(`https://localhost:${port}/api/request/get-all-services`);
	var data = await response.json();
	appendServiceOption(service, data)
}

async function getRequest() {
	const response = await fetch(`https://localhost:${port}/api/request/get-all-requests`);
	var data = await response.json();
	console.log(data)
}

async function sendRequest(values) {
	var url = `https://localhost:${port}/api/request/create-request`

	const response = await fetch(url, {
		method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(values)
	});

	console.log(response)
}
