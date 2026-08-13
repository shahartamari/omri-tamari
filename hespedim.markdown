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
      {% assign first_relative = group.items | first | default: nil %}
      {% assign first_item = group.items | first | default: nil %}
      {% assign author_display = group.name %}
      {% if first_relative and first_relative.relative %}
        {% assign author_display = group.name | append: ' (' | append: first_relative.relative | strip | append: ')' %}
      {% endif %}
      {% assign author_image = nil %}
      {% if first_item and first_item.image %}
        {% assign author_image = first_item.image %}
      {% endif %}
      {% assign name_words = group.name | split: ' ' %}
      {% assign initials = '' %}
      {% if name_words.size > 0 %}
        {% assign initials = name_words[0] | slice: 0, 1 %}
      {% endif %}
      {% if name_words.size > 1 %}
        {% assign initials = initials | append: name_words[last] | slice: 0, 1 %}
      {% endif %}
      <a href="#" class="author-link" onclick="showAuthor(event, '{{ author_id }}')">
        {% if author_image %}
          <img class="author-avatar" src="{{ author_image | relative_url }}" alt="{{ group.name }}" loading="lazy" />
        {% else %}
          <span class="author-avatar author-avatar-fallback" aria-label="{{ group.name }}">{{ initials }}</span>
        {% endif %}
        <span class="author-name">{{ author_display }}</span>
      </a>
    {% endfor %}
  </div>

  <div id="author-panels">
    {% for group in grouped_by_author %}
      {% assign author_id = group.name | slugify %}
      {% assign items = group.items | sort: "event" %}
      {% assign seen_events = "" | split: "" %}
      {% assign first_relative = group.items | first | default: nil %}
      {% assign author_display = group.name %}
      {% if first_relative and first_relative.relative %}
        {% assign author_display = group.name | append: ' (' | append: first_relative.relative | strip | append: ')' %}
      {% endif %}
      <div id="panel-{{ author_id }}" class="author-panel">
        <div class="author-panel-header">
          <h2>{{ author_display }}</h2>
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
