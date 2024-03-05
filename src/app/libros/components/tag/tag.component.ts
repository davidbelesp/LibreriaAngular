import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  @Input()
  public tag! : string;

}
