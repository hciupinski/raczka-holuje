import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Language {
    code: string;
    label: string;
    icon: string; // Path to the SVG
}

@Component({
    selector: 'app-language-switcher',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './language-switcher.component.html',
    styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
    isOpen = false;

    languages: Language[] = [
        {
            code: 'en',
            label: 'English',
            icon: 'assets/usa.svg'
        },
        {
            code: 'pl',
            label: 'Polish',
            icon: 'assets/poland.svg'
        },
    ];

    selectedLangCode = 'pl';

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('pl');
    }

    get selectedLanguage(): Language {
        return (
            this.languages.find(lang => lang.code === this.selectedLangCode) ||
            this.languages[0]
        );
    }

    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);

        this.selectedLangCode = lang;
        this.isOpen = false;
    }
}
