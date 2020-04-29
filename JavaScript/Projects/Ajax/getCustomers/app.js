document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
  //Create an XHR object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET', 'customer.json', true);

  xhr.onprogress = function() {
    console.log('REQUEST STATE', xhr.readyState);
  }

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>`
      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

function loadCustomers(e) {
  //Create an XHR object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET', 'customers.json', true);

  xhr.onprogress = function() {
    console.log('REQUEST STATE', xhr.readyState);
  }

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      let output = '';
      
      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>`;
      });
      

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}
