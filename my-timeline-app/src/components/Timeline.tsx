import React from 'react';
import { Event } from '../types/event';
import EventMarker from './EventMarker';

interface TimelineProps {
  events: Event[];
  onSelectEvent: (event: Event) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, onSelectEvent }) => {
  return (
    <nav id="timeline-nav">
      {events.map((event) => (
        <EventMarker
          key={event.year}
          year={event.year}
          onClick={() => onSelectEvent(event)}
        />
      ))}
    </nav>
  );
};

export default Timeline;
