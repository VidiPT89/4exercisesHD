const ICON_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>';
const ICON_ERR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

function setResultado(el, type, message) {
  const icon = type === 'ok' ? ICON_OK : type === 'err' ? ICON_ERR : '';
  el.className = 'result show ' + type;
  el.innerHTML = (icon ? '<span class="result-icon">' + icon + '</span>' : '') + '<span>' + message + '</span>';
}

// clamps a celsius value to the -40..60 visual range and maps it to 0-100%
function celsiusToPercent(celsius) {
  const min = -40, max = 60;
  const clamped = Math.min(Math.max(celsius, min), max);
  return ((clamped - min) / (max - min)) * 100;
}

function atualizarGauge(celsius, texto) {
  const pct = celsiusToPercent(celsius);
  document.getElementById('thermoFill').style.height = pct + '%';
  document.getElementById('gaugeMarker').style.left = pct + '%';
  document.getElementById('gaugeValue').textContent = texto;
  document.getElementById('gaugeSub').textContent = celsius <= 0 ? 'Gelado ❄️' : celsius < 20 ? 'Fresco' : celsius < 35 ? 'Ameno ☀️' : 'Quente 🔥';
}

// codigo de identificar
function converter() {
  let valor = parseFloat(document.getElementById('valor').value);
  let tipo = document.getElementById('tipo').value;
  let resultado = document.getElementById('resultado');
  const input = document.getElementById('valor');

  // codigo para escrever o que utilizador quer
  if (!valor && valor !== 0) {
    input.classList.remove('shake');
    void input.offsetWidth;
    input.classList.add('shake');
    setResultado(resultado, 'err', 'Escreve um número válido.');
    return;
  }

  let celsiusEquivalente;
  let saida;

  // codigo da formula
  if (tipo === 'cf') {
    const f = (valor * 9) / 5 + 32;
    saida = f.toFixed(2) + ' ºF';
    celsiusEquivalente = valor;
  } else if (tipo === 'fc') {
    const c = ((valor - 32) * 5) / 9;
    saida = c.toFixed(2) + ' ºC';
    celsiusEquivalente = c;
  }

  setResultado(resultado, 'ok', saida);
  atualizarGauge(celsiusEquivalente, saida);
}

// codigo para limpar o que estiver em valor e resultado
function limpar() {
  document.getElementById('valor').value = '';
  const resultado = document.getElementById('resultado');
  resultado.className = 'result';
  resultado.innerHTML = '';
  document.getElementById('thermoFill').style.height = '10%';
  document.getElementById('gaugeMarker').style.left = '50%';
  document.getElementById('gaugeValue').textContent = '--';
  document.getElementById('gaugeSub').textContent = 'Escreve um valor para veres o resultado aqui';
}

document.getElementById('valor').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') converter();
});
