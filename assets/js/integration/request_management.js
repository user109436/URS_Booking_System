import { getToken } from "../auth/auth_manager.js";
import { API_BASE_URL } from "../constants/ApiConstant.js";
import { ajax_query } from "../ajax_crud.js";
import { multipleModalInit } from "../utilities.js";
import { tableSearchInit } from "../table-features.js";

var token = getToken();
var pending = document.getElementById('pendingRequest');
var paid = document.getElementById('paidRequest');
var processing = document.getElementById('processingRequest');
var finished = document.getElementById('finishedRequest');
var paymentRequired = document.getElementById('paymentRequired');
var statusId={paid:1,processing:2,pending:3,paymentRequired:4,finished:5}
const config = {
    method: "GET",
    url: `${API_BASE_URL}/api/all-request-aggregated/status`,
    async: true,
    headerNames: ["Content-type", "Authorization"],
    headerValues: ["application/json", token],
  };

  

  loadFinish();
  loadPaid();
  loadPaymentRequired();
  loadProcessing();
  loadPending();
async function loadPending(){
    config.url = `${API_BASE_URL}/api/all-request-aggregated/status/${statusId.pending}`;

    const initTable = (data) => {
        const loadingScreen = document.getElementsByClassName("loading-screen")[0];
        loadingScreen.style.display = "none";
        for (let i = 0; i < data.length; i++) {
        pending.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-createdAt">${data[i].CreatedAt}</td>
            <td class="table-service">${data[i].Service}</td>
            <td class="table-fileName">${data[i].FileName}</td>
            <td class="table-userNote">${data[i].UserNote}</td>
            <td class="table-status">${data[i].Status}</td>
            
         </tr>`;
        }
        multipleModalInit();
        tableSearchInit();
      };
      document.body.onload = ajax_query(config, initTable);
}

async function loadPaid(){
    config.url = `${API_BASE_URL}/api/all-request-aggregated/status/${statusId.paid}`;

    const initTable = (data) => {
        const loadingScreen = document.getElementsByClassName("loading-screen")[0];
        loadingScreen.style.display = "none";
        for (let i = 0; i < data.length; i++) {
        paid.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-createdAt">${data[i].CreatedAt}</td>
            <td class="table-service">${data[i].Service}</td>
            <td class="table-fileName">${data[i].FileName}</td>
            <td class="table-userNote">${data[i].UserNote}</td>
            <td class="table-status">${data[i].Status}</td>
            
         </tr>`;
        }
        multipleModalInit();
        tableSearchInit();
      };
      document.body.onload = ajax_query(config, initTable);
}

async function loadProcessing(){
    config.url = `${API_BASE_URL}/api/all-request-aggregated/status/${statusId.processing}`;

    const initTable = (data) => {
        const loadingScreen = document.getElementsByClassName("loading-screen")[0];
        loadingScreen.style.display = "none";
        for (let i = 0; i < data.length; i++) {
        processing.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-createdAt">${data[i].CreatedAt}</td>
            <td class="table-service">${data[i].Service}</td>
            <td class="table-fileName">${data[i].FileName}</td>
            <td class="table-userNote">${data[i].UserNote}</td>
            <td class="table-status">${data[i].Status}</td>
            
         </tr>`;
        }
        multipleModalInit();
        tableSearchInit();
      };
      document.body.onload = ajax_query(config, initTable);
}

async function loadPaymentRequired(){
    config.url = `${API_BASE_URL}/api/all-request-aggregated/status/${statusId.paymentRequired}`;

    const initTable = (data) => {
        const loadingScreen = document.getElementsByClassName("loading-screen")[0];
        loadingScreen.style.display = "none";
        for (let i = 0; i < data.length; i++) {
        paymentRequired.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-createdAt">${data[i].CreatedAt}</td>
            <td class="table-service">${data[i].Service}</td>
            <td class="table-fileName">${data[i].FileName}</td>
            <td class="table-userNote">${data[i].UserNote}</td>
            <td class="table-status">${data[i].Status}</td>
            
         </tr>`;
        }
        multipleModalInit();
        tableSearchInit();
      };
      document.body.onload = ajax_query(config, initTable);
}

async function loadFinish(){
    config.url = `${API_BASE_URL}/api/all-request-aggregated/status/${statusId.finished}`;

    const initTable = (data) => {
        const loadingScreen = document.getElementsByClassName("loading-screen")[0];
        loadingScreen.style.display = "none";
        for (let i = 0; i < data.length; i++) {
        finished.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-createdAt">${data[i].CreatedAt}</td>
            <td class="table-service">${data[i].Service}</td>
            <td class="table-fileName">${data[i].FileName}</td>
            <td class="table-userNote">${data[i].UserNote}</td>
            <td class="table-status">${data[i].Status}</td>
            
         </tr>`;
        }
        multipleModalInit();
        tableSearchInit();
      };
      document.body.onload = ajax_query(config, initTable);
}



//start all
// getRequestPending();
// getRequestPaid();
// getRequestProcessing();
// getRequestFinished();

// async function getRequestPending() {
    
//     var xhr = new XMLHttpRequest();
//     var url = `${proxy}/api/all-request-aggregated/status/3`
//     xhr.open("GET", url, true);
//     xhr.setRequestHeader('Authorization', token);
//     xhr.onload = function () {
//     if (this.status == 200) {
//         // const loadingScreen =
//         // document.getElementsByClassName("loading-screen")[0];
//         // loadingScreen.style.display = "none";
//         var data = JSON.parse(this.responseText);
        
        // console.log(data);
        // for (let i = 0; i < data.length; i++) {
        //     pending.innerHTML += ` <tr class="multipleOpenBtn">
        //     <td class="table-createdAt">${data[i].CreatedAt}</td>
        //     <td class="table-service">${data[i].Service}</td>
        //     <td class="table-fileName">${data[i].FileName}</td>
		// 	<td class="table-userNote">${data[i].UserNote}</td>
        //     <td class="table-status">${data[i].Status}</td>
            
        //     </tr>`;
            
        
//         }
    
//     }
//     };

//     xhr.send();
// }
// async function getRequestPaid() {
    
//     var xhr = new XMLHttpRequest();
//     var url = `${proxy}/api/all-request-aggregated/status/1`
//     xhr.open("GET", url, true);
//     xhr.setRequestHeader('Authorization', token);
//     xhr.onload = function () {
//     if (this.status == 200) {
//         // const loadingScreen =
//         // document.getElementsByClassName("loading-screen")[0];
//         // loadingScreen.style.display = "none";
//         var data = JSON.parse(this.responseText);
        
//         console.log(data);
//         for (let i = 0; i < data.length; i++) {
//             paid.innerHTML += ` <tr class="multipleOpenBtn">
//             <td class="table-createdAt">${data[i].CreatedAt}</td>
//             <td class="table-service">${data[i].Service}</td>
//             <td class="table-fileName">${data[i].FileName}</td>
// 			<td class="table-userNote">${data[i].UserNote}</td>
//             <td class="table-status">${data[i].Status}</td>
            
//             </tr>`;
            
        
//         }
    
//     }
//     };

//     xhr.send();
// }
// async function getRequestProcessing() {
    
//     var xhr = new XMLHttpRequest();
//     var url = `${proxy}/api/all-request-aggregated/status/2`
//     xhr.open("GET", url, true);
//     xhr.setRequestHeader('Authorization', token);
//     xhr.onload = function () {
//     if (this.status == 200) {
//         // const loadingScreen =
//         // document.getElementsByClassName("loading-screen")[0];
//         // loadingScreen.style.display = "none";
//         var data = JSON.parse(this.responseText);
        
//         console.log(data);
//         for (let i = 0; i < data.length; i++) {
//             processing.innerHTML += ` <tr class="multipleOpenBtn">
//             <td class="table-createdAt">${data[i].CreatedAt}</td>
//             <td class="table-service">${data[i].Service}</td>
//             <td class="table-fileName">${data[i].FileName}</td>
// 			<td class="table-userNote">${data[i].UserNote}</td>
//             <td class="table-status">${data[i].Status}</td>
            
//             </tr>`;
            
        
//         }
    
//     }
//     };

//     xhr.send();
// }
// async function getRequestFinished() {
    
//     var xhr = new XMLHttpRequest();
//     var url = `${proxy}/api/all-request-aggregated/status/4`
//     xhr.open("GET", url, true);
//     xhr.setRequestHeader('Authorization', token);
//     xhr.onload = function () {
//     if (this.status == 200) {
//         // const loadingScreen =
//         // document.getElementsByClassName("loading-screen")[0];
//         // loadingScreen.style.display = "none";
//         var data = JSON.parse(this.responseText);
        
//         console.log(data);
//         for (let i = 0; i < data.length; i++) {
//             finished.innerHTML += ` <tr class="multipleOpenBtn">
//             <td class="table-createdAt">${data[i].CreatedAt}</td>
//             <td class="table-service">${data[i].Service}</td>
//             <td class="table-fileName">${data[i].FileName}</td>
// 			<td class="table-userNote">${data[i].UserNote}</td>
//             <td class="table-status">${data[i].Status}</td>
            
//             </tr>`;
            
        
//         }
    
//     }
//     };

//     xhr.send();
// }
// console.log(token);