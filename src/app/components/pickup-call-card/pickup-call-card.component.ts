import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {
  @Input() hasHeader: boolean;
  @Input() hasFooter: boolean;
//The @Input help u to type the fields we want.
  @Input() status: string;
  @Input() updatedAt: string;
  @Input() createdAt: string;
  @Input() notes: string;
  @Input() value: string;


  constructor(private router: Router) { }

  ngOnInit() {
  }
  seeAll(){
    this.router.navigate(['pickup-calls']);
  }
}
