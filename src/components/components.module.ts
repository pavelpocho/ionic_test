import { NgModule } from '@angular/core';
import { DeviceCardComponent } from './device-card/device-card';
import { NotificationComponent } from './notification/notification';
@NgModule({
	declarations: [DeviceCardComponent,
    NotificationComponent],
	imports: [],
	exports: [DeviceCardComponent,
    NotificationComponent]
})
export class ComponentsModule {}
