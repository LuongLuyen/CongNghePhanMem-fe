import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegisterPackageComponent } from './page-register-package.component';

describe('PageRegisterPackageComponent', () => {
  let component: PageRegisterPackageComponent;
  let fixture: ComponentFixture<PageRegisterPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRegisterPackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageRegisterPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
