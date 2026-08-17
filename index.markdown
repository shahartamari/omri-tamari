---
layout: default
title: "עמוד הבית"
---

<link rel="stylesheet" href="{{ '/style/index.css' | relative_url }}" />

<div dir="rtl" lang="he" class="memorial-page">
  <section class="hero">
    <img src="/assets/main/white_hat.jpeg" alt="תמונה של עמרי" class="hero-image" />
    <div class="hero-content">
      <p class="eyebrow">אתר זיכרון לעומרי תמרי</p>
      <p class="hero-description"><br><br><br><br> </p>
     <h2> ״תהנה מכל רגע, כדי שלא תתחרט על מה שלא עשית״</h2>
    </div>
  </section>

   <section class="omri-figure">
   <p class="section-lead"> 
   <a href="/about-omri/"><h1>לקרוא על עומרי </h1></a>
   </p>
    <div class="project-grid">
      <article class="project-card">
        {% include home-slideshow.html folder="/assets/images/omri" limit="100" %}
        <p>13.10.2024  יום לאחר יום כיפור נפל יקירינו עומרי בשעה שנקרא להגן על המדינה<br>עומרי השאיר אחריו חברים רבים ומשפחה שבורים וגאים שהוא היה חלק מחייהם <br>עומרי היה איש של חתירה למצויינות אהבת הארץ והאדם<br>וכך חי את חייו </p>
      </article>
    </div>
  </section>

<section class="story-section detail-card upcoming-events-card" id="upcoming">
    <div class="upcoming-events-header" id="upcoming">
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
      <article class="project-card">
        <h3>לרכישת כובעים וחולצות</h3>
        <p>חולצות כובעים וצמידים</p>
        <a href="#store">קראו עוד</a>
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

  <section class="story-section detail-card" id="store">
    <h2>לינקים לרכישת חולצות וכובעים</h2>
    <p>לחצו על הכפתור כדי להגיע לעמוד הרכישה של פריטי הזיכרון.</p>
    <div class="store-photo-grid">
      <div class="store-item">
        <button class="store-photo-button store-photo-button--large" type="button" data-store-image="/assets/main/white_shirt.jpeg" aria-label="הגדלת תמונת מוצרים">
          <img src="/assets/main/white_shirt.jpeg" alt="gadgets" loading="lazy" class="store-photo store-photo--small" />
        </button>
        <a href="https://links.payboxapp.com/UeBToVP4OUb" target="_blank" rel="noopener noreferrer" class="cta-button cta-clean">טריקו לבן 23שח</a>
      </div>
      <div class="store-item">
        <button class="store-photo-button store-photo-button--small" type="button" data-store-image="/assets/main/girl_bez.jpeg" aria-label="הגדלת תמונת חווה">
          <img src="/assets/main/girl_bez.jpeg" alt="חווה" loading="lazy" class="store-photo store-photo--small" />
        </button>
        <a href="https://links.payboxapp.com/ayQXLSP4OUb" target="_blank" rel="noopener noreferrer" class="cta-button cta-clean">בז׳ חווה 26 שח</a>
      </div>
      <div class="store-item">
        <button class="store-photo-button store-photo-button--small" type="button" data-store-image="/assets/main/dryfit_front.jpeg" aria-label="הגדלת תמונת חווה">
          <img src="/assets/main/dryfit_front.jpeg" alt="חווה" loading="lazy" class="store-photo store-photo--small" />
        </button>
        <a href="https://links.payboxapp.com/ejesdRP4OUb" target="_blank" rel="noopener noreferrer" class="cta-button cta-clean">דרייפיט כחולה 23שח</a>
      </div>
      <div class="store-item">
        <button class="store-photo-button store-photo-button--small" type="button" data-store-image="/assets/main/dryfit_back.jpeg" aria-label="הגדלת תמונת חווה">
          <img src="/assets/main/dryfit_back.jpeg" alt="חווה" loading="lazy" class="store-photo store-photo--small" />
        </button>      
      </div>
      <div class="store-item">
        <button class="store-photo-button store-photo-button--small" type="button" data-store-image="/assets/main/white_sweetshirt.jpeg" aria-label="הגדלת תמונת חווה">
          <img src="/assets/main/white_sweetshirt.jpeg" alt="חווה" loading="lazy" class="store-photo store-photo--small" />
        </button>
        <a href="https://links.payboxapp.com/GPT1tPiaPUb" target="_blank" rel="noopener noreferrer" class="cta-button cta-clean">קפוצ׳ון לבן 52שח</a>
      </div>
      <div class="store-item">
        <button class="store-photo-button store-photo-button--small" type="button" data-store-image="/assets/main/black sweetshirt.jpeg" aria-label="הגדלת תמונת חווה">
          <img src="/assets/main/black sweetshirt.jpeg" alt="חווה" loading="lazy" class="store-photo store-photo--small" />
        </button>
        <a href="https://links.payboxapp.com/0b7UMShePUb" target="_blank" rel="noopener noreferrer" class="cta-button cta-clean">קפוצ׳ון שחור 52שח</a>
      </div>
      <div class="store-item">
        <button class="store-photo-button store-photo-button--small" type="button" data-store-image="/assets/main/blackshirt.jpeg" aria-label="הגדלת תמונת חווה">
          <img src="/assets/main/blackshirt.jpeg" alt="חווה" loading="lazy" class="store-photo store-photo--small" />
        </button>
        <a href="https://links.payboxapp.com/9gPvrgFePUb" target="_blank" rel="noopener noreferrer" class="cta-button cta-clean">חולצה שחורה 23שח</a>
      </div>
      <div class="store-item">
        <button class="store-photo-button store-photo-button--small" type="button" data-store-image="/assets/main/hat_green.jpeg" aria-label="הגדלת תמונת חווה">
          <img src="/assets/main/hat_green.jpeg" alt="חווה" loading="lazy" class="store-photo store-photo--small" />
        </button>
        <a href="https://links.payboxapp.com/WbiVkno6OUb" target="_blank" rel="noopener noreferrer" class="cta-button cta-clean">כובע רקום 90שח</a>
      </div>
    </div>
  </section>
  <div class="store-photo-modal" id="store-photo-modal" aria-hidden="true">
    <button class="store-photo-modal__close" type="button" aria-label="סגירה">×</button>
    <img id="store-photo-modal-image" src="" alt="תמונת מוצרים" />
  </div>

  <script src="{{ '/script/home-slideshow.js' | relative_url }}"></script>
  <script src="{{ '/script/eyebrow-scroll.js' | relative_url }}"></script>
  <script>
    const storePhotoButtons = document.querySelectorAll('.store-photo-button');
    const storePhotoModal = document.getElementById('store-photo-modal');
    const storePhotoModalImage = document.getElementById('store-photo-modal-image');
    const storePhotoModalClose = document.querySelector('.store-photo-modal__close');

    storePhotoButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const imageSrc = button.getAttribute('data-store-image');
        if (!imageSrc) return;

        storePhotoModalImage.src = imageSrc;
        storePhotoModal.classList.add('is-visible');
        storePhotoModal.setAttribute('aria-hidden', 'false');
      });
    });

    function hideStorePhotoModal() {
      storePhotoModal.classList.remove('is-visible');
      storePhotoModal.setAttribute('aria-hidden', 'true');
    }

    storePhotoModalClose.addEventListener('click', hideStorePhotoModal);

    storePhotoModal.addEventListener('click', function(event) {
      if (event.target === storePhotoModal) {
        hideStorePhotoModal();
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && storePhotoModal.classList.contains('is-visible')) {
        hideStorePhotoModal();
      }
    });
  </script>

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
        <a href="https://www.youtube.com/watch?v=eoDXBRWwH70" target="_blank" rel="noopener noreferrer">לחץ על כפתור כדי לראות</a>
      </p>  
    </article>
  </section>


