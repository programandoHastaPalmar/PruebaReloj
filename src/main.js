import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

const cambioHoras = [0, -1, 0, -6, 8, 10];

document.addEventListener("DOMContentLoaded", () => {
  const timezoneSelect = document.getElementById("miSelect");
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  
  function actualizarHora() {
    const indice = timezoneSelect.selectedIndex; 
    const nuevaHora = dayjs().add(cambioHoras[indice], 'hour'); 

    clock.textContent = nuevaHora.format('HH:mm:ss');
    date.textContent = nuevaHora.format('dddd, D [de] MMMM YYYY');
  }

 
  timezoneSelect.addEventListener("change", actualizarHora);

  //ejecuta la funcion cada segundo (1000 milisegundos)
  setInterval(actualizarHora, 1000);
  //para que se ejecute automaticamente al cargar la página
  actualizarHora();
});
