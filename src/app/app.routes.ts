import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ContactComponent } from './pages/contact/contact.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'content/:id',
        component: ContentComponent
    },
    {
        path: 'posts',
        component: CreatePostComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
