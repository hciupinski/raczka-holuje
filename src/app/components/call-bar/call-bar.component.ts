import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-call-bar',
    imports: [CommonModule],
    templateUrl: './call-bar.component.html',
    styleUrls: ['./call-bar.component.scss']
})
export class CallbarComponent { }