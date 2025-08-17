import { TimelineEvent } from './types';

const modal = document.getElementById('popup-modal') as HTMLElement;
const title = document.getElementById('modal-title') as HTMLElement;
const image = document.getElementById('modal-img') as HTMLImageElement;
const desc = document.getElementById('modal-desc') as HTMLElement;

export function showModal(event: TimelineEvent): void {
  title.textContent = `${event.year} - ${event.title}`;
  image.src = event.imageURL;
  desc.textContent = `${event.description} (${event.category})`;
  modal.style.display = 'block';
}

export function hideModal(): void {
  modal.style.display = 'none';
}