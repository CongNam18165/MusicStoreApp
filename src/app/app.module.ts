import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AccessService } from './access.service';
import { AccessInterceptor } from './access.interceptor';
import { DataTracksService } from './data-tracks.service';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AccessService,DataTracksService,
  {provide: HTTP_INTERCEPTORS,useClass: AccessInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
