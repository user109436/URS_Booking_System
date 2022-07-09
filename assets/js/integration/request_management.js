import { getToken } from "../auth/auth_manager"


var token = getToken();
var proxy = "https://localhost:44310";
var pending = document.getElementById('pendingRequest');
var paid = document.getElementById('paidRequest');
var processing = document.getElementById('processingRequest');
var finished = document.getElementById('finishedRequest');


//start all
getRequestPending();
getRequestPaid();
getRequestProcessing();
getRequestFinished();

async function getRequestPending() {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/all-request-aggregated/status/3`
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Authorization', token);
    xhr.onload = function () {
    if (this.status == 200) {
        // const loadingScreen =
        // document.getElementsByClassName("loading-screen")[0];
        // loadingScreen.style.display = "none";
        var data = JSON.parse(this.responseText);
        
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            pending.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-createdAt">${data[i].CreatedAt}</td>
            <td class="table-service">${data[i].Service}</td>
            <td class="table-fileName">${data[i].FileName}</td>
			<td class="table-userNote">${data[i].UserNote}</td>
            <td class="table-status">${data[i].Status}</td>
            
            </tr>`;
            
        
        }
    
    }
    };

    xhr.send();
}
async function getRequestPaid() {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/all-request-aggregated/status/1`
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Authorization', token);
    xhr.onload = function () {
    if (this.status == 200) {
        // const loadingScreen =
        // document.getElementsByClassName("loading-screen")[0];
        // loadingScreen.style.display = "none";
        var data = JSON.parse(this.responseText);
        
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            paid.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-createdAt">${data[i].CreatedAt}</td>
            <td class="table-service">${data[i].Service}</td>
            <td class="table-fileName">${data[i].FileName}</td>
			<td class="table-userNote">${data[i].UserNote}</td>
            <td class="table-status">${data[i].Status}</td>
            
            </tr>`;
            
        
        }
    
    }
    };

    xhr.send();
}
async function getRequestProcessing() {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/all-request-aggregated/status/2`
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Authorization', token);
    xhr.onload = function () {
    if (this.status == 200) {
        // const loadingScreen =
        // document.getElementsByClassName("loading-screen")[0];
        // loadingScreen.style.display = "none";
        var data = JSON.parse(this.responseText);
        
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            processing.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-createdAt">${data[i].CreatedAt}</td>
            <td class="table-service">${data[i].Service}</td>
            <td class="table-fileName">${data[i].FileName}</td>
			<td class="table-userNote">${data[i].UserNote}</td>
            <td class="table-status">${data[i].Status}</td>
            
            </tr>`;
            
        
        }
    
    }
    };

    xhr.send();
}
async function getRequestFinished() {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/all-request-aggregated/status/4`
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Authorization', token);
    xhr.onload = function () {
    if (this.status == 200) {
        // const loadingScreen =
        // document.getElementsByClassName("loading-screen")[0];
        // loadingScreen.style.display = "none";
        var data = JSON.parse(this.responseText);
        
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            finished.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-createdAt">${data[i].CreatedAt}</td>
            <td class="table-service">${data[i].Service}</td>
            <td class="table-fileName">${data[i].FileName}</td>
			<td class="table-userNote">${data[i].UserNote}</td>
            <td class="table-status">${data[i].Status}</td>
            
            </tr>`;
            
        
        }
    
    }
    };

    xhr.send();
}
console.log(token);