import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEvent } from '../interfaces/i-event';

@Component({
    selector: 'app-events-show',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './events-show.component.html',
    styleUrl: './events-show.component.css'
})
export class EventsShowComponent {
    events: IEvent[] = [
        {
            title: 'Evento de prueba',
            image: '',
            date: '2019-03-15',
            description: 'Nos lo pasaremos genial',
            price: 23.95
        },
        {
            title: 'Evento de prueba 2',
            image: '',
            date: '2019-03-21',
            description: 'Este es peor',
            price: 15.5
        }
    ];
}
