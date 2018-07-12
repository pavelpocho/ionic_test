import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NOTIFICATIONS } from '../../data/notifications';
import { Notification } from '../../data/notification';
import { Device } from '../../data/device';

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationProvider {

  notifications: Subject<Notification[]> = new Subject<Notification[]>();
  deviceNofitications: Subject<Notification[]> = new Subject<Notification[]>();

  constructor() {
   
  }

  fetchNotifications() {
    this.notifications.next(NOTIFICATIONS)
  }

  fetchNotificationsForDevice(device: Device) {
    var n = [];
    NOTIFICATIONS.map(nx => {
      if (nx.deviceId == device.id) {
        n.push(nx);
      }
    });

    console.log(n);

    this.deviceNofitications.next(n);
  }

}
