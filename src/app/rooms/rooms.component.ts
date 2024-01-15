import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { DatePipe, LowerCasePipe, UpperCasePipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, DatePipe, LowerCasePipe, UpperCasePipe,
  SlicePipe],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: "AC",
    price: 500,
    photos: 'abc',
    checkinTime: new Date('31-Dec-2023'),
    checkoutTime: new Date('1-Jan-2024'),
  },
  {
    roomNumber: 2,
    roomType: 'Private Room',
    amenities: "AC, Water, Toilet",
    price: 1500,
    photos: 'def',
    checkinTime: new Date('1-Jan-2024'),
    checkoutTime: new Date('12-Jan-2024'),
  }
  ];
  
  

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
