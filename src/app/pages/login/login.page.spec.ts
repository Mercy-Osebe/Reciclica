import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule,
      FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router= TestBed.get(Router);
    fixture.detectChanges();
  }));

  it('should go home on login', () => {
    spyOn(router,'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should go to register  on register', () => {
    spyOn(router,'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });
});
