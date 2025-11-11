import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HotelsListComponent } from './features/hotels/hotels-list/hotels-list.component';
import { HotelRoomsComponent } from './features/hotels/hotel-rooms/hotel-rooms.component';
import { HotelReviewsComponent } from './features/hotels/hotel-reviews/hotel-reviews.component';
import { HotelEmployeesComponent } from './features/hotels/hotel-employees/hotel-employees.component';
import { HotelDetailsComponent } from './features/hotels/hotel-details/hotel-details.component';
import { CustomersListComponent } from './features/customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './features/customers/customer-details/customer-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hotels', component: HotelsListComponent},
  { path: 'hotels/:hotelId', component: HotelDetailsComponent,
    children:[
      { path: '', redirectTo: 'rooms', pathMatch: 'full' },
      {path: 'rooms',component:HotelRoomsComponent},
      {path: 'employees',component:HotelEmployeesComponent},
      {path: 'reviews',component:HotelReviewsComponent}
    ]
  },
  { path: 'customers', component: CustomersListComponent},
  { path: 'customers/:customerId', component: CustomerDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
