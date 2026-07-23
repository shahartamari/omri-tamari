---
layout: default
title: שתפו זיכרון
permalink: /share-memory/
---

<link rel="stylesheet" href="{{ '/style/share-memory.css' | relative_url }}" />

<div dir="rtl" lang="he" class="share-memory-page">
  <div class="share-header">
    <h1>שתפו זיכרון של עומרי</h1>
    <p>הוסיפו סיפור, תמונה או רגע שזכור לכם</p>
  </div>

  <!-- Submission Section -->
  <section class="submission-section">
    <h2>הגישו זיכרון</h2>
    <p>מלאו את הטופס למטה והגישו את הזיכרון שלכם. נבדוק את ההגשה ונוסיף אותה לאתר.</p>
    <form id="memory-form" action="https://submit-memorial.shahar-11f.workers.dev" method="POST">
  <div class="form-group">
        <label for="name">שם *</label>
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
         <button type="submit" class="submit-button">שלחו את הזיכרון</button>
      <p class="form-note">* שדות חובה</p>

   <div class="form-info">
      <h3>💡 טיפ</h3>
      <p> הזיכרון שלך יתווסף לעמוד זה אחרי אישור. !</p>
    </div>
</form>

<script>
// Optional: Prevent the browser from leaving the page after clicking submit
document.getElementById('memory-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form)
  });
  if (response.ok) {
    alert("תודה ששיתפם את הזיכרונות שלכם");
    form.reset();
  } else {
    alert("אנחנו מאוד מצטערים אך קרתה טעות בזמן ההגשה. אנא נסו שנית");
  }
});
</script>

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

</div>
