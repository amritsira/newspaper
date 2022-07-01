import React,{useEffect, useState} from 'react'
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e91d48e11454867a37454ac915fdb21c


const Weatherinfo = () => {
    const [lat ,setLat] = useState(0);
    const [lon ,setLon] = useState(0);


    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        const crd = pos.coords;
      
      
        myvals(crd.latitude, crd.longitude );
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
    
    const myvals = function (lat , long){
   
            setLat(lat);
           setLon(long);
      }
    





    
    function getweather(lat , lon){
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e91d48e11454867a37454ac915fdb21c`)
        .then((response)=> response.json())
        .then((data)=>{ 
            let fartemp = data.main.temp;
                let celtemp = (Math.round(fartemp) -273.15); 
                setInfo({...info , 
                    temp:celtemp.toFixed(1), 
                    city:data.name,
                    country:data.sys.country,
                    weather:data.weather[0].main
                });
        });
    }


    useEffect(()=>{
        if(lat != 0  && lon !=0){

            getweather(lat , lon);
        }
    },[lat,lon])
    



    const[info ,setInfo] = useState( {
        temp:"",
        city:"",
        country:"",
        weather:""
        
    } ) ;
    const[searchinput ,setSearchInput] = useState("");

    function getweatherbycity(cityname){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=e91d48e11454867a37454ac915fdb21c`)
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data)
            let fartemp = data.main.temp;
            let celtemp = (Math.round(fartemp) -273.15); 
            setInfo({...info , 
                    temp:celtemp.toFixed(1), 
                    city:data.name,
                    country:data.sys.country,
                    weather:data.weather[0].main
                });
        })
        .catch((err)=>{
            setSearchInput("");
        })
       
    }


  
    
    let mydate = Date().split(" ");
    let day = mydate[0]+'day';
    let finaldate = mydate[2]+" "+mydate[1]+" "+mydate[3];


  return (
    <>

    <div className="row">
        <form onSubmit={(e)=>{
            e.preventDefault();
            getweatherbycity(searchinput);
            setSearchInput("");
            } 
        }>

        <div className='col-md-12'>

        <input
            type="search"
            value={searchinput}
            onChange={(e)=> setSearchInput(e.target.value)}
        />
        </div>
        <button type="submit">Search</button>
        </form>   
    </div>

    <div className="row">
        <div className='col-md-12'>
            <h2>Temperature:{info.temp}</h2>
            <h4>City:{info.city}</h4>
            <h4>Country:{info.country}</h4>
            <h4>Weather-type:{info.weather}</h4>
            <h4>date:{finaldate}</h4>
            <h4>day:{day}</h4>

        </div>
    </div>
    
    </>
  )
}

export default Weatherinfo