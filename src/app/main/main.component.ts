import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { InfoTextAsideComponent } from './info-text-aside/info-text-aside.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, SlideShowComponent, InfoTextAsideComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
