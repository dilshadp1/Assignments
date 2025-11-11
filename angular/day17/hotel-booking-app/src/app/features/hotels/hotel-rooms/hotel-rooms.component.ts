import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-rooms',
  imports: [RouterModule,CommonModule],
  templateUrl: './hotel-rooms.component.html',
  styleUrl: './hotel-rooms.component.scss'
})
export class HotelRoomsComponent {
  @Input() hotelData: any = {};

  @Output() roomSelected = new EventEmitter<any>();

  fakeRooms = [
    { id: 101, type: 'Standard King', price: 250 },
    { id: 102, type: 'Standard Queen', price: 220 },
    { id: 103, type: 'Deluxe Suite', price: 400 }
  ];

  onSelectRoom(room: any) {
    console.log('Child component emitting room:', room);
    this.roomSelected.emit(room);
  }
}
