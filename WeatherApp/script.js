const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };
  
  async function success(pos) {
    const crd =   pos.coords;
  
    const latitude = crd.latitude;
    const longitude = crd.longitude;
    console.log(`More or less ${crd.accuracy} meters.`);

   const data = await  fetch(`https://api.weatherapi.com/v1/current.json?key=328d5c74b38a441fbd2144613250604&q=${latitude},${longitude}`)
     const info  = await data.json();
     console.log(info)
  }
  
  function error(err) {
console.log("error")  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  