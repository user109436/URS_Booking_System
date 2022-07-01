
// CRUD = READ
const tableHeader = `<tr class="bg-primary" id="table-header">
                    <th>ID</th>
                    <th>Offices</th>
                    <th>Date Created</th>
                    <th>Date Updated</th>
                    </tr>
                    `
console.log(tableHeader);
const loader = document.querySelector("#loading");
// function loader() {
//    `<div class="loading-screen border-rounded">
//       <div class="loading-screen-box">
//         <div class="loading">
//           <div class="dot">L</div>
//           <div class="dot">O</div>
//           <div class="dot">A</div>
//           <div class="dot">D</div>
//           <div class="dot">I</div>
//           <div class="dot">N</div>
//           <div class="dot">G</div>
//           <span class="text">Please Wait...</span>
//         </div>
//       </div>
//     </div>`;
//   }
  
  function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}

 function createTableData(array) {
    
    for (let i = 0; i < array.length; i++) {
        table.innerHTML+=  ` <tr class="multipleOpenBtn">
        <td>${array[i].userId}</td>
        <td>${array[i].id}</td>
        <td>${array[i].title}</td>
        <td>${array[i].completed}</td>
        </tr>`
        
      }
  }

  fetch('https://jsonplaceholder.typicode.com/todos/') // ajax
  displayLoading()
  .then(response => response.json())
  .then(todos =>  {
    hideLoading()
    createTableData(todos);
  })

function formInputs(){

}




  
