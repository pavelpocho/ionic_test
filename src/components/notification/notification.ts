import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Notification } from '../../data/notification';

/**
 * Generated class for the NotificationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ultra-notification',
  templateUrl: 'notification.html'
})
export class NotificationComponent implements OnInit {

  @Input() notification: Notification;
  iconIsImportant: boolean;

  constructor(private cd: ChangeDetectorRef) {
    console.log('Hello NotificationComponent Component');
  }

  ngOnInit(): void {
    this.iconIsImportant = this.notification.importance > 0;
    this.cd.detectChanges();
  }

}
