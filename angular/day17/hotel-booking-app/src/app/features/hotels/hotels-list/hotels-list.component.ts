import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './hotels-list.component.html',
  styleUrl: './hotels-list.component.scss'
})
export class HotelsListComponent {
  fakeHotels = [
    { id: 1, name: 'The Grand Royale', city: 'New York' },
    { id: 2, name: 'Sunset Bayside', city: 'Miami' },
    { id: 3, name: 'Mountain Peak Lodge', city: 'Aspen' }
  ];

  constructor(private router: Router) { }

  goToHotelDetails(hotelId: number) {
    this.router.navigate(['/hotels', hotelId]);
  }
}
