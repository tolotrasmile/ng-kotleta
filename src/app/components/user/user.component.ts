import { Component, Input, OnInit } from '@angular/core'
import { User } from '../../classes/user'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User
  @Input() active: Boolean

  constructor (private service: UserService) {
  }

  ngOnInit () {
  }

  clickUser () {
    this.service.onChangeUser(this.user)
  }

  getStyle (): String {
    const style = 'list-group-item list-group-item-action flex-column align-items-start '
    return style + (this.active ? 'active' : '')
  }
}
