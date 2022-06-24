var apiKey ='094ce1db02356bf72aa305f5dd4dd5b3';
function citySearch () {
    const city = document.getElementById('cityName').value;
    const queryURL = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid='+ apiKey;

fetch(queryURL)
.then(res => res.json())
.then( data => {
    display(data);
})
document.getElementById('cityName').value ='';
}

function display(id) {
    var celsius = Math.round(parseFloat(id.main.temp)-273.15);

    document.getElementById('temp-city').innerHTML = id.name;
    document.getElementById('temp').innerHTML = celsius;
    document.getElementById('condition').innerHTML = id.weather[0].main;
    document.getElementById('condition-icon').src = "http://openweathermap.org/img/w/"+id.weather[0].icon+".png";
    console.log(id);
}



