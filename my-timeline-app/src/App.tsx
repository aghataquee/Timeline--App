import React, { useEffect, useState } from 'react';
import './style/styles.css';
import Header from './components/Header';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import { Event } from '../types/event';

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    fetch('/data/events.json')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <main>
        <Timeline events={events} onSelectEvent={setSelectedEvent} />
      </main>
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  );
};

export default App;

