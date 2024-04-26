//
//  AvailableInterfaces.m
//  gitbar-macOS
//
//  Created by Thomas Lamars on 24/03/2024.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(AppManager, NSObject)
  RCT_EXTERN_METHOD(closeApp)
  RCT_EXTERN_METHOD(setStatusBarText:(NSString *)text)
@end

@interface RCT_EXTERN_MODULE(NotificationManager, NSObject)
  RCT_EXTERN_METHOD(requestPermissions)
  RCT_EXTERN_METHOD(checkPermissions: (RCTPromiseResolveBlock *)resolve reject: (RCTPromiseRejectBlock *)reject)
  RCT_EXTERN_METHOD(sendNotification: (NSString *)title body: (NSString *)body urlString: (NSString *)urlString)
@end
