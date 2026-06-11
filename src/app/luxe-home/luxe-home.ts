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
    { name: 'POLO Ralph lauren', price: 799, image: '/LuxeDrip/assets/White-POLO-RL.png' },
    { name: 'Zippers', price: 999, image: '/LuxeDrip/assets/jacket2.png' },
    { name: 'Classic T-Shirts', price: 950, image: '/LuxeDrip/assets/tshirt.png' },
    { name: 'Levis Jeans', price: 799, image: '/LuxeDrip/assets/Jeans-levis.png' }
  ];

  categories = [
    {
      title: 'Shirts',
      image: '/LuxeDrip/assets/shirt-card.png'
    },
    {
      title: 'Bottoms',
      image: '/LuxeDrip/assets/new-arrival.png'
    },
    {
      title: 'Premium ',
      image: '/LuxeDrip/assets/premium.png'
    },
    {
      title: 'New Arrivals',
      image: '/LuxeDrip/assets/Jeans.png'
    }
  ];

}