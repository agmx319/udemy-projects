document.getElementById('button1').addEventListener
('click', getText);

document.getElementById('button2').addEventListener
('click', getJson);

document.getElementById('button3').addEventListener
('click', getExternal);

function getExternal() {
  fetch('https://api.covid19india.org/data.json')
    .then(res => res.json())
    .then(data => {
      today_output = data.cases_time_series[data.cases_time_series.length - 1];
      output = `<li>Total Confirm cases : ${today_output.totalconfirmed} on ${today_output.date}</li>`;
      // data.forEach(function(post) {
      //   output += `<li>Total Confirm cases : ${post.value} --- ${post.onclick}</li>`;
      // })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err))
}

function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      output = '';
      data.forEach(function(post) {
        output += `<li>${post.value} --- ${post.onclick}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err))
}

function getText() {
  fetch('test.txt')
    .then( res => res.text())
    .then( data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
      
    })
    .catch(err => console.log(err))
}

// Error Handling With Fetch
// I did not mention this in the lecture but error handling with fetch is a bit different than with something like Axios or jQuery. If there is an http error, it will not fire off .catch automatically. You have to check the response and throw an error yourself. Here is an example....



// fetch('https://devcamper.io/api/v1/bootcamps/34343')
//   .then(res => res.json())
//   .then(res => {
//     if (!res.ok) {
//        throw new Error(res.error);
//     }
//     return res;
//   })
//   .catch(err => console.log(err));
 
// I would suggest creating a separate function for error handling

// function handleErrors(res) {
//   if (!res.ok) throw new Error(res.error);
//   return res;
// }
 
// fetch('https://devcamper.io/api/v1/bootcamps/34343')
//   .then(res => res.json())
//   .then(handleErrors)
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));
 

