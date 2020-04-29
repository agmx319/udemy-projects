document.getElementById('btn-number').addEventListener('click', getJokes);

function getJokes(e) {
  numberOfJokes = document.getElementById('number').value;
  //Create an XHR object
  const xhr = new XMLHttpRequest();

  let url = `http://api.icndb.com/jokes/random/${numberOfJokes}`;

  //OPEN
  xhr.open('GET', url, true);
  

  xhr.onload = function() {
    if(this.status === 200) {
      //console.log(this.responseText);
      const response = JSON.parse(this.responseText);
      let output = '';
      if (response.type === "success") {
        response.value.forEach(function(joke){
          console.log(joke);
          output += `<li>${joke.joke}</li>`
        })

      } else {
        output = `<li>Something went wrong!!</li>`
      }

      document.querySelector(".jokes").innerHTML = output;
      // const jokes = response.value;
      // console.log(jokes);
      // let jokes = output.value;
      // jokes.forEach(function(joke){
      //   console.log(joke);
      // })
      // document.getElementsByClassName('jokes').innerHTML = `<h2>${joke}</h2>`;
    }
  }

  xhr.send();

  e.preventDefault();
}
