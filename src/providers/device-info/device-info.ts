import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Device } from '../../data/device';
import { DEVICES } from '../../data/devices';

/*
  Generated class for the DeviceInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeviceInfoProvider {

  devices: Subject<Device[]> = new Subject<Device[]>();

  constructor() {
    console.log('Hello DeviceInfoProvider Provider');
  }

  getDevices() {
    this.devices.next(DEVICES);
  }

}
