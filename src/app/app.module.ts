import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { UserComponent } from './components/user/user.component'
import { UserService } from './services/user.service';
import { PostComponent } from './components/post/post.component'

@NgModule({
  declarations: [AppComponent, UserComponent, PostComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
