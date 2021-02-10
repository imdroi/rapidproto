import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '../environments/environment';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: `${
    environment.backendApiHost
  }:${
    environment.backendApiPort
  }${
    !environment.backendApiPrefix?.startsWith('/') ? '/' : ''
  }${
    environment.backendApiPrefix
  }`,
  timeout: Number(environment.backendApiTimeout), // request timeout
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    MatSnackBarModule
  ],
  providers: [
    /**
     * Provide environment variables here in app.module.ts instead
     * of using them elsewhere directly!
     */
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    { provide: 'BACKEND_API_ROOT', useValue: defaultDataServiceConfig.root },
    { provide: 'BACKEND_API_TIMEOUT', useValue: Number(environment.backendApiTimeout) },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
