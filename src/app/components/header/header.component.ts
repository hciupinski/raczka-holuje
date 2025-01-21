import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";
import { TranslateModule } from '@ngx-translate/core';

interface NavItem {
    label: string;
    hasDropdown?: boolean;
    dropdownItems?: string[];
    link?: string;
}

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, LanguageSwitcherComponent, TranslateModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isMobileMenuOpen = false;

    navItems: NavItem[] = [
        {
            label: 'HEADER.NAV.HELP',
            hasDropdown: false,
            link: 'help',
        },
        {
            label: 'HEADER.NAV.ADVICES',
            hasDropdown: false,
            link: 'help#advices',
        },
        {
            label: 'HEADER.NAV.TRACKING',
            hasDropdown: false,
            link: 'tracking'
        },
        {
            label: 'HEADER.NAV.CONTACT',
            link: 'contact'
        }
    ];

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
}
