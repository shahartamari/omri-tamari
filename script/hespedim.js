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
