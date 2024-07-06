let URL = "https://cat-fact.herokuapp.com/facts";
const getweatherdata = () => {
    let weatherURL = fetch(URL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer your_token',
            'Content-Type': 'application/json'
        }
    })

    weatherURL.then((response) => {
      console.log(response.status)
    return response.json().then((response) => {
      console.log(response[1]);
    });
  });
} 
console.log(getweatherdata());
