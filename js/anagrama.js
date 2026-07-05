const ICON_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>';
const ICON_ERR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

function setResultado(el, type, message) {
  const icon = type === 'ok' ? ICON_OK : type === 'err' ? ICON_ERR : '';
  el.className = 'result show ' + type;
  el.innerHTML = (icon ? '<span class="result-icon">' + icon + '</span>' : '') + '<span>' + message + '</span>';
}

function renderTiles(container, letters, otherLetters) {
  container.innerHTML = '';
  const counts = {};
  otherLetters.forEach((l) => { counts[l] = (counts[l] || 0) + 1; });

  letters.forEach((letter, i) => {
    const tile = document.createElement('span');
    tile.className = 'tile';
    tile.textContent = letter;
    tile.style.animationDelay = i * 0.03 + 's';
    if (counts[letter]) {
      tile.classList.add('match');
      counts[letter]--;
    } else {
      tile.classList.add('miss');
    }
    container.appendChild(tile);
  });
}

function verificar() {
  // lê a primeira palavra, passa para minúsculas e remove os espaços
  let a = document.getElementById('palavra1').value.toLowerCase().replace(/ /g, '');
  // lê a segunda palavra, passa para minúsculas e remove os espaços
  let b = document.getElementById('palavra2').value.toLowerCase().replace(/ /g, '');

  const resultado = document.getElementById('resultado');
  const input1 = document.getElementById('palavra1');
  const input2 = document.getElementById('palavra2');

  if (!a || !b) {
    [input1, input2].forEach((inp) => {
      if (!inp.value.trim()) {
        inp.classList.remove('shake');
        void inp.offsetWidth;
        inp.classList.add('shake');
      }
    });
    setResultado(resultado, 'err', 'Escreve as duas palavras primeiro!');
    document.getElementById('tilesWrap').classList.remove('show');
    return;
  }

  // divide em letras, ordena e junta novamente
  const lettersA = a.split('').sort();
  const lettersB = b.split('').sort();

  const isAnagram = lettersA.join('') === lettersB.join('');

  setResultado(resultado, isAnagram ? 'ok' : 'err', isAnagram ? 'Boa! São anagramas!' : 'Ups... Não são anagramas!');

  renderTiles(document.getElementById('tiles1'), lettersA, lettersB);
  renderTiles(document.getElementById('tiles2'), lettersB, lettersA);
  document.getElementById('tilesWrap').classList.add('show');
}

// limpa o campo da primeira e segunda palavra, e do resultado
function limpar() {
  document.getElementById('palavra1').value = '';
  document.getElementById('palavra2').value = '';
  const resultado = document.getElementById('resultado');
  resultado.className = 'result';
  resultado.innerHTML = '';
  document.getElementById('tilesWrap').classList.remove('show');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (document.activeElement.id === 'palavra1' || document.activeElement.id === 'palavra2')) {
    verificar();
  }
});
