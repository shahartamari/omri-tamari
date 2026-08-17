---
layout: default
title: שתפו זיכרון
permalink: /share-memory/
---

<link rel="stylesheet" href="{{ '/style/share-memory.css' | relative_url }}" />
<link rel="stylesheet" href="{{ '/style/lightbox.css' | relative_url }}" />

<div dir="rtl" lang="he" class="share-memory-page">
  <div class="share-header">
    <h1>שתפו זיכרון של עומרי</h1>
    <p>הוסיפו סיפור, תמונה או רגע שזכור לכם</p>
  </div>

  <!-- Submission Section -->
  <section class="submission-section">
    <h2>צור זכרון</h2>
    <p>לחצו על הקישור כדי לפתוח את הטופס . נבדוק את הזכרון ונוסיף אותו לאתר.</p>
    <a href="#memory-form-lightbox" class="open-form-link" onclick="openMemoryFormLightbox(event)">פתחו את טופס השיתוף</a>
  </section>

  <div id="memory-form-lightbox" class="lightbox" onclick="closeMemoryFormLightbox()">
    <div class="lightbox-content memory-form-modal" onclick="event.stopPropagation()">
      <span class="lightbox-close" onclick="closeMemoryFormLightbox()">&times;</span>
      <h2 class="lightbox-title">טופס שיתוף זיכרון</h2>
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
        <label for="memory-editor">הזיכרון שלכם *</label>
        <div class="rich-editor">
          <div class="editor-toolbar" aria-label="סרגל עריכה">
            <button type="button" class="toolbar-btn" data-command="bold"><strong>B</strong></button>
            <button type="button" class="toolbar-btn" data-command="italic"><em>I</em></button>
            <button type="button" class="toolbar-btn" data-command="underline"><u>U</u></button>
            <button type="button" class="toolbar-btn" data-command="insertUnorderedList">• רשימה</button>
            <button type="button" class="toolbar-btn" data-command="insertOrderedList">1. רשימה</button>
            <button type="button" class="toolbar-btn" data-command="createLink">קישור</button>
            <button type="button" class="toolbar-btn" data-command="insertImage">תמונה מ-URL</button>
          </div>
          <div
            id="memory-editor"
            class="editor-surface"
            contenteditable="true"
            role="textbox"
            aria-multiline="true"
            data-placeholder="כתבו את הסיפור, החוויה או הרגע המיוחד שלכם עם עומרי..."
          ></div>
        </div>
        <input type="hidden" id="memory_html" name="memory_html" />
        <input type="hidden" id="memory" name="memory" />
      </div>
         <button type="submit" class="submit-button">שלחו את הזיכרון</button>
      <p class="form-note">* שדות חובה</p>

   <div class="form-info">
      <h3>💡 טיפ</h3>
      <p> הזיכרון שלך יתווסף לעמוד זה אחרי אישור. !</p>
    </div>
</form>
    </div>
  </div>

<script src="{{ '/script/share-memory.js' | relative_url }}"></script>

  <!-- Posts Grid -->
  <section class="posts-section">
   
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
