import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-pricetag',
  templateUrl: './pricetag.component.html',
  styleUrl: './pricetag.component.css'
})
export class PricetagComponent {
  @Input()
  public precio! : number;

}
