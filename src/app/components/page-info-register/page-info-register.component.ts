import { Component,OnInit  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-page-info-register',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,FormsModule],
  templateUrl: './page-info-register.component.html',
  styleUrl: './page-info-register.component.css'
})
export class PageInfoRegisterComponent implements OnInit {
   data:any;
   input: any={
    idGoiTap:"",
    email:"",
    ten: "",
    tuoi:0,
    chieuCao:0,
    canNang:0,
   }
    receivedData: string | undefined;   
    constructor(private dataService: DataService) {}
    ngOnInit() {
      this.dataService.getData().subscribe(data => {
        if(data){
          this.receivedData = data;
          this.input.idGoiTap =data
          this.dataService.getByIdGym(data).subscribe((res:any)=>{
            this.data =res
          });
        }
      });
    }
    postPackage(){
       if(this.input.email!=="" && this.input.ten !=="" && this.input.tuoi !== 0 && this.input.chieuCao !== 0 && this.input.canNang !== 0){
         this.dataService.postPackage(this.input).subscribe((res:any)=>{
           if (res){
             alert("Đăng ký thành công")
             window.location.href = "/da-dang-ky";
           }
         })
       }else {
         alert("Vui lòng nhập đầy đủ thông tin")
       }
      }
}
