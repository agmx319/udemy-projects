document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //Create an XHR object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET', 'data.txt', true);

  xhr.onprogress = function() {
    console.log('REQUEST STATE', xhr.readyState)
  }

  xhr.onload = function() {
    if(this.status === 200) {
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h2>${this.responseText}</h2>`;
    }
  }

  xhr.send();
}
