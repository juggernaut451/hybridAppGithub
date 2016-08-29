import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {User} from "../../models/user";
import {GithubUsers} from "../../providers/github-users/github-users";

/*
  Generated class for the UserDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/user-detail/user-detail.html',
  providers: [GithubUsers]
})
export class UserDetailPage {
  login: string;
  user: User = new User;


  constructor(private nav: NavController, navParams: NavParams, githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadDetails(this.login)
      .then(user => this.user = user)
  }



}
