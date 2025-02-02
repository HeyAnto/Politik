const questions = [
  // Axe Économie
  {
    text: "L'État doit intervenir davantage dans l'économie pour réduire les inégalités.",
    axis: "economie",
    weight: +1,
  },
  {
    text: "Le marché libre est la meilleure façon de gérer l'économie.",
    axis: "economie",
    weight: -1,
  },
  {
    text: "Les grandes entreprises doivent être davantage taxées pour financer les services publics.",
    axis: "economie",
    weight: +1,
  },
  {
    text: "La privatisation des services publics est une bonne chose pour l'efficacité.",
    axis: "economie",
    weight: -1,
  },
  {
    text: "L'État doit garantir un revenu universel pour tous les citoyens.",
    axis: "economie",
    weight: +2,
  },
  {
    text: "Les subventions aux entreprises nuisent à la concurrence et doivent être supprimées.",
    axis: "economie",
    weight: -2,
  },
  {
    text: "Les startups doivent être exonérées d’impôts pour booster l’innovation.",
    axis: "economie",
    weight: -2,
  },
  {
    text: "Le télétravail devrait être obligatoire pour réduire les embouteillages.",
    axis: "economie",
    weight: -1,
  },

  // Axe Société
  {
    text: "La société doit préserver ses traditions face aux changements culturels.",
    axis: "societe",
    weight: +1,
  },
  {
    text: "Les droits des minorités doivent être une priorité absolue.",
    axis: "societe",
    weight: -1,
  },
  {
    text: "Le mariage doit rester une institution traditionnelle entre un homme et une femme.",
    axis: "societe",
    weight: +2,
  },
  {
    text: "La légalisation du cannabis est une mesure nécessaire pour réduire la criminalité.",
    axis: "societe",
    weight: -2,
  },
  {
    text: "L'immigration doit être strictement contrôlée pour protéger l'identité nationale.",
    axis: "societe",
    weight: +1,
  },
  {
    text: "La liberté d'expression doit être absolue, même si elle offense certaines personnes.",
    axis: "societe",
    weight: -1,
  },
  {
    text: "La sieste obligatoire au travail : une révolution sociale nécessaire.",
    axis: "societe",
    weight: +1,
  },
  {
    text: "La sieste au travail devrait être un droit fondamental (surtout à SIMPLON).",
    axis: "societe",
    weight: +1,
  },
  {
    text: "Les débats politiques devraient être diffusés sur TikTok.",
    axis: "societe",
    weight: -1,
  },

  // Axe Autorité
  {
    text: "Le gouvernement central doit avoir plus de pouvoir que les régions.",
    axis: "autorite",
    weight: +1,
  },
  {
    text: "La décentralisation est essentielle pour rapprocher le pouvoir des citoyens.",
    axis: "autorite",
    weight: -1,
  },
  {
    text: "La surveillance de masse est justifiée pour lutter contre le terrorisme.",
    axis: "autorite",
    weight: +2,
  },
  {
    text: "Les libertés individuelles doivent primer sur la sécurité nationale.",
    axis: "autorite",
    weight: -2,
  },
  {
    text: "L'armée doit jouer un rôle plus important dans la gestion du pays.",
    axis: "autorite",
    weight: +1,
  },
  {
    text: "Les citoyens doivent avoir le droit de se rebeller contre un gouvernement injuste.",
    axis: "autorite",
    weight: -1,
  },
  {
    text: "La grève est un art, et il faut la protéger à tout prix.",
    axis: "autorite",
    weight: -2,
  },
  {
    text: "Les élus devraient être payés au smic pour rester proches du peuple.",
    axis: "autorite",
    weight: -1,
  },
  {
    text: "Les politiciens devraient être notés sur une appli comme les restaurants.",
    axis: "autorite",
    weight: -1,
  },

  // Axe Environnement
  {
    text: "La planète brûle, mais est-ce vraiment grave si on a la clim ?",
    axis: "environnement",
    weight: -1,
  },
  {
    text: "Les voitures électriques sont la solution miracle pour sauver la planète.",
    axis: "environnement",
    weight: -1,
  },
  {
    text: "Interdire les pailles en plastique, c’est bien, mais ça ne sauvera pas les tortues.",
    axis: "environnement",
    weight: +1,
  },
  {
    text: "La taxe carbone est une nécessité pour lutter contre le réchauffement climatique.",
    axis: "environnement",
    weight: +2,
  },
  {
    text: "Les énergies renouvelables sont trop chères et pas assez efficaces.",
    axis: "environnement",
    weight: -2,
  },
  {
    text: "Le nucléaire est la meilleure solution pour une énergie propre et durable.",
    axis: "environnement",
    weight: +1,
  },
  {
    text: "Les agriculteurs devraient être subventionnés pour adopter des pratiques écologiques.",
    axis: "environnement",
    weight: +2,
  },
  {
    text: "Les avions devraient être interdits pour réduire les émissions de CO2.",
    axis: "environnement",
    weight: -1,
  },
  {
    text: "La mode éthique, c’est bien, mais est-ce que ça va avec mes baskets ?",
    axis: "environnement",
    weight: -1,
  },
  {
    text: "La planète avant le profit : les entreprises doivent être responsables.",
    axis: "environnement",
    weight: +2,
  },
];

// Mélanger les questions aléatoirement
questions.sort(() => Math.random() - 0.5);

// Scores initiaux
const scores = {
  economie: 0,
  societe: 0,
  autorite: 0,
  environnement: 0,
};

// Index de la question
let questionIndex = 0;

// Réponses précédentes
let previousAnswers = [];

// Fonction pour afficher une question
function displayQuestion() {
  const question = questions[questionIndex];
  document.getElementById("question-title").innerText = `Question ${
    questionIndex + 1
  } sur ${questions.length}`;
  document.getElementById("question-text").innerText = question.text;
}

// Fonction pour gérer les réponses
function handleAnswer(answer) {
  const question = questions[questionIndex];

  // Stocker la réponse
  previousAnswers.push({ axis: question.axis, answer: answer });

  // Mettre à jour le score en fonction de la réponse
  switch (answer) {
    case "oui":
      scores[question.axis] += question.weight;
      break;
    case "non":
      scores[question.axis] -= question.weight;
      break;
    case "neutre":
      // Pas de changement
      break;
  }

  // Passer à la question suivante
  questionIndex++;

  // Vérifier si le quiz est terminé
  if (questionIndex < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

// Revenir à la question précédente
function goToPreviousQuestion() {
  if (questionIndex > 0) {
    questionIndex--;

    // Récupérer la dernière réponse
    const lastAnswer = previousAnswers.pop();

    // Annuler l'effet de la dernière réponse sur les scores
    if (lastAnswer) {
      switch (lastAnswer.answer) {
        case "oui":
          scores[lastAnswer.axis] -= questions[questionIndex].weight;
          break;
        case "non":
          scores[lastAnswer.axis] += questions[questionIndex].weight;
          break;
        case "neutre":
          // Pas de changement
          break;
      }
    }

    // Afficher la question précédente
    displayQuestion();
  }
}

// Fonction pour afficher les résultats
function showResults() {
  window.location.href = "score.html";

  // Stocker les scores
  localStorage.setItem("scores", JSON.stringify(scores));
}

// Initialisation du quiz
document.addEventListener("DOMContentLoaded", () => {
  displayQuestion();

  // Gérer les clics sur les boutons de réponse
  document
    .getElementById("btn-oui")
    .addEventListener("click", () => handleAnswer("oui"));
  document
    .getElementById("btn-neutre")
    .addEventListener("click", () => handleAnswer("neutre"));
  document
    .getElementById("btn-non")
    .addEventListener("click", () => handleAnswer("non"));

  // Gérer le bouton "Retour"
  document
    .getElementById("btn-retour")
    .addEventListener("click", goToPreviousQuestion);
});
