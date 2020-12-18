import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EliteApiProvider } from '../../providers/elite-api/elite-api';
import { TeamDetailPage } from '../pages';
import { TeamHomePage } from '../team-home/team-home';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams: any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public eliteApi: EliteApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
    let selectedTourney = this.navParams.data;
    this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
    });
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, {team: team});
  }

}
