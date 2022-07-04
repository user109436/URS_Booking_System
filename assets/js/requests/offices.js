const appendOfficeOption = (office, data) => {
    for (var i of data) {
        var option = document.createElement("option")
        option.value = i.Id
        option.text = i.Name

        office.appendChild(option)
    }
}

export { appendOfficeOption };