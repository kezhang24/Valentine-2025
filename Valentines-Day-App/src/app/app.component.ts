import { Component, inject } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './header/header.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    MainContentComponent,
    HeaderComponent,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Valentines-Day-App';

  rounter = inject(Router);
  navigate(){
    this.rounter.navigate(['/yes']);
  }
  
}
