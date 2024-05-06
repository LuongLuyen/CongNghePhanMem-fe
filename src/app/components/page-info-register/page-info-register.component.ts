import { Component,OnInit  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-page-info-register',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './page-info-register.component.html',
  styleUrl: './page-info-register.component.css'
})
export class PageInfoRegisterComponent implements OnInit {
   data:any;
    receivedData: string | undefined;

    constructor(private dataService: DataService) {}
  
    ngOnInit() {
      this.dataService.getData().subscribe(data => {
        if(data){
          this.receivedData = data;
          this.dataService.getByIdGym(data).subscribe((res:any)=>{
            this.data =res
          });
        }
      });
    }
}
