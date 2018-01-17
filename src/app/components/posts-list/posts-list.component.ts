import { Component, OnInit } from '@angular/core'
import { Post } from '../../classes/post'
import { User } from '../../classes/user'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[] = []
  user: User

  constructor (private userService: UserService) {
  }

  ngOnInit () {
    this.userService.userSubject$.subscribe(
      user => {
        this.userService.getPostsByUser(user).subscribe((posts: Post[]) => {
          this.user = user
          this.posts = posts
        })
      })
  }
}
