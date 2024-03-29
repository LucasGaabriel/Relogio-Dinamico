const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const text_horas = document.getElementsByClassName('tempo')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hours_now = dateToday.getHours();
    let minutes_now = dateToday.getMinutes();
    let seconds_now = dateToday.getSeconds();

    // Define os tempos como singular (se igual a 1) ou plural (se diferente de 1)
    text_horas[0].textContent = hours_now == 1 ? 'Hora' : 'Horas'
    text_horas[1].textContent = minutes_now == 1 ? 'Minuto' : 'Minutos'
    text_horas[2].textContent = seconds_now == 1 ? 'Segundo' : 'Segundos'

    // Garante que os números sempre possuam 2 dígitos
    hours_now = hours_now.toString().padStart(2, '0')
    minutes_now = minutes_now.toString().padStart(2, '0')
    seconds_now = seconds_now.toString().padStart(2, '0')

    horas.textContent = hours_now;
    minutos.textContent = minutes_now;
    segundos.textContent = seconds_now;
})