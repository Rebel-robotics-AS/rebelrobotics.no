const translations = {
  no: {
    title:
      "Rebel Robotics AS – skreddersydd simulering og programvare",
    description:
      "Rebel Robotics leverer skreddersydde simuleringer av robot- og automasjonsløsninger og skreddersydd programvare til produktkonfigurasjon, og står bak det nettbaserte CAD-programmet Rebel CAD.",
    ogDescription:
      "Skreddersydd simulering og programvare. Selskapet bak Rebel CAD.",
    navLabel: "Innhold",
    langLabel: "Velg språk",
    navProducts: "Produkter",
    navServices: "Tjenester",
    navAbout:
      "Om selskapet",
    navContact: "Kontakt",
    simTitle:
      "Simulering",
    simPitch:
      "Skreddersydde simuleringer av robot- og automasjonsløsninger, til kommunikasjon, beslutningsstøtte og implementering.",
    simEnd:
      "Er du sluttkunde, viser vi hvordan løsningen vil fungere i akkurat ditt produksjonsmiljø, og hva du kan forvente av den når den står ferdig.",
    simIntegrator:
      "Er du robotintegrator, hjelper vi deg å vise løsningene dine fram for kundene dine.",
    softTitle:
      "Programvare",
    softPitch:
      "Skreddersydd programvare til produktkonfigurasjon, for kundene dine og til intern bruk.",
    softText:
      "Selger du et produkt som tilpasses hver kunde? Vi bygger en konfigurator inn i nettsiden din, slik at kundene selv kan tilpasse produktet.",
    softInternal:
      "Den samme løsningen kan brukes internt, av salg og produksjon.",
    productsTitle: "Produkter",
    cadStatus: "Åpen for alle",
    cadPitch:
      "Nettbasert CAD, bygd for både KI-agenter og mennesker.",
    cadText:
      "Rebel Robotics har utviklet og drifter Rebel CAD. Programmet er laget for å være enkelt å bruke for både KI-agenter og mennesker, og gjør 3D-konstruksjon og tekniske tegninger tilgjengelig for alle. Det er gratis når det du lager er offentlig.",
    cadCta: "Prøv Rebel CAD",
    cadAppAlt:
      "Rebel CAD i en nettleserfane: en girkasse med delelisten til venstre og et felt for å skrive til assistenten nederst",
    cadFilmLabel: "Film av girkassen, rendret i Rebel CAD",
    cadCaption: "En girkasse med 92 deler. Modellen, bevegelsesstudien og filmen er laget i Rebel CAD.",
    automateStatus: "Lansering til profesjonelle brukere kommer snart",
    automatePitch: "Programvare for simulering av større produksjonslinjer og logistikk.",
    automateText:
      "Maskiner, transportbånd, roboter og trucker settes sammen i 3D i riktig målestokk. Simuleringen kjører mange skift på kort tid og viser kapasitet, flaskehalser og hva en endring er verdt.",
    automateCta: "Ta kontakt for å prøve",
    contactTitle: "Ta kontakt for mer informasjon.",
    contactText:
      "Fortell kort hva du vil simulere eller få laget, så viser vi deg hvordan vi jobber.",
    aboutTitle:
      "Om selskapet",
    aboutText1:
      "Rebel Robotics holder til på Rockethouse i Sogndal, i en klynge av teknologiselskaper. Rebel Robotics AS ble startet i 2025 som en rendyrket satsing på hvordan KI best kan brukes i robotikk og automasjon.",
    aboutText2:
      "Selskapet drives av Håvard Halvorsen, som har lang erfaring med spesialtilpassede robotikkløsninger, og blant annet har vært med å starte teknologiselskapene Rocketfarm og nLink.",
    role: "Senior robotikkingeniør",
    country: "Norge",
  },
  en: {
    title:
      "Rebel Robotics AS – custom simulation and software",
    description:
      "Rebel Robotics delivers custom simulations of robotics and automation solutions and custom software for product configuration, and is the company behind the online CAD program Rebel CAD.",
    ogDescription:
      "Custom simulation and software. The company behind Rebel CAD.",
    navLabel: "Contents",
    langLabel: "Choose language",
    navProducts: "Products",
    navServices: "Services",
    navAbout:
      "About",
    navContact: "Contact",
    simTitle:
      "Simulation",
    simPitch:
      "Custom simulations of robotics and automation solutions, for communication, decision support and implementation.",
    simEnd:
      "If you are the end customer, we show how the solution will work in your own production environment, and what you can expect of it when it is finished.",
    simIntegrator:
      "If you are a robot integrator, we help you show your solutions to your customers.",
    softTitle:
      "Software",
    softPitch:
      "Custom software for product configuration, for your customers and for use in-house.",
    softText:
      "Do you sell a product that is adapted to each customer? We build a configurator into your website, so your customers can adapt the product themselves.",
    softInternal:
      "The same solution can be used in-house, by sales and production.",
    productsTitle: "Products",
    cadStatus: "Open to everyone",
    cadPitch:
      "Online CAD, built for both AI agents and people.",
    cadText:
      "Rebel Robotics has developed and runs Rebel CAD. It is made to be easy to use for both AI agents and people, and makes 3D design and technical drawings available to everyone. It is free when what you make is public.",
    cadCta: "Try Rebel CAD",
    cadAppAlt:
      "Rebel CAD in a browser tab: a gearbox with its parts list on the left and a field for writing to the assistant at the bottom",
    cadFilmLabel: "Film of the gearbox, rendered in Rebel CAD",
    cadCaption: "A gearbox with 92 parts. The model, its motion study and the film were made in Rebel CAD.",
    automateStatus: "Launch for professional users is coming soon",
    automatePitch: "Software for simulating larger manufacturing lines and logistics.",
    automateText:
      "Machines, conveyors, robots and trucks are put together in 3D, to scale. The simulation runs many shifts in a short time and shows capacity, bottlenecks and what a change is worth.",
    automateCta: "Get in touch to try it",
    contactTitle: "Get in touch for more information.",
    contactText:
      "Tell us briefly what you want simulated or made, and we will show you how we work.",
    aboutTitle:
      "About the company",
    aboutText1:
      "Rebel Robotics is based at Rockethouse in Sogndal, Norway, in a cluster of technology companies. Rebel Robotics AS was started in 2025, dedicated to finding how AI is best used in robotics and automation.",
    aboutText2:
      "The company is run by Håvard Halvorsen, who has long experience with custom robotics solutions and has, among other things, co-founded the technology companies Rocketfarm and nLink.",
    role: "Senior robotics engineer",
    country: "Norway",
  },
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatedNodes = document.querySelectorAll("[data-i18n]");
const labelledNodes = document.querySelectorAll("[data-i18n-label]");
const altNodes = document.querySelectorAll("[data-i18n-alt]");
const description = document.querySelector('meta[name="description"]');
const ogDescription = document.querySelector('meta[property="og:description"]');

function setLanguage(language) {
  const nextLanguage = translations[language] ? language : "no";
  const dictionary = translations[nextLanguage];

  document.documentElement.lang = nextLanguage;
  document.title = dictionary.title;
  // (only leaf text carries a key, so a translation never removes a link or a tag inside it)
  translatedNodes.forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  labelledNodes.forEach((node) => {
    const value = dictionary[node.dataset.i18nLabel];
    if (value) node.setAttribute("aria-label", value);
  });
  altNodes.forEach((node) => {
    const value = dictionary[node.dataset.i18nAlt];
    if (value) node.setAttribute("alt", value);
  });

  if (description) description.content = dictionary.description;
  if (ogDescription) ogDescription.content = dictionary.ogDescription;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("rebel-robotics-language", nextLanguage);
  } catch {}
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

let storedLanguage = null;
try {
  storedLanguage = localStorage.getItem("rebel-robotics-language");
} catch {}

setLanguage(storedLanguage || "no");

// The short product loop plays by itself while it is on screen, unless the visitor has asked for
// less movement. A phone may refuse to start a film by itself (low power mode, data saving): the film then
// gets the browser's own play button, and the visitor's first touch on the page tries once more.
const loops = [...document.querySelectorAll("video[data-loop]")];
const lessMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const onScreen = new Set();
function start(loop) {
  if (lessMotion.matches || !onScreen.has(loop)) return;
  loop.muted = true;
  const attempt = loop.play();
  attempt?.catch((error) => {
    if (error.name === "NotAllowedError") loop.controls = true;
  });
  // (some phones neither play nor refuse)
  setTimeout(() => {
    if (onScreen.has(loop) && !lessMotion.matches && loop.currentTime === 0) loop.controls = true;
  }, 4000);
}
function applyMotion() {
  loops.forEach((loop) => {
    if (lessMotion.matches) {
      loop.removeAttribute("autoplay");
      loop.pause();
      loop.controls = true;
    } else {
      start(loop);
    }
  });
}
// (a film that started late, or by the visitor's touch, is a plain loop again)
loops.forEach((loop) => {
  loop.addEventListener("playing", () => {
    if (!lessMotion.matches) loop.controls = false;
  });
});
if ("IntersectionObserver" in window) {
  const watcher = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          onScreen.add(target);
          start(target);
        } else {
          onScreen.delete(target);
          target.pause();
        }
      });
    },
    { threshold: 0.2 },
  );
  loops.forEach((loop) => watcher.observe(loop));
} else {
  loops.forEach((loop) => onScreen.add(loop));
}
applyMotion();
lessMotion.addEventListener?.("change", applyMotion);
function retry() {
  loops.forEach((loop) => {
    if (loop.paused) start(loop);
  });
}
["pointerup", "touchend", "keydown"].forEach((type) => document.addEventListener(type, retry, { once: true, passive: true }));
