import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService, Post } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  changeForm = new FormGroup({
    title:new FormControl(''),
    body:new FormControl('')
  })
  post!:Post
  constructor(private activatedRoute:ActivatedRoute,
            private newsService:NewsService,
            private router:Router) { }

  ngOnInit(): void {
  const routeParams = this.activatedRoute.snapshot.paramMap;
  const postId = Number(routeParams.get('id'))

  this.newsService.getPostById(postId)
  .subscribe((data:Post)=>{
    this.post = data
  })
  }

  onSubmit(){
    console.log(this.post.id)
    const post : Post = {
      id:this.post.id,
      title:this.changeForm.value.title,
      body:this.changeForm.value.body
    }
    this.newsService.updatePost(post)
    .subscribe(()=>{
      alert(`Successfuly changed`)
      this.router.navigate(['/news'])
    })
    
  }
}
