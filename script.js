const quotes = [
  "La vie est ce que vous en faites, alors faites-en quelque chose de grand.",
  "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
  "Croyez en vos rêves et ils pourraient se réaliser ; croyez en vous et ils se réaliseront sûrement.",
  "La seule limite à notre épanouissement de demain sera nos doutes d’aujourd’hui.",
  "Chaque jour est une nouvelle chance de faire mieux qu'hier.",
];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});
