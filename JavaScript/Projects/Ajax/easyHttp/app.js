document.getElementById('Get').addEventListener('click', get_users);
document.getElementById('Post').addEventListener('click', post_users);
document.getElementById('Put').addEventListener('click', put_users);
// document.getElementById('Delete').addEventListener('click', delete_users);

function display_data(data) {
  console.log(data);
  const output = JSON.stringify(data);
  document.getElementById('Output').innerHTML = `<p>${output}</p>`;
}

function get_users() {
  const http = new EasyHTTP();
  http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => display_data(data))
  .catch(err => console.log(err));
}

function post_users() {
  const http = new EasyHTTP();
  // Create Data
  const data =   {
    "name": "John GrahamDoe",
    "username": "Joxy",
    "email": "Sincere@april.biz",
  };

  let promise = http.post('https://jsonplaceholder.typicode.com/users', data);

  promise.then(data => console.log(data));
  promise.then(data => display_data(data));
  promise.catch(err => console.log(err));

}

function put_users() {
  const http = new EasyHTTP();
  // Create Data
  const data =   {
    "name": "John GrahamDoe",
    "username": "Joxy",
    "email": "Sincere@april.biz",
  };

  let promise = http.put('https://jsonplaceholder.typicode.com/users/2', data);

  promise.then(data => console.log(data));
  promise.then(data => display_data(data));
  promise.catch(err => console.log(err));

}


// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));





  // http.put('https://jsonplaceholder.typicode.com/users/2', data)
  // .then(data => console.log(data))
  // .catch(err => console.log(err));

  // http.delete('https://jsonplaceholder.typicode.com/users/2')
  // .then(data => console.log(data))
  // .catch(err => console.log(err));
// --------------------------------------------------------------------------------------------------------------------------------------------

//const http = new easyHTTP;

// Get all posts
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
  
// });

//Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
  
// });



//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//Put
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//Delete
// http.delete('https://jsonplaceholder.typicode.com/posts/1',
// function(err, response) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
  
// });