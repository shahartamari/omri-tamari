document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-add-to-calendar]');
  if (!buttons.length) {
    return;
  }

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  // Accepts "d.m.yy" / "d.m.yyyy" (also "-" or "/" separators).
  function parseDateParts(value) {
    const match = (value || '').trim().match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})$/);
    if (!match) {
      return null;
    }

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    let year = parseInt(match[3], 10);
    if (year < 100) {
      year += year < 70 ? 2000 : 1900;
    }

    return { day: day, month: month, year: year };
  }

  function parseTimeParts(value) {
    const match = (value || '').trim().match(/^(\d{1,2}):(\d{2})$/);
    if (!match) {
      return null;
    }
    return { hour: parseInt(match[1], 10), minute: parseInt(match[2], 10) };
  }

  function escapeIcsText(value) {
    return (value || '')
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;');
  }

  function buildIcs(button) {
    const dateParts = parseDateParts(button.getAttribute('data-event-date'));
    if (!dateParts) {
      return null;
    }

    const title = button.getAttribute('data-event-title') || 'אירוע';
    const location = button.getAttribute('data-event-location') || '';
    const details = button.getAttribute('data-event-details') || '';
    const startParts = parseTimeParts(button.getAttribute('data-event-start'));
    const endParts = parseTimeParts(button.getAttribute('data-event-end'));

    let dtStart;
    let dtEnd;

    if (startParts) {
      const finalEndParts = endParts || { hour: (startParts.hour + 1) % 24, minute: startParts.minute };
      dtStart = 'DTSTART:' + dateParts.year + pad(dateParts.month) + pad(dateParts.day) + 'T' + pad(startParts.hour) + pad(startParts.minute) + '00';
      dtEnd = 'DTEND:' + dateParts.year + pad(dateParts.month) + pad(dateParts.day) + 'T' + pad(finalEndParts.hour) + pad(finalEndParts.minute) + '00';
    } else {
      const startDate = new Date(Date.UTC(dateParts.year, dateParts.month - 1, dateParts.day));
      const endDate = new Date(startDate);
      endDate.setUTCDate(endDate.getUTCDate() + 1);
      const formatAllDay = function (d) {
        return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate());
      };
      dtStart = 'DTSTART;VALUE=DATE:' + formatAllDay(startDate);
      dtEnd = 'DTEND;VALUE=DATE:' + formatAllDay(endDate);
    }

    const now = new Date();
    const dtStamp = now.getUTCFullYear() + pad(now.getUTCMonth() + 1) + pad(now.getUTCDate()) + 'T' + pad(now.getUTCHours()) + pad(now.getUTCMinutes()) + pad(now.getUTCSeconds()) + 'Z';
    const uid = 'event-' + dateParts.year + pad(dateParts.month) + pad(dateParts.day) + '-' + Math.random().toString(36).slice(2) + '@omritamari.com';

    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//omritamari.com//Events//HE',
      'BEGIN:VEVENT',
      'UID:' + uid,
      'DTSTAMP:' + dtStamp,
      dtStart,
      dtEnd,
      'SUMMARY:' + escapeIcsText(title),
      'LOCATION:' + escapeIcsText(location),
      'DESCRIPTION:' + escapeIcsText(details),
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const icsContent = buildIcs(button);
      if (!icsContent) {
        window.alert('לא ניתן להוסיף את האירוע ליומן');
        return;
      }

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      // iOS Safari (17+) blocks navigating/opening `data:` URIs, and ignores the
      // `download` attribute on blob links. Opening the blob URL in a new tab is
      // what reliably triggers its native "Add to Calendar" sheet.
      const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (isIos) {
        window.open(url, '_blank');
        setTimeout(function () {
          URL.revokeObjectURL(url);
        }, 30000);
        return;
      }

      const link = document.createElement('a');
      link.href = url;
      link.download = (button.getAttribute('data-event-title') || 'event') + '.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  });
});
