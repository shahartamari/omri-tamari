---
layout: default
title: הספדים 
permalink: /hespedim/
---

<link rel="stylesheet" href="{{ '/style/hespedim.css' | relative_url }}" />
<div dir="rtl" lang="he" class="hespedim-page">
  <div class="hespedim-header">
    <h1>הספדים לזכרו</h1>
    <p>מילים מהלב של חברים וקרובים</p>
  </div>

  {% assign hespedim_pages = "" | split: "" %}
  {% for p in site.pages %}
    {% if p.path contains "assets/hespedim/" and p.author %}
      {% assign hespedim_pages = hespedim_pages | push: p %}
    {% endif %}
  {% endfor %}

  {% assign grouped_by_author = hespedim_pages | group_by: "author" %}
  {% assign grouped_by_author = grouped_by_author | sort: "name" %}

  <div class="author-cloud">
    {% for group in grouped_by_author %}
      {% assign author_id = group.name | slugify %}
      <a href="#" class="author-link" onclick="showAuthor(event, '{{ author_id }}')">
        {{ group.name }}
      </a>
    {% endfor %}
  </div>

  <div id="author-panels">
    {% for group in grouped_by_author %}
      {% assign author_id = group.name | slugify %}
      {% assign items = group.items | sort: "event" %}
      <div id="panel-{{ author_id }}" class="author-panel" style="display:none;">
        <div class="author-panel-header">
          <h2>{{ group.name }}</h2>
          <button class="close-panel" onclick="closeAuthor()">&times;</button>
        </div>
        {% for item in items %}
          <div class="hesped-entry">
            <h3>{{ item.event | default: item.title }}</h3>
            <div class="hesped-content">
              {{ item.content }}
            </div>
          </div>
        {% endfor %}
      </div>
    {% endfor %}
  </div>

  <div id="empty-state" class="empty-state">
    <p>בחר/י שם מלמעלה כדי לראות את ההספדים</p>
  </div>

  <script>
    function showAuthor(event, id) {
      event.preventDefault();

      document.querySelectorAll('.author-panel').forEach(function(panel) {
        panel.style.display = 'none';
      });

      const panel = document.getElementById('panel-' + id);
      if (panel) {
        panel.style.display = 'block';
      }

      document.getElementById('empty-state').style.display = 'none';

      document.querySelectorAll('.author-link').forEach(function(link) {
        link.classList.remove('active');
      });
      event.target.classList.add('active');
    }

    function closeAuthor() {
      document.querySelectorAll('.author-panel').forEach(function(panel) {
        panel.style.display = 'none';
      });
      document.getElementById('empty-state').style.display = 'block';
      document.querySelectorAll('.author-link').forEach(function(link) {
        link.classList.remove('active');
      });
    }
  </script>
</div>
