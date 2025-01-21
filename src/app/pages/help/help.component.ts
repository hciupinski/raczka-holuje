import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CallbarComponent } from "../../components/call-bar/call-bar.component";
import { CityComponent } from "../../components/city-bar/city-bar.component";

@Component({
    selector: 'app-help',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule, CallbarComponent, CityComponent],
    templateUrl: './help.component.html',
    styleUrl: './help.component.scss'
})
export class HelpComponent {
}
