// API Key - bfb422b18e1e55c5e6c246360d0d655b
const request = require('request');
const forecast = require('./utils/forecast');
// const geocode = require('./utils/geocode');
// const urlweather = 'http://api.weatherstack.com/current?access_key=bfb422b18e1e55c5e6c246360d0d655b&query=27.2046,77.4977'

// request({ url: urlweather,json:true },(error,response) =>{
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     }else{
//         const data = response
//         console.log(data)
//     }
// } )


// Geocoding 
// Address -> Lat/Long ->weather

// const geoCodeURL = "apilink"

// request({url:geoCodeURL,json:true},(error,response) =>{
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.features.length === 0){
//         console.log('Unable to find location')
//     }else{
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//     }
// })

const loc = process.argv[2]

if(!loc){
    console.log('Please provide an address')
}else{
    // geocode(loc,(error,data)=>{
        // if(error){
            // return console.log(error)
        // }
        // console.log('Error',error);
        // console.log('Data',data);
        forecast(loc,(error,forecastdata) =>{
            if(error){
                return console.log(error)
            }
            console.log(loc)
            console.log(forecastdata)
            // console.log(error);
            // console.log(forecastdata);
        })
    // })
// }
}


