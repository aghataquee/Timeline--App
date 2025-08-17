const modal = document.getElementById('popup-modal');
const title = document.getElementById('modal-title');
const image = document.getElementById('modal-img');
const desc = document.getElementById('modal-desc');
export function showModal(event) {
    title.textContent = `${event.year} - ${event.title}`;
    image.src = event.imageURL;
    desc.textContent = `${event.description} (${event.category})`;
    modal.style.display = 'block';
}
export function hideModal() {
    modal.style.display = 'none';
}
