import { Component, signal } from '@angular/core';
import { EventsShowComponent } from './events-show/events-show.component';

@Component({
  selector: 'app-root',
  imports: [EventsShowComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-events');
}
