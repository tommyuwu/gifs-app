import { Component, Input } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifService) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  search(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
