import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { User } from '../../classes/user'
import { Post } from '../../classes/post'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = []
  posts: Post[] = []

  constructor (private userService: UserService) {
  }

  ngOnInit () {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users
    })
    this.userService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts
    })
  }

}
