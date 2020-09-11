import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteHandlingComponent } from './route-handling/route-handling.component';
import { PrimengModule } from './primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteListComponent } from './route-handling/route-list/route-list.component';
import {TableModule} from 'primeng/table';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RouteDescriptionComponent } from './route-handling/route-description/route-description.component';
import { LogoComponent } from './util/logo/logo.component';
import { TransportIconDisplayComponent } from './route-handling/transport-icon-display/transport-icon-display.component';
import { DeliveryCompleteComponent } from './route-handling/delivery-complete/delivery-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteHandlingComponent,
    RouteListComponent,
    RouteDescriptionComponent,
    LogoComponent,
    TransportIconDisplayComponent,
    DeliveryCompleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule,
    ReactiveFormsModule,
    TableModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
