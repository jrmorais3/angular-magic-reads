import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/shared/nav/nav.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { MagicReadsComponent } from "./components/magic-reads/magic-reads.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HeaderComponent, FooterComponent, MagicReadsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-magic-reads';
}
