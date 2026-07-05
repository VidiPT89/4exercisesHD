const ICON_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>';

function setResultado(el, type, message) {
  const icon = type === 'ok' ? ICON_OK : '';
  el.className = 'result show ' + type;
  el.innerHTML = (icon ? '<span class="result-icon">' + icon + '</span>' : '') + '<span>' + message + '</span>';
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function atualizarPreview() {
  const texto = document.getElementById('texto').value;
  const preview = document.getElementById('preview');
  const vogais = 'aeiouAEIOU';

  preview.innerHTML = texto
    .split('')
    .map((ch) => (vogais.includes(ch) ? '<span class="vowel">' + escapeHtml(ch) + '</span>' : escapeHtml(ch)))
    .join('');
}

function animarNumero(el, alvo) {
  const inicio = 0;
  const duracao = 500;
  const t0 = performance.now();

  function passo(t) {
    const progresso = Math.min((t - t0) / duracao, 1);
    el.textContent = Math.round(inicio + (alvo - inicio) * progresso);
    if (progresso < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}

function contador() {
  // lê o texto do input e passa tudo para minúsculas
  let texto = document.getElementById('texto').value.toLowerCase();
  const resultado = document.getElementById('resultado');
  // string com todas as vogais
  let vogais = 'aeiou';
  // contador de vogais
  let total = 0;

  // percorre cada letra do texto
  for (let i = 0; i < texto.length; i++) {
    // verifica se a letra está dentro da string 'vogais'
    if (vogais.includes(texto[i])) {
      total++; // se for vogal, soma 1
    }
  }

  if (!texto) {
    const input = document.getElementById('texto');
    input.classList.remove('shake');
    void input.offsetWidth;
    input.classList.add('shake');
    setResultado(resultado, 'err', t('contador.msg.empty'));
    document.getElementById('counterBig').style.display = 'none';
    return;
  }

  setResultado(resultado, 'ok', t('contador.msg.result') + total);

  const counterBig = document.getElementById('counterBig');
  counterBig.style.display = 'flex';
  animarNumero(document.getElementById('counterNum'), total);
}

// limpa o input do texto e do resultado
function limpar() {
  document.getElementById('texto').value = '';
  document.getElementById('preview').innerHTML = '';
  const resultado = document.getElementById('resultado');
  resultado.className = 'result';
  resultado.innerHTML = '';
  document.getElementById('counterBig').style.display = 'none';
}

document.getElementById('texto').addEventListener('input', atualizarPreview);
document.getElementById('texto').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') contador();
});

function atualizarPreviewEmptyText() {
  document.getElementById('preview').setAttribute('data-empty-text', t('contador.previewEmpty'));
}

atualizarPreviewEmptyText();

document.addEventListener('langchange', () => {
  atualizarPreviewEmptyText();
  const resultado = document.getElementById('resultado');
  if (resultado.classList.contains('show')) contador();
});
