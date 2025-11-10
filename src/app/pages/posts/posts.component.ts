import { Component } from '@angular/core';
import { fakePosts } from '../../data/posts-fakes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Post } from '../../types/pots';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: Post[] = fakePosts;
}
