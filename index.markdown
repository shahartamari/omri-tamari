---
layout: default
title: עמוד הבית
---

<link rel="stylesheet" href="{{ '/style/index.css' | relative_url }}" />

<div dir="rtl" lang="he" class="memorial-page">


  <section class="hero">
    <img src="/assets/main/front.jpeg" alt="תמונה של עמרי" class="hero-image" />
    <div class="hero-content">
     <h2 class="h2"> <br>״תהנה מכל רגע, כדי שלא תתחרט על מה שלא עשית״</h2>
     <p class="eyebrow">אתר זיכרון לעומרי תמרי</p>
    </div>
  </section>

   <section class="omri-figure" id=read_omri>
   <p class="section-lead"> 
   <h1>על עומרי</h1>
   </p>
    <div class="project-grid">
      <article class="project-card">
      <div>
        {% include home-slideshow.html folder="/assets/images/omri" limit="100" %}
        </div>
        <div>
        <p>13.10.2024  למחרת יום כיפור, נפל יקירינו עומרי, בשעה שנקרא להגן על המדינה<br>עומרי השאיר אחריו חברים רבים ומשפחה שבורים וגאים שהוא היה חלק מחייהם <br>עומרי היה איש של חתירה למצויינות אהבת הארץ והאדם<br>וכך חי את חייו </p>
        <a href="/about-omri/">קרא על חייו</a>
        </div>
      </article>
    </div>
  </section>

  <section>
  <article class="project-card">
      <h2>מתאר את היום שלו בחווה לחבר</h2>
      <div id="featured-youtube-video" class="featured-video-shell">
        <div class="featured-video-frame">
        <iframe
          src="https://www.youtube.com/embed/mmqcaYLQ2tM"
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
        ></iframe>
        </div>
        <button class="video-fullscreen-button" type="button" data-fullscreen-video="featured-youtube-video">מסך מלא</button>
      </div>
    </article>
  </section>

<section class="story-section detail-card upcoming-events-card" id="upcoming">
    <div class="upcoming-events-header" id="upcoming">
      <h2>אירועים קרובים</h2>
    </div>
    <p class="section-lead">לוח אירועים והתכנסויות</p>
    <div class="upcoming-events-list" data-upcoming-events-list>
      {% for e in site.data.events %}
      <article class="upcoming-event">
        <div class="upcoming-event__date">{{ e.date }}</div>
        <div>
          <h3>{{ e.event }}</h3>
          <p>מיקום: {{ e.location }}</p>
          {% if e.start_time or e.end_time %}
          <p>{{ e.start_time }}{% if e.start_time and e.end_time %} – {% endif %}{{ e.end_time }}</p>
          {% endif %}
          {% if e.details %}
          <p>{{ e.details }}</p>
          {% endif %}
          <button
            type="button"
            class="add-to-calendar-button"
            data-add-to-calendar
            data-event-title="{{ e.event }}"
            data-event-location="{{ e.location }}"
            data-event-date="{{ e.date }}"
            data-event-start="{{ e.start_time }}"
            data-event-end="{{ e.end_time }}"
            data-event-details="{{ e.details }}"
          >📅 הוסף ליומן</button>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="project-links" id="projects">
    <h2>פרויקטים לזכרו</h2>
    <div class="project-grid">
      <article class="project-card">
        <h3>אתגר הסוכר</h3>
        <p> שעומרי לקח על עצמו בגיל 14 והתמיד איתו 4 שנים אנחנו לא נעמוד ב4 שנים, אבל ננסה לעמוד במספר ימים כימי ההולדת של עומרי לו היה איתנו  .</p>
        <a href="#sugar-challenge">קראו עוד</a>
      </article>
      <article class="project-card">
        <h3>יום התנדבות בחוות ״תלמים״</h3>
        <p>יום התנדבות בחווה בקיבוץ מגל - שם התנדב עומרי בשנת שירות טרם גיוסו</p>
        <a href="#farm">קראו עוד</a>
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
       <article class="project-card">
        <h3>מצפה הבוקעים</h3>
        <p>מצפה שהקימו חברים מהפלוגה לזכר עומרי , יואב ויוסף שנהרגו בארוע</p>
        <a href="#mitzpe">קראו עוד</a>
      </article>
        <article class="project-card">
        <h3>אלבום קשר הירח</h3>
        <p>שחר קרמר ושי צוק - שרו ב30 לעומרי מעל קברו את ״קשר הירח״ לבקשת אמו<br>שחר הקליטה את הפרוייקט ״קשר הירח״ ובו שירים לכל אחד מנופלי המושבה בחרבות ברזל</p>
        <a href="#spotify">קראו עוד</a>
      </article>
      <article class="project-card">
      <h3>מהרשת</h3>
      <p>פרוייקט גלהד של ynet, וסרט בר מצווה של עידו רוזנברג שבחר להנציח את עומרי</p>
      <a href="#ynet-embed">קראו עוד</a>
      </article>
    </div>
  </section>

  <section class="story-section detail-card" id="sugar-challenge">
    <h2>אתגר הסוכר</h2>
     <a href="#sucar_info" class="sucar-info-toggle">לחץ כדי לקרוא על הרקע והמשמעות של אתגר הסוכר</a>
   <p id=sucar_info class="sucar-info">
      עומרי התערב עם חברים מי יכול להפסיק לאכול סוכר, זה היה כשהיה בן 14.<br>
      הם היו נוהגים להתערב ולאתגר את עצמם כל הזמן.<br>
      ההתערבות החזיקה 4 שנים.<br>
      לא משנה כמה ניסינו להתגרות בו ולאכול מולו באיטליה גלידה שאי אפשר לעמוד בפניה,<br>
      כשהוא החליט משהו אי אפשר היה להזיז אותו.<br>
      כשהפסיק עם הסוכר, נעלמו גם המיגרנות, שהכיר מגיל מאד צעיר. היה קשוח לראות אותו הולך לבית הספר, לכדורסל ובחופשות כשהעיניים שלו מבריקות ועננה של כאב מלווה אותו לכל מקום.<br>
      הוא לא התלונן,<br>
      זה לא עצר אותו מלעשות כלום. הוא למד להתמודד עם כל אתגר שנקרה בדרכו בצורה הכי מרשימה למרות הסבל ולהצטיין.<br>
      לפני הגיוס התחננו אליו שכשיתגייס יפסיק עם הטרפת הזאת,<br>
      הוא באמת הפסיק ובגדול.<br>
      היה חלק מ״צוות קוקילידה״<br>
      חברים, שכשנשארו שבת בבסיס רוקנו את מכונת הגלידות ונהנו מכל ביס.<br>
      המיגרנות חזרו בהתאם…<br>
      זה לא הפריע לו להתבלט ולהצטיין גם בצבא, לקטוף תעודות הצטיינות, לעזור לחלשים. <br>
      שנים של אימונים תוך קושי, הפכו אותו ל ״מכונה״ כפי שהגדירו זאת החברים לנשק.<br>
      <br>
      לזכרו של עומרי אנחנו רוצים לערוך אתגר שכל כך מתחבר לעוצמות שלו.<br>
      ב- 19.5 חל יום ההולדת ה-21 של עומרי. <br>
      עומרי היה בן 19.5 בנופלו.<br>
      ב״אתגר הסוכר״ השנה נימנע מסוכר במשך 21 ימים לציון מספר השנים שהיה חוגג לו היה איתנו כאן. <br>
      <br>
      אבל…<br>
      מי ששובר את צום הסוכר שישבור אותו בגדול, עם קוקילידה.<br>
      לא משנה מתי במהלך 21 הימים נשברתם, העלו תמונה שלכם אוכלים קוקילידה ותייגו  את עמוד ההנצחה של עומרי. Remember_Omri_Tamari #אתגרהסוכרעומריתמרי

   </p>
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

  <section class="story-section detail-card" id="farm">
   <h2>יום התנדבות בחוות ״תלמים״ שבה התנדב עומרי בשנת השירות </h2>
    <a href="#tlamim_info" class="tlamim-info-toggle">לחץ כדי לקרוא על יום ההתנדבות בחווה</a>
    <br>
    <p id=tlamim_info class="tlamim-info" >
       ירדן שושני חברו של עומרי שיזם עם חברים יום התנדבות לזכרו כותב:
    עומרי, מעבר לחבר הכי טוב או לחייל מצטיין היה איש של עבודה קשה, חריצות ותרומה למדינה. לאחר השבעה עלו עשרות רעיונות מה לעשות בשביל להנציח את עומרי- אנדרטה, מתחם אימונים, הרצאות, מדבקות, מה לא. 
    אבל ניסינו לחשוב מה עומרי באמת היה רוצה. והתשובה הכנה היא יום שלם שנעבוד ונזיע בין העיזים והסוסים בחווה. אז נענתי לבקשתו.
    עומרי השתתף בשנת שירות בחוות תלמים בקיבוץ מגל, מרכז עבודה שיקומי. שם עבד עם נערים עם מוגבליות. 
    את יום העשייה הזה הרמנו בעזרה ובשיתוף של עמותת נירים במדבר תוכנית אבחון לנוער בסיכון שהגיעו לעבוד יחד איתנו. 
    חוץ מעבודה קשה לעומרי היה עוד איזה תחביב קטן , לאכול. 
    אז גם היה טאבון פיצות שדאג שיהיה לנו כיף. 
    עומרי, הבטחנו שנמשיך ונחיה את החיים, כמו שהיית רוצה. ניפגש בשנה הבאה, אותו מקום, אותה שעה.</p>
    <br>
    <article class="project-card">
      <img src="{{ '/assets/main/farm.jpg' | relative_url }}" alt="Image description" loading="lazy">
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
        <iframe
          src="https://www.youtube.com/embed/cwGm57ShU6A"
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
        ></iframe>
      </div>
    </article>
  </section>

  <section class="story-section detail-card" id="mitzpe">
    <h2>מצפה לזכרו</h2>
   <p>מצפה ״הבוקעים״ שהקימו החברים מהמחלקה</p>
   <a href="#mitzpe_info" class="mitzpe-info-toggle">קראו על הקמת המצפה</a>
   <br>
   <br>
    <article class="project-card">   
        <p id="mitzpe_info" class="mitzpe-info">
        בזמן שהיו פצועים מהארוע שבו נהרג עומרי, יזמו כמה חברים הקמה של מצפה לזכר ההרוגים<br> הם נעזרו בחבריו של עומרי ובנו מצפה מעל הכנרת בחוות ״עז ותעוצומות״ 
        </p>
        <img src="/assets/main/mizpe.jpeg" alt="תמונה של עמרי" loading="lazy" />
        <br>
        <a href="#mitzpe_dir" class="mitzpe-dir-toggle">  לחץ כדי לראות איך מגיעים ולהורדת מפות ניווט למצפה</a>
         <div id="mitzpe_dir" class="mitzpe-dir">
         מצפה הבוקעים ממוקם במקום קסום, בצמוד לחוות ״עז ותעצומות״ שברכס סירין - בין יבניאל למנחמיה<br>
        בסמוך לתוואי ״שביל ישראל״ 
        והעץ של גולני<br>
        הגעה ברכב ״רגיל״ תתאפשר רק מדרך נוף ״יבניאל - מנחמיה״<br>
        <br>
          סיפור דרך:<br>
          הגעה מיבניאל - נסיעה על כביש 767 לאורך הרחוב הראשי של יבניאל<br> 
          ממשיכים ברחוב הראשי ללא פניות עד שמגיעים לדרך עפר בקצה המזרחי של היישוב<br>
          ממשיכים על דרך העפר (דרך נוף יבניאל - מנחמיה)<br>
          עוברים את נחל יבניאל ואת ״העץ של גולני״<br>
         עוברים את מצפה ״גידי ונועה״ ופונים שמאלה ונוסעים עד למצפה ״הבוקעים״
        <button class="store-photo-button" type="button" data-store-image="/assets/main/yavniel.png" aria-label="הגדלת מפת הדרך מיבניאל">
          <img src="/assets/main/yavniel.png" alt="מפת הדרך מיבניאל" loading="lazy" />
        </button>
        <a href="{{ '/assets/downloads/yavniel.twl' | relative_url }}" 
          download="yavniel.twl" 
          class="download-btn">
          הורד את הקובץ לטלפון ופתח עם תוכנת ניווט - עמוד ענן
        </a>
        <p>ממנחמיה: יציאה משער אחורי של הישוב נסיעה על דרך נוף מנחמיה-יבניאל ,עוברים את מצפה ״לוי אשכול״ ואת חניון ״האלות״ פונים ימינה אחרי שעוברים מעבר בקר(אם עברתם את מצפה ״גידי ונועה״ תסתובבו , פיספסתם את הפניה), נסיעה עד למצפה ״הבוקעים״</p>
        <button class="store-photo-button" type="button" data-store-image="/assets/main/menachamia.png" aria-label="הגדלת מפת הדרך ממנחמיה">
          <img src="/assets/main/menachamia.png" alt="מפת הדרך ממנחמיה" loading="lazy" />
        </button>
        <a href="{{ '/assets/downloads/menachamia.twl' | relative_url }}" 
          download="menachamia.twl" 
          class="download-btn">
           הורד את הקובץ לטלפון ופתח עם תוכנת ניווט - עמוד ענן
        </a>
        </div>
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
  <script src="{{ '/script/add-to-calendar.js' | relative_url }}"></script>
  <script>
    // Wait for full DOM parse so buttons rendered later (e.g. the gallery) are included.
    document.addEventListener('DOMContentLoaded', function() {
      const storePhotoButtons = document.querySelectorAll('.store-photo-button');
      const storePhotoModal = document.getElementById('store-photo-modal');
      const storePhotoModalImage = document.getElementById('store-photo-modal-image');
      const storePhotoModalClose = document.querySelector('.store-photo-modal__close');
      const mitzpeInfoToggle = document.querySelector('.mitzpe-info-toggle');
      const mitzpeInfo = document.getElementById('mitzpe_info');
      const mitzpeDirToggle = document.querySelector('.mitzpe-dir-toggle');
      const mitzpeDir = document.getElementById('mitzpe_dir');
      const tlamimInfoToggle = document.querySelector('.tlamim-info-toggle');
      const tlamimInfo = document.getElementById('tlamim_info');
      const sucarInfoToggle = document.querySelector('.sucar-info-toggle');
      const sucarInfo = document.getElementById('sucar_info');
      const fullscreenVideoButtons = document.querySelectorAll('[data-fullscreen-video]');

      if (sucarInfoToggle && sucarInfo) {
        sucarInfoToggle.addEventListener('click', function(event) {
          event.preventDefault();
          sucarInfo.classList.add('is-visible');
        });
      }

      if (mitzpeInfoToggle && mitzpeInfo) {
        mitzpeInfoToggle.addEventListener('click', function(event) {
          event.preventDefault();
          mitzpeInfo.classList.add('is-visible');
        });
      }

      if (mitzpeDirToggle && mitzpeDir) {
        mitzpeDirToggle.addEventListener('click', function(event) {
          event.preventDefault();
          mitzpeDir.classList.add('is-visible');
        });
      }

      if (tlamimInfoToggle && tlamimInfo) {
        tlamimInfoToggle.addEventListener('click', function(event) {
          event.preventDefault();
          tlamimInfo.classList.add('is-visible');
        });
      }

      fullscreenVideoButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          const video = document.getElementById(button.getAttribute('data-fullscreen-video'));
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else if (video && video.requestFullscreen) {
            video.requestFullscreen();
          }
        });
      });

      document.addEventListener('fullscreenchange', function() {
        fullscreenVideoButtons.forEach(function(button) {
          const isFullscreen = Boolean(document.fullscreenElement);
          button.textContent = isFullscreen ? 'יציאה ממסך מלא' : 'מסך מלא';
          button.setAttribute('aria-pressed', String(isFullscreen));
        });
      });

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
    });
  </script>

  <section class="story-section detail-card share-memory-highlight" id="share-memory">
    <h2>שתפו זיכרונות</h2>
    <p>אם יש לכם תמונה, סיפור או מחשבה על עמרי, נשמח שתשתפו. זה המקום לתעד את השפעתו, את הרגעים הקטנים.</p>
    <p>העלו פוסט שתפו תמונה, תהיו חלק מההנצחה.</p>
    <a href="/share-memory/" class="cta-button cta-clean">לעמוד שיתוף הזיכרונות</a>
  </section>

  <section class="story-section detail-card spotify-section" id="spotify">
    <h2>שחר קרמר בפרוייקט ״קשר הירח״</h2>
    <p>שחר קרמר בביצוע לשיר ״קשר הירח״ לזכרו של עומרי  </p>
    <p>שחר בת כיתה של עומרי ממזכרת בתיה שרה את השיר מעל קיברו ב30, מאוחר יותר הקליטה והוציאה את השיר במסגרת פרוייקט שעבדה עליו להנצחת נופלי המושבה</p>
    <a href="https://www.facebook.com/share/v/19FVgdGwxC/?mibextid=wwXIfr" class="facebook-intreview" target="_blank" rel="noopener noreferrer">לצפייה בראיון של שחר על הפקת אלבום קשר הירח לנופלי המושבה</a>
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
      <br><hr><br>
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
      <br><hr><br>
        <iframe src="https://omny.fm/shows/kan-news/8f988b64-4e9f-479a-813a-b2090095729f/embed?style=Cover&media=Audio&size=Wide" width="100%" height="180" allow="autoplay; clipboard-write; fullscreen" allowfullscreen frameborder="0" title="&quot;עומרי לא היה אמור להיות עכשיו בצבא&quot;"></iframe> 
      <p>אורי ונדר וגיא הירשפלד אצל קרן נויבך</p>
       <br><hr><br>
      <a href="https://www.mako.co.il/mako-vod-keshet/nesli_and_yoav-2024/shorts/Video-796dfeabd4f8291027.htm">
        <img src="{{ '/assets/main/lia_amit.png' | relative_url }}" alt="Alt text" />
      </a>
      <p>ראיון עמית וליה</p>  
      
    </article>
    
    <article>{% include mov.html %}</article>
     <p>סרטון לעומרי</p>
    <article>{% include mov2.html %}</article>
    <p>סרטון לעומרי</p>
    <article>{% include inbar.html %}</article>
    <p>סטודיו ארט פיוז׳ן הסטודיו לריקוד שענבר חברה בו</p>
    
    
  </section>

  <section class="story-section detail-card gallery-section" id="gallery">
    <h2>רגעים</h2>
    <p class="section-lead">רגעים.</p>
    {% assign gallery_folder = '/assets/images/gallery' %}
    {% assign gallery_images = '' | split: '' %}
    {% for file in site.static_files %}
      {% assign ext = file.extname | downcase %}
      {% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.avif' or ext == '.webp' or ext == '.GIF' or ext == '.JPG' or ext == '.PNG' %}
        {% if file.path contains gallery_folder %}
          {% assign gallery_images = gallery_images | push: file.path %}
        {% endif %}
      {% endif %}
    {% endfor %}
    <div class="gallery-grid">
      {% for img in gallery_images %}
        <button class="gallery-photo-button store-photo-button" type="button" data-store-image="{{ img | relative_url }}" aria-label="הגדלת תמונה">
          <img src="{{ img | relative_url }}" alt="תמונה מהקומונה" loading="lazy" class="gallery-photo" />
        </button>
      {% endfor %}
    </div>
  </section>


  



