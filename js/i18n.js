// Shared PT/EN translation dictionary + language switcher, used by every page.
const translations = {
  pt: {
    'nav.anagrama': '🔤 Anagrama',
    'nav.contador': '🔢 Vogais',
    'nav.conversor': '🌡️ Temperatura',
    'nav.palindromo': '🔁 Palíndromo',
    'footer.license': 'MIT License · <a href="https://github.com/VidiPT89/4exercisesHD" target="_blank" rel="noopener">Código no GitHub</a>',

    'home.pageTitle': '4 Exercises — Desafios de Lógica em JavaScript',
    'home.metaDesc': 'Quatro exercícios interativos de JavaScript: anagrama, contador de vogais, conversor de temperatura e palíndromo. Por David Arsénio Martins.',
    'home.kicker': 'live demo · vanilla JS',
    'home.title': '4 exercícios de <span class="grad">lógica em JavaScript</span>',
    'home.lead': 'Quatro mini-desafios clássicos — manipulação de strings, loops, condicionais e DOM — reconstruídos com uma interface moderna, animada e pronta para demonstração ao vivo.',
    'home.stack.zero': 'Zero dependências',
    'home.card1.title': 'Anagrama',
    'home.card1.desc': 'Verifica se duas palavras são anagramas comparando letras ordenadas.',
    'home.card2.title': 'Contador de Vogais',
    'home.card2.desc': 'Percorre um texto letra a letra e conta as vogais em tempo real.',
    'home.card3.title': 'Conversor de Temperatura',
    'home.card3.desc': 'Converte entre Celsius e Fahrenheit com um termómetro animado.',
    'home.card4.title': 'Palíndromo',
    'home.card4.desc': 'Inverte o texto e compara com o original, com espelho ao vivo.',

    'anagrama.pageTitle': 'Anagrama — 4 Exercises',
    'anagrama.metaDesc': 'Verifica se duas palavras são anagramas, com visualização animada das letras ordenadas.',
    'anagrama.badge': 'Exercício 01 · Strings',
    'anagrama.h1': 'Anagrama',
    'anagrama.lead': 'Duas palavras são anagramas quando têm exatamente as mesmas letras, só que por outra ordem. Escreve duas palavras e descobre.',
    'anagrama.label1': 'Palavra 1',
    'anagrama.label2': 'Palavra 2',
    'anagrama.placeholder1': 'ex: listen',
    'anagrama.placeholder2': 'ex: silent',
    'anagrama.btnCheck': 'Verificar',
    'anagrama.btnClear': 'Limpar',
    'anagrama.tilesLabel1': 'Palavra 1 ordenada',
    'anagrama.tilesLabel2': 'Palavra 2 ordenada',
    'anagrama.howSummary': 'Como funciona o código',
    'anagrama.howBody': 'Cada palavra é passada para minúsculas, sem espaços, depois dividida em letras com <code>split("")</code>, ordenada alfabeticamente com <code>sort()</code> e reconstruída com <code>join("")</code>. Se as duas strings resultantes forem iguais, são anagramas.',
    'anagrama.msg.ok': 'Boa! São anagramas!',
    'anagrama.msg.err': 'Ups... Não são anagramas!',
    'anagrama.msg.empty': 'Escreve as duas palavras primeiro!',

    'contador.pageTitle': 'Contador de Vogais — 4 Exercises',
    'contador.metaDesc': 'Conta as vogais de uma palavra ou frase em tempo real, com destaque animado das letras.',
    'contador.badge': 'Exercício 02 · Loops',
    'contador.h1': 'Contador de Vogais',
    'contador.lead': 'Escreve uma palavra ou frase e vê, letra a letra, quantas vogais existem — atualizado ao vivo enquanto escreves.',
    'contador.label': 'Texto',
    'contador.placeholder': 'Escreve uma palavra ou uma frase...',
    'contador.previewEmpty': 'A pré-visualização das vogais aparece aqui enquanto escreves...',
    'contador.btnCount': 'Contador',
    'contador.btnClear': 'Limpar',
    'contador.counterLabel': 'vogais encontradas',
    'contador.howSummary': 'Como funciona o código',
    'contador.howBody': 'O texto é passado para minúsculas e percorrido caractere a caractere com um ciclo <code>for</code>. Cada letra é testada com <code>"aeiou".includes(letra)</code> — se for vogal, o contador soma 1.',
    'contador.msg.result': 'O total de vogais: ',
    'contador.msg.empty': 'Escreve algum texto primeiro!',

    'conversor.pageTitle': 'Conversor de Temperatura — 4 Exercises',
    'conversor.metaDesc': 'Converte temperaturas entre Celsius e Fahrenheit com um termómetro animado em tempo real.',
    'conversor.badge': 'Exercício 03 · Matemática',
    'conversor.h1': 'Conversor de Temperatura',
    'conversor.lead': 'Converte valores entre Celsius e Fahrenheit e observa o termómetro a reagir em tempo real.',
    'conversor.labelValor': 'Temperatura',
    'conversor.placeholderValor': 'Escreve a temperatura',
    'conversor.labelTipo': 'Conversão',
    'conversor.optionCF': 'Celsius → Fahrenheit',
    'conversor.optionFC': 'Fahrenheit → Celsius',
    'conversor.btnConvert': 'Converter',
    'conversor.btnClear': 'Limpar',
    'conversor.gaugeDefault': 'Escreve um valor para veres o resultado aqui',
    'conversor.howSummary': 'Como funciona o código',
    'conversor.howBody': 'O valor é convertido para número com <code>parseFloat</code>. Depois é aplicada a fórmula certa consoante o tipo de conversão escolhido, e o resultado é arredondado a duas casas decimais com <code>toFixed(2)</code>.',
    'conversor.msg.invalid': 'Escreve um número válido.',
    'conversor.gauge.freezing': 'Gelado ❄️',
    'conversor.gauge.cool': 'Fresco',
    'conversor.gauge.mild': 'Ameno ☀️',
    'conversor.gauge.hot': 'Quente 🔥',

    'palindromo.pageTitle': 'Palíndromo — 4 Exercises',
    'palindromo.metaDesc': 'Verifica se uma palavra ou frase é um palíndromo, com um espelho de texto animado ao vivo.',
    'palindromo.badge': 'Exercício 04 · Arrays',
    'palindromo.h1': 'Palíndromo',
    'palindromo.lead': 'Um palíndromo lê-se da mesma forma ao contrário. Escreve uma palavra ou frase e vê o espelho em tempo real.',
    'palindromo.label': 'Texto',
    'palindromo.placeholder': 'Escreve uma palavra ou uma frase...',
    'palindromo.btnCheck': 'Verificar',
    'palindromo.btnClear': 'Limpar',
    'palindromo.howSummary': 'Como funciona o código',
    'palindromo.howBody': 'O texto é dividido em letras com <code>split("")</code>, invertido com <code>reverse()</code> e reconstruído com <code>join("")</code>. Se o resultado for igual ao texto original, é um palíndromo.',
    'palindromo.msg.ok': 'É sim palíndromo!',
    'palindromo.msg.err': 'Não é palíndromo!',
    'palindromo.msg.empty': 'Escreve algum texto primeiro!',
  },

  en: {
    'nav.anagrama': '🔤 Anagram',
    'nav.contador': '🔢 Vowels',
    'nav.conversor': '🌡️ Temperature',
    'nav.palindromo': '🔁 Palindrome',
    'footer.license': 'MIT License · <a href="https://github.com/VidiPT89/4exercisesHD" target="_blank" rel="noopener">Code on GitHub</a>',

    'home.pageTitle': '4 Exercises — JavaScript Logic Challenges',
    'home.metaDesc': 'Four interactive JavaScript exercises: anagram, vowel counter, temperature converter and palindrome. By David Arsénio Martins.',
    'home.kicker': 'live demo · vanilla JS',
    'home.title': '4 JavaScript <span class="grad">logic exercises</span>',
    'home.lead': 'Four classic mini-challenges — string manipulation, loops, conditionals and DOM — rebuilt with a modern, animated interface ready for a live demo.',
    'home.stack.zero': 'Zero dependencies',
    'home.card1.title': 'Anagram',
    'home.card1.desc': 'Checks whether two words are anagrams by comparing sorted letters.',
    'home.card2.title': 'Vowel Counter',
    'home.card2.desc': 'Walks through a text letter by letter and counts the vowels live.',
    'home.card3.title': 'Temperature Converter',
    'home.card3.desc': 'Converts between Celsius and Fahrenheit with an animated thermometer.',
    'home.card4.title': 'Palindrome',
    'home.card4.desc': 'Reverses the text and compares it to the original, with a live mirror.',

    'anagrama.pageTitle': 'Anagram — 4 Exercises',
    'anagrama.metaDesc': 'Checks whether two words are anagrams, with an animated visualization of the sorted letters.',
    'anagrama.badge': 'Exercise 01 · Strings',
    'anagrama.h1': 'Anagram',
    'anagrama.lead': 'Two words are anagrams when they have exactly the same letters, just in a different order. Type two words and find out.',
    'anagrama.label1': 'Word 1',
    'anagrama.label2': 'Word 2',
    'anagrama.placeholder1': 'e.g. listen',
    'anagrama.placeholder2': 'e.g. silent',
    'anagrama.btnCheck': 'Check',
    'anagrama.btnClear': 'Clear',
    'anagrama.tilesLabel1': 'Word 1 sorted',
    'anagrama.tilesLabel2': 'Word 2 sorted',
    'anagrama.howSummary': 'How the code works',
    'anagrama.howBody': 'Each word is lowercased, stripped of spaces, then split into letters with <code>split("")</code>, alphabetically sorted with <code>sort()</code> and rebuilt with <code>join("")</code>. If the two resulting strings are equal, they are anagrams.',
    'anagrama.msg.ok': "Nice! They're anagrams!",
    'anagrama.msg.err': "Oops... Not anagrams!",
    'anagrama.msg.empty': 'Type both words first!',

    'contador.pageTitle': 'Vowel Counter — 4 Exercises',
    'contador.metaDesc': 'Counts the vowels in a word or sentence in real time, with animated letter highlighting.',
    'contador.badge': 'Exercise 02 · Loops',
    'contador.h1': 'Vowel Counter',
    'contador.lead': 'Type a word or sentence and watch, letter by letter, how many vowels it has — updated live as you type.',
    'contador.label': 'Text',
    'contador.placeholder': 'Type a word or a sentence...',
    'contador.previewEmpty': 'The vowel preview appears here as you type...',
    'contador.btnCount': 'Count',
    'contador.btnClear': 'Clear',
    'contador.counterLabel': 'vowels found',
    'contador.howSummary': 'How the code works',
    'contador.howBody': 'The text is lowercased and walked through character by character with a <code>for</code> loop. Each letter is tested with <code>"aeiou".includes(letter)</code> — if it is a vowel, the counter adds 1.',
    'contador.msg.result': 'Total vowels: ',
    'contador.msg.empty': 'Type some text first!',

    'conversor.pageTitle': 'Temperature Converter — 4 Exercises',
    'conversor.metaDesc': 'Converts temperatures between Celsius and Fahrenheit with a real-time animated thermometer.',
    'conversor.badge': 'Exercise 03 · Math',
    'conversor.h1': 'Temperature Converter',
    'conversor.lead': 'Converts values between Celsius and Fahrenheit and watches the thermometer react in real time.',
    'conversor.labelValor': 'Temperature',
    'conversor.placeholderValor': 'Type the temperature',
    'conversor.labelTipo': 'Conversion',
    'conversor.optionCF': 'Celsius → Fahrenheit',
    'conversor.optionFC': 'Fahrenheit → Celsius',
    'conversor.btnConvert': 'Convert',
    'conversor.btnClear': 'Clear',
    'conversor.gaugeDefault': 'Type a value to see the result here',
    'conversor.howSummary': 'How the code works',
    'conversor.howBody': 'The value is converted to a number with <code>parseFloat</code>. The right formula is then applied depending on the chosen conversion type, and the result is rounded to two decimal places with <code>toFixed(2)</code>.',
    'conversor.msg.invalid': 'Type a valid number.',
    'conversor.gauge.freezing': 'Freezing ❄️',
    'conversor.gauge.cool': 'Cool',
    'conversor.gauge.mild': 'Mild ☀️',
    'conversor.gauge.hot': 'Hot 🔥',

    'palindromo.pageTitle': 'Palindrome — 4 Exercises',
    'palindromo.metaDesc': 'Checks whether a word or sentence is a palindrome, with a live animated text mirror.',
    'palindromo.badge': 'Exercise 04 · Arrays',
    'palindromo.h1': 'Palindrome',
    'palindromo.lead': 'A palindrome reads the same way backwards. Type a word or sentence and watch the mirror in real time.',
    'palindromo.label': 'Text',
    'palindromo.placeholder': 'Type a word or a sentence...',
    'palindromo.btnCheck': 'Check',
    'palindromo.btnClear': 'Clear',
    'palindromo.howSummary': 'How the code works',
    'palindromo.howBody': 'The text is split into letters with <code>split("")</code>, reversed with <code>reverse()</code> and rebuilt with <code>join("")</code>. If the result matches the original text, it is a palindrome.',
    'palindromo.msg.ok': "Yes, it's a palindrome!",
    'palindromo.msg.err': 'Not a palindrome!',
    'palindromo.msg.empty': 'Type some text first!',
  },
};

function getLang() {
  return localStorage.getItem('lang') === 'en' ? 'en' : 'pt';
}

function t(key) {
  const lang = getLang();
  return translations[lang][key] ?? translations.pt[key] ?? key;
}

function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });

  document.querySelectorAll('[data-i18n-content]').forEach((el) => {
    el.setAttribute('content', t(el.getAttribute('data-i18n-content')));
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', applyTranslations);
