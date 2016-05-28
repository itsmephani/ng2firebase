import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2firebaseAppComponent } from '../app/ng2firebase.component';

beforeEachProviders(() => [Ng2firebaseAppComponent]);

describe('App: Ng2firebase', () => {
  it('should create the app',
      inject([Ng2firebaseAppComponent], (app: Ng2firebaseAppComponent) => {
    expect(app).toBeTruthy();
  }));

});
