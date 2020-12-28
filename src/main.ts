import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

export function getAPIUrl() {
  console.log("API URL: " + environment.apiUrl);
  return environment.apiUrl;
}

const providers = [
  { provide: 'API_URL', useFactory: getAPIUrl, deps: [] }
];
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
