import { appendOfficeOption } from "./offices"
import { appendServiceOption } from "./services"

var requestForm = document.getElementById("form-account-request")
var office = document.getElementById("office")
var service = document.getElementById("service")
var userNote = document.getElementById("user_note")
var objFile = document.getElementById("obj_file")

// Form Submit
requestForm.addEventListener("submit", (e) => {
	e.preventDefault()

	var values = {
		OfficeId: office.value,
		ServiceId: service.value,
		UserNote: userNote.value,
		ObjFile: objFile.files,
	}

	console.log(values)
})

// Appending
appendOfficeOption(office, [
	{
		Id: 1,
		Name: "Office 1"
	},
	{
		Id: 2,
		Name: "Office 2"
	}
])

appendServiceOption(service, [
	{
		Id: 1,
		Name: "Service 1",
		Fee: 20
	},
	{
		Id: 2,
		Name: "Service 2",
		Fee: 20
	}
])

// API Request
async function getApi(url) {
	const response = await fetch(url);
	var data = await response.json();
	return data;
}

async function sendRequest(url, values) {
	const response = await fetch(url, {
		method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(values)
	});

	console.log(response)

	// fetch("https://localhost:44310/api/test/create-test", {
	// 	method: "POST",
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify(values)
	// }).then(res => {
	// 	console.log("Request complete! response:", res);

	// });
}
