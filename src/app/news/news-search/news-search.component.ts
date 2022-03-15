import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent implements OnInit {
  @Output() inputChange = new EventEmitter<string>()
  searchTerm = new FormControl('');

  
  constructor() { }

  ngOnInit(): void {
  }

  onInput(){
    // console.log(this.searchTerm.value)
    this.inputChange.emit(this.searchTerm.value)
  }
}
