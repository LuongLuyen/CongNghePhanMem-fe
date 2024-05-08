import { Routes } from '@angular/router';
import { PagePaymentComponent } from './components/page-payment/page-payment.component';
import { PageRegisterPackageComponent } from './components/page-register-package/page-register-package.component';
import { PageInfoRegisterComponent } from './components/page-info-register/page-info-register.component';
import { PageManageComponent } from './components/page-manage/page-manage.component';
import { PageIntroComponent } from './components/page-intro/page-intro.component';

export const routes: Routes = [
    { path: 'home', component: PageRegisterPackageComponent },
    { path: 'info-register', component: PageInfoRegisterComponent },
    { path: 'da-dang-ky', component: PageManageComponent },
    { path: 'thanh-toan', component: PagePaymentComponent },
    { path: '', component: PageIntroComponent },
];
