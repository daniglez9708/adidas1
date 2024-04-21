import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] | undefined
  constructor(private router: Router) {}

  navigateToProduct() {
    this.router.navigateByUrl('');
  }

  ngOnInit() {
    this.items = [
      {
          label: 'Men',
      },
      {
          label: 'Women',
      },
      {
          label: 'Kids',
      },
      {
          label: 'Sale',
      },
      {
          label: '3 Stripe Life',
      }
  ];
  }
}