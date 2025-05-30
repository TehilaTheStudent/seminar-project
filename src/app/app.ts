import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Emojis } from "./emojis/emojis";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Emojis],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-angular-app';
}
