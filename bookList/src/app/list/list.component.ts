import { Component } from '@angular/core';
import { LikesComponent } from '../likes/likes.component';
import { DislikesComponent } from '../dislikes/dislikes.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [LikesComponent, DislikesComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {}
