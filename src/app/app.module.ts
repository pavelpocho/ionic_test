import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DeviceDetailPage } from '../pages/device-detail/device-detail';
import { DeviceInfoProvider } from '../providers/device-info/device-info';
import { DeviceCardComponent } from '../components/device-card/device-card';
import { SettingsPage } from '../pages/settings/settings';
import { NotificationsPage } from '../pages/notifications/notifications';
import { NotificationProvider } from '../providers/notification/notification';
import { NotificationComponent } from '../components/notification/notification';
import { HistoryProvider } from '../providers/history/history';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DeviceDetailPage,
    DeviceCardComponent,
    SettingsPage,
    NotificationsPage,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DeviceDetailPage,
    DeviceCardComponent,
    SettingsPage,
    NotificationsPage,
    NotificationComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeviceInfoProvider,
    NotificationProvider,
    HistoryProvider
  ]
})
export class AppModule {}
