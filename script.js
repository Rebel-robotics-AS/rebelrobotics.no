const translations = {
  no: {
    description: "Rebel robotics AS. Produkter og tjenester innen robotikk.",
    ogDescription: "Produkter og tjenester innen robotikk",
    productsTitle: "produkt",
    productsText:
      "Vi jobber med vårt første fysiske robotprodukt basert på roboter og kunstig intelligens. Lansering i 2027.",
    servicesTitle: "Konsulenttjenester",
    servicesText:
      "Trenger du hjelp med robotikkprosjektet ditt? Jeg har 15 års erfaring med skreddersydde robotikkløsninger.",
    contactLead: "Kontakt meg på",
    role: "Senior robotikkingeniør",
    country: "Norge",
  },
  en: {
    description: "Rebel robotics AS. Products and services in robotics.",
    ogDescription: "Products and services in robotics",
    productsTitle: "products",
    productsText:
      "We are hard at work making our first physical robotic product based on robots and AI. Launching in 2027.",
    servicesTitle: "Consulting services",
    servicesText:
      "Looking for assistance to your robotic project? I have 15 years of experience with custom robotic solutions.",
    contactLead: "Contact me at",
    role: "Senior robotics engineer",
    country: "Norway",
  },
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatedNodes = document.querySelectorAll("[data-i18n]");
const description = document.querySelector('meta[name="description"]');
const ogDescription = document.querySelector('meta[property="og:description"]');

function setLanguage(language) {
  const nextLanguage = translations[language] ? language : "no";
  const dictionary = translations[nextLanguage];

  document.documentElement.lang = nextLanguage;
  translatedNodes.forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) node.textContent = value;
  });

  if (description) description.content = dictionary.description;
  if (ogDescription) ogDescription.content = dictionary.ogDescription;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("rebel-robotics-language", nextLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const storedLanguage = localStorage.getItem("rebel-robotics-language");

setLanguage(storedLanguage || "no");
