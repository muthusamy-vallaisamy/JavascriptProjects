document.getElementById('txtButton').addEventListener('click', function (e) {

  fetch('test.txt')
    .then(response => response.text())
    .then(response => { displayResult(response); })
    .catch(error => { console.log(error) });
});

document.getElementById('jsonButton').addEventListener('click', function (e) {

  fetch('city.json')
    .then(response => response.json())
    .then(response => { displayResult(response[0].title); })
    .catch(error => { console.log(error) });
});


function displayResult(message) {
  document.getElementById('result').innerHTML = message;
}