// Get Events
var eventWrapper = document.getElementById('events');
var events = eventWrapper.getElementsByClassName('event');

// Each Event
for(event of events) {

  // Generate Google URL
  var googleUrl = 'http://www.google.com/calendar/event?action=TEMPLATE' +
                  '&text=' + event.dataset.title +
                  '&dates=' + event.dataset.start +
                  '%2F' + event.dataset.end +
                  '&location=' + event.dataset.address +
                  '&details=' + event.dataset.description;

  // Timestamp
  var now = new Date();

  // Generate ICS Content
  var icsText = 'BEGIN:VCALENDAR\n' +
                'VERSION:2.0\n' +
                'PRODID:-//example-url.com//Custom iCal Event\n' +
                'CALSCALE:GREGORIAN\n' +
                'BEGIN:VTIMEZONE\n' +
                'TZID:America/Chicago\n' +
                'TZURL:http://tzurl.org/zoneinfo-outlook/America/Chicago\n' +
                'X-LIC-LOCATION:America/Chicago\n' +
                'BEGIN:DAYLIGHT\n' +
                'TZOFFSETFROM:-0600\n' +
                'TZOFFSETTO:-0500\n' +
                'TZNAME:CDT\n' +
                'DTSTART:19700308T020000\n' +
                'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\n' +
                'END:DAYLIGHT\n' +
                'BEGIN:STANDARD\n' +
                'TZOFFSETFROM:-0500\n' +
                'TZOFFSETTO:-0600\n' +
                'TZNAME:CST\n' +
                'DTSTART:19701101T020000\n' +
                'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\n' +
                'END:STANDARD\n' +
                'END:VTIMEZONE\n' +
                'BEGIN:VEVENT\n' +
                'DTSTAMP:' + now + '\n' +
                'UID:email@example-url.com\n' +
                'DTSTART;TZID=America/Chicago:' + event.dataset.start + '\n' +
                'DTEND;TZID=America/Chicago:' + event.dataset.end + '\n' +
                'SUMMARY:' + event.dataset.title + '\n' +
                'DESCRIPTION:' + event.dataset.description + '\n' +
                'URL:' + window.location.href + '\n' +
                'LOCATION:' + event.dataset.address + '\n' +
                'END:VEVENT\n' +
                'END:VCALENDAR';
  var icsData = new Blob([icsText], {type: 'text/plaintext'});
  var icsUrl = window.URL.createObjectURL(icsData);

  // Update Links
  event.querySelector('.google').href = googleUrl;
  event.querySelector('.ics').href = icsUrl;

} // each event