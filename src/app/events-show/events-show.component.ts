import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEvent } from '../interfaces/i-event';
import { EventFilterPipe } from '../pipes/event-filter.pipe';

@Component({
  selector: 'app-events-show',
  standalone: true,
  imports: [CommonModule, FormsModule, EventFilterPipe],
  templateUrl: './events-show.component.html',
  styleUrl: './events-show.component.css',
})
export class EventsShowComponent {
  search: string = '';

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };

  events: IEvent[] = [
    {
      title: 'Evento de prueba',
      image: '/images/Evento1.jpeg',
      date: '2019-03-15',
      description: 'Nos lo pasaremos genial',
      price: 23.95,
    },
    {
      title: 'Evento de prueba 2',
      image: '/images/Evento2.jpeg',
      date: '2019-03-21',
      description: 'Este es peor',
      price: 15.5,
    },
  ];

  orderDate(): void {
    this.search = '';
    this.events.sort((a, b) => a.date.localeCompare(b.date));
  }

  orderPrice(): void {
    this.search = '';
    this.events.sort((a, b) => a.price - b.price);
  }

  addEvent(): void {
    this.events.push({
      title: this.newEvent.title,
      description: this.newEvent.description,
      image: this.newEvent.image,
      price: this.newEvent.price,
      date: this.newEvent.date,
    });

    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: '',
    };
  }

  changeImage(fileInput: HTMLInputElement): void {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newEvent.image = reader.result as string;
    });
  }
}
