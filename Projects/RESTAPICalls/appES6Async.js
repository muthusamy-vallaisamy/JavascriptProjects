const http = new EasyHttpES6;

http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(error => console.log(error));

//user

const user = {
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
}

http.post('https://jsonplaceholder.typicode.com/users', user)
  .then(data => console.log(data))
  .catch(error => console.log(error));


const userToBeModified = {
  "name": "Ervin Howell1",
  "username": "Antonette1",
  "email": "Shann1a@melissa.tv",
}

http.put('https://jsonplaceholder.typicode.com/users/2', userToBeModified)
  .then(data => console.log(data))
  .catch(error => console.log(error));

http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(error => console.log(error));
