const progressBar = document.querySelector("#progressbar");
this.addEventListener('DOMContentLoaded', (e) => {
  progressBar.style.display = 'none';
});

document.getElementById('json').addEventListener('click', (event) => {
  progressBar.style.display = 'block';
  document.getElementById('result').innerHTML = '';
  setTimeout(() => {
    getRequest('city.json', true, (response) => {
      let output;
      let cities = JSON.parse(response);
      if (cities) {
        cities.forEach((city) => {
          output += `<ul>`;
          output += `<li>${city.title}</li>`;
          output += `<li>${city.location_type}</li>`;
          output += `<li>${city.woeid}</li>`;
          output += `<li>${city.latt_long}</li>`;
          output += `</ul>`;
        });
        document.getElementById('result').innerHTML = output;
      }
      progressBar.style.display = 'none';
    }
    );
  }, 2000);
}
);

document.getElementById('text').addEventListener('click', (event) => {
  progressBar.style.display = 'block';
  document.getElementById('result').innerHTML = '';
  setTimeout(() => {
    getRequest('textFile.txt', true, (response) => {
      document.getElementById('result').innerHTML = `The content of the txt file is ${response} `;;
      progressBar.style.display = 'none';
    }
    );
  }, 2000);
}
);

function getRequest(url, asychronous, callbackFunction) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, asychronous);
  xhr.onreadystatechange = function () {
    console.log(this.readyState);
  }
  xhr.onload = function (e) {
    if (this.status === 200) {
      if (typeof callbackFunction === 'function') {
        callbackFunction(this.response);
      }
    }
  };
  xhr.send();
}