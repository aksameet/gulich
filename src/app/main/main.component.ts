import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { InfoTextAsideComponent } from './info-text-aside/info-text-aside.component';
import { DrumWorkComponent } from './drum-work/drum-work.component';

export interface SideTexts {
    mainText: string[];
    sideText: string;
    textSideRight: boolean;
}
@Component({
    selector: 'app-main',
    standalone: true,
    imports: [
        HeroComponent,
        SlideShowComponent,
        InfoTextAsideComponent,
        DrumWorkComponent
    ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {
    sideTexts: SideTexts[] = [
        {
            mainText: [
                'Ein kleines Team mit großen Ideen.Wir haben die Expertise eines Studios, die Bandbreite einer Agentur und die Kreativität eines Ateliers'
            ],
            sideText: 'Unsere\nBandbreite',
            textSideRight: false
        },
        {
            mainText: [
                'Wir liefern innovatives Design mit aussagekräftigen Marketingkampagnen, welche deine Marke nach vorne katapultierten'
            ],
            sideText: 'Was\nliefern wir',
            textSideRight: true
        },
        {
            mainText: [
                'Webdesign',
                'Webdevelopment',
                'Corporate Design',
                'Markenkommunikation',
                'Creative Direction',
                'Art Direction',
                'Printmediendesign',
                'Konzeption',
                'Verpackungsdesign',
                'Marketing',
                'Produktdesign',
                'Fotografie',
                'UI/UX Design',
                'Storytelling',
                'Signaletik',
                'Räumliche Kommunikation',
                'LP & Cover Musik',
                'Sound Design'
            ],
            sideText: 'Unsere\nLeistungen',
            textSideRight: false
        },
        {
            mainText: ['Caritas', 'Drumwork Music', 'Ehrenamt Biberach'],
            sideText: 'Unsere\nKunden',
            textSideRight: true
        }
    ];
}
