// Consulta la API openweathermap.org para extraer el clima. El parametro idElemento lo usa para acceder al DOM y modificar el <p> correcto.
async function getClima(idElemento) {
    
    var lat = 0;
    var long = 0;
    
    //Establece latitud y longitud de acuerdo al idElemento
    switch (idElemento) {
        case "bar":
            lat = -41.14;
            long = -71.31;
            break;
        case "men":
            lat = -32.89;
            long = -68.83;
            break;
        case "cal":
            lat = -50.32;
            long = -72.33;
            break;
        case "cab":
            lat = -35.58;
            long = -58.08;
            break;
        case "bol":
            lat = -41.96;
            long = -71.55;
            break;
        case "cha":
            lat = -49.32;
            long = -72.92;
            break;
        case "tan":
            lat = -37.31;
            long = -59.17;
            break;
        case "cor":
            lat = -31.39;
            long = -64.26;
            break;
        }
    
    
    //Realiza una consulta GET a la api
    var miObjeto = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&lang=sp&units=metric&appid=1a8ed9a179819c7930d5e380efb99fc9");
    var miTexto = await miObjeto.text();
    var miClima = JSON.parse(miTexto);

    //Extrae los valores necesarios del objeto de respuesta
    var vDescripcion = miClima.weather[0].description;
    var vTemp = miClima.main.temp.toFixed(1);
    var vHumedad = miClima.main.humidity
    
    //Modifica el elemento <p> correspondiente a la ciudad consultad
    document.querySelector("#" + idElemento).innerHTML = "<b>Tiempo:</b> " + vDescripcion + "<br><b>Temperatura:</b> " + vTemp+ "°<br><b>Humedad:</b> " + vHumedad + "%";
    
}


//Consulta la api www.frankfurter.app para extraer el cambio USD-EUR
async function getCambio() {
 
    //Realiza consulta GET
    var miObjeto = await fetch("https://www.frankfurter.app/latest?from=USD&to=EUR");
    var miTexto = await miObjeto.text();
    var miCambio = JSON.parse(miTexto);

    //Extrae el valor necesario del objeto de respuesta    
    var vCambio = miCambio.rates.EUR;

    //Modifica el footer
    document.querySelector("#cambio").innerHTML = "<a>USD a EUR: " + vCambio + "</a>";
    
}

getCambio();