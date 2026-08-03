---
layout: default
title: "עמוד הבית"
---

<link rel="stylesheet" href="{{ '/style/index.css' | relative_url }}" />

<div dir="rtl" lang="he" class="memorial-page">
  <section class="hero">
    <img src="/assets/main/omri-hero.avif" alt="תמונה של עמרי" class="hero-image" />
    <div class="hero-content">
      <p class="eyebrow">אתר זיכרון לעומרי תמרי</p>
      <div class="hero-links">
        <a href="/hespedim/">הספדים</a>
        <a href="/share-memory/">שתפו זיכרון</a>
      </div>
      <a href="/about/" class="hero-image-link" aria-label="על הפרויקט">
        <img src="/assets/main/glufa.png" alt="על הפרויקט" />
      </a>
      <h1>אתר להנצחת ולהנכחת עומרי </h1>
      <p class="hero-description">האתר ישאיר את עומרי איתנו בעשייה בזכרונות ובתמונות</p>
    </div>
  </section>

   <section class="omri-figure">
   <h2>על עומרי</h2>
   <p class="section-lead"> 
   <a href="/about-omri/">לקרוא על עומרי</a>
   </p>
    <div class="project-grid">
      <article class="project-card">
        <div class="home-slideshow">
          <button class="home-slideshow__button prev" type="button" aria-label="תמונה קודמת">&#10094;</button>
          <div class="home-slideshow__viewport">
            <img src="/assets/images/long/army/army.JPG" alt="תמונה 1" class="home-slideshow__image active" loading="lazy" />
            <img src="/assets/images/long/komuna/ez.JPG" alt="תמונה 2" class="home-slideshow__image" loading="lazy" />
            <img src="/assets/images/long/komuna/hamus.jpg" alt="תמונה 3" class="home-slideshow__image" loading="lazy" />
            <img src="/assets/images/long/childhood/mishkefet.jpg" alt="תמונה 4" class="home-slideshow__image" loading="lazy" />
          </div>
          <button class="home-slideshow__button next" type="button" aria-label="תמונה הבאה">&#10095;</button>
        </div>
        <p>אמור מעט ועשה הרבה</p>
      </article>
    </div>
  </section>

<section class="story-section detail-card upcoming-events-card">
    <div class="upcoming-events-header">
      <h2>אירועים קרובים</h2>
      <button class="manager-event-toggle cta-button cta-clean" type="button" data-manager-toggle>הוספת אירוע למנהלים</button>
    </div>
    <p class="section-lead">לוח קצר של אירועים והתכנסויות</p>
    <div class="manager-event-form-panel" hidden>
      <form class="manager-event-form">
        <label class="manager-event-field">
          <span>תאריך</span>
          <input type="text" name="date" placeholder="לדוגמה: 09.10.26" required />
        </label>
        <label class="manager-event-field">
          <span>מיקום</span>
          <input type="text" name="location" placeholder="לדוגמה: מזכרת בתיה" required />
        </label>
        <label class="manager-event-field">
          <span>כותרת</span>
          <input type="text" name="title" placeholder="לדוגמה: טורניר כדורסל" required />
        </label>
        <label class="manager-event-field">
          <span>שעת התחלה</span>
          <input type="time" name="startTime" />
        </label>
        <label class="manager-event-field">
          <span>שעת סיום</span>
          <input type="time" name="endTime" />
        </label>
        <label class="manager-event-field">
          <span>תיאור</span>
          <textarea name="description" rows="3" placeholder="פרטים נוספים על האירוע"></textarea>
        </label>
        <div class="manager-event-form__actions">
          <button type="submit" class="cta-button">שמור אירוע</button>
          <button type="button" class="cta-button cta-clean manager-event-cancel">ביטול</button>
        </div>
      </form>
    </div>
    <div class="upcoming-events-list" data-upcoming-events-list>
      <article class="upcoming-event">
        <div class="upcoming-event__date">09.10.26</div>
        <div>
          <h3>אזכרה</h3>
          <p>אזכרה - כבר שנתיים.</p>
        </div>
      </article>
      <article class="upcoming-event">
        <div class="upcoming-event__date">09.10.26</div>
        <div>
          <h3>טורניר כדורסל לזכרו</h3>
          <p>הטורניר השנתי ייערך במגרש הכדורסל של בית ספר רבין במזכרת בתיה בסמוך לאזכרה.</p>
        </div>
      </article>
      <article class="upcoming-event">
        <div class="upcoming-event__date">ספט׳ 2026</div>
        <div>
          <h3>אבני דרך ללוחם</h3>
          <p>הפרויקט יתחיל עם שיתוף לוחמים ופעילויות ליווי לקראת האזרחות.</p>
        </div>
      </article>
      <article class="upcoming-event">
        <div class="upcoming-event__date">2027 מאי׳</div>
        <div>
          <h3>אתגר הסוכר</h3>
          <p>פרטים על האתגר בהמשך, שיתופים והזמנות להצטרפות.</p>
        </div>
      </article>
    </div>
  </section>

  <section class="project-links">
    <h2>פרויקטים לזכרו</h2>
    <p class="section-lead">הצצה מהירה לכל פרויקט. לחצו על כרטיס כדי לעבור לפרטים המלאים בהמשך העמוד.</p>
    <div class="project-grid">
      <article class="project-card">
        <h3>אתגר הסוכר</h3>
        <p> שעומרי לקח על עצמו בגיל 14 והתמיד איתו 4 שנים אנחנו לא נעמוד ב4 שנים, אבל ננסה לעמוד במספר ימים כימי ההולדת של עומרי לו היה איתנו  .</p>
        <a href="#sugar-challenge">קראו עוד</a>
      </article>
      <article class="project-card">
        <h3>אבני דרך ללוחם</h3>
        <p>צוות תמרי יוצא לדרך עיקבו אחרינו כדי לראות את הליווי של לוחמים שיוצאים לאזרחות</p>
        <a href="#running">קראו עוד</a>
      </article>
      <article class="project-card">
        <h3>טורניר כדורסל לזכרו של עומרי תמרי</h3>
        <p>  השנה יתקיים הטורניר ב9.10.26</p>
        <a href="#basketball">קראו עוד</a>
      </article>
    </div>
  </section>

  

  <section class="details-intro">
    <h2>פירוט הפרויקטים</h2>
    <p>כאן תמצאו את הסיפורים המלאים מאחורי כל יוזמה, כולל רגעים אישיים ושיתופים.</p>
  </section>

  <section class="story-section detail-card" id="sugar-challenge">
    <h2>אתגר הסוכר</h2>
   <p> הזמנה לאתגר הסוכר 2026</p>
    <article class="project-card">
        {% include instegram-suchar.html %}
      </article>

  </section>

  <section class="story-section detail-card" id="running">
  <h2>אבני דרך ללוחם</h2>
    <p>פרוייקט מרגש שהצטרפנו אליו - ליווי לוחמים משוחררים</p>
    <p>הפרוייקט יוצא לדרך בספטמבר 2026
    נעדכן בהמשך</p>
  </section>

  <section class="story-section detail-card" id="basketball">
    <h2>טורניר כדורסל לזכרו של עומרי </h2>
    <p>טורניר סטריטבול מתקיים מידי שנה בתאריך האזכרה שלעומרי</p>
    <p>עומרי שיחק במדי הפועל מזכרת בתיה מכיתה ג׳ עד כיתה י״א.<br>לזכרו יזמו חבריו את הטורניר</p>
      <article class="project-card">
        {% include instagram-embed.html %}
      </article>
  </section>

  <script src="{{ '/script/home-slideshow.js' | relative_url }}"></script>

  <section class="story-section detail-card share-memory-highlight" id="share-memory">
    <h2>שתפו זיכרונות</h2>
    <p>אם יש לכם תמונה, סיפור או מחשבה על עמרי, נשמח שתשתפו. זה המקום לתעד את השפעתו, את הרגעים הקטנים ואת הרוח הספורטיבית שהפכה לחלק מההיסטוריה שלנו.</p>
    <p>כתבו פוסט, צרפו תמונה והיו חלק מהאתגר שממשיך לזכור אותו בדרך חיובית.</p>
    <a href="/share-memory/" class="cta-button cta-clean">לעמוד שיתוף הזיכרונות</a>
  </section>

  <section class="story-section detail-card spotify-section">
    <h2>שחר קרמר בפרוייקט ״קשר הירח״</h2>
    <p>שחר קרמר בביצוע לשיר ״קשר הירח״ לזכרו של עומרי  </p>
    <p>שחר בת כיתה של עומרי ממזכרת בתיה שרה את השיר מעל קיברו ב30, מאוחר יותר הקליטה והוציאה את השיר במסגרת פרוייקט שעבדה עליו להנצחת נופלי המושבה</p>
    <div class="spotify-embed">
      <div class="spotify-embed__player">
        <div class="spotify-embed__header">קשר הירח – Spotify</div>
        <div class="spotify-embed__frame">
          <iframe
            src="https://open.spotify.com/embed/track/4eg5jBQcr4EoxZgXf2OBlx?flow_ctx=68d8af87-85ed-4d66-b89b-7de6e3a5d83e%3A1785291805&autoplay_ok=1"
            width="100%"
            height="100"
            class="spotify-embed__iframe"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Spotify – קשר הירח">
          </iframe>
        </div>
      </div>
      <div class="spotify-embed__cover">
        <img src="/assets/main/inx-transparent.png" alt="קשר הירח" class="spotify-embed__cover-img" />
      </div>
    </div>
  </section>

  <section class="story-section detail-card" id="ynet-embed">
    <h2>מהרשת</h2>
    <p>להצגה ישירה של הסרטון, ראו למטה.</p>
    <article class="project-card">
      <picture>
        <img src="/assets/main/galhed.png" alt="image info" loading="lazy" />
      </picture>
      <p style="margin-top: 0.75rem; margin-bottom: 0.75rem;">
        <a href="https://www.ynet.co.il/gal-hed/article/s1aruof1fe" target="_blank" rel="noopener noreferrer">לפתוח את הכתבה גל-הד</a>
      </p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
        <iframe
          src="https://www.youtube.com/embed/eoDXBRWwH70"
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
        ></iframe>
      </div>
      <p style="margin-top: 0.75rem; margin-bottom: 0;">
        <a href="https://www.youtube.com/watch?v=eoDXBRWwH70" target="_blank" rel="noopener noreferrer">לחץ על כפתור כדי לראות
        </a>
      </p>
   
    </article>
  </section>


