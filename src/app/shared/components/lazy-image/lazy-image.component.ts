import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public name!: string;

  public hasLoaded : boolean= false;

  constructor(){}

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required');
    if(!this.name) throw new Error('Name property is required');
  }

  onLoad(){
    setTimeout(() => {
      this.hasLoaded = true
    }, 100 + Math.floor(Math.random()*200));
  }
}
