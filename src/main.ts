import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng2firebaseAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS,
  defaultFirebase,
  firebaseAuthConfig,
  AuthMethods,
  AuthProviders } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2firebaseAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://ng2firebase.firebaseio.com'),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  })
]);
