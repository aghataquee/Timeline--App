import React from 'react';

interface EventMarkerProps {
  year: string;
  onClick: () => void;
}

const EventMarker: React.FC<EventMarkerProps> = ({ year, onClick }) => {
  return (
    <button className="timeline-btn" onClick={onClick}>
      {year}
    </button>
  );
};

export default EventMarker;
