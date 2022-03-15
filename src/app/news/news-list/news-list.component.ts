import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService, Post } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public posts!:Post[];
  public searchTerm!:string
  constructor(private newsService:NewsService,
              private router:Router,
              private route:ActivatedRoute,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.newsService.getPosts()
    .subscribe((data:Post[])=>{
      this.posts = data
    })
  }
  setSearchTerm(value:string){

    this.searchTerm = value
    // console.log(this.searchTerm)
  }
  edit(id:number){
    this.router.navigate(['/news',id])
  }
  deletePost(post:Post){
    this.newsService.delete(post).subscribe()
  }
  logout(){
    this.authService.logout()
  }
}
