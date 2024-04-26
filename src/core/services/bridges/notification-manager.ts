import { NativeModules } from "react-native";

const { NotificationManager } = NativeModules;

export enum NotificationPermission {
  NOT_DETERMINED = 0,
  DENIED = 1,
  AUTHORIZED = 2,
  PROVISIONAL = 3,
}

const Notification = {
  requestPermissions: () => {
    NotificationManager.requestPermissions();
  },
  checkPermissions: async () => {
    const permission = await NotificationManager.checkPermissions();
    return permission as NotificationPermission;
  },
  sendNotification: (title: string, body: string, url: string) => {
    NotificationManager.sendNotification(title, body, url);
  },
};

export default Notification;
