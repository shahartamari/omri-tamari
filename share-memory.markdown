---
layout: default
title: שתפו זיכרון
permalink: /share-memory/
---

<div dir="rtl" lang="he" class="share-memory-page">
  <div class="share-header">
    <h1>שתפו זיכרון של עומרי</h1>
    <p>הוסיפו סיפור, תמונה או רגע שזכור לכם</p>
  </div>

  <!-- Submission Section -->
  <section class="submission-section">
    <h2>הגישו זיכרון</h2>
    <p>מלאו את הטופס למטה וגישו את הזיכרון שלכם. נבדוק את ההגשה ונוסיף אותה לאתר.</p>
    
    <form class="memory-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <div class="form-group">
        <label for="name">שמכם *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          placeholder="הכניסו את שמכם"
        />
      </div>

      <div class="form-group">
        <label for="email">דוא"ל *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder="your@email.com"
        />
      </div>

      <div class="form-group">
        <label for="title">כותרת הזיכרון *</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          required 
          placeholder="כותרת קצרה לזיכרון"
        />
      </div>

      <div class="form-group">
        <label for="memory">הזיכרון שלכם *</label>
        <textarea 
          id="memory" 
          name="memory" 
          required 
          rows="8"
          placeholder="כתבו את הסיפור, החוויה או הרגע המיוחד שלכם עם עומרי..."
        ></textarea>
      </div>

      <div class="form-group">
        <label for="date">תאריך (אופציונלי)</label>
        <input 
          type="date" 
          id="date" 
          name="date"
        />
      </div>

      <button type="submit" class="submit-button">שלחו את הזיכרון</button>
      <p class="form-note">* שדות חובה</p>
    </form>

    <div class="form-info">
      <h3>💡 טיפ</h3>
      <p>הגישות שלכם תלכנה לעמוד זה אחרי אישור. תודה שתשתפו את הזיכרונות שלכם!</p>
    </div>
  </section>

  <!-- Posts Grid -->
  <section class="posts-section">
    <h2>זיכרונות משותפים</h2>
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    
    {% if sorted_posts.size > 0 %}
      <div class="posts-grid">
        {% for post in sorted_posts %}
          <article class="memory-post">
            <div class="post-date">{{ post.date | date: "%d.%m.%Y" }}</div>
            <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
            <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            <a href="{{ post.url }}" class="read-more">קרא עוד</a>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <div class="no-posts">
        <p>אין עדיין זיכרונות משותפים. היו הראשונים לשתף!</p>
      </div>
    {% endif %}
  </section>

  <!-- Setup Instructions -->
  <section class="github-instructions">
    <h2>📝 הוראות למנהלים</h2>
    
    <h3>שלב 1: הגדרו Formspree</h3>
    <ol>
      <li>היכנסו ל <a href="https://formspree.io" target="_blank">Formspree.io</a> (חינם)</li>
      <li>צרו חשבון חדש או היכנסו</li>
      <li>הוסיפו פרויקט חדש בשם "Omri Memorial"</li>
      <li>העתיקו את ה-Form ID שלכם</li>
      <li>ערכו את קובץ זה <code>share-memory.markdown</code> והחליפו את <code>YOUR_FORM_ID</code> ב-Form ID שלכם</li>
    </ol>

    <h3>שלב 2: מתקבלים הגישות</h3>
    <p>הגישות תישלחנה ישירות לדוא"ל שלכם דרך Formspree.</p>

    <h3>שלב 3: הוסיפו פוסט לאתר</h3>
    <p>כדי להוסיף הגשה מאושרת לאתר:</p>
    <ol>
      <li>צרו קובץ חדש בתיקיית <code>_posts</code></li>
      <li>שמו את הקובץ בפורמט: <code>YYYY-MM-DD-title.markdown</code></li>
      <li>הוסיפו את ה-Front Matter וה-Content:</li>
    </ol>

    <pre><code>---
layout: post
title: "כותרת הזיכרון"
date: 2026-07-22
author: "שם המשתתף"
---

## הזיכרון

כתבו את תוכן הזיכרון כאן...</code></pre>

    <h3>שלב 4: דחפו לGitHub</h3>
    <p>דחפו את הקובץ החדש ל-repository שלכם ו-GitHub Pages יפרסם אותו באופן אוטומטי.</p>

    <div class="setup-note">
      <strong>💡 הערה:</strong> הגישות מחכות לאישור כדי למנוע תוכן לא מתאים. לאחר שתוודאו שהגשה טובה, פשוט העתיקו את הטקסט לקובץ markdown ודחפו!
    </div>
  </section>

  <style>
    .share-memory-page {
      max-width: 1000px;
      margin: auto;
      padding: 2rem 1rem 3rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Arial", sans-serif;
      color: #1a1a1a;
    }

    .share-header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem 0;
      border-bottom: 2px solid #e0e0e0;
    }

    .share-header h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .share-header p {
      font-size: 1.1rem;
      color: #666;
      margin: 0;
    }

    .submission-section h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: #333;
      border-right: 4px solid #2c3e50;
      padding-right: 1rem;
    }

    .memory-form {
      background: white;
      padding: 2.5rem;
      border-radius: 0.8rem;
      border: 1px solid #e0e0e0;
      margin-bottom: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      font-weight: 600;
      color: #333;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 0.4rem;
      font-size: 1rem;
      font-family: inherit;
      direction: rtl;
      text-align: right;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #2c3e50;
      box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.1);
    }

    .form-group textarea {
      resize: vertical;
      line-height: 1.6;
    }

    .submit-button {
      display: inline-block;
      padding: 0.9rem 2rem;
      background: #2c3e50;
      color: white;
      border: none;
      border-radius: 0.4rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.2s ease;
    }

    .submit-button:hover {
      background: #1a252f;
      transform: translateY(-2px);
    }

    .submit-button:active {
      transform: translateY(0);
    }

    .form-note {
      color: #999;
      font-size: 0.85rem;
      margin-top: 1rem;
    }

    .form-info {
      background: #e8f4f8;
      padding: 1.5rem;
      border-radius: 0.8rem;
      border-right: 4px solid #2c3e50;
    }

    .form-info h3 {
      margin-top: 0;
      color: #2c3e50;
    }

    .form-info p {
      margin-bottom: 0;
      color: #555;
      line-height: 1.6;
    }

    .posts-section {
      margin-bottom: 4rem;
    }

    .posts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
    }

    .memory-post {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 0.8rem;
      padding: 2rem;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
      text-align: right;
    }

    .memory-post:hover {
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      transform: translateY(-4px);
    }

    .post-date {
      display: inline-block;
      background: #e8f4f8;
      color: #2c3e50;
      padding: 0.5rem 1rem;
      border-radius: 0.4rem;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .memory-post h3 {
      margin: 1rem 0 0.5rem 0;
      font-size: 1.3rem;
      color: #333;
    }

    .memory-post h3 a {
      color: #2c3e50;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: border-color 0.2s ease;
    }

    .memory-post h3 a:hover {
      border-bottom-color: #2c3e50;
    }

    .post-excerpt {
      color: #666;
      line-height: 1.6;
      margin: 1rem 0;
      font-size: 0.95rem;
    }

    .read-more {
      display: inline-block;
      color: #2c3e50;
      text-decoration: none;
      font-weight: 500;
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      border: 1px solid #2c3e50;
      border-radius: 0.4rem;
      transition: all 0.2s ease;
    }

    .read-more:hover {
      background: #2c3e50;
      color: white;
    }

    .no-posts {
      text-align: center;
      padding: 3rem 1rem;
      background: #f9f9f9;
      border-radius: 0.8rem;
    }

    .no-posts p {
      color: #999;
      font-size: 1.1rem;
      margin: 0;
    }

    .github-instructions {
      background: #f5f5f5;
      padding: 2rem;
      border-radius: 0.8rem;
      border-right: 4px solid #2c3e50;
    }

    .github-instructions h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: #333;
    }

    .github-instructions h3 {
      font-size: 1.2rem;
      color: #333;
      margin-top: 1.5rem;
      margin-bottom: 0.8rem;
    }

    .github-instructions p {
      color: #666;
      line-height: 1.6;
      margin: 0.8rem 0;
    }

    .github-instructions a {
      color: #2c3e50;
      text-decoration: none;
      font-weight: 500;
    }

    .github-instructions a:hover {
      text-decoration: underline;
    }

    .github-instructions ol {
      margin: 1rem 0;
      padding-right: 1.5rem;
    }

    .github-instructions li {
      margin: 0.8rem 0;
      color: #666;
      line-height: 1.6;
    }

    .github-instructions code {
      background: #fff;
      padding: 0.3rem 0.6rem;
      border-radius: 0.3rem;
      font-family: 'Courier New', monospace;
      color: #d73a49;
    }

    .github-instructions pre {
      background: #fff;
      padding: 1.5rem;
      border-radius: 0.8rem;
      overflow-x: auto;
      border: 1px solid #e0e0e0;
      direction: ltr;
      text-align: left;
    }

    .github-instructions pre code {
      color: #24292e;
      background: none;
      padding: 0;
    }

    .setup-note {
      background: white;
      padding: 1rem 1.5rem;
      border-radius: 0.4rem;
      border-left: 4px solid #ffc107;
      margin-top: 1.5rem;
    }

    .setup-note strong {
      color: #333;
    }

    @media (max-width: 720px) {
      .share-header h1 {
        font-size: 1.8rem;
      }

      .submission-steps {
        grid-template-columns: 1fr;
      }

      .posts-grid {
        grid-template-columns: 1fr;
      }

      .github-instructions pre {
        font-size: 0.85rem;
      }
    }
  </style>
