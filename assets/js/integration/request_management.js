import { getToken } from "../auth/auth_manager.js";
import { API_BASE_URL } from "../constants/ApiConstant.js";
import { ajax_query } from "../ajax_crud.js";
import { multipleModalInit } from "../utilities.js";
import { tableSearchInit } from "../table-features.js";

var token = getToken();
var proxy = "https://localhost:44310";
var tabsRadio = document.getElementsByClassName("tabs_radio");
var status = document.getElementById('status');
var officeNote = document.getElementById('office_note');
var btnUpdate = document.getElementById('btnUpdate');
var id = document.getElementById('id');
async function getRequest(id,className) {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/all-request-aggregated/status/${id}`
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Authorization', token);
    xhr.onload = function () {
    if (this.status == 200) {
        const loadingScreen =
        document.getElementsByClassName("loading-screen")[0];
        loadingScreen.style.display = "none";
        var data = JSON.parse(this.responseText);
        console.log(data);

        const table = document.getElementById(className);
        for (let i = 0; i < data.length; i++) {
            table.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-id" hidden>${data[i].Id}</td>
            <td class="table-createdAt">${data[i].CreatedAt}</td>
            <td class="table-service">${data[i].Service}</td>
            <td class="table-fileName">${data[i].FileName}</td>
			<td class="table-userNote">${data[i].UserNote}</td>
            <td class="table-officeNote">${data[i].OfficeNote}</td>
            <td class="table-status">${data[i].Status}</td>
            
            </tr>`;
        }
        multipleModalInit();
        tableSearchInit();
    }
    };

    xhr.send();
}
const array = Array.from(tabsRadio)
array.forEach(el => {

    el.addEventListener("click",()=> {
    if(el.value == 1){
        getRequest(el.value,"paidRequest");
        var myTable = document.getElementById("paidRequest");
        var rowCount = myTable.rows.length;
        for (var x = rowCount - 1; x > 0; x--) {
        myTable.deleteRow(x);
    }
    
    }else  if(el.value == 2){
        getRequest(el.value,"processingRequest");
        var myTable = document.getElementById("processingRequest");
        var rowCount = myTable.rows.length;
        for (var x = rowCount - 1; x > 0; x--) {
        myTable.deleteRow(x);
    }
    
    }else  if(el.value == 3){
        getRequest(el.value,"pendingRequest");
        var myTable = document.getElementById("pendingRequest");
        var rowCount = myTable.rows.length;
        for (var x = rowCount - 1; x > 0; x--) {
        myTable.deleteRow(x);
    }
    
    }else  if(el.value == 4){
        getRequest(el.value,"paymentRequired");
        var myTable = document.getElementById("paymentRequired");
        var rowCount = myTable.rows.length;
        for (var x = rowCount - 1; x > 0; x--) {
        myTable.deleteRow(x);
    }
        
    }else  if(el.value == 5){
        getRequest(el.value,"finishedRequest");
        var myTable = document.getElementById("finishedRequest");
        var rowCount = myTable.rows.length;
        for (var x = rowCount - 1; x > 0; x--) {
        myTable.deleteRow(x);
    }
    
    }
    })
})

//Update
async function updateRequest(values) {
	//values should have id
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/request`
	var httpMethod = 'PATCH'

	xhr.open(httpMethod, url, true);
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader('Authorization', token);
	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data)
    alert('Request Updated');
      //when reset the multipleModal class is not working
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
if (btnUpdate){btnUpdate.addEventListener("click", (e) => {
e.preventDefault()

try {	
// Send request
var values = {
    Id : id.value,
    OfficeNote: officeNote.value,
    StatusId:convert(status.value)
};
    console.log(values);
    
    return updateRequest(values)
    
        
} catch (error) {
    console.log("error", error)
    console.log("Error")
    return;
}
})}

function convert(value){
    if(value=="Paid"){
    return 1;
    }else if(value=="Processing"){
    return 2;
    }else if(value=="Pending"){
    return 3;
    }else if(value=="Payment Required"){
    return 4;
    }else if(value=="Finished"){
    return 5;
    }
}