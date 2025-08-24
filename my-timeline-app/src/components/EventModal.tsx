import React, { useEffect, useRef } from 'react';

function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    modalRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'Tab') {
        const focusableEls = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const elements = Array.from(focusableEls || []);
        const first = elements[0];
        const last = elements[elements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      onClick={onClose}
    >
      <div className="modal-content" ref={modalRef} tabIndex={-1} onClick={(e) => e.stopPropagation()}>
        <button id="close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <h2 id="modal-title">{event.title}</h2>
        <img id="modal-img" src={`/images/${event.image}`} alt={event.title} />
        <p id="modal-desc">{event.description}</p>
      </div>
    </div>
  );
}
export default EventModal;