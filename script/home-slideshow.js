document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.home-slideshow').forEach(function (slideshow) {
    const images = slideshow.querySelectorAll('.home-slideshow__image');
    const prevButton = slideshow.querySelector('.home-slideshow__button.prev');
    const nextButton = slideshow.querySelector('.home-slideshow__button.next');
    let currentIndex = 0;
    let autoplayTimer;

    function showImage(index) {
      images.forEach(function (img, i) {
        img.classList.toggle('active', i === index);
      });
    }

    function restartAutoplay() {
      clearTimeout(autoplayTimer);
      autoplayTimer = setTimeout(function () {
        goTo(currentIndex + 1);
      }, 3000);
    }

    function goTo(index) {
      currentIndex = (index + images.length) % images.length;
      showImage(currentIndex);
      restartAutoplay();
    }

    prevButton.addEventListener('click', function () {
      goTo(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
      goTo(currentIndex + 1);
    });

    slideshow.addEventListener('mouseenter', function () {
      clearTimeout(autoplayTimer);
    });

    slideshow.addEventListener('mouseleave', restartAutoplay);

    goTo(0);
  });

  const managerToggle = document.querySelector('[data-manager-toggle]');
  const managerPanel = document.querySelector('.manager-event-form-panel');
  const managerForm = document.querySelector('.manager-event-form');
  const eventsList = document.querySelector('[data-upcoming-events-list]');
  const cancelButton = document.querySelector('.manager-event-cancel');
  const storageKey = 'omri-upcoming-events';

  if (managerToggle && managerPanel && managerForm && eventsList) {
    const initialEvents = [
      {
        date: '09.10.26',
        location: 'מזכרת בתיה',
        title: 'טורניר כדורסל לזכרו',
        startTime: '18:00',
        endTime: '21:00',
        description: 'הטורניר השנתי ייערך בסמוך לאזכרה.'
      },
      {
        date: 'ספט׳ 2026',
        location: 'מזכרת בתיה',
        title: 'אבני דרך ללוחם',
        startTime: '10:00',
        endTime: '12:00',
        description: 'הפרויקט יתחיל עם שיתוף לוחמים.'
      },
      {
        date: '2026',
        location: 'מזכרת בתיה',
        title: 'אתגר הסוכר',
        startTime: '09:00',
        endTime: '17:00',
        description: 'האתגר ימשיך להתעדכן עם עדכונים והצטרפות.'
      }
    ];

    let upcomingEvents = [];

    function parseEventDate(event) {
      const value = (event.date || '').trim();
      if (!value) {
        return null;
      }

      const numericDate = value.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})$/);
      if (numericDate) {
        const day = parseInt(numericDate[1], 10);
        const month = parseInt(numericDate[2], 10);
        let year = parseInt(numericDate[3], 10);

        if (year < 100) {
          year += year < 70 ? 2000 : 1900;
        }

        const parsed = new Date(Date.UTC(year, month - 1, day));
        parsed.setUTCHours(0, 0, 0, 0);
        return parsed;
      }

      const monthMap = {
        'ינואר': 0,
        'פברואר': 1,
        'מרץ': 2,
        'אפריל': 3,
        'מאי': 4,
        'מאי׳': 4,
        'יוני': 5,
        'יולי': 6,
        'אוגוסט': 7,
        'ספטמבר': 8,
        'ספט׳': 8,
        'אוקטובר': 9,
        'נובמבר': 10,
        'דצמבר': 11
      };

const yearOnly = value.match(/^(\d{4})$/);
      if (yearOnly) {
        const year = parseInt(yearOnly[1], 10);
        const parsed = new Date(Date.UTC(year, 11, 31));
        parsed.setUTCHours(0, 0, 0, 0);
        return parsed;
      }

      const monthYear = value.match(/^([^\d]+)\s*(\d{4})$/);
      if (monthYear) {
        const monthName = monthYear[1].trim();
        const monthIndex = monthMap[monthName];
        if (monthIndex !== undefined) {
          const year = parseInt(monthYear[2], 10);
          const parsed = new Date(Date.UTC(year, monthIndex + 1, 0));
          parsed.setUTCHours(0, 0, 0, 0);
          return parsed;
        }
      }

      return null;
    }

    function isUpcomingEvent(event) {
      const parsedDate = parseEventDate(event);
      if (!parsedDate) {
        return true;
      }

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      parsedDate.setHours(0, 0, 0, 0);

      const keepUntil = new Date(parsedDate);
      keepUntil.setDate(keepUntil.getDate() + 1);

      return today <= keepUntil;
    }

    function loadEvents() {
      try {
        const saved = JSON.parse(localStorage.getItem(storageKey));
        upcomingEvents = Array.isArray(saved) && saved.length ? saved : initialEvents;
      } catch (error) {
        upcomingEvents = initialEvents;
      }
    }

    function saveEvents() {
      localStorage.setItem(storageKey, JSON.stringify(upcomingEvents));
    }

    function renderEvents() {
      const visibleEvents = upcomingEvents
        .map(function (event, index) {
          return { event: event, index: index };
        })
        .filter(function (entry) {
          return isUpcomingEvent(entry.event);
        });

      eventsList.innerHTML = '';

      if (!visibleEvents.length) {
        eventsList.innerHTML = '<p class="upcoming-events-empty">אין אירועים זמינים כרגע.</p>';
        return;
      }

      visibleEvents.forEach(function (entry) {
        const article = document.createElement('article');
        article.className = 'upcoming-event';
        const event = entry.event;
        const index = entry.index;
        const description = event.description ? '<p>' + event.description + '</p>' : '';
        const timeText = event.startTime || event.endTime
          ? '<p>' + [event.startTime, event.endTime].filter(Boolean).join(' – ') + '</p>'
          : '';
        const actionsMarkup = isManagerAuthenticated
          ? '<div class="upcoming-event__actions">' +
            '<button type="button" data-edit-event="' + index + '">ערוך</button>' +
            '<button type="button" data-delete-event="' + index + '">מחק</button>' +
            '</div>'
          : '';

        article.innerHTML = [
          '<div class="upcoming-event__date">' + (event.date || 'מועד') + '</div>',
          '<div>',
          '<h3>' + (event.title || 'אירוע') + '</h3>',
          '<p>' + (event.location ? 'מיקום: ' + event.location : 'מיקום לא צוין') + '</p>',
          timeText,
          description,
          actionsMarkup,
          '</div>'
        ].join('');
        eventsList.appendChild(article);
      });
    }

    let editingIndex = null;
    let isManagerAuthenticated = false;

    function openForm() {
      managerPanel.hidden = false;
      managerToggle.setAttribute('aria-expanded', 'true');
      managerForm.querySelector('input[name="date"]').focus();
    }

    function closeForm() {
      managerPanel.hidden = true;
      managerToggle.setAttribute('aria-expanded', 'false');
      editingIndex = null;
      managerForm.reset();
    }

    function fillForm(event) {
      managerForm.querySelector('input[name="date"]').value = event.date || '';
      managerForm.querySelector('input[name="location"]').value = event.location || '';
      managerForm.querySelector('input[name="title"]').value = event.title || '';
      managerForm.querySelector('input[name="startTime"]').value = event.startTime || '';
      managerForm.querySelector('input[name="endTime"]').value = event.endTime || '';
      managerForm.querySelector('textarea[name="description"]').value = event.description || '';
    }

    function authenticateManager() {
      const password = window.prompt('הכנס סיסמה למנהלים', '');
      if (password === null) {
        return false;
      }

      if (password === 'omri2026') {
        isManagerAuthenticated = true;
        renderEvents();
        return true;
      }

      window.alert('הסיסמה לא נכונה');
      return false;
    }

    managerToggle.addEventListener('click', function () {
      if (authenticateManager()) {
        openForm();
      }
    });

    cancelButton.addEventListener('click', closeForm);

    eventsList.addEventListener('click', function (event) {
      const actionButton = event.target.closest('[data-edit-event], [data-delete-event]');
      if (!actionButton) {
        return;
      }

      if (!isManagerAuthenticated && !authenticateManager()) {
        return;
      }

      if (actionButton.hasAttribute('data-edit-event')) {
        const index = Number(actionButton.getAttribute('data-edit-event'));
        const eventToEdit = upcomingEvents[index];
        if (!eventToEdit) {
          return;
        }
        editingIndex = index;
        fillForm(eventToEdit);
        openForm();
        return;
      }

      const index = Number(actionButton.getAttribute('data-delete-event'));
      upcomingEvents.splice(index, 1);
      saveEvents();
      renderEvents();
    });

    managerForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(managerForm);
      const newEvent = {
        date: formData.get('date').toString().trim(),
        location: formData.get('location').toString().trim(),
        title: formData.get('title').toString().trim(),
        startTime: formData.get('startTime').toString().trim(),
        endTime: formData.get('endTime').toString().trim(),
        description: formData.get('description').toString().trim()
      };

      if (!newEvent.date || !newEvent.location || !newEvent.title) {
        return;
      }

      if (editingIndex !== null) {
        upcomingEvents[editingIndex] = newEvent;
      } else {
        upcomingEvents.unshift(newEvent);
      }

      saveEvents();
      renderEvents();
      closeForm();
    });

    loadEvents();
    renderEvents();
  }
});
