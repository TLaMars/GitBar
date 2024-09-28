//
//  AvailableInterfaces.m
//  GitBar
//
//  Created by Thomas Lamars on 28/09/2024.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(LaunchAtLoginModule, NSObject)
  RCT_EXTERN_METHOD(checkStatus: (RCTPromiseResolveBlock *)resolve reject: (RCTPromiseRejectBlock *)reject)
  RCT_EXTERN_METHOD(setStatus:(BOOL *)isEnabled)
@end
