import { TimelineEvent } from './types';

export async function fetchEvents(): Promise<TimelineEvent[]> {
  const response = await fetch('./data/events.json');
  if (!response.ok) throw new Error('Failed to load events');
  return response.json();
}