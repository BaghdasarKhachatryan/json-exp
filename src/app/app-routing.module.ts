import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes:Routes = [
  {
    path:'news',
    loadChildren:()=>import('./news/news.module').then(m=>m.NewsModule),
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'',
    redirectTo:'/news',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
