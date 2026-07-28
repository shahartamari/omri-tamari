function openMemoryFormLightbox(e) {
  e.preventDefault();
  document.getElementById('memory-form-lightbox').classList.add('open');
}

function closeMemoryFormLightbox() {
  document.getElementById('memory-form-lightbox').classList.remove('open');
}

function initializeRichEditor() {
  const editor = document.getElementById('memory-editor');
  const toolbar = document.querySelector('.editor-toolbar');

  toolbar.addEventListener('click', function(e) {
    const button = e.target.closest('.toolbar-btn');
    if (!button) {
      return;
    }

    const command = button.dataset.command;
    editor.focus();

    if (command === 'createLink') {
      const url = prompt('הדביקו קישור:');
      if (url) {
        document.execCommand('createLink', false, url);
      }
      return;
    }

    if (command === 'insertImage') {
      const url = prompt('הדביקו כתובת תמונה (URL):');
      if (url) {
        document.execCommand('insertImage', false, url);
      }
      return;
    }

    document.execCommand(command, false, null);
  });
}

initializeRichEditor();

// Optional: Prevent the browser from leaving the page after clicking submit
document.getElementById('memory-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const editor = document.getElementById('memory-editor');
  const htmlContent = editor.innerHTML.trim();
  const textContent = editor.innerText.trim();

  if (!textContent) {
    alert('אנא כתבו זיכרון לפני השליחה.');
    return;
  }

  document.getElementById('memory_html').value = htmlContent;
  document.getElementById('memory').value = textContent;

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData
  });

  if (response.ok) {
    alert("תודה ששיתפתם את הזיכרונות שלכם");
    form.reset();
    editor.innerHTML = '';
    closeMemoryFormLightbox();
  } else {
    const errorText = await response.text();
    console.log(errorText);
    alert("אנחנו מאוד מצטערים אך קרתה טעות בזמן ההגשה. אנא נסו שנית");
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeMemoryFormLightbox();
  }
});
