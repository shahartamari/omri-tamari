function showAuthor(event, id) {
  event.preventDefault();

  const link = event.currentTarget;
  const panel = document.getElementById('panel-' + id);

  document.querySelectorAll('.author-panel').forEach(function(panelEl) {
    panelEl.style.display = 'none';
  });

  if (panel) {
    panel.style.display = 'block';
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.getElementById('empty-state').style.display = 'none';

  document.querySelectorAll('.author-link').forEach(function(authorLink) {
    authorLink.classList.remove('active');
  });

  if (link) {
    link.classList.add('active');
  }
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

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('author-search-input');
  const results = document.getElementById('author-search-results');
  if (!input || !results) return;

  function highlight(link) {
    document.querySelectorAll('.author-link').forEach(function(l) { l.classList.remove('search-match'); });
    link.classList.add('search-match');

    const rect = link.getBoundingClientRect();
    const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (!fullyVisible) {
      const top = rect.top + window.pageYOffset - (window.innerHeight - rect.height) / 2;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  }

  input.addEventListener('input', function() {
    const query = input.value.trim().toLowerCase();
    const links = document.querySelectorAll('.author-link');
    links.forEach(function(link) { link.classList.remove('search-match'); });
    results.innerHTML = '';
    results.hidden = true;
    if (!query) return;

    const matches = Array.from(links).filter(function(link) {
      return (link.dataset.name || '').toLowerCase().includes(query);
    });

    if (matches.length === 1) {
      highlight(matches[0]);
    } else if (matches.length > 1) {
      matches.forEach(function(link) {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'author-search-item';
        item.textContent = link.dataset.name;
        item.addEventListener('click', function() {
          highlight(link);
          results.hidden = true;
        });
        results.appendChild(item);
      });
      results.hidden = false;
    }
  });
});
