// Consulta la API www.frankfurter.app para extraer el cambio USD <-> EUR
async function getCambio() {
 
    var miObjeto = await fetch("https://www.frankfurter.app/latest?from=USD&to=EUR");
    var miTexto = await miObjeto.text();
    var miCambio = JSON.parse(miTexto);

    var vCambio = miCambio.rates.EUR;
    document.querySelector("#cambio").innerHTML = "<a>USD a EUR: " + vCambio + "</a>";
    
}

getCambio();