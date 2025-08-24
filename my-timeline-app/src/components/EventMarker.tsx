import React, { useRef } from 'react';
import { Event } from '../types/event';

type Props = {
  event: Event;
  onClick: () => void;
};

function EventMarker({ event, onClick }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight') {
      ref.current?.nextElementSibling?.focus();
    }
    if (e.key === 'ArrowLeft') {
      ref.current?.previousElementSibling?.focus();
    }
  };

  return (
    <button
      className="timeline-btn"
      ref={ref}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-current={false} // dynamically set true for active if needed
    >
      {event.year}
    </button>
  );
}
export default EventMarker;
