const appendServiceOption = (service, data) => {
	for (var i of data) {
		var option = document.createElement("option")
		option.value = i.Id
		option.text = `${i.Name} - ${i.Fee}`

		service.appendChild(option)
	}
}

export { appendServiceOption };