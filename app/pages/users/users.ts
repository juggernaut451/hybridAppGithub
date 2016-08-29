import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GithubUsers} from '../../providers/github-users/github-users'
import {User} from '../../models/user'
import {UserDetailPage} from '../user-detail/user-detail'
/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [GithubUsers]
})
export class UsersPage {
  users: User[]
  constructor(public nav: NavController, private githubUsers: GithubUsers) {
    githubUsers
      .load()
      .then(users => this.users = users);

  }

  search(searchTerm: any){

    let term = searchTerm.target.value;
    console.log(term);
    if (term.trim() == '' || term.trim().length < 3 ){
      this.githubUsers
        .load()
        .then(users => this.users = users)
    } else {
      this.githubUsers.searchUsers(term)
        .then(users => this.users = users)
    }
  }

  goToDetails(event, login){
    this.nav.push(UserDetailPage,{
      login: login
    });
  }


}
