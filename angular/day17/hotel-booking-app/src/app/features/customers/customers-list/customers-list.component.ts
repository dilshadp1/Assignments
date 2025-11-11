
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customers-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent {
  fakeCustomers = [
    { id: 1, name: 'Alice Smith', email: 'alice.smith@example.com',phoneNumber: '555-0101' },
    { id: 2, name: 'Bob Johnson', email: 'bob.johnson@example.com', phoneNumber: '555-0102' },
    { id: 3, name: 'Charlie Lee', email: 'charlie.lee@example.com', phoneNumber: '555-0103' }
  ];
  constructor(private router: Router) { }

goToCustomerDetails(customer: any) {
    this.router.navigate(
      ['/customers', customer.id],
      { state: { data: customer } }
    );
  }
}
