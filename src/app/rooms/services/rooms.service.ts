import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/67-sOi7mVIk',
      checkinTime: new Date('10-Mar-2023'),
      checkoutTime: new Date('11-Mar-2023'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
      checkinTime: new Date('10-Mar-2023'),
      checkoutTime: new Date('11-Mar-2023'),
      rating: 3.4,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://unsplash.com/photos/emqnSQwQQDo',
      checkinTime: new Date('10-Mar-2023'),
      checkoutTime: new Date('11-Mar-2023'),
      rating: 2.6,
    },
  ]

  constructor() { 
    console.log('service initialized');
  }

  getRooms() {
    return this.roomList;
  }
}
