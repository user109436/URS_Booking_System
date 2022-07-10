const xhr = new XMLHttpRequest();

export const setRequestHeaders = (name = [], value = []) => {
  for (const key in name) {
    xhr.setRequestHeader(name[key], value[key]);
  }
};

export const ajax_query = (config, cb, fieldValues) => {
  if (!config) return false;
  console.log(config.method, ":", config.url);
  xhr.open(config.method, config.url, config.async);
  setRequestHeaders(config.headerNames, config.headerValues);
  xhr.onload = function () {
    if (this.status == 200) {
      var data = JSON.parse(this.responseText);
      cb(data);
    } else if ((this.status = 404)) {
      console.log("error");
    }
  };
  if (fieldValues) return xhr.send(JSON.stringify(fieldValues));
  return xhr.send();
};
