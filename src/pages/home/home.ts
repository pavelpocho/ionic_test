import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '../../data/device';
import { DeviceDetailPage } from '../device-detail/device-detail';
import { DeviceInfoProvider } from '../../providers/device-info/device-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  devices: Device[];

  constructor(public navCtrl: NavController, private deviceInfo: DeviceInfoProvider, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.deviceInfo.devices.subscribe((devices) => {
      this.devices = devices;
      this.devices.sort((a, b) => {
        return b.dateTime.getTime() - a.dateTime.getTime();
      })
      this.cd.detectChanges();
    });
    this.deviceInfo.getDevices();
  }

  openDeviceDetail(device: Device) {
    this.navCtrl.push(DeviceDetailPage, {
      device: device
    })
  }

}
