class EasyHTTP {
  // HTTP GET REQUEST
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;

  }

    // POST METHOD
    async post(url, data) {
      const response = await fetch(url,  {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData;
  
    }

    //PUT Method
    async put(url, data) {
      const response = await fetch(url,  {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData;
  
    }

    //Delete Method
    async delete(url, data) {
      const response = await fetch(url,  {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });

      const resData = await 'Resource deleted...';
      return resData;
  
    }
}