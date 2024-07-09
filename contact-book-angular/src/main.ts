import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  const routes: Routes = [
    {
      path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
      path: 'login', component: LoginComponent
    }
  ];

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
    ],
  });
