import { Component } from '@angular/core';
import { Theme } from 'src/app/shared/interfaces/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.scss']
})
export class CurrentThemeComponent {
theme: Theme |undefined;
}
