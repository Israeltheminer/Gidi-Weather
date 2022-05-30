const express = require("express");
const https = require("https") 
const app = express()
const axios = require('axios')
const cors = require('cors')
const path = require('path');
const { json } = require("express/lib/response");
const port = 1500

// https://expressjs.com/en/starter/static-files.html
const distPath = path.join(__dirname , "../../dist")
const homePage = path.join(distPath, "index.html")
const scripts = path.join(distPath, "scripts")
const styles = path.join(distPath, "styles")
const assets = path.join(distPath, "assets")

const LAGOSWEATHERURL = 'https://api.openweathermap.org/data/2.5/weather?lat=6.4&lon=3.4&appid=6b1bc55220d61da67b1090c4f6fb9d6d&units=metric'
const SURULEREWEATHERURL = 'https://api.openweathermap.org/data/2.5/weather?lat=6.499&lon=3.349&appid=6b1bc55220d61da67b1090c4f6fb9d6d&units=metric'
const IKEJAWEATHERURL = 'https://api.openweathermap.org/data/2.5/weather?lat=6.6&lon=3.3&appid=6b1bc55220d61da67b1090c4f6fb9d6d&units=metric'
const LEKKIWEATHERURL = 'https://api.openweathermap.org/data/2.5/weather?lat=6.444&lon=3.529&appid=6b1bc55220d61da67b1090c4f6fb9d6d&units=metric'
const OSHODIWEATHERURL = 'https://api.openweathermap.org/data/2.5/weather?lat=6.553&lon=3.341&appid=6b1bc55220d61da67b1090c4f6fb9d6d&units=metric'
const IKORODUWEATHERURL = 'https://api.openweathermap.org/data/2.5/weather?lat=6.614&lon=3.502&appid=6b1bc55220d61da67b1090c4f6fb9d6d&units=metric'

app.use(cors())

app.use('/scripts', express.static(scripts))
app.use('/styles', express.static(styles))
app.use('/assets', express.static(assets))

app.get('/', (request, response)=>{
   // In this example openWeather can be likened to the location of the data
   // The response when souced is the database of all linked-information from the location
   // And "data" is an event that when activated, returns data from the database(in pure code)
   // Finally the data is parsed or translated into something humans can understand
   response.sendFile(homePage)
})

app.get('/result', (request, response)=> {
   const reqLagos = axios.get(LAGOSWEATHERURL);
   const reqSurulere = axios.get(SURULEREWEATHERURL);
   const reqIkeja = axios.get(IKEJAWEATHERURL);
   const reqLekki = axios.get(LEKKIWEATHERURL);
   const reqOshodi = axios.get(OSHODIWEATHERURL);
   const reqIkorodu = axios.get(IKORODUWEATHERURL);
   
   axios.all([reqLagos, reqSurulere, reqIkeja, reqLekki, reqOshodi, reqIkorodu])
      .then(axios.spread((...responses) => {
         const responseLagos = responses[0]
         const responseSurulere = responses[1]
         const responseIkeja = responses[2]
         const responseLekki = responses[3]
         const responseOshodi = responses[4]
         const responseIkorodu = responses[5]

         const lagosWeather = []
         const lagosWeatherData = responseLagos.data
         const lagosWeatherDescription = lagosWeatherData.weather[0].description         
         const lagosTemp = lagosWeatherData.main.temp         
         const lagosWeatherIcon = lagosWeatherData.weather[0].icon
         const lagosWeatherIconUrl = `http://openweathermap.org/img/wn/${lagosWeatherIcon}@2x.png`
         lagosWeather.push({
            lagosWeatherDescription,
            lagosTemp,
            lagosWeatherIconUrl
         })

         const surulereWeather = []
         const surulereWeatherData = responseSurulere.data
         const surulereWeatherDescription = surulereWeatherData.weather[0].description
         const surulereTemp = surulereWeatherData.main.temp
         const surulereWeatherIcon = surulereWeatherData.weather[0].icon
         const surulereWeatherIconUrl = `http://openweathermap.org/img/wn/${surulereWeatherIcon}@2x.png`
         surulereWeather.push({
            surulereWeatherDescription,
            surulereTemp,
            surulereWeatherIconUrl
         })

         const ikejaWeather = []
         const ikejaWeatherData = responseIkeja.data
         const ikejaWeatherDescription = ikejaWeatherData.weather[0].description         
         const ikejaTemp = ikejaWeatherData.main.temp
         const ikejaWeatherIcon = ikejaWeatherData.weather[0].icon
         const ikejaWeatherIconUrl = `http://openweathermap.org/img/wn/${ikejaWeatherIcon}@2x.png`
         ikejaWeather.push({
            ikejaWeatherDescription,
            ikejaTemp,
            ikejaWeatherIconUrl
         })

         const lekkiWeather = []
         const lekkiWeatherData = responseLekki.data
         const lekkiWeatherDescription = lekkiWeatherData.weather[0].description
         const lekkiTemp = lekkiWeatherData.main.temp
         const lekkiWeatherIcon = lekkiWeatherData.weather[0].icon
         const lekkiWeatherIconUrl = `http://openweathermap.org/img/wn/${lekkiWeatherIcon}@2x.png`
         lekkiWeather.push({
            lekkiWeatherDescription,
            lekkiTemp,
            lekkiWeatherIconUrl
         })

         const oshodiWeather = []
         const oshodiWeatherData = responseOshodi.data
         const oshodiWeatherDescription = oshodiWeatherData.weather[0].description
         const oshodiTemp = oshodiWeatherData.main.temp   
         const oshodiWeatherIcon = oshodiWeatherData.weather[0].icon
         const oshodiWeatherIconUrl = `http://openweathermap.org/img/wn/${oshodiWeatherIcon}@2x.png`
         oshodiWeather.push({
            oshodiWeatherDescription,
            oshodiTemp,
            oshodiWeatherIconUrl
         })

         const ikoroduWeather = []
         const ikoroduWeatherData = responseIkorodu.data
         const ikoroduWeatherDescription = ikoroduWeatherData.weather[0].description
         const ikoroduTemp = ikoroduWeatherData.main.temp
         const ikoroduWeatherIcon = ikoroduWeatherData.weather[0].icon
         const ikoroduWeatherIconUrl = `http://openweathermap.org/img/wn/${ikoroduWeatherIcon}@2x.png` 
         ikoroduWeather.push({
            ikoroduWeatherDescription,
            ikoroduTemp,
            ikoroduWeatherIconUrl
         })

         const allWeather = [...lagosWeather, ...surulereWeather, ...ikejaWeather, ...lekkiWeather, ...oshodiWeather, ...ikoroduWeather]
         response.json(allWeather)
      }))
      .catch(errors => {
         console.log("Error getting weather")
      })
})
app.listen(port, ()=>{
   console.log(`CORS-enabled web server listening on port ${port}`)
})