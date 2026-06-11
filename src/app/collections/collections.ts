import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collections',
  imports: [RouterLink],
  templateUrl: './collections.html',
  styleUrl: './collections.css',
})
export class collections {
  
  products = [

    {
      name:'Polo Ralph Lauren - Linen Shirt',
      price:799,
      image:'assets/Maroon-POLO-RL.png'
    },

    {
      name:'Polo Ralph Lauren - Oxford Shirt',
      price:799,
      image:'assets/TealGreen-POLO-RL.png'
    },

    {
      name:'Polo Cotton Shirt',
      price:699,
      image:'assets/Check-POLO.png'
    },

    {
      name:'Oversized CBR T-Shirt',
      price:499,
      image:'assets/Oversized-grey-cbr.png'
    },

    {
      name:'Oversized Premium T-shirts',
      price:499,
      image:'assets/Oversized-CBR.png'
    },
    {
      name:'3rd Font print T-shirts',
      price:499,
      image:'assets/silent-cry-tshirt.png'
    },

    {
      name:'Levis - Shirt',
      price:999,
      image:'assets/Levis-grey-shirt.png'
    },

    {
      name:'Gantt Premium Shirt',
      price:799,
      image:'assets/Gantt-yellow-print.png'
    },

    {
      name:'Polo Ralph Lauren - Lined Shirt',
      price:799,
      image:'assets/POLO-RL-Print.png'
    },

    {
      name:'Formal Shirts',
      price:999,
      image:'assets/Formal-shirt.png'
    },

    {
      name:'HOGO BOSS Premium Polo T-Shirts',
      price:799,
      image:'assets/BOSS-Tshirt.png'
    },
    {
      name:'GUCCI Polo T-Shirts',
      price:799,
      image:'assets/Gucci-mustard-polo.png'
    },
    {
      name:'Ralph Lauren - Zipper',
      price:799,
      image:'assets/jacket..png'
    },
    {
      name:'Ralph lauren - Zipper ',
      price:799,
      image:'assets/zipper-POLO-RL.png'
    },

    {
      name:'Ralph lauren - Half zipper ',
      price:799,
      image:'assets/half-zipper-RL.png'
    },
    {
      name:'Japanses Fabric Narrow pants ',
      price:799,
      image:'assets/Narrow-Japanese-pants.png'
    },
    {
      name:'Premium Jeans ',
      price:799,
      image:'assets/Jeans.png'
    },
    {
      name:'Levis Jeans ',
      price:799,
      image:'assets/Jeans-levis.png'
    },
    {
      name:'Straight Fit Jeans ',
      price:799,
      image:'assets/Straight-fit-jeans.png'
    },

  ];

}
