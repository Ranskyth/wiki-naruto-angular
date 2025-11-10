import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { fakePosts } from '../data/posts-fakes';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: any = null;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id == null) {
      this.notFound = true;
      return;
    }

    this.post = fakePosts.find((p) => Number(p.id) === id);

    if (!this.post) {
      this.notFound = true;
    }
  }

  goBack() {
    this.router.navigate(['/posts']);
  }
}
