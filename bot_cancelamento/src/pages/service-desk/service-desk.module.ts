import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceDeskPage } from './service-desk';

@NgModule({
  declarations: [
    ServiceDeskPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceDeskPage),
  ],
})
export class ServiceDeskPageModule {}
