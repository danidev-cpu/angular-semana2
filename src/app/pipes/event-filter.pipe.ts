import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'eventFilter',
  standalone: true,
})
export class EventFilterPipe implements PipeTransform {
  transform(events: IEvent[], searchTerm: string): IEvent[] {
    if (!searchTerm || searchTerm.trim() === '') {
      return events;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(lowerSearchTerm) ||
        event.description.toLowerCase().includes(lowerSearchTerm),
    );
  }
}
