const QUESTIONS: Question[] = [
  {
    text: "Il n’y a pas de différence entre le VIH et le sida.",
    answerA: "Aucune différence !",
    answerB: "Il y a une différence",
    goodAnswer: "B",
    explanation: "Faux ! VIH : virus de l'immunodéficience humaine ; sida : syndrome de l’immunodéficience acquise, maladie qui résulte du VIH."
  },
  {
    text: "Le nombre de contaminations par le VIH ne cesse de diminuer en France.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "A"
  },
  {
    text: "Aujourd’hui, les scientifiques ont trouvé un vaccin",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
    explanation: "Il existe cependant des traitements, mais imparfaits."
  },
  {
    text: "Il existe des médicaments qui permettent aux personnes séropositives de guérir",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
    explanation: "FAUX, mais ils permettent de ne plus transmettre le virus à d’autres personnes."
  },
  {
    text: "Si l’on a pris un risque, on peut être pris en charge en moins de 48 heures pour éviter la contamination",
    answerA: "Vrai", 
    answerB: "Faux",
    goodAnswer: "A",
  },
  {
    text: "Le préservatif est le seul moyen de se protéger du VIH.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
    explanation: "FAUX : le TPE, le TasP, la PrEP et le dépistage sont également des outils de prévention pour se protéger du VIH."
  },
  {
    text: "Les moustiques peuvent transmettre le VIH.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
  },
  {
    text: "Une personne peut être contaminée par le VIH si elle boit dans le même verre qu’une personne séropositive.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
    explanation: "FAUX : la salive n’est pas un des liquides qui peut transmettre le VIH (à savoir le liquide préséminal, le sperme, le sang, le lait maternel et les sécrétions vaginales)."
  },
  {
    text: "Il y a un risque de transmission du VIH lors d’une fellation.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "A",
    explanation: "VRAI : il est recommandé de mettre un préservatif pour se protéger. Pour réduire les risques, on peut éviter l’éjaculation dans la bouche, d’avaler le sperme et de se laver les dents une heure avant ou une heure après."
  },
  {
    text: "Lors d’un rapport sexuel, si les deux partenaires sont vierges, il n’y a pas de risque de transmission.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "A",
    explanation: "VRAI : il n’y a aucun risque de transmission sexuelle. En France, les autres modes de transmission sont maîtrisés. Cependant, il convient de bien s’entendre sur la notion de virginité (le virus est absent uniquement si les 2 personnes n’ont eu aucune pratique à risque pour le VIH)."
  },
  {
    text: "Le test de dépistage du VIH/sida est payant",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
    explanation: "FAUX : il est gratuit et anonyme dans les CeGIDD, et auprès des associations habilitées au TROD (test rapide d’orientation diagnostique). L’autotest peut également être distribué gratuitement par des associations habilitées."
  },
  {
    text: "Le médecin est autorisé à divulguer le résultat d’un test de dépistage du VIH/sida à une tierce personne",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B"
  },
  {
    text: "48 heures après une prise de risque, le résultat du test de dépistage du VIH/sida est certain.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
  },
  {
    text: "6 semaines après la dernière prise de risque, le résultat d’un test de dépistage du VIH/sida n’est pas toujours fiable.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
    explanation: " FAUX : à 6 semaines, un test est fiable.En revanche, pour le TROD (test rapide d’orientation diagnostique) il faut attendre 3 mois."
  },
  {
    text: "Une personne séropositive peut voyager partout dans le monde.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
    explanation: "certains pays l’interdisent, même si ces restrictions de déplacement tendent à diminuer."
  },
  {
    text: "Une personne séropositive meurt rapidement.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
    explanation: "FAUX : une personne sous traitement a la même espérance de vie qu’une personne séronégative."
  },
  {
    text: "Il est possible de voir si une personne est séropositive sur son visage.",
    answerA: "Vrai",
    answerB: "Faux",
    goodAnswer: "B",
  },
  {
    text: "Laquelle de ces IST (infection sexuellement transmissible) n’est pas transmise par un virus ?",
    answerA: "Le VIH",
    answerB: "L'herpès",
    answerC: "La syphilis",
    goodAnswer: "C"
  },
  {
    text: "Pour laquelle de ces IST existe-t-il un vaccin préventif ?",
    answerA: "L'hépatite B",
    answerB: "L'herpès",
    answerC: "Le VIH",
    goodAnswer: "A",
  },
  {
    text: "Qui est plus susceptible physiologiquement de contracter le VIH/IST lors de rapports hétérosexuels ?",
    answerA: "Les hommes",
    answerB: "Les femmes",
    answerC: "Même risque homme/femme.",
    goodAnswer: "B",
  },
  {
    text: "Quelle est l’année de la découverte du VIH ?",
    answerA: "1979",
    answerB: "1981",
    answerC: "1983",
    goodAnswer: "C"
  },
  {
    text: "Quelle est la différence entre le VIH et le sida ?",
    answerA: "Le VIH est la conséquence de la maladie du sida.",
    answerB: "Le VIH est le virus responsable de la maladie du sida.",
    answerC: "C’est la même chose",
    goodAnswer: "B",
  },
  {
    text: "Qu'est-ce que c’est qu'être séropositif au VIH ?",
    answerA: "Avoir un rhésus positif.",
    answerB: "Être immunisé contre le VIH.",
    answerC: "Être porteur du VIH.",
    goodAnswer: "C",
  },
  {
    text: "Parmi ces différentes pratiques à risque, laquelle est la plus risquée pour la transmission du VIH ?",
    answerA: "Un rapport vaginal sans préservatif.",
    answerB: "Un rapport anal sans préservatif (sodomie).",
    answerC: "Une fellation sans préservatif.",
    goodAnswer: "B",
  },
  {
    text: "Les risques de contaminations sont plus importants si",
    answerA: "Porteur d'une IST",
    answerB: "On est homosexuel.le",
    answerC: "Rapports multipartenaires fréquents",
    goodAnswer: "A"
  },
  {
    text: "En quelle matière est fabriqué le préservatif interne",
    answerA: "Latex",
    answerB: "Polyuréthane",
    answerC: "Nitrile",
    goodAnswer: "C"
  },
  {
    text: "En quelle matière n’est pas fabriqué le préservatif externe ?",
    answerA: "Latex",
    answerB: "Polyuréthane",
    answerC: "Nitrile",
    goodAnswer: "C",
  },
  {
    text: "Quel type de lubrifiant peut-on utiliser avec le latex sans risquer de l’endommager ?",
    answerA: "Du gel à base d’eau.",
    answerB: "De la vaseline.", 
    answerC: "De l’huile.",
    goodAnswer: "A"
  }
];

// 28
export default QUESTIONS;