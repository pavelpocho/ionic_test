import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Device } from '../../data/device';

/**
 * Generated class for the DeviceCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'device-card',
  templateUrl: 'device-card.html'
})
export class DeviceCardComponent implements OnInit {

  @Input() device: Device;
  displayTime: String;
  stateImageClass: String;

  constructor(private cd: ChangeDetectorRef) {
    console.log('Hello DeviceCardComponent Component');
  }

  ngOnInit() {
    this.displayTime = this.device.dateTime.toLocaleTimeString();
    if (this.displayTime.split(":")[0].length < 2) {
      this.displayTime = "0" + this.displayTime;
    }

    if (this.device.detectedRange > this.device.minRange && this.device.detectedRange < this.device.maxRange) {
      if (this.device.detectedRange > this.device.previousRange) {
        this.stateImageClass = "state-img-up";
      }
      else if (this.device.detectedRange < this.device.previousRange) {
        this.stateImageClass = "state-img-down";
      }
      else {
        this.stateImageClass = "state-img-no-change";
      }
    }
    else {
      this.stateImageClass = "state-img-alert";
    }

    this.cd.detectChanges();
  }

}
