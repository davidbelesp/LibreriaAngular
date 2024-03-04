import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-text',
  templateUrl: './lazy-image.component.html',
})
export class LazyTextComponent implements OnInit {
  @Input()
  public text!: string;
  // @Input()
  // public name!: string;

  public hasLoaded : boolean= false;

  constructor(){
    this.hasLoaded = false
  }

  ngOnInit(): void {
    if(!this.text) throw new Error('URL property is required');
  }

  onLoad(){
    setTimeout(() => {
      this.hasLoeaded = true;

    }, 1500);
  }
}
