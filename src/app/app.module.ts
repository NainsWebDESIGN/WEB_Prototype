import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { WebBodyComponent } from '@app/webBody/webBody.component';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { ShareService } from '@service/share.service';
import { ApiService } from '@service/api.service';
import { VideoPipe, Href } from '@app/webBody/Video.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WebBodyComponent,
    VideoPipe,
    Href
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    ShareService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
