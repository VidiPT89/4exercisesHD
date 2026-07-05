# 🧩✨ 4 Exercises HD — JavaScript Logic Challenges, Reimagined

> A modern, animated, live-demo-ready redesign of four classic JavaScript logic exercises: anagrams, vowel counting, temperature conversion, and palindrome detection.

This project is a full visual and interactive rebuild of [`4exercises`](https://github.com/VidiPT89/4exercises), keeping the original JavaScript logic intact while wrapping it in a polished, dark, glassmorphic UI with real-time previews, micro-animations, and per-exercise color themes. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies — so it can be cloned and opened straight in a browser or embedded as a live demo.

🔗 **Live demo:** [ividi.dev](https://ividi.dev/)

## 📦 What's Inside

- 🔤 **Anagrama** — Compares two words letter-by-letter with animated, color-coded letter tiles showing which letters match
- 🔢 **Contador de Vogais** — Highlights every vowel live as you type, then reveals an animated count-up number
- 🌡️ **Conversor de Temperatura** — Celsius ⇄ Fahrenheit conversion with an animated thermometer and a color gauge that reacts to the value
- 🔁 **Palíndromo** — Live mirror preview of the typed text vs. its reverse, with a confetti burst on a successful match
- 🎨 A shared dark design system (`css/style.css`) — glassmorphic panels, floating gradient orbs, animated nav, ripple buttons
- 🌈 Each exercise has its own accent color theme (amber, cyan/teal, red/orange, purple/pink)
- 📖 Collapsible "Como funciona o código" panel on every page explaining the underlying logic with real code snippets
- ⌨️ Enter-to-submit on every input, shake animation on invalid input, reduced-motion support for accessibility
- 📱 Fully responsive layout, from mobile to desktop
- 🏠 Landing page with an animated hero and a card grid linking to all four exercises

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Project Structure

```
4exercisesHD/
├── index.html            # Landing page — animated hero + card grid
├── anagrama.html         # Anagram checker — letter-tile visualization
├── contador.html         # Vowel counter — live highlight + animated count-up
├── conversor.html        # Temperature converter — animated thermometer/gauge
├── palindromo.html       # Palindrome checker — live mirror + confetti
├── css/
│   ├── style.css         # Shared design system (variables, nav, panels, buttons, animations)
│   ├── home.css          # Landing page hero + card grid styles
│   ├── anagrama.css      # Letter tile styles
│   ├── contador.css      # Vowel highlight + counter styles
│   ├── conversor.css     # Thermometer + gauge styles
│   └── palindromo.css    # Mirror + confetti styles
└── js/
    ├── app.js            # Shared behaviour — active nav link, button ripple effect
    ├── anagrama.js        # verificar() + limpar() — sort-and-compare logic + tile rendering
    ├── contador.js        # contador() + limpar() — for-loop vowel counting + live preview
    ├── conversor.js        # converter() + limpar() — formula with validation + gauge animation
    └── palindromo.js       # verificar() + limpar() — reverse-and-compare logic + mirror/confetti
```

## 🔄 How Each Exercise Works

### 🔤 Anagrama (`js/anagrama.js`)

```
Input: palavra1 = "listen", palavra2 = "silent"
  ↓ .toLowerCase().replace(/ /g, "")
  ↓ .split("").sort()               → ["e","i","l","n","s","t"] both
  ↓ compare: a.join("") === b.join("")
Output: "Boa! São anagramas!" + animated matching letter tiles
```

### 🔢 Contador de Vogais (`js/contador.js`)

```
Input: texto = "Hello World"
  ↓ live: each vowel highlighted as you type
  ↓ .toLowerCase() + for loop + "aeiou".includes(letra)
Output: "O total de vogais: 3" + animated count-up number
```

### 🌡️ Conversor de Temperatura (`js/conversor.js`)

```
Input: valor = 100, tipo = "cf" (Celsius → Fahrenheit)
  ↓ parseFloat + validation (handles 0 correctly)
  ↓ (100 * 9 / 5) + 32 = 212.00
Output: "212.00 ºF" + thermometer animates to full + gauge marker slides
```

### 🔁 Palíndromo (`js/palindromo.js`)

```
Input: texto = "arara"
  ↓ live mirror: original vs. reversed text, updated on every keystroke
  ↓ .split("").reverse().join("") === texto
Output: "É sim palíndromo!" + confetti burst
```

## 📊 Exercise Comparison Table

| Exercise | Input Fields | JS Technique | Key Methods | Extra UI |
|----------|-------------|-------------|-------------|----------|
| **Anagrama** | Two text fields | String sorting | `split`, `sort`, `join`, `replace` | Animated letter tiles |
| **Contador** | One text field | Character loop | `includes`, `for` loop | Live vowel highlighting + count-up |
| **Conversor** | Number input + `<select>` | Math formula | `parseFloat`, `toFixed(2)` | Animated thermometer + gauge |
| **Palíndromo** | One text field | Array reversal | `split`, `reverse`, `join` | Live mirror preview + confetti |

## 🚀 How to Run

```bash
# 1. Clone the repository
git clone https://github.com/VidiPT89/4exercisesHD.git

# 2. Open the landing page
cd 4exercisesHD
open index.html    # macOS
# or: start index.html (Windows) / xdg-open index.html (Linux)

# 3. Click any exercise card to try it live
```

No build tools, no dependencies — just open and play.

## 📝 Notes

- The original exercises' logic and Portuguese variable names (`verificar`, `contador`, `limpar`) were preserved exactly — this project is a UI/UX rebuild, not a rewrite of the underlying JavaScript
- All visualizations (letter tiles, vowel highlights, thermometer, mirror preview) are additive — the core comparison logic still runs the same way it did in the original exercises
- The gauge scale in the temperature converter maps Celsius values (including converted Fahrenheit inputs) onto a fixed -40 ºC to 60 ºC visual range
- `prefers-reduced-motion` is respected — all animations collapse to near-instant for users who request reduced motion
- Every page shares the same design system (`css/style.css`) but ships its own small CSS file for exercise-specific widgets, keeping each exercise easy to reuse independently

---

Developed by **David Arsénio Martins** — *"Vidi"* — [ividi.dev](https://ividi.dev/)
