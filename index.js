let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let key = "&appid=662f016466e3f4ab975cfa487a59ecef"
let city = document.querySelector("#search");
let btn = document.querySelector(".btn");
let img = document.querySelector(".weatherimg img");
let currentdata = (citys) =>{
    let data = fetch(url + citys + key);
    data.then((value) =>{
        if (value.status == 404) {
            return 0;
        }
        else{
            return value.json();
        }
    }).then((value) =>{
       // console.log(value);
        if (value == 0){
            document.querySelector(".main").style.display = "none";
            document.querySelector(".error").style.display = "block";
            document.querySelector(".error").innerHTML = "City Not Found";
            city.value = "";
        } 
        else{
            document.querySelector(".error").style.display = "none";
            document.querySelector(".main").style.display = "block";
            document.querySelector(".deg").innerHTML = Math.round(value.main.temp-273.15) + " °C";
            document.querySelector(".name").innerHTML = value.name;
            document.querySelector(".hum").innerHTML = value.main.humidity + " %";
            document.querySelector(".winds").innerHTML = value.wind.speed + " KM/H";
            if (value.weather[0].main == "Clouds") {
                img.src = "img/clouds.png";
            }
            else if (value.weather[0].main == "Rain") {
                img.src = "img/rain.png";
            }
            else if (value.weather[0].main == "Clear") {
                img.src = "img/clear.png";
            }
            else if (value.weather[0].main == "Snow") {
                img.src = "img/snow.png";
            }
            else if (value.weather[0].main == "Mist") {
                img.src = "img/mist.png";
            }
        }
    })
}
btn.addEventListener("click", ()=>{
    currentdata(city.value);
})
