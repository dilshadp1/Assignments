import { Component, OnInit} from '@angular/core';
import { RouterModule, ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  imports: [RouterModule,CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent implements OnInit{

  selectedCustomer: any = {};

  constructor(private route: ActivatedRoute,private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.selectedCustomer = navigation?.extras?.state?.['data'];
  }

  ngOnInit(): void {
    if (!this.selectedCustomer) {
      const id = Number(this.route.snapshot.paramMap.get('customerId'));
    }
  }

}

