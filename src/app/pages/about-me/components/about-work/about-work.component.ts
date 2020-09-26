import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MY_COMPANIES } from '@shared/data/me';

@Component({
  selector: 'app-about-work',
  templateUrl: './about-work.component.html',
  styleUrls: ['./about-work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AboutWorkComponent {

  companies = MY_COMPANIES;

  constructor() { }

}
