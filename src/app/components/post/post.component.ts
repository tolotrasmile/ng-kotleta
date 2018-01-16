import { Component, OnInit } from '@angular/core'
import { Post } from '../../classes/post'
import { UserService } from '../../services/user.service'
import { User } from '../../classes/user'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

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
