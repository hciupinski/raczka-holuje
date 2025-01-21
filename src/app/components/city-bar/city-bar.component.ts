import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-city-bar',
    imports: [CommonModule],
    templateUrl: './city-bar.component.html',
    styleUrls: ['./city-bar.component.scss']
})
export class CityComponent { }