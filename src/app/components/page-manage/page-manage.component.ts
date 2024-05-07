import { Component,OnInit,HostListener  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-manage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './page-manage.component.html',
  styleUrl: './page-manage.component.css'
})
export class PageManageComponent implements OnInit {
  data:any;

  constructor(private dataService: DataService) {}
  click (id:string){
    this.dataService.setData(id);
  }
  
  ngOnInit(): void {
    this.dataService.getAllPackage().subscribe((res:any)=>{
      this.data = res
    });
  }
  deletePackage(id:string){
    this.dataService.deletePackage(id).subscribe((res:any)=>{
      if (res){
        alert("Xóa thành công")
        window.location.href = "/da-dang-ky";
      }
    })
  }
}
