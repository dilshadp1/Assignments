import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule,NavMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel-booking-app';
}
