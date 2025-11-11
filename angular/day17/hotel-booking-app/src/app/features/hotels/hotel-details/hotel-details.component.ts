import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-details',
  imports: [RouterModule,CommonModule],
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.scss'
})
export class HotelDetailsComponent implements OnInit,OnDestroy {

  selectedHotel: any = {};
  hotelId: number = 0;
  currentSelectedRoom: any = null;

  private roomSelectionSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idFromUrl = this.route.snapshot.paramMap.get('hotelId');
    this.hotelId = Number(idFromUrl);

    this.selectedHotel = {
      id: this.hotelId,
      name: `Faked Hotel Name (ID: ${this.hotelId})`,
      city: 'Faked City'
    };
  }

  onRoomSelectedFromChild(room: any) {
    console.log('Parent component received room:', room);
    this.currentSelectedRoom = room;
  }

  onChildActivated(component: any) {

    if (component.hotelData !== undefined) {
      component.hotelData = this.selectedHotel;
    }

    if (component.roomSelected) {
      this.roomSelectionSubscription = component.roomSelected.subscribe((room: any) => {
        this.onRoomSelectedFromChild(room);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.roomSelectionSubscription) {
      this.roomSelectionSubscription.unsubscribe();
    }
  }
}
