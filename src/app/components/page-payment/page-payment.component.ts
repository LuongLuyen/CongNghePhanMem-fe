import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-payment',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './page-payment.component.html',
  styleUrl: './page-payment.component.css'
})
export class PagePaymentComponent {

}
