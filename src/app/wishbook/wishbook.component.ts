import { Component, OnInit } from '@angular/core';
import { WishService } from './wish.service';
import {Wish} from './wish';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-wishbook',
  templateUrl: './wishbook.component.html',
  styleUrls: ['./wishbook.component.css'],
})
export class WishbookComponent implements OnInit {

  constructor(private httpClient: HttpClient, private wishService: WishService) { }

  displayWishPanel: boolean = false;

  defaultValue: string = '';

  textAreaEmpty(){
    if(this.defaultValue != ''){
      this.defaultValue = '';
    }
  }

  wishes: Wish[];

   populateWishes(){
     this.wishService.getWishes()
     .subscribe((wishes: Wish[])=> {
       console.log(wishes);
       this.wishes = wishes;
     });
   }

  images: Array<string> =[ "./assets/img/8.jpg",
  "./assets/img/9.jpg", "./assets/img/10.jpg", "./assets/img/11.jpg", 
  "./assets/img/12.jpg","./assets/img/13.jpg", "./assets/img/14.jpg", 
  "./assets/img/15.jpg","./assets/img/16.jpg", "./assets/img/17.jpg",
   "./assets/img/18.jpg","./assets/img/19.jpg", "./assets/img/20.jpg",
   "./assets/img/21.jpg", "./assets/img/22.jpeg","./assets/img/23.jpeg", 
 "./assets/img/24.jpeg", "./assets/img/25.jpeg","./assets/img/26.jpeg", 
 "./assets/img/27.jpg", "./assets/img/28.jpg","./assets/img/29.jpg", 
 "./assets/img/30.jpeg", "./assets/img/31.jpeg", "./assets/img/32.jpeg",
 "./assets/img/33.jpeg", "./assets/img/34.jpeg", "./assets/img/35.jpeg",
 "./assets/img/36.jpeg", "./assets/img/37.jpeg","./assets/img/38.jpeg", 
 "./assets/img/39.jpeg", "./assets/img/40.jpg","./assets/img/41.jpg", 
 "./assets/img/42.jpg", "./assets/img/43.jpg","./assets/img/44.jpg", 
 "./assets/img/45.jpg", "./assets/img/46.jpg", "./assets/img/47.jpg",
 "./assets/img/48.jpg", "./assets/img/49.jpg"]

  ngOnInit() {
    this.populateWishes();
  }

  buttonClicked(el: HTMLElement){
    this.displayWishPanel = true;
    el.scrollIntoView({behavior:"smooth"});
  }

  buttonUnClicked(input: string){
    if(input.length!=0){
    let wish: Wish = new Wish(input);
    this.wishService.postWish(wish)
    .subscribe((wishes: Wish[])=> {
      console.log(wishes);
      this.wishes = wishes;
    });
  this.textAreaEmpty();
    }
  }
}
