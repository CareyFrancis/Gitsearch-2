import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{ ProfileService } from '../services/profile.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HighlightDirective } from './highlight.directive';
import { DatecountPipe } from './datecount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HighlightDirective,
    DatecountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
