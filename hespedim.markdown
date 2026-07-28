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
      {% assign p_author_trimmed = p.author | strip %}
      {% assign hespedim_pages = hespedim_pages | push: p %}
    {% endif %}
  {% endfor %}

  {% assign grouped_by_author = hespedim_pages | group_by_exp: "p", "p.author | strip" %}
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
      {% assign seen_events = "" | split: "" %}
      <div id="panel-{{ author_id }}" class="author-panel">
        <div class="author-panel-header">
          <h2>{{ group.name }}</h2>
          <button class="close-panel" onclick="closeAuthor()">&times;</button>
        </div>
        {% for item in items %}
          {% assign event_key = item.event | default: item.title %}
          {% unless seen_events contains event_key %}
            {% assign seen_events = seen_events | push: event_key %}
            <div class="hesped-entry">
              <h3>{{ event_key }}</h3>
              <div class="hesped-content">
                {{ item.content }}
              </div>
            </div>
          {% endunless %}
        {% endfor %}
      </div>
    {% endfor %}
  </div>

  <div id="empty-state" class="empty-state">
    <p>בחר/י שם מלמעלה כדי לראות את ההספדים</p>
  </div>

  <script src="{{ '/script/hespedim.js' | relative_url }}"></script>
</div>
