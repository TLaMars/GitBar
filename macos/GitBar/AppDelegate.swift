//
//  AppDelegate.swift
//  GitBar
//
//  Created by Thomas Lamars on 11/09/2024.
//

import Foundation
import Cocoa
// SDK 56 / Swift 6: Expo is imported with `internal` access level in generated code, so an
// implicit-access-level `import Expo` here is ambiguous. Mark it `internal` to match.
internal import Expo
import React
import ReactAppDependencyProvider

@main
class AppDelegate: ExpoAppDelegate {

  var reactNativeDelegate: ExpoReactNativeFactoryDelegate?
  // Exposed to @objc/KVC so the popover- and window-module pods (which can't import this app
  // target) can read the factory off NSApp.delegate. SDK 56 removed Expo's shared
  // `bindReactNativeFactory` / `ReactNativeFactoryProvider`, which used to provide this.
  @objc var reactNativeFactory: RCTReactNativeFactory?

  override func applicationDidFinishLaunching(_ notification: Notification) {
    let delegate = ReactNativeDelegate()
    let factory = ExpoReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()

    reactNativeDelegate = delegate
    reactNativeFactory = factory

    super.applicationDidFinishLaunching(notification)
  }
}

class ReactNativeDelegate: ExpoReactNativeFactoryDelegate {
  override func sourceURL(for bridge: RCTBridge) -> URL? {
    bridge.bundleURL ?? bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }

  override func customize(_ rootView: RCTRootView) {
    rootView.backgroundColor = NSColor.black
  }
}
