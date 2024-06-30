import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SideTexts } from '../main.component';

@Component({
    selector: 'app-info-text-aside',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './info-text-aside.component.html',
    styleUrl: './info-text-aside.component.scss'
})
export class InfoTextAsideComponent {
    @Input() config!: SideTexts;
}
