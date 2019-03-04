$(document).ready(function () {

    function vreme() {
        var URL = 'https://proxy-requests.herokuapp.com/https://www.metaweather.com/api/location/615702/';

        $.getJSON(URL, function (podaci) {
            console.log(podaci);
            popuni(podaci);
        });
    }
    vreme();

    function popuni(podaci) {
        var grad = podaci.title;
        var temperatura = Math.round(podaci.consolidated_weather["0"].the_temp);
        var temperaturaSutra = Math.round(podaci.consolidated_weather["1"].the_temp);
        var temperaturaPrekosutra = Math.round(podaci.consolidated_weather["2"].the_temp);
        var temperaturaNakosutra = Math.round(podaci.consolidated_weather["3"].the_temp);
        var vlaznost = podaci.consolidated_weather["0"].humidity;
        var vlaznostSutra = podaci.consolidated_weather["1"].humidity;
        var vlaznostPrekosutra = podaci.consolidated_weather["2"].humidity;
        var vlaznostNakosutra = podaci.consolidated_weather["3"].humidity;
        var vetar = Math.round(podaci.consolidated_weather["0"].wind_speed);
        var vetarSutra = Math.round(podaci.consolidated_weather["1"].wind_speed);
        var vetarPrekosutra = Math.round(podaci.consolidated_weather["2"].wind_speed);
        var vetarNakosutra = Math.round(podaci.consolidated_weather["3"].wind_speed);
        var slicica = podaci.consolidated_weather["0"].weather_state_abbr;
        var slicicaSutra = podaci.consolidated_weather["1"].weather_state_abbr;
        var slicicaPrekosutra = podaci.consolidated_weather["2"].weather_state_abbr;
        var slicicaNakosutra = podaci.consolidated_weather["3"].weather_state_abbr;
        var ikonica = 'https://www.metaweather.com/static/img/weather/' + slicica + '.svg'
        var ikonicaSutra = 'https://www.metaweather.com/static/img/weather/' + slicicaSutra + '.svg'
        var ikonicaPrekosutra = 'https://www.metaweather.com/static/img/weather/' + slicicaPrekosutra + '.svg'
        var ikonicaNakosutra = 'https://www.metaweather.com/static/img/weather/' + slicicaNakosutra + '.svg'
        $('.lokacija').html(grad);
        $('#danas').html(temperatura + '&deg;');
        $('#sutra').html(temperaturaSutra + '&deg;');
        $('#prekosutra').html(temperaturaPrekosutra + '&deg;');
        $('#nakosutra').html(temperaturaNakosutra + '&deg;');
        $('#kisaDanas').html(vlaznost + ' %');
        $('#kisaSutra').html(vlaznostSutra + ' %');
        $('#kisaPrekosutra').html(vlaznostPrekosutra + ' %');
        $('#kisaNakosutra').html(vlaznostNakosutra + ' %');
        $('#vetarDanas').html(vetar + ' KM/H');
        $('#vetarSutra').html(vetarSutra + ' KM/H');
        $('#vetarPrekosutra').html(vetarPrekosutra + ' KM/H');
        $('#vetarNakosutra').html(vetarNakosutra + ' KM/H');
        $('#ikonica').attr('src', ikonica);
        $('#ikonicaSutra').attr('src', ikonicaSutra);
        $('#ikonicaPrekosutra').attr('src', ikonicaPrekosutra);
        $('#ikonicaNakosutra').attr('src', ikonicaNakosutra);

        var color = 'rgba(244,244,244,0.4)'
        if (temperatura > -10 && temperatura <= 0) {
            color = 'darkblue'
        } else if (temperatura > 1 && temperatura <= 10) {
            color = 'blue'
        } else if (temperatura >= 11 && temperatura <= 20) {
            color = 'orange'
        } else if (temperatura > 20) {
            color = 'red'
        };
        $('#danasBoja').css('background', color)

        var color = 'rgba(244,244,244,0.4)'
        if (temperaturaSutra > -10 && temperaturaSutra <= 0) {
            color = 'blue'
        } else if (temperaturaSutra > 1 && temperaturaSutra <= 10) {
            color = 'lightblue'
        } else if (temperaturaSutra >= 11 && temperaturaSutra <= 20) {
            color = 'orange'
        } else if (temperaturaSutra > 20) {
            color = 'red'
        };
        $('#sutraBoja').css('background', color)

        var color = 'rgba(244,244,244,0.4)'
        if (temperaturaPrekosutra > -10 && temperaturaPrekosutra <= 0) {
            color = 'blue'
        } else if (temperaturaPrekosutra > 1 && temperaturaPrekosutra <= 10) {
            color = 'lightblue'
        } else if (temperaturaPrekosutra > 11 && temperaturaPrekosutra <= 20) {
            color = 'orange'
        } else if (temperaturaPrekosutra > 20) {
            color = 'red'
        };
        $('#prekosutraBoja').css('background', color)

        var color = 'rgba(244,244,244,0.4)'
        if (temperaturaNakosutra > -10 && temperaturaNakosutra <= 0) {
            color = 'blue'
        } else if (temperaturaNakosutra > 1 && temperaturaNakosutra <= 10) {
            color = 'lightblue'
        } else if (temperaturaNakosutra >= 11 && temperaturaNakosutra <= 20) {
            color = 'orange'
        } else if (temperaturaNakosutra > 20) {
            color = 'red'
        };
        $('#nakosutraBoja').css('background', color)

    }


});


