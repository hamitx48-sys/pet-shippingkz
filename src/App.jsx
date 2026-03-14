import { useState } from "react";


const content = {
  ru: {
    brand: "Petshipping KZ",
    navAbout: "О нас",
    navServices: "Услуги",
    navContact: "Контакты",
    heroTitle: "Перевозим питомцев по миру спокойно, бережно и без хаоса",
    heroText:
      "Petshipping KZ помогает семьям безопасно перевозить домашних животных в любые страны. Документы, маршрут, сопровождение и поддержка — всё под контролем.",
    heroButton: "Написать в WhatsApp",
    heroButton2: "Смотреть услуги",
    aboutTitle: "Почему нам доверяют",
    aboutText:
      "Для нас питомец — не просто груз. Мы понимаем, сколько тревоги бывает у семьи перед перелётом, поэтому помогаем пройти весь путь спокойно и по-человечески.",
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
        text: "Подскажем, какая переноска подойдёт по размеру и требованиям перевозчика.",
      },
      {
        title: "Сопровождение",
        text: "Остаёмся на связи на всех этапах — от подготовки до прибытия.",
      },
      {
        title: "Под ключ",
        text: "Берём на себя максимум организационных задач, чтобы вы не тонули в стрессе.",
      },
    ],
    stepsTitle: "Как проходит процесс",
    steps: [
      {
        title: "1. Консультация",
        text: "Уточняем страну, сроки, вид животного и детали поездки.",
      },
      {
        title: "2. Подготовка",
        text: "Собираем список документов и помогаем всё подготовить без путаницы.",
      },
      {
        title: "3. Перевозка",
        text: "Организуем сам маршрут и сопровождаем до прибытия питомца.",
      },
    ],
    trustTitle: "С заботой о каждом хвостатом пассажире",
    trustText:
      "Тёплый сервис, понятные шаги и реальная помощь — вот что должно чувствоваться на этом сайте.",
    contactTitle: "Свяжитесь с нами",
    contactText:
      "Напишите в WhatsApp или Instagram, чтобы обсудить маршрут, документы и перевозку вашего питомца.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    footer: "© Petshipping KZ • Международная перевозка животных",
  },
  en: {
    brand: "Petshipping KZ",
    navAbout: "About",
    navServices: "Services",
    navContact: "Contact",
    heroTitle: "We relocate pets worldwide with care, calm, and full support",
    heroText:
      "Petshipping KZ helps families safely move their pets to any country. Documents, route planning, assistance, and support — all handled with care.",
    heroButton: "Contact on WhatsApp",
    heroButton2: "View services",
    aboutTitle: "Why families trust us",
    aboutText:
      "For us, a pet is never just cargo. We understand how stressful relocation can feel, so we guide families through the entire process with clarity and care.",
    servicesTitle: "What we do",
    services: [
      {
        title: "International relocation",
        text: "We organize pet transportation worldwide with country and airline requirements in mind.",
      },
      {
        title: "Documentation",
        text: "We help with certificates, veterinary papers, and all required documents.",
      },
      {
        title: "Route planning",
        text: "We choose the safest and most convenient route for the pet and owner.",
      },
      {
        title: "Carrier preparation",
        text: "We help select a suitable carrier based on size and transport rules.",
      },
      {
        title: "Full support",
        text: "We stay in touch at every stage, from preparation to arrival.",
      },
      {
        title: "Turnkey service",
        text: "We handle the hard parts so you do not have to deal with the stress alone.",
      },
    ],
    stepsTitle: "How it works",
    steps: [
      {
        title: "1. Consultation",
        text: "We discuss the country, timing, pet type, and travel details.",
      },
      {
        title: "2. Preparation",
        text: "We guide you through documents and everything needed before departure.",
      },
      {
        title: "3. Transportation",
        text: "We organize the route and support you until your pet arrives.",
      },
    ],
    trustTitle: "Caring for every furry passenger",
    trustText:
      "Warm service, clear steps, and real support — that is the feeling this website should give.",
    contactTitle: "Get in touch",
    contactText:
      "Message us on WhatsApp or Instagram to discuss the route, documents, and relocation for your pet.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    footer: "© Petshipping KZ • International pet transportation",
  },
};

export default function App() {
  const [lang, setLang] = useState("ru");
  const t = content[lang];

  return (
    <div className="page">
      <header className="topbar">
        <div className="logoWrap">
          <div className="logo">PKZ</div>
          <div>
            <div className="brand">{t.brand}</div>
            <div className="brandSub">
              {lang === "ru"
                ? "Международная перевозка животных"
                : "International pet relocation"}
            </div>
          </div>
        </div>

        <nav className="nav">
          <a href="#about">{t.navAbout}</a>
          <a href="#services">{t.navServices}</a>
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
          <span className="badge">
            {lang === "ru"
              ? "Тёплый семейный сервис"
              : "Warm family-centered service"}
          </span>

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
          <div className="photo photoBig">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1000&q=80"
              alt="Dog"
            />
          </div>

          <div className="photo photoSmall">
            <img
              src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1000&q=80"
              alt="Cat"
            />
          </div>

          <div className="floatingCard">
            <div className="floatingTitle">
              {lang === "ru" ? "Все страны мира" : "Worldwide"}
            </div>
            <div className="floatingText">
              {lang === "ru"
                ? "Документы, маршрут и сопровождение"
                : "Documents, routing, and support"}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="sectionIntro">
          <span>{lang === "ru" ? "О компании" : "About company"}</span>
          <h2>{t.aboutTitle}</h2>
        </div>

        <div className="aboutCard">
          <p>{t.aboutText}</p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="sectionIntro">
          <span>{lang === "ru" ? "Услуги" : "Services"}</span>
          <h2>{t.servicesTitle}</h2>
        </div>

        <div className="cardGrid">
          {t.services.map((item, i) => (
            <div className="serviceCard" key={i}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="steps">
        <div className="sectionIntro">
          <span>{lang === "ru" ? "Процесс" : "Process"}</span>
          <h2>{t.stepsTitle}</h2>
        </div>

        <div className="stepsGrid">
          {t.steps.map((item, i) => (
            <div className="stepCard" key={i}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="trust">
        <div className="trustBox">
          <div>
            <span className="trustLabel">
              {lang === "ru" ? "Почему это цепляет" : "Why it feels right"}
            </span>
            <h2>{t.trustTitle}</h2>
            <p>{t.trustText}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="sectionIntro">
          <span>{lang === "ru" ? "Контакты" : "Contacts"}</span>
          <h2>{t.contactTitle}</h2>
        </div>

        <div className="contactCard">
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
        </div>
      </section>

      <footer className="footer">{t.footer}</footer>
    </div>
  );
}
