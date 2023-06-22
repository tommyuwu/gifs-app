import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent {
  hasLoaded: boolean = false;

  onLoad(): void {
    this.hasLoaded = true;
  }

  @Input()
  url!: string;

  @Input()
  alt!: string;
}
