import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { UserComponent } from './components/user/user.component'
import { UserService } from './services/user.service'
import { PostComponent } from './components/post/post.component'
import { UsersListComponent } from './components/users-list/users-list.component'
import { PostsListComponent } from './components/posts-list/posts-list.component'

@NgModule({
  declarations: [AppComponent, UsersListComponent, PostsListComponent, UserComponent, PostComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
