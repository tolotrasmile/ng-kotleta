import { Component, OnInit } from '@angular/core'
import { User } from '../../classes/user'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

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

  viewPost (user: User) {
    this.selectedUser = user
    this.userService.onChangeUser(user)
  }

  getStyle (user: User): String {
    const style = 'list-group-item list-group-item-action flex-column align-items-start '
    return style + (this.selectedUser === user ? 'active' : '')
  }

}
