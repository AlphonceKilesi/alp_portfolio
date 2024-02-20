import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlpComponent } from './alp/alp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AlpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ALP-PORTFOLIO';
}
