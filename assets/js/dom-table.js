
// CRUD = READ
const tableHeader = `<tr class="bg-primary" id="table-header">
                    <th>ID</th>
                    <th>Offices</th>
                    <th>Date Created</th>
                    <th>Date Updated</th>
                    </tr>
                    `
console.log(tableHeader);
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
  .then(response => response.json())
  .then(todos =>  {
    createTableData(todos);
  })

 function formInputs(){

 }



