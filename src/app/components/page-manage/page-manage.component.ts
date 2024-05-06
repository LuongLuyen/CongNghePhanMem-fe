import { Component,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-manage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './page-manage.component.html',
  styleUrl: './page-manage.component.css'
})
export class PageManageComponent implements OnInit {
  data:any;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getAllPackage().subscribe((res:any)=>{
      this.data = res
    });
  }
}
