import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfoRegisterComponent } from './page-info-register.component';

describe('PageInfoRegisterComponent', () => {
  let component: PageInfoRegisterComponent;
  let fixture: ComponentFixture<PageInfoRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInfoRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageInfoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
