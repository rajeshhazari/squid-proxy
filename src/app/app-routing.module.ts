import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BlockedDomainsComponent } from './blocked-domains/blocked-domains.component';
import { ConfigsComponent } from './configs/configs.component';
import { HomeComponent } from './home/home.component';
import { SearchBlComponent } from './search-bl/search-bl.component';
import { UpdateConfigComponent } from './update-config/update-config.component';
import { UpdateDOmainsComponent } from './update-domains/update-domains.component';


export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'configs', component: ConfigsComponent },
  { path: 'update-domains', component: UpdateDOmainsComponent },
  { path: 'update-config', component: UpdateConfigComponent },
  { path: 'searchbl', component: SearchBlComponent },
  { path: 'blocked-domains', component: BlockedDomainsComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
