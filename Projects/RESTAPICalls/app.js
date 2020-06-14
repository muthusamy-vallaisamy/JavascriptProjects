const httpLibrary = new easyHttp();

httpLibrary.get('https://jsonplaceholder.typicode.com/posts/10', function (response, err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(response);
  }
});

const data = {
  "title": "optio molestias id quia eum",
  "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
};

httpLibrary.post('https://jsonplaceholder.typicode.com/posts', data, function (response, err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(response);
  }
});

httpLibrary.put('https://jsonplaceholder.typicode.com/posts/1', data, function (response, err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(response);
  }
});

httpLibrary.delete('https://jsonplaceholder.typicode.com/posts/10', function (response, err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(response);
  }
});


