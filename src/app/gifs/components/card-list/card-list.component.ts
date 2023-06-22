import { Component, Input } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: []
})
export class CardListComponent {

  @Input()
  gifs: Gif[] = [];

}

