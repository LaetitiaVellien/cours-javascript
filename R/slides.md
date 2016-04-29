class: center, middle

# Javascript - TP R
# Jeux et algorithmes

---

# Javascript - TP R

- Objectif: Développer ChiFouMi (pierre feuille ciseaux)

- Concepts utilisés:
    + Variables
    + Conditions
    + Boucles
    + Nombres aléatoires
    + Dialogue avec l'utilisateur
    + Fonctions
    
---

# Programme du TP

- 1. FizzBuzz: `V+C+B`
- 2. Devine: `V+C+B+N+D`
- 3. ChiFouMi 1: `V+C+ +N+D+F`
- 4. ChiFouMi 2: `V+C+B+N+D+F`

Chaque exercice = 15 minutes en autonomie + 10 minutes de correction

---

# 1. FizzBuzz

- Écrire un programme qui affiche les nombres de 1 à 199 dans la console.
- Pour les multiples de 3, afficher `Fizz` au lieu du nombre.
- Pour les multiples de 5, afficher `Buzz` au lieu du nombre.
- Pour les nombres multiples de 3 et 5, afficher `FizzBuzz` au lieu du nombre.

=> `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz` ...

---

# 2. Devine le nombre

- L'ordinateur va choisir un nombre aléatoire entre 1 et 100.
- Le joueur a droit à 10 tentatives pour deviner ce nombre.
  - Si le nombre est supérieur à la tentative, afficher `Plus grand`.
  - Si le nombre est inférieur à la tentative, afficher `Plus petit`.
  - Si le joueur a deviné le nombre, afficher `Bravo !`.
- La partie continue jusqu'à ce que le joueur gagne ou épuise ses 10 tentatives.

```js
Joueur: 10
Réponse: Plus grand
Joueur: 20
Réponse: Plus petit
Joueur: 16
Réponse: Bravo !
```

Utiliser la fonction `Math.random()` pour générer un nombre aléatoire.

Utiliser la fonction `prompt()` pour que le joueur saisisse un nombre.

---

# 3. ChiFouMi 1/2

- À chaque manche, l'ordinateur et le joueur choisissent `pierre`, `feuille` ou `ciseaux`.
- Un point est donné à celui qui à choisit l'élément le plus fort:
  + `ciseaux` > `feuille` (*les ciseaux coupent la feuille*)
  + `pierre` > `ciseaux` (*la pierre casse les ciseaux*)
  + `feuille` > `pierre` (*la feuille enveloppe la pierre*)

=> Récupérer le choix du joueur et de l'ordinateur, et définir une fonction `comparer()` permettant de savoir qui remporte chaque manche.

Suivre les étapes de [cette page](https://www.codecademy.com/en/courses/javascript-beginner-fr-FR-aba4j/1/5).

???

```js
var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");

var choixOrdi = Math.random();

if (choixOrdi < 0.34) {
  choixOrdi = "pierre";
} else if(choixOrdi <= 0.67) {
  choixOrdi = "feuille";
} else {
  choixOrdi = "ciseaux";
}
console.log("Ordinateur : " + choixOrdi);

function comparer(choix1, choix2) {
    if (choix1 === choix2) return "Egalité !";
    if (choix1 === "pierre") {
        if (choix2 === "ciseaux") return "pierre";
        else if (choix2 === "feuille") return "feuille";
    }
    else if (choix1 === "feuille") {
        if (choix2 === "ciseaux") return "ciseaux";
        else if (choix2 === "pierre") return "feuille";
    }
    else if (choix1 === "ciseaux") {
        if (choix2 === "feuille") return "ciseaux";
        else if (choix2 === "pierre") return "pierre";
    }
}
```

---

# 4. ChiFouMi 2/2

Nous avons réalisé:
- Une fonction `comparer()` qui permet de savoir quel objet l'emporte sur l'autre;
- Les choix du joueur et de l'ordinateur, dans les variables `choixUtilisateur` et `choixOrdi`.

Que reste-t-il à faire ?

--

- Utiliser la fonction `comparer()` sur ces choix pour déterminer le gagnant de chaque manche;
- Faire une boucle de jeu (en 10 manches) et compter les points.

À vous de jouer !
