import { useState} from "react";


function GetCurrentPosition(){
    

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  

  const myvals = function (lat , long){
    setlat(lat);
    setlong(long);
}



  function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    myvals(crd.latitude, crd.longitude );
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);






}

export default GetCurrentPosition;