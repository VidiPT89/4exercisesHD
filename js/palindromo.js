const ICON_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>';
const ICON_ERR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

function setResultado(el, type, message) {
  const icon = type === 'ok' ? ICON_OK : type === 'err' ? ICON_ERR : '';
  el.className = 'result show ' + type;
  el.innerHTML = (icon ? '<span class="result-icon">' + icon + '</span>' : '') + '<span>' + message + '</span>';
}

function atualizarEspelho() {
  const texto = document.getElementById('texto').value;
  const invertido = texto.split('').reverse().join('');
  document.getElementById('original').textContent = texto;
  document.getElementById('invertido').textContent = invertido;

  const isMatch = texto.length > 0 && texto === invertido;
  document.getElementById('original').classList.toggle('match', isMatch);
  document.getElementById('invertido').classList.toggle('match', isMatch);
  document.getElementById('mirrorIcon').classList.toggle('spin', isMatch);
}

function lancarConfetti() {
  const layer = document.getElementById('confetti');
  const cores = ['#c084fc', '#f472b6', '#fbbf24', '#34d399', '#38bdf8'];
  layer.innerHTML = '';
  for (let i = 0; i < 18; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = cores[Math.floor(Math.random() * cores.length)];
    piece.style.animationDelay = Math.random() * 0.2 + 's';
    layer.appendChild(piece);
  }
  setTimeout(() => { layer.innerHTML = ''; }, 1200);
}

function verificar() {
  // lê o texto do input
  const texto = document.getElementById('texto').value;
  const resultado = document.getElementById('resultado');
  const input = document.getElementById('texto');

  if (!texto) {
    input.classList.remove('shake');
    void input.offsetWidth;
    input.classList.add('shake');
    setResultado(resultado, 'err', t('palindromo.msg.empty'));
    return;
  }

  // divide o texto em letras, inverte e junta novamente
  const invertido = texto.split('').reverse().join('');

  // compara o texto inserido com o texto invertido
  if (texto === invertido) {
    // se forem iguais, é palíndromo
    setResultado(resultado, 'ok', t('palindromo.msg.ok'));
    lancarConfetti();
  } else {
    // se forem diferentes, não é palíndromo
    setResultado(resultado, 'err', t('palindromo.msg.err'));
  }
}

// limpa o campo de texto e o resultado
function limpar() {
  document.getElementById('texto').value = '';
  document.getElementById('original').textContent = '';
  document.getElementById('invertido').textContent = '';
  document.getElementById('original').classList.remove('match');
  document.getElementById('invertido').classList.remove('match');
  document.getElementById('mirrorIcon').classList.remove('spin');
  document.getElementById('confetti').innerHTML = '';
  const resultado = document.getElementById('resultado');
  resultado.className = 'result';
  resultado.innerHTML = '';
}

document.getElementById('texto').addEventListener('input', atualizarEspelho);
document.getElementById('texto').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') verificar();
});

document.addEventListener('langchange', () => {
  const resultado = document.getElementById('resultado');
  if (resultado.classList.contains('show')) verificar();
});
