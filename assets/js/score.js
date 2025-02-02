function getEtiquette(axis, score) {
  if (axis === "economie") {
    if (score > 5)
      return "Collectiviste convaincu, architecte de l’État providence XXL.";
    if (score >= 0)
      return "Keynésien équilibré, le juste milieu c’est ton credo.";
    return "Fervent défenseur du capitalisme décomplexé.";
  }

  if (axis === "societe") {
    if (score > 5) return "Gardien des traditions, c’était mieux avant.";
    if (score >= 0)
      return "Réformiste tempéré : pour changer, mais pas trop vite.";
    return "Avant-gardiste absolu, tu fais de l’innovation un mode de vie.";
  }

  if (axis === "autorite") {
    if (score > 5)
      return "Chef suprême de l’ordre établi, centraliser, c’est mieux organiser.";
    if (score >= 0) return "Décentralisateur à mi-temps : chacun à sa place.";
    return "Libertaire audacieux, pas de chaînes ni de contraintes.";
  }

  if (axis === "environnement") {
    if (score > 5) return "Écolo militant, prêt à vivre en cabane si besoin.";
    if (score >= 0)
      return "Écolo modéré : tu tries tes déchets, Greta est fière de toi.";
    return "Climatosceptique endurci, défenseur du béton, pour toi, l’écologie, c’est quand ça rapporte.";
  }

  return "Erreur : Axe inconnu.";
}

// Affichage des résultats
document.addEventListener("DOMContentLoaded", () => {
  const scores = JSON.parse(localStorage.getItem("scores"));

  if (scores) {
    document.getElementById("autorite-result").innerText = getEtiquette(
      "autorite",
      scores.autorite
    );
    document.getElementById("societe-result").innerText = getEtiquette(
      "societe",
      scores.societe
    );
    document.getElementById("economie-result").innerText = getEtiquette(
      "economie",
      scores.economie
    );
    document.getElementById("environnement-result").innerText = getEtiquette(
      "environnement",
      scores.environnement
    );
  }
});
