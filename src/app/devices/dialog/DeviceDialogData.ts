import { Device } from 'src/models/entities/Device';
import { DeviceCatalogService } from 'src/app/devices/devices.service';

export interface DeviceDialogData {
  svc: DeviceCatalogService;
  device: Device;
}
