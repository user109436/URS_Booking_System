export const getAsHtmlCollection = (parentElement, elementToSelect)=>{
    const nodeList = parentElement.querySelectorAll(elementToSelect);
    return Array.from(nodeList); 
}

// TODO:make the fill table form more re-usable and compatible in different fields
    // inputFields.forEach(element => {
    //   let {tagName} = element;
    //   console.log(element);
    //   if(tagName==='SELECT'){
    //     console.log('create dom option and set it selected:', element.classList.value);
    //     //check if option exist
    //   }
    //   if(tagName==='INPUT' || tagName==='TEXTAREA'){
    //     console.log('assign value to:', element.classList.value);
        
    //   }

    // });