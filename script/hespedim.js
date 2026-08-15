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
