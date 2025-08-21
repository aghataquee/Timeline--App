import React from 'react';
import { Event } from '../types/event';


interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span id="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2 id="modal-title">{event.title}</h2>
        <img id="modal-img" src={event.image} alt={event.title} />
        <p id="modal-desc">{event.description}</p>
      </div>
    </div>
  );
};

export default EventModal;
