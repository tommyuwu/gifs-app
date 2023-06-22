import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gif-card.component.html',
  styleUrls: [],
})
export class GifCardComponent {
  @Input()
  gif!: Gif;
}
