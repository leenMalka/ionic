import { Component } from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular'
import { HeroService } from '../../heroes.service';
import { Comment } from '../../comment'
@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class Comments {

    commentsList:Comment[]=[];

  constructor(private service:HeroService,private params: NavParams,private viewCtrl: ViewController) {
      var id = this.params.get('id');
      this.service.getComments().subscribe(x=>this.commentsList=x.filter(x=>x.heroId==id));
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
 
}