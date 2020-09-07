import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishbookComponent } from './wishbook/wishbook.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'wishbook', component: WishbookComponent},
  {path: 'videos', component: VideosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
