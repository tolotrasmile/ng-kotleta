import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { User } from '../../classes/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = []
  selectedUser: User

  constructor (private userService: UserService) {
  }

  ngOnInit () {
    this.userService.getUsers().subscribe((users: User[]) => {
      if (users && users.length > 0) {
        this.viewPost(users[0])
      }
      return this.users = users
    })
  }

  private viewPost (user: User) {
    this.selectedUser = user
    this.userService.onChangeUser(user)
  }

  private getStyle (user: User): String {
    const style = 'list-group-item list-group-item-action flex-column align-items-start '
    return style + (this.selectedUser === user ? 'active' : '')
  }
}
