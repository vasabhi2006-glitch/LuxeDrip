import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './luxe-home.html',
  styleUrls: ['./luxe-home.css'],
})
export class HomeComponent {

  products = [
    { name: 'POLO Ralph lauren', price: 799, image: 'assets/White-POLO-RL.png' },
    { name: 'Zippers', price: 999, image: 'assets/jacket2.png' },
    { name: 'Classic T-Shirts', price: 950, image: 'assets/tshirt.png' },
    { name: 'Levis Jeans', price: 799, image: 'assets/Jeans-levis.png' }
  ];

  categories = [
    {
      title: 'Shirts',
      image: 'assets/shirt-card.png'
    },
    {
      title: 'Bottoms',
      image: 'assets/new-arrival.png'
    },
    {
      title: 'Premium ',
      image: 'assets/premium.png'
    },
    {
      title: 'New Arrivals',
      image: 'assets/Jeans.png'
    }
  ];

}