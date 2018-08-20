import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { Hero } from '../../hero';
import { Comment } from '../../comment';
import { HeroService } from '../../heroes.service';
import { Comments } from '../comments/comments';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

heroList:Hero[]=[];
heroListToFind:Hero[]=[];
commentList:Comment[]=[];
search:string="";

constructor(public navCtrl: NavController, private service:HeroService,private modal:ModalController) {
      this.service.getHeroes().subscribe(x=>{this.heroList=x; this.heroListToFind=x});
      this.service.getComments().subscribe(x=>this.commentList=x);
  }

  showComment(hero){
    let modal = this.modal.create(Comments, { id:hero });
    modal.present();
  }
 getNumOfComment(id){
   return this.commentList.filter(x=>x.heroId==id).length;
 }
 AddLike(hero){
   if( document.getElementById('btnHeart'+hero.id).getAttribute("voted")=="false"){
      document.getElementById('btnHeart'+hero.id).style.color="red";
      hero.likes+=1;
      document.getElementById('btnHeart'+hero.id).setAttribute("voted","true");
      this.heroListToFind=this.heroList;
  }
 }
 onInput(ev:any){
  let val = ev.target.value;
  this.heroList = this.heroListToFind;
  if (val && val.trim() !== '') {
    this.heroList = this.heroList.filter(function(item) {
      return item.name.toLowerCase().includes(val.toLowerCase());
    });
  }

 }
 onCancel($event){

 }

}
