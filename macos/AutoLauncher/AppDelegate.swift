//
//  AppDelegate.swift
//  AutoLauncher
//
//  Created by Thomas Lamars on 12/09/2024.
//

import Cocoa

class AutoLauncherAppDelegate: NSObject, NSApplicationDelegate {
  struct Constants {
    static let gitBarBundleId = "io.lamars.gitbar"
  }

  func applicationDidFinishLaunching(_ aNotification: Notification) {
    let runningApps = NSWorkspace.shared.runningApplications
    let isRunning = runningApps.contains {
      $0.bundleIdentifier == Constants.gitBarBundleId
    }

    if !isRunning, let mainAppURL = NSWorkspace.shared.urlForApplication(withBundleIdentifier: Constants.gitBarBundleId) {
      NSWorkspace.shared.openApplication(at: mainAppURL, configuration: NSWorkspace.OpenConfiguration()) { (_, error) in
        if let error = error {
          print("Error opening GitBar: \(error)")
        }
        
        DispatchQueue.main.async {
          NSApp.terminate(nil)
        }
      }
    } else {
      NSApp.terminate(nil)
    }
  }
}


