---
layout: default
title: תבי
---

<div dir="rtl" lang="he" class="memorial-page">
  <section class="hero">
    <img src="/assets/main/omri-hero.jpg" alt="תמונה של עמרי" class="hero-image" />
    <div class="hero-content">
      <p class="eyebrow">אתר זיכרון לעומרי תמרי</p>
      <h1></h1>
      <p class="hero-description"></p>
    </div>
  </section>

  <section class="project-links">
    <h2>פרויקטים לזכרו</h2>
    <div class="project-grid">
      <article class="project-card">
        <h3>אתגר הסוכר</h3>
        <p>חודש של סיפורים, תמונות וחוויות של משתתפים שניסו להימנע ממזון עם סוכר .</p>
        <a href="#sugar-challenge">קראו עוד</a>
      </article>
      <article class="project-card">
        <h3>מרוצי רגל</h3>
        <p>רגעים ממסלולים, ניצחונות והדחיפה של עמרי כאחד האצנים הטובים באזור.</p>
        <a href="#running">קראו עוד</a>
      </article>
      <article class="project-card">
        <h3>כדורסל וזמן קבוצה</h3>
        <p>זכרונות מן המגרש, משחקים, אימונים ושיתוף הפעולה עם חברי הקבוצה.</p>
        <a href="#basketball">קראו עוד</a>
      </article>
    </div>
  </section>

  <section class="story-section" id="sugar-challenge">
    <h2>אתגר הסוכר</h2>
    <p>אתגר סוכר הוא מסע של חודש שבו המשתתפים משתפים את חוויותיהם בניסיון להימנע ממזון עם סוכר . מי שמפסיד, מתחיל שוב — עם סיפורים על דחף לשוקולד, כוסות גלידת סנדוויץ' ואיך השגרה של עומרי מזכירה לנו להמשיך לנסות.</p>
    <p>האתגר כולל פרסומים על התמודדות, תמונות של מזונות מפתים ושל רגעים של חולשה — והכל לזכרו של עמרי, שהיה חזק, אמיץ ומלא שמחת חיים.</p>
  </section>

  <section class="story-section" id="running">
  <h2>>רוציםמ</h2>
    <p>עמרי היה לרץ מצטיין, זכה במספר מרוצים על מסלולי הבית והאזור. הוא היה טיפוס של מטרה, שראה כל ריצה כהזדמנות להיות טוב יותר.</p>
    <p>הקצב שלו, הגובה והנוכחות שלו בשטח הפכו אותו לדמות שהדרך שלו זוכרים גם היום.</p>
  </section>

  <section class="story-section" id="basketball">
    <h2>כדורסל וזיכרונות</h2>
    <p>על המגרש, עמרי היה שחקן מסודר, שוויוני וקלע סלים חשובים. המשחקים הזכירו את האכפתיות שלו ואת ההשקעה הקבוצתית.</p>
    <p>היום, אנו זוכרים את הרגעים שבהם הוא קפץ, העביר את הכדור ויצר קהילה סביב הספורט שהוא אהב.</p>
  </section>

  <section class="story-section" id="share-memory">
    <h2>שתפו זיכרונות</h2>
    <p>אם יש לכם תמונה, סיפור או מחשבה על עמרי, נשמח שתשתפו. זה המקום לתעד את השפעתו, את הרגעים הקטנים ואת הרוח הספורטיבית שהפכה לחלק מההיסטוריה שלנו.</p>
    <p>כתבו פוסט, צרפו תמונה והיו חלק מהאתגר שממשיך לזכור אותו בדרך חיובית.</p>
  </section>

  {% include footer.html %}

  <style>
    .memorial-page {
      max-width: 980px;
      margin: auto;
      padding: 1.5rem 1rem 3rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Arial", sans-serif;
      color: #1a1a1a;
      background: #f7f7f7;
    }
    .hero {
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      box-shadow: 0 18px 45px rgba(0,0,0,0.08);
      margin-bottom: 3rem;
      background: #000;
      min-height: 480px;
    }
    .hero-image {
      width: 100%;
      height: 480px;
      object-fit: cover;
      display: block;
      filter: brightness(0.75);
      position: absolute;
      top: 0;
      left: 0;
    }
    .hero-content {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 2rem;
      color: #ffffff;
      text-shadow: 0 20px 40px rgba(0,0,0,0.35);
      background: linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.7) 100%);
      z-index: 10;
    }
    .hero-content h1 {
      margin: 0.25rem 0 1rem;
      font-size: clamp(2rem, 4vw, 3.4rem);
      line-height: 1.05;
    }
    .hero-content .eyebrow {
      margin-bottom: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 0.85rem;
      color: #c5d2ff;
    }
    .hero-description {
      max-width: 760px;
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
    .project-links {
      margin-bottom: 2rem;
      position: relative;
      z-index: 1;
    }
    .project-links h2,
    .story-section h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      letter-spacing: 0.02em;
    }
    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1rem;
    }
    .project-card {
      padding: 1.75rem;
      border-radius: 1rem;
      background: #ffffff;
      border: 1px solid #e8e8e8;
      box-shadow: 0 8px 22px rgba(13, 38, 76, 0.06);
    }
    .project-card h3 {
      margin-top: 0;
      margin-bottom: 0.75rem;
    }
    .project-card p {
      margin-bottom: 1.2rem;
      line-height: 1.75;
      color: #4f4f4f;
    }
    .project-card a {
      color: #0f63ff;
      text-decoration: none;
      font-weight: 600;
    }
    .story-section {
      margin-bottom: 2rem;
      padding: 1.9rem 2rem;
      background: #ffffff;
      border-radius: 1rem;
      border: 1px solid #ececec;
      box-shadow: 0 8px 20px rgba(0,0,0,0.02);
    }
    .story-section p {
      line-height: 1.8;
      color: #484848;
      margin: 0.8rem 0;
    }
    @media (max-width: 720px) {
      .hero {
        border-radius: 0.9rem;
      }
      .hero-content {
        padding: 1.4rem;
      }
      .hero-links a {
        margin-right: 0.5rem;
        margin-left: 0;
      }
    }
  </style>
