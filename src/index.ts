import { fetchEvents } from './fetcher';
import { showModal, hideModal } from './modal';
import { toggleTheme } from './theme';
import { TimelineEvent } from './types';

document.addEventListener('DOMContentLoaded', async () => {
  const events = await fetchEvents();
  console.log('Events fetched:',events);

  document.getElementById('timeline-nav')?.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.classList.contains('timeline-btn')) {
      const year = target.dataset.year;
      const event = events.find(ev => ev.year === year);
      if (event) showModal(event);
    }
  });

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('close-btn')?.addEventListener('click', hideModal);


});