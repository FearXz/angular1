import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { ActivePostComponent } from './comp/home-comp/active-post/active-post.component';
import { InactivePostComponent } from './comp/home-comp/inactive-post/inactive-post.component';
import { PostDetailComponent } from './comp/home-comp/post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ActivePostComponent,
    InactivePostComponent,
    PostDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
