import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items_a: Array<any>;
  public items_b: Array<any>;

  public options: any;

  constructor(public navCtrl: NavController) {
    this.items_a = [
      { gameTitle: 'Title1', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title2', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title3', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title4', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title5', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title6', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title7', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title8', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title9', gameImage: 'http://via.placeholder.com/200x200' }
    ];

    this.items_b = [
      { gameTitle: 'Title10', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title11', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title12', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title13', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title14', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title15', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title16', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title17', gameImage: 'http://via.placeholder.com/200x200' },
      { gameTitle: 'Title18', gameImage: 'http://via.placeholder.com/200x200' }
    ];

    this.options = {
      height: 100,
      slidesPerView: 3
    }
  }

}
