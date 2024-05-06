import { Component,OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from '../../services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-page-register-package',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,RouterLink,RouterOutlet,HttpClientModule],
  templateUrl: './page-register-package.component.html',
  styleUrl: './page-register-package.component.css'
})
export class PageRegisterPackageComponent implements OnInit {
  data:any

  constructor(private dataService: DataService) {}
  click (id:string){
    this.dataService.setData(id);
  }
  ngOnInit(): void {
    this.dataService.getAllGym().subscribe((res:any)=>{
      this.data = res
    });
  }
}

