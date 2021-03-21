import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from "./app.material";
import { BlockedDomainsComponent } from './blocked-domains/blocked-domains.component';
import { ConfigsComponent } from './configs/configs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchBlComponent } from './search-bl/search-bl.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateConfigComponent } from './update-config/update-config.component';
import { UpdateDOmainsComponent } from './update-domains/update-domains.component';
import { ViewBlockedlogsComponent } from './view-blockedlogs/view-blockedlogs.component';
import { InMemoryDataService } from './_services';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ConfigsComponent,
    UpdateConfigComponent,
    UpdateDOmainsComponent,
    ViewBlockedlogsComponent,
    SearchBlComponent,
    BlockedDomainsComponent,
    SigninComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
