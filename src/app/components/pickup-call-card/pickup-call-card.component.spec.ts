import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { PickupCallCardComponent } from './pickup-call-card.component';

describe('PickupCallCardComponent', () => {
  let component: PickupCallCardComponent;
  let fixture: ComponentFixture<PickupCallCardComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupCallCardComponent ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallCardComponent);
    router= TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to pickup-calls on See all...', () => {
    spyOn(router,'navigate');

    component.seeAll();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  });
});
