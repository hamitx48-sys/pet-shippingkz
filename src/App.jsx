import { useState } from "react";
import "./App.css";

const content = {
  ru: {
    brand: "Petshipping KZ",
    subtitle: "Международная перевозка животных",
    navAbout: "О нас",
    navServices: "Услуги",
    navSteps: "Этапы",
    navContact: "Контакты",
    badge: "Тёплый семейный сервис",
    heroTitle: "Перевозим питомцев по миру спокойно, бережно и без хаоса",
    heroText:
      "Petshipping KZ помогает семьям безопасно перевозить домашних животных в любые страны. Документы, маршрут, сопровождение и поддержка — всё под контролем.",
    heroButton: "Написать в WhatsApp",
    heroButton2: "Смотреть услуги",
    aboutTitle: "Почему нам доверяют",
    aboutText:
      "Для нас питомец — не просто груз. Мы понимаем, сколько тревоги бывает у семьи перед перелётом, поэтому помогаем пройти весь путь спокойно и понятно.",
    trust1: "Поддержка на каждом этапе",
    trust2: "Помощь с документами",
    trust3: "Международные направления",
    trust4: "Бережный подход к животным",
    servicesTitle: "Что мы делаем",
    services: [
      {
        title: "Международная перевозка",
        text: "Организуем перевозку животных в любые страны с учётом правил и маршрута.",
      },
      {
        title: "Документы",
        text: "Помогаем с ветеринарными справками, сертификатами и обязательными бумагами.",
      },
      {
        title: "Подбор маршрута",
        text: "Подбираем удобный и безопасный вариант перелёта для питомца и владельца.",
      },
      {
        title: "Подготовка переноски",
        text: "Подсказываем, какая переноска подойдёт по размеру и требованиям перевозчика.",
      },
      {
        title: "Сопровождение",
        text: "Остаёмся на связи и ведём клиента от первого сообщения до прибытия питомца.",
      },
      {
        title: "Консультации",
        text: "Объясняем весь процесс простым языком без путаницы и лишнего стресса.",
      },
    ],
    stepsTitle: "Как проходит работа",
    steps: [
      "Вы пишете нам в WhatsApp и рассказываете маршрут.",
      "Мы уточняем детали и список нужных документов.",
      "Подбираем безопасный план перевозки.",
      "Сопровождаем процесс до прибытия питомца.",
    ],
    contactTitle: "Связаться с нами",
    contactText:
      "Если вам нужна перевозка животного по миру, напишите нам — поможем собрать всё по шагам.",
    instagram: "Instagram",
    whatsapp: "Написать в WhatsApp",
    footer: "С заботой о питомцах и спокойствии их семей",
  },
  en: {
    brand: "Petshipping KZ",
    subtitle: "International pet transportation",
    navAbout: "About",
    navServices: "Services",
    navSteps: "Steps",
    navContact: "Contact",
    badge: "Warm family-style service",
    heroTitle: "We move pets around the world calmly, safely, and with care",
    heroText:
      "Petshipping KZ helps families transport pets internationally with confidence. Documents, route planning, support, and communication — all handled properly.",
    heroButton: "Message on WhatsApp",
    heroButton2: "View services",
    aboutTitle: "Why clients trust us",
    aboutText:
      "For us, a pet is never just cargo. We know how stressful relocation can be, so we help families go through the process clearly and calmly.",
    trust1: "Support at every step",
    trust2: "Document assistance",
    trust3: "Worldwide routes",
    trust4: "Gentle pet-first approach",
    servicesTitle: "What we do",
    services: [
      {
        title: "International transportation",
        text: "We organize pet transport to different countries with route and regulation planning.",
      },
      {
        title: "Documents",
        text: "We help with veterinary papers, certificates, and required travel documents.",
      },
      {
        title: "Route planning",
        text: "We select the safest and most practical route for the pet and the owner.",
      },
      {
        title: "Crate preparation",
        text: "We advise on suitable pet carriers according to size and airline requirements.",
      },
      {
        title: "Full guidance",
        text: "We stay in touch from the first message until your pet arrives safely.",
      },
      {
        title: "Consultations",
        text: "We explain the process clearly without confusion or unnecessary stress.",
      },
    ],
    stepsTitle: "How the process works",
    steps: [
      "You message us on WhatsApp and describe the route.",
      "We clarify the details and required documents.",
      "We prepare the safest transport plan.",
      "We guide you until your pet arrives.",
    ],
    contactTitle: "Get in touch",
    contactText:
      "If you need international pet transportation, message us and we’ll guide you step by step.",
    instagram: "Instagram",
    whatsapp: "Message on WhatsApp",
    footer: "With care for pets and peace of mind for their families",
  },
};

function App() {
  const [lang, setLang] = useState("ru");
  const t = content[lang];

  return (
    <div className="page">
      <header className="topbar">
        <div className="logoWrap">
          <div className="logo">PKZ</div>
          <div>
            <div className="brand">{t.brand}</div>
            <div className="brandSub">{t.subtitle}</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#about">{t.navAbout}</a>
          <a href="#services">{t.navServices}</a>
          <a href="#steps">{t.navSteps}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>

        <div className="langSwitch">
          <button
            className={lang === "ru" ? "active" : ""}
            onClick={() => setLang("ru")}
          >
            RU
          </button>
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="heroText">
          <div className="badge">{t.badge}</div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>

          <div className="heroButtons">
            <a
              className="primaryBtn"
              href="https://wa.me/77754828007"
              target="_blank"
              rel="noreferrer"
            >
              {t.heroButton}
            </a>
            <a className="secondaryBtn" href="#services">
              {t.heroButton2}
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="card cardLarge">
            <div className="pet petDog">🐶</div>
            <div className="cardText">
              <strong>Pet travel</strong>
              <span>Safe, warm, organized</span>
            </div>
          </div>

          <div className="miniCards">
            <div className="card">
              <div className="pet">🐱</div>
              <div className="cardText">
                <strong>Documents</strong>
                <span>Prepared clearly</span>
              </div>
            </div>
            <div className="card">
              <div className="pet">✈️</div>
              <div className="cardText">
                <strong>Routes</strong>
                <span>Worldwide support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionIntro" id="about">
        <div className="sectionText">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </div>

        <div className="trustBox">
          <div>{t.trust1}</div>
          <div>{t.trust2}</div>
          <div>{t.trust3}</div>
          <div>{t.trust4}</div>
        </div>
      </section>

      <section className="services" id="services">
        <h2>{t.servicesTitle}</h2>
        <div className="servicesGrid">
          {t.services.map((item) => (
            <div className="serviceCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="steps" id="steps">
        <h2>{t.stepsTitle}</h2>
        <div className="stepsGrid">
          {t.steps.map((step, index) => (
            <div className="stepCard" key={step}>
              <div className="stepNumber">0{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>

        <div className="contactButtons">
          <a
            className="primaryBtn"
            href="https://wa.me/77754828007"
            target="_blank"
            rel="noreferrer"
          >
            {t.whatsapp}
          </a>
          <a
            className="secondaryBtn"
            href="https://instagram.com/pet_shipping_kz"
            target="_blank"
            rel="noreferrer"
          >
            {t.instagram}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>© Petshipping KZ</div>
        <div>{t.footer}</div>
      </footer>
    </div>
  );
}

export default App;
