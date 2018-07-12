import { Component, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '../../data/device';
import { NotificationProvider } from '../../providers/notification/notification';
import { Notification } from '../../data/notification';
import { HistoryProvider } from '../../providers/history/history';

/**
 * Generated class for the DeviceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-detail',
  templateUrl: 'device-detail.html',
})
export class DeviceDetailPage implements OnInit {

  device: Device;
  currentContent: Number = 0;
  notifications: Notification[];
  highImportanceNotifs: Notification[] = [];
  normalImportanceNotifs: Notification[] = [];
  sortOption: Number = 0;
  statusClass: String;
  history: Number[];
  prevRangeText: String;
  rangeColorClass: String;

  constructor(private historyProvider: HistoryProvider, private cd: ChangeDetectorRef, public navCtrl: NavController, public navParams: NavParams, private elRef: ElementRef, private notif: NotificationProvider) {
    this.device = navParams.get("device");
    this.prevRangeText = this.device.previousRange > this.device.detectedRange ? 
      "Down from " + this.device.previousRange + " cm":
      this.device.previousRange < this.device.detectedRange ? "Up from " + this.device.previousRange + " cm":
      "No change";
  }

  ngOnInit() {
    if (this.device.detectedRange > this.device.minRange && this.device.detectedRange < this.device.maxRange) {
      if (this.device.detectedRange > this.device.previousRange) {
        this.statusClass = "status-up";
        this.rangeColorClass = "range-green";
      }
      else if (this.device.detectedRange < this.device.previousRange) {
        this.statusClass = "status-down";
        this.rangeColorClass = "range-green";
      }
      else {
        this.statusClass = "status-no-change";
        this.rangeColorClass = "range-blue";
      }
    }
    else {
      this.statusClass = "status-alert";
      this.rangeColorClass = "range-red";
    }
    if (this.rangeColorClass === undefined) {
      this.rangeColorClass = "range-red";
    }
    this.cd.detectChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceDetailPage');
    setTimeout(() => {
      (document.getElementsByClassName("content-page")[0] as any).style.transform = "translateY(0px)";
      (document.getElementsByClassName("content-page")[0] as any).style.opacity = "1";
    }, 20);
    this.notif.deviceNofitications.subscribe((data) => {
      this.notifications = data;
      this.notifications.sort((a, b) => {
        return b.time.getTime() - a.time.getTime();
      })
      this.notifications.map(notification => {
        if (notification.importance === 0) {
          this.normalImportanceNotifs.push(notification);
        }
        else {
          this.highImportanceNotifs.push(notification);
        }
      });
    });
    this.notif.fetchNotificationsForDevice(this.device);
    this.historyProvider.history.subscribe((value) => {
      this.history = value;
      console.log(document.getElementById("historyGraph"));
    });
  }
  
  switchTab(tabIndex) {
    (document.getElementsByClassName("slider")[0] as any).style.transform = "translateX(" + tabIndex * window.innerWidth / 3 + "px)";
    console.log("translateX(" + tabIndex * window.innerWidth / 3 + "px)");
    this.currentContent = tabIndex;
    setTimeout(() => {
      (document.getElementsByClassName("content-page")[0] as any).style.transform = "translateY(0px)";
      (document.getElementsByClassName("content-page")[0] as any).style.opacity = "1";
    }, 20);
    if (tabIndex == 2) {
      this.historyProvider.fetchHistory(this.device);
    }
  }

  changeSorting(type: Number) {
    this.sortOption = type;
    this.cd.detectChanges();
  }

}
