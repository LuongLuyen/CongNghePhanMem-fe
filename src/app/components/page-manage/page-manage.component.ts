import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-manage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './page-manage.component.html',
  styleUrl: './page-manage.component.css'
})
export class PageManageComponent {

}
