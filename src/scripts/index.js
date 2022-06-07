const $ = require('jquery');

var slideIndex = 0;
carousel();

function carousel() {
   var i;
   var slideshow = $(".mySlides");
   for (i = 0; i < slideshow.length; i++) {
      slideshow[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slideshow.length) {slideIndex = 1}
   slideshow[slideIndex-1].style.display = "block";
   setTimeout(carousel, 15000); // Change image every 1,5 seconds
}

fetch('https://gidi-weather.herokuapp.com/result')
   .then((response)=> response.json())
   .then((data)=> {
      const lagosWeatherDescription = data[0].lagosWeatherDescription
      const rawLagosTemp = data[0].lagosTemp
      const lagosTemp = parseInt(rawLagosTemp)
      const lagosWeatherIconUrl = data[0].lagosWeatherIconUrl
      $('#lagos_icon').attr('src', lagosWeatherIconUrl)
      $('#lagos_temp').text(`${lagosTemp}°C`)
      $('#current_temp').text(`${lagosTemp}°C`)
      $('#current_location').text(`Lagos`)
      $('#current_weather').text(lagosWeatherDescription)
      
      const surulereWeatherDescription = data[1].surulereWeatherDescription
      const rawSurulereTemp = data[1].surulereTemp
      const surulereTemp = parseInt(rawSurulereTemp)
      const surulereWeatherIconUrl = data[1].surulereWeatherIconUrl
      $('#surulere_icon').attr('src', surulereWeatherIconUrl)
      $('#surulere_temp').text(`${surulereTemp}°C`)

      const ikejaWeatherDescription = data[2].ikejaWeatherDescription
      const rawIkejaTemp = data[2].ikejaTemp
      const ikejaTemp = parseInt(rawIkejaTemp)
      const ikejaWeatherIconUrl = data[2].ikejaWeatherIconUrl
      $('#ikeja_icon').attr('src', ikejaWeatherIconUrl)
      $('#ikeja_temp').text(`${ikejaTemp}°C`)
      
      const lekkiWeatherDescription = data[3].lekkiWeatherDescription
      const rawLekkiTemp = data[3].lekkiTemp
      const lekkiTemp = parseInt(rawLekkiTemp)
      const lekkiWeatherIconUrl = data[3].lekkiWeatherIconUrl
      $('#lekki_icon').attr('src', lekkiWeatherIconUrl)
      $('#lekki_temp').text(`${lekkiTemp}°C`)
   
      const oshodiWeatherDescription = data[4].oshodiWeatherDescription
      const rawOshodiTemp = data[4].oshodiTemp
      const oshodiTemp = parseInt(rawOshodiTemp)
      const oshodiWeatherIconUrl = data[4].oshodiWeatherIconUrl
      $('#oshodi_icon').attr('src', oshodiWeatherIconUrl)
      $('#oshodi_temp').text(`${oshodiTemp}°C`)
      
      const ikoroduWeatherDescription = data[5].ikoroduWeatherDescription
      const rawIkoroduTemp = data[5].ikoroduTemp
      const ikoroduTemp = parseInt(rawIkoroduTemp)
      const ikoroduWeatherIconUrl = data[5].ikoroduWeatherIconUrl
      $('#ikorodu_icon').attr('src', ikoroduWeatherIconUrl)
      $('#ikorodu_temp').text(`${ikoroduTemp}°C`)
      
      // Event listener for changes in main location, temperature, and weather description.
      $(document).on('click keydown', function(){
         let active = document.activeElement.id;
         if ('lagos_tab'===active){
            $('#current_temp').text(`${lagosTemp}°C`)
            $('#current_location').text(`Lagos`)
            $('#current_weather').text(lagosWeatherDescription)
         }
         else if ('surulere_tab'===active){
            $('#current_temp').text(`${surulereTemp}°C`)
            $('#current_location').text(`Surulere`)
            $('#current_weather').text(surulereWeatherDescription)
         }
         else if ('ikeja_tab'===active){
            $('#current_temp').text(`${ikejaTemp}°C`)
            $('#current_location').text(`Ikeja`)
            $('#current_weather').text(ikejaWeatherDescription)
         }
         else if ('lekki_tab'===active){
            $('#current_temp').text(`${lekkiTemp}°C`)
            $('#current_location').text(`Lekki`)
            $('#current_weather').text(lekkiWeatherDescription)
         }
         else if ('oshodi_tab'===active){
            $('#current_temp').text(`${oshodiTemp}°C`)
            $('#current_location').text(`Oshodi`)
            $('#current_weather').text(oshodiWeatherDescription)
         }
         else if ('ikorodu_tab'===active){
            $('#current_temp').text(`${ikoroduTemp}°C`)
            $('#current_location').text(`Ikorodu`)
            $('#current_weather').text(ikoroduWeatherDescription)
         }
      })
      const date = new Date();
      let hour = date.getHours();
      
      // Day-time Conditions
      if(hour >= 3 && hour <= 18){
         $('#current_time_icon').attr('src', './assets/sun-cloud.svg')
      }
      // Night-time Conditions
      else{
         $('#current_time_icon').attr('src', './assets/night-cloud.svg')
         $('body').css('background-image', 'linear-gradient(#1a354a,#373954,#a44a58)')
         $('body').css('background-color', '#a44a58')
      }
   })
