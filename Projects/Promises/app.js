//using fetch api

fetch('https://jsonplaceholder.typicode.com/todos/10')
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.log(error));


//create your own promise

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (!error) {
        resolve('success');
      }
      else
        reject('Error');

    }, time);
  }
  );
}

delay(2000).then(message => console.log(message))
  .catch(message => console.error(message));


