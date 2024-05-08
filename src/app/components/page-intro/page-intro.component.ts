import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page-intro',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink,RouterOutlet],
  templateUrl: './page-intro.component.html',
  styleUrl: './page-intro.component.css'
})
export class PageIntroComponent {
  constructor(private sanitizer: DomSanitizer) { }
  subJs: any;
  ngOnInit() {
  this.subJs=this.sanitizer.bypassSecurityTrustHtml(`
    <script>
      document.getElementById('next').onclick = function(){
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').appendChild(lists[0]);
      }
      document.getElementById('prev').onclick = function(){
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
      }
    </script>
  `)
  }
}
