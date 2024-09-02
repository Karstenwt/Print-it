const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let currentSlide = 0; // Index de la slide actuelle

// Sélection des éléments DOM
const bannerImg = document.querySelector(".banner-img");
const bannerTagline = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Fonction pour initialiser les dots (points de navigation)
function initializeDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("dot_selected"); // Le premier point est sélectionné par défaut
    dotsContainer.appendChild(dot);
  });
}

// Fonction pour mettre à jour l'affichage de la bannière et des dots
function updateBanner(index) {
  // Mise à jour de l'image et du texte de la bannière
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerTagline.innerHTML = slides[index].tagLine;

  // Mise à jour des points actifs
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

initializeDots();

// Gestion du clic sur la flèche droite
arrowRight.addEventListener("click", () => {
  console.log("Clic sur la flèche droite");
  currentSlide = (currentSlide + 1) % slides.length; // Passage à la slide suivante (boucle)
  updateBanner(currentSlide); // Mise à jour du contenu
});

//gestion du clic su la flèche gauche

arrowLeft.addEventListener("click", () => {
  console.log("clic sur la flèche gauche");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateBanner(currentSlide);
});
