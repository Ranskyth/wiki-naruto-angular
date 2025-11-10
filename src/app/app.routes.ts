import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

import { ContactComponent } from './pages/contact/contact.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'content/:id',
    component: ContentComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
