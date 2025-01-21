import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-live-tracking',
    standalone: true,
    imports: [TranslateModule, CommonModule],
    templateUrl: './live-tracking.component.html',
    styleUrl: './live-tracking.component.scss'
})
export class LiveTrackingComponent {
    constructor(private translate: TranslateService) {
        // Default language
        this.translate.setDefaultLang('en');
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
    }
}
