// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Countdown to provisional opening match date (11 June 2026)
(function setupCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date('2026-06-11T16:00:00Z'); // approximate global kick-off

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      daysEl.textContent = '0';
      hoursEl.textContent = '0';
      minutesEl.textContent = '0';
      secondsEl.textContent = '0';
      return;
    }

    const seconds = Math.floor(diff / 1000);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    daysEl.textContent = String(days);
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(remainingSeconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

// Confederation filter on matches page
(function setupConfedFilter() {
  const select = document.getElementById('confed-select');
  const table = document.getElementById('matches-table');
  if (!select || !table) return;

  const rows = Array.from(table.querySelectorAll('tbody tr'));

  select.addEventListener('change', () => {
    const value = select.value;
    rows.forEach(row => {
      const confed = row.getAttribute('data-confed');
      if (!confed) return;
      row.style.display = (value === 'all' || value === confed) ? '' : 'none';
    });
  });
})();

// Match centre tabs
(function setupTabs() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const panels = document.querySelectorAll('.tab-panel');

  if (!tabLinks.length || !panels.length) return;

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('data-tab');
      if (!targetId) return;

      tabLinks.forEach(l => l.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      link.classList.add('active');
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add('active');
    });
  });
})();

// Dynamic year in footer
(function setYear() {
  const yearSpan = document.getElementById('year');
  if (!yearSpan) return;
  yearSpan.textContent = new Date().getFullYear();
})();
