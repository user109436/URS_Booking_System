//Global Var
var proxy = "https://localhost:44310"
var services = document.getElementById('services');
var btnDelete = document.getElementById('btnDelete');
var id = document.getElementById('id');
var btnSubmit = document.getElementById('btnSubmit');
var fee = document.getElementById('fee');


  function getAllServices() {
    
    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/service}`
    xhr.open("GET", url, true);
    xhr.onload = function () {
      
      if (this.status == 200) {
        // const loadingScreen =
        //   document.getElementsByClassName("loading-screen")[0];
        // loadingScreen.style.display = "none";
        var data = JSON.parse(this.responseText);
        for (let i = 0; i < data.length; i++) {
          table.innerHTML += ` <tr class="multipleOpenBtn">
            <td class="table-id">${data[i].Id}</td>
            <td class="table-services">${data[i].Name}</td>
			<td class="table-fee">${data[i].Fee}</td>
            <td class="table-date-created">${data[i].CreatedAt}</td>
            <td class="table-date-updated">${data[i].UpdatedAt}</td>
            </tr>`;
          // console.log(i);
        }
        console.log(data);

      
      }
    };
    xhr.send();
  }

  async function createServices(values) {

    var xhr = new XMLHttpRequest();
    var url = `${proxy}/api/service`
    var httpMethod = 'POST'
  
    xhr.open(httpMethod, url, true);
  
    //Send the proper header information along with the request
    xhr.setRequestHeader('Content-type', 'application/json');
  
    xhr.onload = function () {
      if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        if(data == 'Success'){
          alert('Service Created');
          table.innerHTML ="" ;
          getAllServices();
          document.getElementById('multipleModal').style.display = "none";
          
        }
        console.log(data)
      } else if (this.status = 404) {
        console.log("error")
      }
    }
  
    xhr.send(JSON.stringify(values));
  }


// Form Submit
btnSubmit.addEventListener("click", (e) => {
	e.preventDefault()
 
	try {	
// Send request
	
			var values = {
				Name: office.value,
        Fee: fee.value
				
			}
        console.log(values);

			return createServices(values)
		
        console.log(values)

	} catch (error) {
		console.log("error", error)
		console.log("Error")
		return
	}

})


async function deleteService(Id) {
	var xhr = new XMLHttpRequest();
	var url = `${proxy}/api/service/${Id}`
	var httpMethod = 'DELETE'

	xhr.open(httpMethod, url, true);

	xhr.onload = function () {
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data)
      if(data == 'Deleted'){
        alert('Service Deleted');
        table.innerHTML = "" ;
        getAllServices();
        document.getElementById('multipleModal').style.display = "none";
        
      }
		} else if (this.status = 404) {
			console.log("error")
		}
	}

	xhr.send();
}

btnDelete.addEventListener("click", (e) => {
	e.preventDefault()
 
	try {	
// Send request
	
    console.log(id.value);
			
   
			
		return deleteService(id.value);
      

	} catch (error) {
		console.log("error", error)
		console.log("Error")
		return
	}

})