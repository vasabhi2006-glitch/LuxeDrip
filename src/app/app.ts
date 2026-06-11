import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./luxe-home/luxe-home";
import { collections } from './collections/collections';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, collections],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LuxeDrip');
}
