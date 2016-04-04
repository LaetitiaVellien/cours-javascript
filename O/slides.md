class: center, middle

# Javascript - TP O
# Initiation à jQuery

.col-33pct[&nbsp;]
.col-33pct[
  ![jquery logo](./img/jquery.svg)
]

---

# Javascript - TP O

- Objectifs:
    + Comprendre la logique d'usage de jQuery
    + Intérpréter un composant jQuery
    + Convertir du code jQuery code JS DOM natif

--

- Pré-requis:
    + Savoir utiliser jsfiddle
    + Savoir créer et tester une page HTML avec du code Javascript
    + Prendre des notes: [support de cours](https://docs.google.com/a/eemi.com/document/d/1GhMSYf5vyBUU7pVIS_OlCqlj5DGqa_E_H0r_RGBcD_Q/edit?usp=sharing)

---

# Programme du TP

- Explication des bases
- Mise en pratique: (30mn)
    + Convertir un composant jQuery simple en JS/DOM natif
- Exercice: (par groupe de projet)
    + Convertir un autre composant jQuery en JS/DOM natif

---

# Rappel: le DOM

.center[
  ![html dom](./img/dom.png)
]

---

# Le DOM, Javascript et jQuery

.center[
  ![html dom tree](./img/dom-tree.png)
]

- **DOM**: structure d'une page HTML chargée dans le navigateur
--

- **DOM API**: fonctions permettant de manipuler le DOM
--

- **Javascript**: language permettant d'utiliser des APIs depuis le navigateur
--

- **jQuery**: bibliothèque Javascript fournissant des raccourcis pour manipuler le DOM

---

# Fonctions de base de jQuery 1/2

## Sélecteurs / structure

- `$('#monDiv')` = `document.getElementById('monDiv')`
- `$('.maClasse')` = `document.getElementsByClassName('maClasse')`
- `$('<div id="monDiv">')` = `createElement()` + `setAttribute()`
- `$('#monDiv').append(html)` = `<el>.appendChild(node)` / `innerHTML`

--

## Accesseurs / modifieurs

- `$('#monInput').val()` = `document.getElementById('monInput').value`
- `$('#monLien').attr('href', url)` = `<el>.setAttribute('href', url)`
- `$('#monDiv').css('color', 'red')` = `<el>.style.color = 'red';`

---

# Fonctions de base de jQuery 2/2

## Propriétés intéressantes

- Boucles: `$('.maClasse').click(fct)`
- Chaînage: `$('#monDiv').click(fct).addClass(cls).append(html);`

--

## Événements

- `$('#monDiv').click(fonction)` = `<el>.onclick = fonction`

--

## Bonus

- `$.ajax(url, fct)` = appel Ajax

---

# Mise en pratique: jQuery -> JS/DOM Natif

- Tester et analyser le [jsfiddle d'exemple](http://jsfiddle.net/adrienjoly/kfev26f3/)
- Forker ce jsfiddle, puis le modifier pour qu'il ne contienne plus de jQuery:
  1. Fonction associée au clic sur *un seul* menu
  2. ... puis sur *chaque* menu (à l'aide d'une boucle)
  3. Cacher les éléments `.content`
  4. Afficher l'élément `.content` du `.menu` qui a été cliqué

---

# Exercice: convertir un composant jQuery

## Exemples de composants

- Slider: [Simple Slider](http://www.webdeveloperjuice.com/2010/01/12/lightest-jquery-content-slider-ever-made-380-bytes/) ou [Craftyslide](http://projects.craftedpixelz.co.uk/craftyslide/)
- Nombre animé: [codepen](http://codepen.io/shivasurya/pen/FatiB), [jsfiddle](http://jsfiddle.net/4v2wK/), ou [github](https://github.com/talmand/jquery-animate-numbers)

## Pour vous aider

- [Some jQuery Functions And Their JavaScript Equivalents](http://callmenick.com/post/jquery-functions-javascript-equivalents)
- [Plain JS](https://plainjs.com/javascript/)
