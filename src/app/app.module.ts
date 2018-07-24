import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';

import { ElasticHeader } from '../components/elastic-header/elastic-header';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ElasticHeader,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //HttpModule, // Iniciar o Módulo Http do angular
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
