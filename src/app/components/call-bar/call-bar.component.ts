import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

@Component({
    standalone: true,
    selector: 'app-call-bar',
    imports: [CommonModule, TranslateModule],
    templateUrl: './call-bar.component.html',
    styleUrls: ['./call-bar.component.scss']
})
export class CallbarComponent { }
