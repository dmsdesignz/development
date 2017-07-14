

  var icon;
  var current;
  var tempMin;
  var tempMax;
  var hIndexMin;
  var hIndexMax;
  var hIndexM;
  var dayName;
  var i = 0;
  var dmDays;
  var cF = "F";
  var temps = [tempMin,tempMax,hIndexMin,hIndexMax];
  var icons = new Skycons({"color": "orange"});
  icons.set("clear-day", Skycons.CLEAR_DAY);
  icons.set("clear-night", Skycons.CLEAR_NIGHT);
  icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
  icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
  icons.set("cloudy", Skycons.CLOUDY);
  icons.set("rain", Skycons.RAIN);
  icons.set("sleet", Skycons.SLEET);
  icons.set("snow", Skycons.SNOW);
  icons.set("wind", Skycons.WIND);
  icons.set("fog", Skycons.FOG);
  icons.play();
  function convertToF(f){
    f = (f * 1.8 + 32).toFixed(1);
  };
  function convertToC(c){
   c =  ((c -32) * 5/9).toFixed(1);
  };
  function clickConvert(){
    $(".temp-btn").on("click",function(){
      console.log(cF);
     if  (cF === "F"){       
         
          $(".temp-btn").html("Convert Temp<br>to Fahrenheit");
          //math
          cF = "C"; 
       } else if (cF === "C"){
          $(".temp-btn").html("Convert Temp<br>to Celcius");
          
          cF = "F";
       }
   
  });
  };
  
  
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;  
    var apiUrl = ("https://thingproxy.freeboard.io/fetch/https://api.darksky.net/forecast/9604dc1ddeb95283966fa07dcce9fc96/" + lat + "," + long);
    
    $.ajax( {
    url: apiUrl, 
    success: function(json) {
      console.log(json);      
      dayName = ["Today","Tomorrow","Day 3","Day 4","Day 5","Day 6"];      
      dmDays = json.daily.data;
      $.each(dmDays, function(index, dmDays){
        
        icon = json.daily.data[i].icon;
        current = json.daily.data[i].summary;
        tempMin = Math.round(json.daily.data[i].temperatureMin);       
        tempMax = Math.round(json.daily.data[i].temperatureMax);
        hIndexMin = Math.round(json.daily.data[i].apparentTemperatureMin);
        hIndexMax = Math.round(json.daily.data[i].apparentTemperatureMax);
         //if  (cF == "C"){       
          convertToF(tempMin[i]);
          convertToF(tempMax);
          console.log(tempMin);
        // }
        $(".box").append(`
<figure id="index${[i]}" class="col-xs-2">
<h3><strong>${dayName[i]}</strong></h3>
<canvas class=${icon} width="64" height="64"></canvas>
<p id="current"><strong>Summary: </strong>${current}</p>

<p class="temps"><strong>Temp:</strong></p>
<span><span class="half-w">${tempMin}°${cF}/Min</span><span class="half-w">${tempMax}°${cF}/Max</span></span>
<p class="temps"><strong>Heat Index:</strong></p><span><span class="half-w">${hIndexMin}°${cF}/Min</span><span class="half-w">${hIndexMax}°${cF}/Max</span></span></figure>`); 
        icons.add($(icon)[icons]);
        i++;
        
      });
     }
   }        
 )}
)
clickConvert();