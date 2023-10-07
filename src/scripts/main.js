"use strict";
AOS.init();

const contadorHTML = document.getElementById("contador");

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

//Data do evento - data de hoje

// const contador = setInterval(() => console.log(), 1000);

const contaAsHoras = setInterval(() => {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampAtual - timeStampDoEvento;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % diasEmMs) / horasEmMs
  );
  const minutosAteOEvento = Math.floor(
    ((distanciaAteOEvento % diasEmMs) % horasEmMs) / minutosEmMs
  );
  const segundosAteOEvento = Math.floor(
    (((distanciaAteOEvento % diasEmMs) % horasEmMs) % minutosEmMs) / 1000
  );

  contadorHTML.innerHTML = `${diasAteOEvento}d ${horasAteOEvento} ${minutosAteOEvento}min ${segundosAteOEvento}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    contadorHTML.innerHTML = "Chegou o dia!";
  }
}, 1000);
